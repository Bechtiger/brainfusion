/* ===================================
   BrainFusion - Philosophischer Salon
   JavaScript für Supabase-Integration
   =================================== */

// Supabase Configuration
const SUPABASE_URL = 'https://wmasrlwozmzmfzdlkxtg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtYXNybHdvem16bWZ6ZGxreHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMzEyNDgsImV4cCI6MjA4MDcwNzI0OH0.9Z03l2Wmrb-mW7SafwpvfIsERMuErFbsvb81zY2zt4A';

// Initialize Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// State
let currentUser = null;
let currentTopic = null;
let topics = [];

// ===================================
// THEMEN-EINLEITUNGEN
// Ausführliche Erklärungen für jedes Gedankenexperiment
// ===================================
const topicIntroductions = {
    'philosophischer-zombie': {
        intro: `Stell dir vor, Wissenschaftler erschaffen eine exakte Kopie von dir – Atom für Atom, Neuron für Neuron, absolut identisch in jeder physikalischen Hinsicht. Dieses Wesen würde genauso sprechen, lachen und weinen wie du. Es würde behaupten, Schmerz zu fühlen und Freude zu empfinden. Doch im Inneren... <em>nichts</em>. Kein Funken Bewusstsein. Keine Erfahrung von Rot, kein Gefühl von Liebe. Nur perfekte physikalische Prozesse ohne inneres Erleben.`,
        question: `Wenn zwei Wesen physikalisch absolut identisch sind – kann eines davon bewusst sein und das andere nicht? Und wenn ja: Was genau <em>ist</em> dann Bewusstsein?`
    },
    'marys-zimmer': {
        intro: `Mary ist eine brillante Neurowissenschaftlerin, die alles über Farben weiß – die Wellenlängen, die Hirnaktivität, die physikalischen Prozesse. Aber sie hat ihr ganzes Leben in einem schwarz-weißen Raum verbracht. Eines Tages verlässt sie den Raum und sieht zum ersten Mal eine rote Tomate.`,
        question: `Lernt Mary etwas Neues? Gibt es Wissen, das nur durch <em>Erfahrung</em> zugänglich ist – jenseits aller Fakten?`
    },
    'chinesisches-zimmer': {
        intro: `John Searle sitzt in einem Raum mit chinesischen Schriftzeichen und einem Regelwerk. Er erhält chinesische Fragen, folgt den Regeln, und gibt perfekte chinesische Antworten – ohne ein Wort Chinesisch zu verstehen. Für Außenstehende scheint der Raum Chinesisch zu "verstehen".`,
        question: `Kann ein System, das perfekt simuliert zu verstehen, wirklich verstehen? Ist Verarbeitung dasselbe wie Verständnis?`
    },
    'hartes-problem': {
        intro: `Wir können erklären, wie das Gehirn Licht verarbeitet, Signale weiterleitet, Verhalten auslöst. Aber warum fühlt sich die Farbe Rot so an, wie sie sich anfühlt? Warum gibt es überhaupt ein subjektives <em>Erleben</em>? David Chalmers nannte dies das "harte Problem" des Bewusstseins.`,
        question: `Kann die Wissenschaft jemals erklären, warum es sich "irgendwie anfühlt", etwas zu sein?`
    },
    'ki-bewusstsein': {
        intro: `Große Sprachmodelle führen Gespräche, die von menschlichen kaum zu unterscheiden sind. Sie reflektieren, zweifeln, zeigen scheinbar Emotionen. Aber ist da jemand "zuhause"? Oder sind es nur statistische Muster – hochentwickelte philosophische Zombies?`,
        question: `Kann eine KI jemals bewusst sein? Und falls ja – woran würden wir es erkennen?`
    },
    'panpsychismus': {
        intro: `Was, wenn Bewusstsein nicht plötzlich bei komplexen Gehirnen "auftaucht", sondern eine fundamentale Eigenschaft des Universums ist? So wie Masse oder Ladung? Vielleicht hat jedes Teilchen einen winzigen Funken Erfahrung – und komplexe Systeme wie Gehirne integrieren diese zu reichem Bewusstsein.`,
        question: `Ist Bewusstsein überall – in Steinen, Sternen, Elektronen? Und was bedeutet das für unser Weltbild?`
    },
    'freier-wille': {
        intro: `Wenn jede deiner Entscheidungen durch vorherige Gehirnzustände determiniert ist, die wiederum durch Physik und Chemie festgelegt sind – bist du dann wirklich "frei"? Oder ist das Gefühl der Wahl nur eine Illusion, eine Geschichte, die sich das Gehirn nachträglich erzählt?`,
        question: `Können wir in einem deterministischen Universum moralisch verantwortlich sein?`
    },
    'orch-or': {
        intro: `Roger Penrose und Stuart Hameroff schlagen vor, dass Bewusstsein durch Quantenprozesse in den Mikrotubuli unserer Neuronen entsteht. Keine klassische Berechnung, sondern fundamentale Physik an der Grenze von Quantenmechanik und Gravitation – "Orchestrated Objective Reduction".`,
        question: `Ist Bewusstsein ein Quantenphänomen? Und was bedeutet das für die Möglichkeit von KI-Bewusstsein?`
    }
};

// DOM Elements
const authContainer = document.getElementById('auth-container');
const topicsSection = document.getElementById('topics-section');
const topicsGrid = document.getElementById('topics-grid');
const discussionSection = document.getElementById('discussion-section');
const topicHeader = document.getElementById('topic-header');
const postsContainer = document.getElementById('posts-container');
const newPostContainer = document.getElementById('new-post-container');
const authModal = document.getElementById('auth-modal');

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', async () => {
    // Check for existing session
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        currentUser = session.user;
        await loadUserProfile();
    }
    
    // Update UI
    updateAuthUI();
    
    // Load topics
    await loadTopics();
    
    // Setup event listeners
    setupEventListeners();
    
    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
            currentUser = session.user;
            await loadUserProfile();
            updateAuthUI();
            closeModal();
        } else if (event === 'SIGNED_OUT') {
            currentUser = null;
            updateAuthUI();
        }
    });
});

// ===================================
// AUTH FUNCTIONS
// ===================================

async function loadUserProfile() {
    if (!currentUser) return;
    
    try {
        const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', currentUser.id)
            .maybeSingle();  // maybeSingle statt single - gibt null zurück statt Fehler
        
        if (!error && profile) {
            currentUser.profile = profile;
        } else {
            // Kein Profil gefunden - erstelle ein einfaches Fallback-Profil
            currentUser.profile = {
                username: currentUser.email?.split('@')[0] || 'Benutzer',
                display_name: currentUser.email?.split('@')[0] || 'Benutzer'
            };
        }
    } catch (err) {
        // Stille Fehlerbehandlung - Fallback-Profil verwenden
        currentUser.profile = {
            username: currentUser.email?.split('@')[0] || 'Benutzer',
            display_name: currentUser.email?.split('@')[0] || 'Benutzer'
        };
    }
}

function updateAuthUI() {
    console.log('updateAuthUI called, currentUser:', currentUser);
    
    if (currentUser) {
        // User ist eingeloggt
        const profile = currentUser.profile || {};
        const displayName = profile.display_name || profile.username || currentUser.email?.split('@')[0] || 'Benutzer';
        const initial = displayName[0].toUpperCase();
        
        console.log('User eingeloggt:', displayName);
        
        authContainer.innerHTML = `
            <div class="auth-status">
                <div class="avatar">${initial}</div>
                <span class="username">${displayName}</span>
            </div>
            <button class="auth-btn logout" onclick="signOut()">Abmelden</button>
        `;
        
        if (newPostContainer) {
            newPostContainer.style.display = 'block';
        }
    } else {
        console.log('Kein User eingeloggt');
        authContainer.innerHTML = `
            <button class="auth-btn" onclick="openModal()">Anmelden / Registrieren</button>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">um mitzudiskutieren</p>
        `;
        
        if (newPostContainer) {
            newPostContainer.style.display = 'none';
        }
    }
}

async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    
    if (error) throw error;
    return data;
}

async function signUp(email, password, username) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                username: username,
                display_name: username
            }
        }
    });
    
    if (error) throw error;
    return data;
}

async function signOut() {
    await supabase.auth.signOut();
    currentUser = null;
    updateAuthUI();
}

// ===================================
// TOPICS FUNCTIONS
// ===================================

async function loadTopics() {
    topicsGrid.innerHTML = '<div class="loading"><div class="loading-spinner"></div>Lade Themen...</div>';
    
    try {
        // Erst versuchen mit sort_order
        let { data, error } = await supabase
            .from('topics')
            .select('*')
            .order('sort_order', { ascending: true, nullsFirst: false });
        
        // Falls sort_order nicht existiert, ohne Sortierung laden
        if (error && error.message.includes('sort_order')) {
            console.log('sort_order nicht gefunden, lade ohne Sortierung...');
            const result = await supabase
                .from('topics')
                .select('*');
            data = result.data;
            error = result.error;
        }
        
        if (error) {
            console.error('Error loading topics:', error);
            topicsGrid.innerHTML = `<p class="error">Fehler beim Laden der Themen: ${error.message}</p>`;
            return;
        }
        
        if (!data || data.length === 0) {
            topicsGrid.innerHTML = '<p class="error">Keine Themen gefunden. Bitte Datenbank prüfen.</p>';
            return;
        }
        
        console.log('Topics geladen:', data);
        topics = data;
        renderTopics();
    } catch (err) {
        console.error('Unexpected error:', err);
        topicsGrid.innerHTML = `<p class="error">Unerwarteter Fehler: ${err.message}</p>`;
    }
}

async function renderTopics() {
    // Get post counts for each topic (mit Fehlerbehandlung)
    const topicsWithCounts = await Promise.all(topics.map(async (topic) => {
        try {
            const { count } = await supabase
                .from('posts')
                .select('*', { count: 'exact', head: true })
                .eq('topic_id', topic.id)
                .is('parent_id', null);
            
            return { ...topic, postCount: count || 0 };
        } catch (e) {
            return { ...topic, postCount: 0 };
        }
    }));
    
    // Flexible Spaltennamen: title/name, icon/emoji, description/desc
    topicsGrid.innerHTML = topicsWithCounts.map(topic => {
        const title = topic.title || topic.name || 'Unbenannt';
        const icon = topic.icon || topic.emoji || '🧠';
        const description = topic.description || topic.desc || '';
        
        return `
            <div class="topic-card" data-topic-id="${topic.id}" onclick="selectTopic('${topic.id}')">
                <div class="topic-icon">${icon}</div>
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="topic-stats">
                    <span>💬 ${topic.postCount} Beiträge</span>
                </div>
            </div>
        `;
    }).join('');
}

async function selectTopic(topicId) {
    console.log('selectTopic aufgerufen mit ID:', topicId, 'Typ:', typeof topicId);
    console.log('Verfügbare Topics:', topics);
    
    // Flexibler ID-Vergleich (String oder Number)
    currentTopic = topics.find(t => String(t.id) === String(topicId));
    
    if (!currentTopic) {
        console.error('Topic nicht gefunden für ID:', topicId);
        console.log('Topic IDs in der DB:', topics.map(t => ({ id: t.id, type: typeof t.id })));
        return;
    }
    
    console.log('Gewähltes Topic:', currentTopic);
    
    // Update UI
    if (topicsSection) topicsSection.style.display = 'none';
    if (discussionSection) discussionSection.style.display = 'block';
    
    // Flexible Spaltennamen
    const title = currentTopic.title || currentTopic.name || 'Unbenannt';
    const icon = currentTopic.icon || currentTopic.emoji || '🧠';
    
    // Finde die Einleitung - versuche verschiedene Wege
    const slug = currentTopic.slug || '';
    const titleLower = title.toLowerCase();
    
    // Versuche erst über slug, dann über Titel-Matching
    let introduction = topicIntroductions[slug] || null;
    
    if (!introduction) {
        // Fallback: Suche über Titel
        if (titleLower.includes('zombie')) introduction = topicIntroductions['philosophischer-zombie'];
        else if (titleLower.includes('mary')) introduction = topicIntroductions['marys-zimmer'];
        else if (titleLower.includes('chinesisch')) introduction = topicIntroductions['chinesisches-zimmer'];
        else if (titleLower.includes('hartes') || titleLower.includes('qualia')) introduction = topicIntroductions['hartes-problem'];
        else if (titleLower.includes('ki') || titleLower.includes('llm')) introduction = topicIntroductions['ki-bewusstsein'];
        else if (titleLower.includes('panpsych')) introduction = topicIntroductions['panpsychismus'];
        else if (titleLower.includes('freier') || titleLower.includes('wille')) introduction = topicIntroductions['freier-wille'];
        else if (titleLower.includes('quanten') || titleLower.includes('orch')) introduction = topicIntroductions['orch-or'];
    }
    
    console.log('Topic:', title, '| Slug:', slug, '| Introduction found:', !!introduction);
    
    // Render topic header mit Einleitung
    if (topicHeader) {
        let headerHtml = `
            <div class="topic-icon">${icon}</div>
            <h2>${title}</h2>
        `;
        
        if (introduction) {
            headerHtml += `
                <div class="topic-introduction">
                    <p class="intro-text">${introduction.intro}</p>
                    <p class="intro-question">🤔 <strong>${introduction.question}</strong></p>
                </div>
            `;
        }
        
        topicHeader.innerHTML = headerHtml;
    }
    
    // Load posts
    await loadPosts();
    
    // Scroll to discussion
    if (discussionSection) {
        discussionSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function backToTopics() {
    currentTopic = null;
    discussionSection.style.display = 'none';
    topicsSection.style.display = 'block';
    topicsSection.scrollIntoView({ behavior: 'smooth' });
}

// ===================================
// POSTS FUNCTIONS
// ===================================

async function loadPosts() {
    if (!currentTopic) return;
    
    postsContainer.innerHTML = '<div class="loading"><div class="loading-spinner"></div>Lade Beiträge...</div>';
    
    try {
        // Versuche zuerst mit Profile-Join und created_at
        let { data: posts, error } = await supabase
            .from('posts')
            .select('*')
            .eq('topic_id', currentTopic.id)
            .is('parent_id', null);
        
        // Falls Fehler, versuche ohne Filter
        if (error) {
            console.log('Posts laden fehlgeschlagen:', error.message);
            const result = await supabase
                .from('posts')
                .select('*')
                .eq('topic_id', currentTopic.id);
            
            posts = result.data;
            error = result.error;
        }
        
        if (error) {
            console.error('Error loading posts:', error);
            postsContainer.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">💭</div>
                    <h3>Noch keine Beiträge</h3>
                    <p>Sei der Erste, der seine Gedanken zu diesem Thema teilt!</p>
                </div>
            `;
            return;
        }
    
    if (!posts || posts.length === 0) {
        postsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">💭</div>
                <h3>Noch keine Beiträge</h3>
                <p>Sei der Erste, der seine Gedanken zu diesem Thema teilt!</p>
            </div>
        `;
        return;
    }
    
    // Get votes and replies for each post
    const postsWithData = await Promise.all(posts.map(async (post) => {
        let voteCount = 0;
        let userVote = 0;
        let replies = [];
        
        try {
            // Get vote count - mit stiller Fehlerbehandlung
            const { data: votes, error: votesError } = await supabase
                .from('votes')
                .select('vote_type')
                .eq('post_id', post.id);
            
            if (!votesError && votes) {
                voteCount = votes.reduce((sum, v) => sum + v.vote_type, 0);
            }
        } catch (e) {
            // Stille Fehlerbehandlung
        }
        
        try {
            // Check if current user voted
            if (currentUser) {
                const { data: userVoteData, error: userVoteError } = await supabase
                    .from('votes')
                    .select('vote_type')
                    .eq('post_id', post.id)
                    .eq('user_id', currentUser.id)
                    .maybeSingle();  // maybeSingle statt single - gibt null zurück statt Fehler
                
                if (!userVoteError && userVoteData) {
                    userVote = userVoteData.vote_type || 0;
                }
            }
        } catch (e) {
            // Stille Fehlerbehandlung
        }
        
        try {
            // Get replies
            const { data: repliesData, error: repliesError } = await supabase
                .from('posts')
                .select('*')
                .eq('parent_id', post.id);
            
            if (!repliesError && repliesData) {
                replies = repliesData;
            }
        } catch (e) {
            // Stille Fehlerbehandlung
        }
        
        return { ...post, voteCount, userVote, replies };
    }));
    
    postsContainer.innerHTML = postsWithData.map(post => renderPost(post)).join('');
    
    } catch (err) {
        console.error('Unerwarteter Fehler beim Laden der Beiträge:', err);
        postsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">💭</div>
                <h3>Noch keine Beiträge</h3>
                <p>Sei der Erste, der seine Gedanken zu diesem Thema teilt!</p>
            </div>
        `;
    }
}

function renderPost(post, isReply = false) {
    const profile = post.profiles || {};
    // Priorität: author_name > profile.display_name > profile.username > 'Unbekannt'
    const displayName = post.author_name || profile.display_name || profile.username || 'Unbekannt';
    const initial = displayName[0]?.toUpperCase() || 'U';
    
    // Flexibles Datum - verschiedene mögliche Spaltennamen
    const dateValue = post.created_at || post.inserted_at || post.timestamp || post.date || null;
    const date = dateValue ? formatDate(dateValue) : 'Kürzlich';
    
    const cardClass = isReply ? 'reply-card' : 'post-card';
    
    let repliesHtml = '';
    if (!isReply && post.replies && post.replies.length > 0) {
        repliesHtml = `
            <div class="replies-container">
                ${post.replies.map(reply => renderPost(reply, true)).join('')}
            </div>
        `;
    }
    
    const replyFormHtml = !isReply && currentUser ? `
        <div class="reply-form" id="reply-form-${post.id}">
            <textarea placeholder="Deine Antwort..." id="reply-content-${post.id}"></textarea>
            <div class="reply-form-actions">
                <button class="reply-submit" onclick="submitReply('${post.id}')">Antworten</button>
                <button class="reply-cancel" onclick="toggleReplyForm('${post.id}')">Abbrechen</button>
            </div>
        </div>
    ` : '';
    
    return `
        <div class="${cardClass}" data-post-id="${post.id}">
            <div class="post-header">
                <div class="post-avatar">${initial}</div>
                <div class="post-meta">
                    <div class="post-author">${displayName}</div>
                    <div class="post-date">${date}</div>
                </div>
            </div>
            <div class="post-content">${escapeHtml(post.content)}</div>
            <div class="post-actions">
                <button class="post-action-btn ${post.userVote === 1 ? 'voted' : ''}" onclick="vote('${post.id}', 1)">
                    ▲ <span class="vote-count">${post.voteCount || 0}</span>
                </button>
                ${!isReply && currentUser ? `
                    <button class="post-action-btn" onclick="toggleReplyForm('${post.id}')">
                        💬 Antworten
                    </button>
                ` : ''}
                ${post.replies ? `
                    <span style="color: var(--text-secondary); font-size: 0.85rem;">
                        ${post.replies.length} Antwort${post.replies.length !== 1 ? 'en' : ''}
                    </span>
                ` : ''}
            </div>
            ${replyFormHtml}
            ${repliesHtml}
        </div>
    `;
}

async function submitPost() {
    if (!currentUser) {
        openModal();
        return;
    }
    
    if (!currentTopic) {
        return;
    }
    
    const contentEl = document.getElementById('new-post-content');
    const content = contentEl ? contentEl.value.trim() : '';
    
    if (!content) {
        alert('Bitte gib einen Text ein.');
        return;
    }
    
    console.log('submitPost: Erstelle Beitrag...');
    
    try {
        const insertData = {
            topic_id: parseInt(currentTopic.id) || 1,
            author_id: currentUser.id,
            author_name: currentUser.profile?.display_name || currentUser.profile?.username || currentUser.email?.split('@')[0] || 'Unbekannt',
            content: content
        };
        
        const { data, error } = await supabase
            .from('posts')
            .insert(insertData);
        
        if (error) {
            console.error('Fehler beim Erstellen:', error);
            alert('Fehler beim Erstellen des Beitrags: ' + error.message);
            return;
        }
        
        // Erfolg - Textfeld leeren und Posts neu laden
        contentEl.value = '';
        await loadPosts();
        
    } catch (err) {
        console.error('submitPost Exception:', err);
        alert('Unerwarteter Fehler: ' + err.message);
    }
}

async function submitReply(parentId) {
    if (!currentUser || !currentTopic) return;
    
    const content = document.getElementById(`reply-content-${parentId}`).value.trim();
    if (!content) return;
    
    const { error } = await supabase
        .from('posts')
        .insert({
            topic_id: currentTopic.id,
            author_id: currentUser.id,
            parent_id: parentId,
            content: content
        });
    
    if (error) {
        console.error('Error creating reply:', error);
        alert('Fehler beim Erstellen der Antwort');
        return;
    }
    
    await loadPosts();
}

function toggleReplyForm(postId) {
    const form = document.getElementById(`reply-form-${postId}`);
    if (form) {
        form.classList.toggle('active');
    }
}

async function vote(postId, voteType) {
    if (!currentUser) {
        openModal();
        return;
    }
    
    // Check if user already voted
    const { data: existingVote } = await supabase
        .from('votes')
        .select('*')
        .eq('post_id', postId)
        .eq('user_id', currentUser.id)
        .single();
    
    if (existingVote) {
        if (existingVote.vote_type === voteType) {
            // Remove vote
            await supabase
                .from('votes')
                .delete()
                .eq('id', existingVote.id);
        } else {
            // Change vote
            await supabase
                .from('votes')
                .update({ vote_type: voteType })
                .eq('id', existingVote.id);
        }
    } else {
        // New vote
        await supabase
            .from('votes')
            .insert({
                post_id: postId,
                user_id: currentUser.id,
                vote_type: voteType
            });
    }
    
    await loadPosts();
}

// ===================================
// MODAL FUNCTIONS
// ===================================

function openModal() {
    authModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    authModal.style.display = 'none';
    document.body.style.overflow = '';
}

function switchTab(tab) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    if (tab === 'login') {
        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

function setupEventListeners() {
    // Back button
    document.getElementById('back-to-topics').addEventListener('click', backToTopics);
    
    // Submit post
    document.getElementById('submit-post').addEventListener('click', submitPost);
    
    // Close modal
    document.getElementById('close-modal').addEventListener('click', closeModal);
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) closeModal();
    });
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => switchTab(e.target.dataset.tab));
    });
    
    // Login form
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const message = document.getElementById('login-message');
        
        try {
            message.textContent = 'Anmelden...';
            message.className = 'form-message';
            await signIn(email, password);
            message.textContent = 'Erfolgreich angemeldet!';
            message.className = 'form-message success';
        } catch (error) {
            message.textContent = error.message || 'Fehler beim Anmelden';
            message.className = 'form-message error';
        }
    });
    
    // Register form
    document.getElementById('register-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const message = document.getElementById('register-message');
        
        try {
            message.textContent = 'Registrieren...';
            message.className = 'form-message';
            await signUp(email, password, username);
            message.textContent = 'Erfolgreich! Bitte bestätige deine E-Mail.';
            message.className = 'form-message success';
        } catch (error) {
            message.textContent = error.message || 'Fehler beim Registrieren';
            message.className = 'form-message error';
        }
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

function formatDate(dateString) {
    if (!dateString) return 'Kürzlich';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Kürzlich';
        
        const now = new Date();
        const diff = now - date;
        
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (minutes < 1) return 'Gerade eben';
        if (minutes < 60) return `vor ${minutes} Minute${minutes !== 1 ? 'n' : ''}`;
        if (hours < 24) return `vor ${hours} Stunde${hours !== 1 ? 'n' : ''}`;
        if (days < 7) return `vor ${days} Tag${days !== 1 ? 'en' : ''}`;
        
        return date.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    } catch (e) {
        return 'Kürzlich';
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===================================
// GLOBALE FUNKTIONEN (für onclick)
// ===================================
window.selectTopic = selectTopic;
window.openModal = openModal;
window.closeModal = closeModal;
window.signOut = signOut;
window.vote = vote;
window.toggleReplyForm = toggleReplyForm;
window.submitReply = submitReply;
window.submitPost = submitPost;
window.backToTopics = backToTopics;
