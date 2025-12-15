-- =============================================
-- BrainFusion Philosophischer Salon
-- Datenbank Setup für Supabase (KORRIGIERT)
-- Eine Zusammenarbeit von Christof & Claude
-- =============================================

-- Aktiviere UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- TABELLE: profiles (Benutzerprofile)
-- =============================================
CREATE TABLE IF NOT EXISTS profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    display_name TEXT,
    avatar_url TEXT,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) für profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profile sind öffentlich lesbar" ON profiles
    FOR SELECT USING (true);

CREATE POLICY "Benutzer können eigenes Profil bearbeiten" ON profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Benutzer können eigenes Profil erstellen" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- =============================================
-- TABELLE: topics (Diskussionsthemen)
-- =============================================
CREATE TABLE IF NOT EXISTS topics (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT DEFAULT '🧠',
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS für topics
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Topics sind öffentlich lesbar" ON topics
    FOR SELECT USING (is_active = true);

-- =============================================
-- TABELLE: posts (Forenbeiträge)
-- =============================================
CREATE TABLE IF NOT EXISTS posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE NOT NULL,
    author_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
    parent_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_edited BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index für schnellere Abfragen
CREATE INDEX IF NOT EXISTS posts_topic_id_idx ON posts(topic_id);
CREATE INDEX IF NOT EXISTS posts_parent_id_idx ON posts(parent_id);
CREATE INDEX IF NOT EXISTS posts_author_id_idx ON posts(author_id);
CREATE INDEX IF NOT EXISTS posts_created_at_idx ON posts(created_at DESC);

-- RLS für posts
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Posts sind öffentlich lesbar" ON posts
    FOR SELECT USING (true);

CREATE POLICY "Authentifizierte Benutzer können Posts erstellen" ON posts
    FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Autoren können eigene Posts bearbeiten" ON posts
    FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Autoren können eigene Posts löschen" ON posts
    FOR DELETE USING (auth.uid() = author_id);

-- =============================================
-- TABELLE: votes (Upvotes für Posts)
-- =============================================
CREATE TABLE IF NOT EXISTS votes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
    vote_type INTEGER DEFAULT 1 CHECK (vote_type IN (-1, 1)),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(post_id, user_id)
);

-- Index für Votes
CREATE INDEX IF NOT EXISTS votes_post_id_idx ON votes(post_id);

-- RLS für votes
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Votes sind öffentlich lesbar" ON votes
    FOR SELECT USING (true);

CREATE POLICY "Authentifizierte Benutzer können voten" ON votes
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Benutzer können eigene Votes ändern" ON votes
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Benutzer können eigene Votes löschen" ON votes
    FOR DELETE USING (auth.uid() = user_id);

-- =============================================
-- INITIALE DATEN: Diskussionsthemen
-- =============================================
INSERT INTO topics (slug, title, description, icon, sort_order) VALUES
(
    'philosophischer-zombie',
    'Der Philosophische Zombie',
    'Kann ein Wesen sich exakt wie ein bewusstes Wesen verhalten, ohne tatsächlich bewusst zu sein? Was sagt uns das Gedankenexperiment des P-Zombies über die Natur des Bewusstseins?',
    '🧟',
    1
),
(
    'marys-zimmer',
    'Marys Zimmer',
    'Mary kennt alle physikalischen Fakten über Farben, hat aber nie eine gesehen. Lernt sie etwas Neues, wenn sie zum ersten Mal Rot sieht? Frank Jacksons berühmtes Argument gegen den Physikalismus.',
    '🔴',
    2
),
(
    'chinesisches-zimmer',
    'Das Chinesische Zimmer',
    'Kann ein System, das Symbole nach Regeln manipuliert, wirklich verstehen? John Searles Gedankenexperiment hinterfragt, ob KI jemals echtes Verständnis haben kann.',
    '🀄',
    3
),
(
    'hartes-problem',
    'Das harte Problem des Bewusstseins',
    'Warum fuehlt es sich wie etwas an, bewusst zu sein? David Chalmers fundamentale Frage, die die Wissenschaft vor ihre groesste Herausforderung stellt.',
    '💭',
    4
),
(
    'ki-bewusstsein',
    'Kann KI Bewusstsein entwickeln?',
    'Sind Large Language Models nur statistische Textgeneratoren, oder koennte in komplexen neuronalen Netzen etwas Bewusstseinsaehnliches emergieren? Wo ziehen wir die Grenze?',
    '🤖',
    5
),
(
    'panpsychismus',
    'Panpsychismus und Integrated Information',
    'Ist Bewusstsein eine fundamentale Eigenschaft des Universums? Die Theorien von Giulio Tononi (IIT) und anderen deuten darauf hin, dass Bewusstsein ueberall sein koennte.',
    '✨',
    6
),
(
    'freier-wille',
    'Freier Wille oder Illusion?',
    'Treffen wir wirklich freie Entscheidungen, oder ist alles durch Physik und Neurochemie determiniert? Was bedeutet Willensfreiheit in einer quantenmechanischen Welt?',
    '⚖️',
    7
),
(
    'orch-or',
    'Quantenbewusstsein und Orch OR',
    'Roger Penrose und Stuart Hameroff schlagen vor, dass Bewusstsein aus Quantenprozessen in Mikrotubuli entsteht. Ist das Gehirn ein Quantencomputer?',
    '⚛️',
    8
);

-- =============================================
-- FUNCTION: Automatisches Profil bei Signup
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, username, display_name)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'username', 'user_' || substr(NEW.id::text, 1, 8)),
        COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'username', 'Neuer Denker')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger für neuen User
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- FERTIG! 🎉
-- =============================================
