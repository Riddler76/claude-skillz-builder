# 🎨 Thèmes Personnalisés DaisyUI

Guide complet pour créer des thèmes personnalisés DaisyUI. [Documentation officielle](https://daisyui.com/docs/themes/)

## 📋 Comprendre les Thèmes

DaisyUI utilise **variables CSS** pour définir l'apparence. Chaque composant référence ces variables, permettant de changer l'UI complète en modifiant le thème.

### Couleurs Sémantiques

| Variable | Usage | Variante Content |
|----------|-------|------------------|
| `primary` | Couleur principale marque | `primary-content` |
| `secondary` | Couleur secondaire | `secondary-content` |
| `accent` | Accentuation | `accent-content` |
| `neutral` | Texte/arrière-plans neutres | `neutral-content` |
| `base-100/200/300` | Arrière-plans (clair → foncé) | `base-content` |
| `info/success/warning/error` | États | `-content` variants |

## 🎨 Variables CSS Complètes

### Format HSL (DaisyUI v4 - CDN Compatible)

```css
[data-theme="nom-theme"] {
  /* Principales */
  --p: 0 0% 100%;              /* primary */
  --pc: 0 0% 0%;               /* primary-content */
  --s: 0 0% 90%;               /* secondary */
  --sc: 0 0% 0%;               /* secondary-content */
  --a: 0 0% 80%;               /* accent */
  --ac: 0 0% 0%;               /* accent-content */

  /* Neutres */
  --n: 0 0% 20%;               /* neutral */
  --nc: 0 0% 100%;             /* neutral-content */
  --b1: 0 0% 100%;             /* base-100 */
  --b2: 0 0% 95%;              /* base-200 */
  --b3: 0 0% 90%;              /* base-300 */
  --bc: 0 0% 0%;               /* base-content */

  /* États */
  --in: 198 93% 60%;           /* info */
  --su: 158 64% 52%;           /* success */
  --wa: 43 96% 56%;            /* warning */
  --er: 0 91% 71%;             /* error */

  /* Propriétés */
  --rounded-box: 1rem;         /* Border radius cartes */
  --rounded-btn: 0.5rem;       /* Border radius boutons */
  --animation-btn: 0.25s;      /* Durée animation */
  --btn-focus-scale: 0.95;     /* Scale au focus */
}
```

**Format HSL** : `H S% L%` où H=0-360 (teinte), S=0-100% (saturation), L=0-100% (luminosité)

## 🛠️ Méthodes de Création

### Méthode 1 : Build (tailwind.config.js)

```javascript
module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'mon-theme': {
          'primary': '#3b82f6',
          'secondary': '#10b981',
          'accent': '#f59e0b',
          'neutral': '#1f2937',
          'base-100': '#ffffff',
          'info': '#3b82f6',
          'success': '#10b981',
          'warning': '#f59e0b',
          'error': '#ef4444',
        },
      },
    ],
  },
}
```

### Méthode 2 : CSS (CDN)

```css
[data-theme="mon-theme"] {
  --p: 217 91% 60%;    /* #3b82f6 */
  --s: 158 64% 52%;    /* #10b981 */
  --a: 38 92% 50%;     /* #f59e0b */
  /* ... autres variables */
}
```

## 🌟 Exemple 1 : Ocean Breeze (Light)

Thème clair inspiré de l'océan avec tons bleus/verts apaisants.

### Configuration

```css
[data-theme="ocean-breeze"] {
  --p: 199 89% 48%;        /* primary: #0ea5e9 (Bleu océan) */
  --pc: 0 0% 100%;
  --s: 173 80% 40%;        /* secondary: #14b8a6 (Turquoise) */
  --sc: 0 0% 100%;
  --a: 20 91% 52%;         /* accent: #f97316 (Orange corail) */
  --ac: 0 0% 100%;
  --n: 215 25% 27%;        /* neutral: #334155 */
  --nc: 210 40% 98%;
  --b1: 0 0% 100%;         /* base-100: #ffffff */
  --b2: 214 32% 97%;       /* base-200: #f1f5f9 */
  --b3: 214 32% 91%;       /* base-300: #e2e8f0 */
  --bc: 222 47% 11%;
  --in: 199 89% 48%;
  --su: 158 64% 52%;
  --wa: 38 92% 50%;
  --er: 0 84% 60%;
  --rounded-box: 1rem;
  --rounded-btn: 0.75rem;
}
```

### Exemple HTML

```html
<!DOCTYPE html>
<html data-theme="ocean-breeze">
<head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>/* Insérer CSS du thème ci-dessus */</style>
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
      </div>
    </div>

    <!-- Hero -->
    <div class="hero min-h-[400px] bg-gradient-to-br from-primary to-secondary">
      <div class="hero-content text-center text-primary-content">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Ocean Breeze</h1>
          <p class="py-6">Thème inspiré de l'océan</p>
          <button class="btn btn-accent">Commencer</button>
        </div>
      </div>
    </div>

    <!-- Cards -->
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-primary">Info</h2>
            <p>Design moderne et apaisant</p>
            <div class="card-actions justify-end">
              <button class="btn btn-info">Détails</button>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-success">Success</h2>
            <p>Couleurs harmonieuses</p>
            <div class="card-actions justify-end">
              <button class="btn btn-success">Voir</button>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-accent">Accent</h2>
            <p>Accents corail vifs</p>
            <div class="card-actions justify-end">
              <button class="btn btn-accent">Action</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats shadow mt-8 w-full">
        <div class="stat">
          <div class="stat-title">Vues</div>
          <div class="stat-value text-primary">31K</div>
          <div class="stat-desc">+21% ce mois</div>
        </div>
        <div class="stat">
          <div class="stat-title">Utilisateurs</div>
          <div class="stat-value text-secondary">4.2K</div>
          <div class="stat-desc">+90 aujourd'hui</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

## 🌙 Exemple 2 : Midnight Pro (Dark)

Thème sombre professionnel avec accents violets et contraste élevé.

### Configuration

```css
[data-theme="midnight-pro"] {
  --p: 258 90% 66%;        /* primary: #8b5cf6 (Violet) */
  --pc: 270 100% 98%;
  --s: 188 94% 43%;        /* secondary: #06b6d4 (Cyan) */
  --sc: 185 96% 97%;
  --a: 347 77% 60%;        /* accent: #f43f5e (Rose) */
  --ac: 0 0% 100%;
  --n: 215 28% 17%;        /* neutral: #1e293b */
  --nc: 214 32% 97%;
  --b1: 222 47% 11%;       /* base-100: #0f172a (Bleu nuit) */
  --b2: 222 50% 7%;        /* base-200: #0a0f1e */
  --b3: 222 54% 4%;        /* base-300: #050914 */
  --bc: 214 32% 91%;
  --in: 217 91% 60%;
  --su: 142 76% 45%;
  --wa: 48 96% 47%;
  --er: 0 84% 60%;
  --rounded-box: 0.75rem;
  --rounded-btn: 0.5rem;
}
```

### Exemple HTML

```html
<!DOCTYPE html>
<html data-theme="midnight-pro">
<head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>/* Insérer CSS du thème ci-dessus */</style>
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
      <div class="flex-none gap-2">
        <button class="btn btn-primary btn-sm">Upgrade</button>
      </div>
    </div>

    <!-- Hero -->
    <div class="hero min-h-[500px] bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Midnight Pro
          </h1>
          <p class="py-6 text-xl">Thème sombre professionnel</p>
          <div class="flex gap-4 justify-center">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Dashboard -->
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="card bg-base-100 border border-primary/20">
          <div class="card-body">
            <p class="text-sm opacity-60">Revenue</p>
            <h3 class="text-3xl font-bold text-primary">$45K</h3>
            <p class="text-sm text-success">+20.1%</p>
          </div>
        </div>

        <div class="card bg-base-100 border border-secondary/20">
          <div class="card-body">
            <p class="text-sm opacity-60">Users</p>
            <h3 class="text-3xl font-bold text-secondary">2.3K</h3>
            <p class="text-sm text-success">+180</p>
          </div>
        </div>

        <div class="card bg-base-100 border border-accent/20">
          <div class="card-body">
            <p class="text-sm opacity-60">Conversion</p>
            <h3 class="text-3xl font-bold text-accent">12K</h3>
            <p class="text-sm text-warning">+19%</p>
          </div>
        </div>

        <div class="card bg-base-100 border border-info/20">
          <div class="card-body">
            <p class="text-sm opacity-60">Engagement</p>
            <h3 class="text-3xl font-bold text-info">98.5%</h3>
            <p class="text-sm text-success">Excellent</p>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="card bg-base-100 border border-base-content/10">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Recent Activity</h2>
          <table class="table">
            <thead>
              <tr><th>Project</th><th>Status</th><th>Progress</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>UI Redesign</td>
                <td><span class="badge badge-primary">In Progress</span></td>
                <td><progress class="progress progress-primary w-32" value="75" max="100"></progress></td>
              </tr>
              <tr>
                <td>API Integration</td>
                <td><span class="badge badge-success">Completed</span></td>
                <td><progress class="progress progress-success w-32" value="100" max="100"></progress></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

## 🔄 Intégration et Utilisation

### Changer de Thème Dynamiquement

```javascript
// Changer et sauvegarder le thème
function changeTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('theme', themeName);
}

// Charger au démarrage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'ocean-breeze';
  changeTheme(savedTheme);
});

// Toggle light/dark
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  changeTheme(current === 'ocean-breeze' ? 'midnight-pro' : 'ocean-breeze');
}
```

### Bouton Toggle avec DaisyUI

```html
<label class="swap swap-rotate">
  <input type="checkbox" id="themeToggle" onchange="toggleTheme()" />

  <!-- Soleil (light) -->
  <svg class="swap-on fill-current w-8 h-8" viewBox="0 0 24 24">
    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
  </svg>

  <!-- Lune (dark) -->
  <svg class="swap-off fill-current w-8 h-8" viewBox="0 0 24 24">
    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
  </svg>
</label>
```

### Menu Sélecteur

```html
<div class="dropdown">
  <label tabindex="0" class="btn btn-ghost">Thème</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a onclick="changeTheme('ocean-breeze')">🌞 Ocean Breeze</a></li>
    <li><a onclick="changeTheme('midnight-pro')">🌙 Midnight Pro</a></li>
    <li><a onclick="changeTheme('light')">☀️ Light</a></li>
    <li><a onclick="changeTheme('dark')">🌑 Dark</a></li>
  </ul>
</div>
```

## 🛠️ Utilitaires de Conversion

### Hex → HSL

```javascript
/**
 * Convertit HEX en HSL pour DaisyUI
 * @param {string} hex - "#RRGGBB"
 * @returns {string} - "H S% L%"
 */
function hexToHSL(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h = 0, s = 0, l = (max + min) / 2;

  if (diff !== 0) {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);

    switch (max) {
      case r: h = ((g - b) / diff + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / diff + 2) / 6; break;
      case b: h = ((r - g) / diff + 4) / 6; break;
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

// Exemple
console.log(hexToHSL('#3b82f6')); // "217 91% 60%"
```

### Générer Palette

```javascript
function generatePalette(primaryHex) {
  const primary = hexToHSL(primaryHex);
  const [h, s, l] = primary.split(' ').map(v => parseInt(v));

  return {
    primary: primary,
    secondary: `${(h + 180) % 360} ${s}% ${l}%`,  // Complémentaire
    accent: `${(h + 120) % 360} ${s}% ${l}%`,     // Triadique
    neutral: `${h} ${Math.max(0, s - 80)}% 20%`,  // Désaturé foncé
  };
}
```

## 📚 Ressources

### Outils
- [DaisyUI Theme Generator](https://daisyui.com/theme-generator/) - Officiel
- [Coolors](https://coolors.co/) - Palettes
- [HSL Color Picker](https://hslpicker.com/) - Convertisseur

### Documentation
- [DaisyUI Themes](https://daisyui.com/docs/themes/)
- [TailwindCSS Colors](https://tailwindcss.com/docs/customizing-colors)

### Best Practices
1. **Contraste** : Ratio minimum 4.5:1 pour texte
2. **Cohérence** : 3-5 couleurs principales max
3. **Accessibilité** : Tester avec WAVE/axe DevTools
4. **Performance** : CSS Variables pour changement dynamique
5. **35 Thèmes intégrés** : light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset

---

**2 thèmes personnalisés prêts à l'emploi** : Ocean Breeze (light) & Midnight Pro (dark)
