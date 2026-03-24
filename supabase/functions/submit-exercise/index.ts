import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { participantId, joinToken, module, content, responseType, alias: aliasOverride, anonymous } = await req.json()

    if (!participantId || !joinToken || !module || !content) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Verify participant exists and token matches
    const { data: participant, error: pErr } = await supabase
      .from('participants')
      .select('id, alias, workshop_id')
      .eq('id', participantId)
      .eq('join_token', joinToken)
      .single()

    if (pErr || !participant) {
      return new Response(JSON.stringify({ error: 'Invalid participant or token' }), {
        status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Insert response (unique constraint prevents duplicates)
    const { data: response, error: iErr } = await supabase
      .from('exercise_responses')
      .insert({
        workshop_id: participant.workshop_id,
        participant_id: participantId,
        alias: (anonymous === true || aliasOverride === null) ? null : (aliasOverride || participant.alias),
        module,
        response_type: responseType || 'text',
        content: content.trim()
      })
      .select('id')
      .single()

    if (iErr) {
      // Unique constraint violation = already submitted
      if (iErr.code === '23505') {
        return new Response(JSON.stringify({ error: 'Already submitted', alreadySubmitted: true }), {
          status: 409, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        })
      }
      throw iErr
    }

    return new Response(JSON.stringify({ success: true, responseId: response.id }), {
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
