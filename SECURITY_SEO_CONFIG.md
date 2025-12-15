# BrainFusion - Security & SEO Configuration

## 1. Meta-Tags (für alle HTML-Seiten im <head>)

```html
<!-- Primary Meta Tags -->
<meta name="title" content="BrainFusion - Wo Wissenschaft auf Staunen trifft">
<meta name="description" content="Erforsche die Natur der Realität durch interaktive Experimente. Quantenphysik, Paradoxa und die Beziehung zwischen Mensch und KI - wissenschaftlich, skeptisch, faszinierend.">
<meta name="keywords" content="Quantenphysik, Bewusstsein, KI, Paradoxa, Philosophie, Wissenschaft, Christof Bechtiger">
<meta name="author" content="Christof Bechtiger">
<meta name="robots" content="index, follow">
<meta name="language" content="German">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://brainfusion.app/">
<meta property="og:title" content="BrainFusion - Wo Wissenschaft auf Staunen trifft">
<meta property="og:description" content="Erforsche die Natur der Realität durch interaktive Experimente. Quantenphysik, Paradoxa und die Beziehung zwischen Mensch und KI.">
<meta property="og:image" content="https://brainfusion.app/assets/images/og-image.jpg">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="BrainFusion">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://brainfusion.app/">
<meta property="twitter:title" content="BrainFusion - Wo Wissenschaft auf Staunen trifft">
<meta property="twitter:description" content="Erforsche die Natur der Realität durch interaktive Experimente.">
<meta property="twitter:image" content="https://brainfusion.app/assets/images/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">

<!-- Canonical URL -->
<link rel="canonical" href="https://brainfusion.app/">
```

## 2. Security Headers (.htaccess für Apache)

```apache
# ==========================================
# SECURITY HEADERS
# ==========================================

# Enable HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Prevent clickjacking
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-Content-Type-Options "nosniff"
Header always set X-XSS-Protection "1; mode=block"

# Referrer Policy
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Content Security Policy
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';"

# Permissions Policy
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"

# HSTS (HTTP Strict Transport Security) - Nach HTTPS-Setup aktivieren
# Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

# ==========================================
# PERFORMANCE
# ==========================================

# Enable Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    # Images
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    # CSS and JavaScript
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    # Fonts
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    # HTML
    ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Disable directory browsing
Options -Indexes

# Protect sensitive files
<FilesMatch "\.(env|log|htaccess|htpasswd|ini|md)$">
    Order allow,deny
    Deny from all
</FilesMatch>
```

## 3. Security Headers (nginx)

```nginx
# Add to server block

# Security Headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

# HSTS (aktivieren nach HTTPS-Setup)
# add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

# Enable Gzip
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

# Browser Caching
location ~* \.(jpg|jpeg|png|gif|webp|svg|woff|woff2|ttf|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Disable directory listing
autoindex off;
```

## 4. Wichtige Sicherheits-Checkliste

### Vor dem Launch:
- [ ] Alle `[PLACEHOLDER]` in Impressum/Datenschutz ausfüllen
- [ ] SSL-Zertifikat installieren (Let's Encrypt empfohlen)
- [ ] HSTS aktivieren (erst NACH erfolgreichem HTTPS-Setup!)
- [ ] Backup-System einrichten
- [ ] 404-Fehlerseite erstellen
- [ ] Test auf verschiedenen Geräten/Browsern

### Nach dem Launch:
- [ ] Google Search Console einrichten
- [ ] Regelmäßige Backups
- [ ] Updates für Hosting-Umgebung
- [ ] Monitoring einrichten

## 5. Datenschutz-Hinweise

**Gut gemacht:**
- ✅ Keine Cookies
- ✅ Kein Analytics-Tracking
- ✅ Keine Social Media Widgets
- ✅ Keine Newsletter/Forms
- ✅ Externe Links mit rel="noopener"

**Falls später Analytics gewünscht:**
- Empfehlung: Plausible Analytics oder Matomo (DSGVO-konform, ohne Cookies)
- Dann Cookie-Banner pflicht!

## 6. Performance-Optimierungen

### Bilder:
- Alle Bilder als WebP speichern
- Lazy Loading für Bilder aktivieren (schon teilweise vorhanden)
- Responsive Images mit srcset

### Code:
- CSS/JS Minification vor Production
- Kritisches CSS inline
- JavaScript defer/async wo möglich

## 7. Accessibility (WCAG 2.1)

- [ ] Alt-Tags für alle Bilder hinzufügen
- [ ] ARIA-Labels für interaktive Elemente
- [ ] Keyboard-Navigation testen
- [ ] Kontrast-Ratios überprüfen (aktuell gut: cyan auf dark)
- [ ] Screen-Reader-Test durchführen
