# 🎨 Création de Thèmes Personnalisés - DaisyUI & TailwindCSS

Guide complet pour créer des thèmes personnalisés compatibles avec DaisyUI et TailwindCSS.

## 📋 Table des Matières

1. [Comprendre les Thèmes DaisyUI](#comprendre-les-thèmes-daisyui)
2. [Variables CSS de Thème](#variables-css-de-thème)
3. [Méthodes de Création](#méthodes-de-création)
4. [Exemples de Thèmes](#exemples-de-thèmes)
5. [Intégration et Utilisation](#intégration-et-utilisation)

---

## Comprendre les Thèmes DaisyUI

DaisyUI utilise des **variables CSS** pour définir les couleurs et styles des composants. Tous les composants DaisyUI font référence à ces variables, ce qui permet de changer l'apparence complète de l'application simplement en modifiant le thème.

### Couleurs Principales

DaisyUI définit plusieurs couleurs sémantiques :

- `primary` : Couleur principale de la marque
- `secondary` : Couleur secondaire
- `accent` : Couleur d'accentuation
- `neutral` : Couleur neutre pour le texte et arrière-plans
- `base-100`, `base-200`, `base-300` : Arrière-plans de différentes intensités
- `info`, `success`, `warning`, `error` : Couleurs d'état

### Système de Couleurs

Chaque couleur a une variante `-content` pour le texte qui apparaît dessus :
- `primary` → `primary-content`
- `secondary` → `secondary-content`
- `accent` → `accent-content`
- etc.

---

## Variables CSS de Thème

### Liste Complète des Variables

```css
[data-theme="nom-du-theme"] {
  /* Couleurs principales */
  --p: 0 0% 100%;              /* primary (HSL) */
  --pc: 0 0% 0%;               /* primary-content */
  --s: 0 0% 90%;               /* secondary */
  --sc: 0 0% 0%;               /* secondary-content */
  --a: 0 0% 80%;               /* accent */
  --ac: 0 0% 0%;               /* accent-content */

  /* Couleurs neutres */
  --n: 0 0% 20%;               /* neutral */
  --nc: 0 0% 100%;             /* neutral-content */
  --b1: 0 0% 100%;             /* base-100 */
  --b2: 0 0% 95%;              /* base-200 */
  --b3: 0 0% 90%;              /* base-300 */
  --bc: 0 0% 0%;               /* base-content */

  /* Couleurs d'état */
  --in: 198 93% 60%;           /* info */
  --inc: 0 0% 100%;            /* info-content */
  --su: 158 64% 52%;           /* success */
  --suc: 0 0% 100%;            /* success-content */
  --wa: 43 96% 56%;            /* warning */
  --wac: 0 0% 0%;              /* warning-content */
  --er: 0 91% 71%;             /* error */
  --erc: 0 0% 100%;            /* error-content */

  /* Propriétés supplémentaires */
  --rounded-box: 1rem;         /* Bordures des cartes */
  --rounded-btn: 0.5rem;       /* Bordures des boutons */
  --rounded-badge: 1.9rem;     /* Bordures des badges */
  --animation-btn: 0.25s;      /* Durée animation boutons */
  --animation-input: 0.2s;     /* Durée animation inputs */
  --btn-focus-scale: 0.95;     /* Scale du focus bouton */
  --border-btn: 1px;           /* Épaisseur bordure bouton */
  --tab-border: 1px;           /* Épaisseur bordure tab */
  --tab-radius: 0.5rem;        /* Rayon bordure tab */
}
```

### Format des Couleurs (HSL)

DaisyUI utilise le format **HSL (Hue, Saturation, Lightness)** :
- **H (Hue)** : Teinte de 0 à 360 (rouge=0, vert=120, bleu=240)
- **S (Saturation)** : Saturation en % (0%=gris, 100%=couleur pure)
- **L (Lightness)** : Luminosité en % (0%=noir, 50%=couleur, 100%=blanc)

**Exemple** : `--p: 262 80% 50%;` = Violet saturé

---

## Méthodes de Création

### Méthode 1 : Configuration TailwindCSS (Recommandée pour Build)

Si vous utilisez TailwindCSS avec build (Vite, Webpack, etc.) :

**tailwind.config.js**
```javascript
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'mon-theme-light': {
          'primary': '#3b82f6',
          'primary-content': '#ffffff',
          'secondary': '#10b981',
          'secondary-content': '#ffffff',
          'accent': '#f59e0b',
          'accent-content': '#ffffff',
          'neutral': '#1f2937',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          'base-content': '#1f2937',
          'info': '#3b82f6',
          'success': '#10b981',
          'warning': '#f59e0b',
          'error': '#ef4444',
        },
        'mon-theme-dark': {
          'primary': '#60a5fa',
          'primary-content': '#1e3a8a',
          'secondary': '#34d399',
          'secondary-content': '#064e3b',
          'accent': '#fbbf24',
          'accent-content': '#78350f',
          'neutral': '#374151',
          'neutral-content': '#f3f4f6',
          'base-100': '#1f2937',
          'base-200': '#111827',
          'base-300': '#0f172a',
          'base-content': '#f3f4f6',
          'info': '#60a5fa',
          'success': '#34d399',
          'warning': '#fbbf24',
          'error': '#f87171',
        },
      },
    ],
  },
}
```

### Méthode 2 : CSS Variables (Recommandée pour CDN)

Si vous utilisez DaisyUI via CDN, définissez les thèmes en CSS :

**styles.css**
```css
[data-theme="mon-theme-light"] {
  --p: 217 91% 60%;        /* primary: #3b82f6 */
  --pc: 0 0% 100%;         /* primary-content */
  --s: 158 64% 52%;        /* secondary: #10b981 */
  --sc: 0 0% 100%;
  --a: 38 92% 50%;         /* accent: #f59e0b */
  --ac: 0 0% 100%;
  --n: 218 18% 17%;        /* neutral: #1f2937 */
  --nc: 0 0% 100%;
  --b1: 0 0% 100%;         /* base-100: #ffffff */
  --b2: 220 14% 96%;       /* base-200: #f3f4f6 */
  --b3: 220 13% 91%;       /* base-300: #e5e7eb */
  --bc: 218 18% 17%;       /* base-content */

  --in: 217 91% 60%;
  --su: 158 64% 52%;
  --wa: 38 92% 50%;
  --er: 0 84% 60%;

  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
}

[data-theme="mon-theme-dark"] {
  --p: 217 91% 68%;        /* primary: #60a5fa */
  --pc: 222 47% 32%;       /* primary-content: #1e3a8a */
  --s: 158 64% 60%;        /* secondary: #34d399 */
  --sc: 160 84% 16%;       /* secondary-content: #064e3b */
  --a: 43 96% 56%;         /* accent: #fbbf24 */
  --ac: 28 73% 26%;        /* accent-content: #78350f */
  --n: 220 13% 28%;        /* neutral: #374151 */
  --nc: 220 14% 96%;       /* neutral-content */
  --b1: 218 18% 17%;       /* base-100: #1f2937 */
  --b2: 222 47% 9%;        /* base-200: #111827 */
  --b3: 222 47% 7%;        /* base-300: #0f172a */
  --bc: 220 14% 96%;       /* base-content */

  --in: 217 91% 68%;
  --su: 158 64% 60%;
  --wa: 43 96% 56%;
  --er: 0 84% 70%;

  --rounded-box: 1rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 1.9rem;
}
```

---

## Exemples de Thèmes

### 🌞 Exemple 1 : "Ocean Breeze" (Light)

Thème clair inspiré de l'océan avec des tons bleus et verts apaisants.

#### Configuration Tailwind

```javascript
'ocean-breeze': {
  'primary': '#0ea5e9',           // Bleu océan
  'primary-content': '#ffffff',
  'secondary': '#14b8a6',         // Turquoise
  'secondary-content': '#ffffff',
  'accent': '#f97316',            // Orange corail
  'accent-content': '#ffffff',
  'neutral': '#334155',           // Gris ardoise
  'neutral-content': '#f8fafc',
  'base-100': '#ffffff',          // Blanc pur
  'base-200': '#f1f5f9',          // Gris très clair
  'base-300': '#e2e8f0',          // Gris clair
  'base-content': '#0f172a',      // Presque noir
  'info': '#0ea5e9',
  'success': '#10b981',
  'warning': '#f59e0b',
  'error': '#ef4444',

  '--rounded-box': '1rem',
  '--rounded-btn': '0.75rem',
  '--rounded-badge': '0.5rem',
  '--animation-btn': '0.25s',
  '--animation-input': '0.2s',
  '--btn-focus-scale': '0.98',
}
```

#### CSS Variables

```css
[data-theme="ocean-breeze"] {
  /* Couleurs principales */
  --p: 199 89% 48%;        /* primary: #0ea5e9 */
  --pc: 0 0% 100%;         /* primary-content */
  --s: 173 80% 40%;        /* secondary: #14b8a6 */
  --sc: 0 0% 100%;
  --a: 20 91% 52%;         /* accent: #f97316 */
  --ac: 0 0% 100%;

  /* Couleurs neutres */
  --n: 215 25% 27%;        /* neutral: #334155 */
  --nc: 210 40% 98%;       /* neutral-content */
  --b1: 0 0% 100%;         /* base-100 */
  --b2: 214 32% 97%;       /* base-200 */
  --b3: 214 32% 91%;       /* base-300 */
  --bc: 222 47% 11%;       /* base-content */

  /* Couleurs d'état */
  --in: 199 89% 48%;       /* info */
  --inc: 0 0% 100%;
  --su: 158 64% 52%;       /* success */
  --suc: 0 0% 100%;
  --wa: 38 92% 50%;        /* warning */
  --wac: 0 0% 0%;
  --er: 0 84% 60%;         /* error */
  --erc: 0 0% 100%;

  /* Propriétés */
  --rounded-box: 1rem;
  --rounded-btn: 0.75rem;
  --rounded-badge: 0.5rem;
  --animation-btn: 0.25s;
  --animation-input: 0.2s;
  --btn-focus-scale: 0.98;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
}
```

#### Exemple d'Utilisation

```html
<!DOCTYPE html>
<html data-theme="ocean-breeze">
<head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Insérer le CSS du thème ici */
  </style>
</head>
<body>
  <div class="min-h-screen bg-base-200">
    <!-- Navbar -->
    <div class="navbar bg-base-100 shadow-lg">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Ocean Breeze</a>
      </div>
      <div class="flex-none gap-2">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-accent">Accent</button>
      </div>
    </div>

    <!-- Hero -->
    <div class="hero min-h-[400px] bg-gradient-to-br from-primary to-secondary">
      <div class="hero-content text-center text-primary-content">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Ocean Breeze Theme</h1>
          <p class="py-6">Thème inspiré de l'océan avec des tons apaisants</p>
          <button class="btn btn-accent">Commencer</button>
        </div>
      </div>
    </div>

    <!-- Cards -->
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-primary">Carte Info</h2>
            <p>Contenu de la carte avec le thème Ocean Breeze</p>
            <div class="card-actions justify-end">
              <button class="btn btn-info">Info</button>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-success">Carte Success</h2>
            <p>Design épuré et moderne</p>
            <div class="card-actions justify-end">
              <button class="btn btn-success">Success</button>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-accent">Carte Accent</h2>
            <p>Couleurs harmonieuses</p>
            <div class="card-actions justify-end">
              <button class="btn btn-accent">Accent</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats shadow mt-8 w-full">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="stat-title">Vues</div>
          <div class="stat-value text-primary">31K</div>
          <div class="stat-desc">21% plus que le mois dernier</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
          <div class="stat-title">Utilisateurs</div>
          <div class="stat-value text-secondary">4,200</div>
          <div class="stat-desc">Plus 90 aujourd'hui</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-accent">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="stat-title">J'aime</div>
          <div class="stat-value text-accent">1,200</div>
          <div class="stat-desc">Très populaire</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### 🌙 Exemple 2 : "Midnight Pro" (Dark)

Thème sombre professionnel avec des accents violets et un contraste élevé.

#### Configuration Tailwind

```javascript
'midnight-pro': {
  'primary': '#8b5cf6',           // Violet profond
  'primary-content': '#faf5ff',
  'secondary': '#06b6d4',         // Cyan
  'secondary-content': '#ecfeff',
  'accent': '#f43f5e',            // Rose vif
  'accent-content': '#ffffff',
  'neutral': '#1e293b',           // Ardoise sombre
  'neutral-content': '#f1f5f9',
  'base-100': '#0f172a',          // Bleu nuit profond
  'base-200': '#0a0f1e',          // Noir bleuté
  'base-300': '#050914',          // Presque noir
  'base-content': '#e2e8f0',      // Gris très clair
  'info': '#3b82f6',
  'success': '#22c55e',
  'warning': '#eab308',
  'error': '#ef4444',

  '--rounded-box': '0.75rem',
  '--rounded-btn': '0.5rem',
  '--rounded-badge': '0.5rem',
  '--animation-btn': '0.2s',
  '--animation-input': '0.15s',
  '--btn-focus-scale': '0.97',
}
```

#### CSS Variables

```css
[data-theme="midnight-pro"] {
  /* Couleurs principales */
  --p: 258 90% 66%;        /* primary: #8b5cf6 */
  --pc: 270 100% 98%;      /* primary-content */
  --s: 188 94% 43%;        /* secondary: #06b6d4 */
  --sc: 185 96% 97%;       /* secondary-content */
  --a: 347 77% 60%;        /* accent: #f43f5e */
  --ac: 0 0% 100%;

  /* Couleurs neutres */
  --n: 215 28% 17%;        /* neutral: #1e293b */
  --nc: 214 32% 97%;       /* neutral-content */
  --b1: 222 47% 11%;       /* base-100: #0f172a */
  --b2: 222 50% 7%;        /* base-200: #0a0f1e */
  --b3: 222 54% 4%;        /* base-300: #050914 */
  --bc: 214 32% 91%;       /* base-content */

  /* Couleurs d'état */
  --in: 217 91% 60%;       /* info */
  --inc: 0 0% 100%;
  --su: 142 76% 45%;       /* success */
  --suc: 0 0% 100%;
  --wa: 48 96% 47%;        /* warning */
  --wac: 0 0% 0%;
  --er: 0 84% 60%;         /* error */
  --erc: 0 0% 100%;

  /* Propriétés */
  --rounded-box: 0.75rem;
  --rounded-btn: 0.5rem;
  --rounded-badge: 0.5rem;
  --animation-btn: 0.2s;
  --animation-input: 0.15s;
  --btn-focus-scale: 0.97;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: 0.5rem;
}
```

#### Exemple d'Utilisation

```html
<!DOCTYPE html>
<html data-theme="midnight-pro">
<head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Insérer le CSS du thème ici */
  </style>
</head>
<body>
  <div class="min-h-screen bg-base-300">
    <!-- Navbar -->
    <div class="navbar bg-base-100 border-b border-base-content/10">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">
          <span class="text-primary">●</span> Midnight Pro
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Dashboard</a></li>
          <li><a>Projects</a></li>
          <li><a>Team</a></li>
        </ul>
        <button class="btn btn-primary btn-sm ml-4">Upgrade</button>
      </div>
    </div>

    <!-- Hero avec gradient -->
    <div class="hero min-h-[500px] bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Midnight Pro
          </h1>
          <p class="py-6 text-xl text-base-content/80">
            Un thème sombre professionnel conçu pour les développeurs qui travaillent tard dans la nuit
          </p>
          <div class="flex gap-4 justify-center">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Dashboard Cards -->
    <div class="container mx-auto p-8">
      <!-- Stats avec style moderne -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card bg-base-100 border border-primary/20">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm opacity-60">Total Revenue</p>
                <h3 class="text-3xl font-bold text-primary">$45,231</h3>
              </div>
              <div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div>
            </div>
            <p class="text-sm text-success">+20.1% from last month</p>
          </div>
        </div>

        <div class="card bg-base-100 border border-secondary/20">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm opacity-60">Active Users</p>
                <h3 class="text-3xl font-bold text-secondary">+2,350</h3>
              </div>
              <div class="radial-progress text-secondary" style="--value:85;" role="progressbar">85%</div>
            </div>
            <p class="text-sm text-success">+180 new users</p>
          </div>
        </div>

        <div class="card bg-base-100 border border-accent/20">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm opacity-60">Conversions</p>
                <h3 class="text-3xl font-bold text-accent">+12,234</h3>
              </div>
              <div class="radial-progress text-accent" style="--value:45;" role="progressbar">45%</div>
            </div>
            <p class="text-sm text-warning">+19% from last month</p>
          </div>
        </div>

        <div class="card bg-base-100 border border-info/20">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm opacity-60">Engagement</p>
                <h3 class="text-3xl font-bold text-info">98.5%</h3>
              </div>
              <div class="radial-progress text-info" style="--value:98;" role="progressbar">98%</div>
            </div>
            <p class="text-sm text-success">Excellent performance</p>
          </div>
        </div>
      </div>

      <!-- Table moderne -->
      <div class="card bg-base-100 border border-base-content/10">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Recent Activity</h2>
          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar placeholder">
                        <div class="bg-primary text-primary-content rounded-lg w-12">
                          <span>UI</span>
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">UI Redesign</div>
                        <div class="text-sm opacity-50">Design Team</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-primary">In Progress</span>
                  </td>
                  <td>
                    <progress class="progress progress-primary w-32" value="75" max="100"></progress>
                    <span class="text-sm ml-2">75%</span>
                  </td>
                  <td>
                    <button class="btn btn-ghost btn-xs">Details</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar placeholder">
                        <div class="bg-secondary text-secondary-content rounded-lg w-12">
                          <span>API</span>
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">API Integration</div>
                        <div class="text-sm opacity-50">Backend Team</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-success">Completed</span>
                  </td>
                  <td>
                    <progress class="progress progress-success w-32" value="100" max="100"></progress>
                    <span class="text-sm ml-2">100%</span>
                  </td>
                  <td>
                    <button class="btn btn-ghost btn-xs">Details</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar placeholder">
                        <div class="bg-accent text-accent-content rounded-lg w-12">
                          <span>DB</span>
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Database Optimization</div>
                        <div class="text-sm opacity-50">DevOps Team</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-warning">Review</span>
                  </td>
                  <td>
                    <progress class="progress progress-warning w-32" value="90" max="100"></progress>
                    <span class="text-sm ml-2">90%</span>
                  </td>
                  <td>
                    <button class="btn btn-ghost btn-xs">Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="card bg-gradient-to-r from-primary to-secondary mt-8">
        <div class="card-body text-center text-primary-content">
          <h2 class="text-3xl font-bold">Ready to upgrade your workflow?</h2>
          <p class="text-lg opacity-90">Join thousands of developers using Midnight Pro theme</p>
          <div class="card-actions justify-center mt-4">
            <button class="btn btn-accent">Start Free Trial</button>
            <button class="btn btn-ghost text-white">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Intégration et Utilisation

### Changer de Thème Dynamiquement

#### Avec JavaScript

```javascript
// Changer le thème
function changeTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('theme', themeName);
}

// Charger le thème sauvegardé
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'ocean-breeze';
  changeTheme(savedTheme);
});

// Toggle entre deux thèmes
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'ocean-breeze' ? 'midnight-pro' : 'ocean-breeze';
  changeTheme(newTheme);
}
```

#### Bouton Toggle avec DaisyUI

```html
<label class="swap swap-rotate">
  <input type="checkbox" id="themeToggle" />

  <!-- Icône soleil -->
  <svg class="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
  </svg>

  <!-- Icône lune -->
  <svg class="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
  </svg>
</label>

<script>
document.getElementById('themeToggle').addEventListener('change', function(e) {
  if (e.target.checked) {
    changeTheme('midnight-pro');
  } else {
    changeTheme('ocean-breeze');
  }
});
</script>
```

### Menu Sélecteur de Thèmes

```html
<div class="dropdown dropdown-end">
  <label tabindex="0" class="btn btn-ghost">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
    </svg>
    Thème
  </label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
    <li><a onclick="changeTheme('ocean-breeze')">🌞 Ocean Breeze</a></li>
    <li><a onclick="changeTheme('midnight-pro')">🌙 Midnight Pro</a></li>
    <li><a onclick="changeTheme('light')">☀️ Light (défaut)</a></li>
    <li><a onclick="changeTheme('dark')">🌑 Dark (défaut)</a></li>
  </ul>
</div>
```

---

## 🛠️ Outils de Création

### Générateur de Couleurs HSL

```javascript
/**
 * Convertit une couleur HEX en HSL pour DaisyUI
 * @param {string} hex - Couleur au format #RRGGBB
 * @returns {string} - Couleur au format "H S% L%"
 */
function hexToHSL(hex) {
  // Convertir hex en RGB
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  // Trouver min et max
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  // Calculer lightness
  let l = (max + min) / 2;

  // Calculer saturation
  let s = 0;
  if (diff !== 0) {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
  }

  // Calculer hue
  let h = 0;
  if (diff !== 0) {
    switch (max) {
      case r:
        h = ((g - b) / diff + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / diff + 2) / 6;
        break;
      case b:
        h = ((r - g) / diff + 4) / 6;
        break;
    }
  }

  // Convertir en degrés et pourcentages
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}

// Exemple d'utilisation
console.log(hexToHSL('#3b82f6')); // "217 91% 60%"
console.log(hexToHSL('#8b5cf6')); // "258 90% 66%"
```

### Palette Complète depuis une Couleur

```javascript
/**
 * Génère une palette complète à partir d'une couleur principale
 */
function generatePalette(primaryHex) {
  const primary = hexToHSL(primaryHex);

  return {
    primary: primary,
    secondary: adjustHue(primary, 180), // Complémentaire
    accent: adjustHue(primary, 120),    // Triadique
    neutral: desaturate(primary, 80),   // Désaturé
  };
}

function adjustHue(hsl, degrees) {
  const [h, s, l] = hsl.split(' ').map(v => parseInt(v));
  const newH = (h + degrees) % 360;
  return `${newH} ${s}% ${l}%`;
}

function desaturate(hsl, amount) {
  const [h, s, l] = hsl.split(' ').map(v => parseInt(v));
  const newS = Math.max(0, s - amount);
  return `${h} ${newS}% ${l}%`;
}
```

---

## 📚 Ressources Supplémentaires

### Outils en Ligne
- [DaisyUI Theme Generator](https://daisyui.com/theme-generator/) - Générateur officiel
- [Coolors](https://coolors.co/) - Générateur de palettes
- [Adobe Color](https://color.adobe.com/) - Roue chromatique
- [HSL Color Picker](https://hslpicker.com/) - Convertisseur HSL

### Documentation
- [DaisyUI Themes](https://daisyui.com/docs/themes/)
- [TailwindCSS Customization](https://tailwindcss.com/docs/customizing-colors)
- [Color Theory Basics](https://www.interaction-design.org/literature/topics/color-theory)

### Bonnes Pratiques
1. **Contraste** : Assurez un ratio de contraste minimum de 4.5:1 pour le texte
2. **Cohérence** : Utilisez une palette limitée (3-5 couleurs principales)
3. **Accessibilité** : Testez avec des outils comme WAVE ou axe DevTools
4. **Performance** : Préférez CSS Variables pour le changement dynamique
5. **Documentation** : Documentez vos choix de couleurs et leur signification

---

**Made with 🎨 for DaisyUI & TailwindCSS developers**
