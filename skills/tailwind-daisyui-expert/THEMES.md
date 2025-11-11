# 🎨 Thèmes Personnalisés DaisyUI v5

Guide complet pour créer des thèmes personnalisés DaisyUI v5 avec format **OKLCH**. [Documentation officielle](https://daisyui.com/docs/themes/)

## 📋 Comprendre les Thèmes

DaisyUI v5 utilise **variables CSS** avec format **OKLCH** pour définir l'apparence. Chaque composant référence ces variables, permettant de changer l'UI complète en modifiant le thème.

### Couleurs Sémantiques

| Variable | Usage | Variante Content |
|----------|-------|------------------|
| `primary` | Couleur principale marque | `primary-content` |
| `secondary` | Couleur secondaire | `secondary-content` |
| `accent` | Accentuation | `accent-content` |
| `neutral` | Texte/arrière-plans neutres | `neutral-content` |
| `base-100/200/300` | Arrière-plans (clair → foncé) | `base-content` |
| `info/success/warning/error` | États | `-content` variants |

## 🎨 Format OKLCH (DaisyUI v5)

**OKLCH** : `oklch(L% C H)` où :
- **L** (Lightness) : 0-100% luminosité
- **C** (Chroma) : 0-0.4 intensité couleur
- **H** (Hue) : 0-360° teinte

### Template Complet

```css
@plugin "daisyui/theme" {
  name: "mon-theme";
  default: true;
  prefersdark: false;
  color-scheme: light;

  /* Couleurs principales */
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --color-secondary: oklch(70% 0.25 200);
  --color-secondary-content: oklch(98% 0.01 200);
  --color-accent: oklch(65% 0.25 160);
  --color-accent-content: oklch(98% 0.01 160);

  /* Neutres */
  --color-neutral: oklch(50% 0.05 240);
  --color-neutral-content: oklch(98% 0.01 240);

  /* Bases */
  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: oklch(20% 0.05 240);

  /* États */
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(65% 0.25 140);
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: oklch(65% 0.3 30);
  --color-error-content: oklch(98% 0.01 30);

  /* Propriétés */
  --radius-selector: 1rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

## 🛠️ Création de Thème

```css
@import "tailwindcss";
@plugin "daisyui";

/* Votre thème personnalisé */
@plugin "daisyui/theme" {
  name: "mon-theme";
  default: true;
  color-scheme: light;

  --color-primary: oklch(60% 0.2 240);
  --color-secondary: oklch(70% 0.15 180);
  --color-accent: oklch(65% 0.25 50);
  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);

  --radius-box: 0.5rem;
}
```

## 🌟 Exemple 1 : Ocean Breeze (Light)

Thème clair inspiré de l'océan avec tons bleus/verts apaisants.

### Configuration (CSS Build)

```css
@import "tailwindcss";
@plugin "daisyui";

@plugin "daisyui/theme" {
  name: "ocean-breeze";
  default: true;
  color-scheme: light;

  /* Couleurs principales - Bleu océan */
  --color-primary: oklch(65% 0.19 220);        /* #0ea5e9 (Bleu océan) */
  --color-primary-content: oklch(98% 0.01 220);
  --color-secondary: oklch(62% 0.16 180);      /* #14b8a6 (Turquoise) */
  --color-secondary-content: oklch(98% 0.01 180);
  --color-accent: oklch(70% 0.22 40);          /* #f97316 (Orange corail) */
  --color-accent-content: oklch(98% 0.01 40);

  /* Neutres */
  --color-neutral: oklch(35% 0.04 240);        /* #334155 */
  --color-neutral-content: oklch(98% 0.02 240);

  /* Bases */
  --color-base-100: oklch(100% 0 0);           /* #ffffff */
  --color-base-200: oklch(97% 0.01 240);       /* #f1f5f9 */
  --color-base-300: oklch(92% 0.01 240);       /* #e2e8f0 */
  --color-base-content: oklch(20% 0.02 240);

  /* États */
  --color-info: oklch(65% 0.19 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(68% 0.17 150);
  --color-success-content: oklch(98% 0.01 150);
  --color-warning: oklch(75% 0.20 80);
  --color-warning-content: oklch(20% 0.02 80);
  --color-error: oklch(68% 0.20 25);
  --color-error-content: oklch(98% 0.01 25);

  /* Propriétés */
  --radius-box: 1rem;
  --radius-field: 0.75rem;
  --radius-selector: 1rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
}
```

### Exemple HTML

```html
<!DOCTYPE html>
<html data-theme="ocean-breeze">
<head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <style>/* Insérer CSS du thème ci-dessus (version @plugin) */</style>
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

### Configuration (CSS Build)

```css
@import "tailwindcss";
@plugin "daisyui";

@plugin "daisyui/theme" {
  name: "midnight-pro";
  prefersdark: true;
  color-scheme: dark;

  /* Couleurs principales - Violet & Cyan */
  --color-primary: oklch(68% 0.23 285);        /* #8b5cf6 (Violet) */
  --color-primary-content: oklch(98% 0.02 285);
  --color-secondary: oklch(58% 0.18 210);      /* #06b6d4 (Cyan) */
  --color-secondary-content: oklch(98% 0.02 210);
  --color-accent: oklch(65% 0.22 350);         /* #f43f5e (Rose) */
  --color-accent-content: oklch(98% 0.01 350);

  /* Neutres */
  --color-neutral: oklch(25% 0.03 240);        /* #1e293b */
  --color-neutral-content: oklch(92% 0.01 240);

  /* Bases - Dark */
  --color-base-100: oklch(18% 0.02 240);       /* #0f172a (Bleu nuit) */
  --color-base-200: oklch(13% 0.02 240);       /* #0a0f1e */
  --color-base-300: oklch(8% 0.02 240);        /* #050914 */
  --color-base-content: oklch(92% 0.01 240);

  /* États */
  --color-info: oklch(65% 0.20 240);
  --color-info-content: oklch(98% 0.01 240);
  --color-success: oklch(65% 0.18 150);
  --color-success-content: oklch(98% 0.01 150);
  --color-warning: oklch(75% 0.22 85);
  --color-warning-content: oklch(20% 0.02 85);
  --color-error: oklch(68% 0.20 25);
  --color-error-content: oklch(98% 0.01 25);

  /* Propriétés */
  --radius-box: 0.75rem;
  --radius-field: 0.5rem;
  --radius-selector: 0.75rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
}
```

### Exemple HTML

```html
<!DOCTYPE html>
<html data-theme="midnight-pro">
<head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <style>/* Insérer CSS du thème ci-dessus (version @plugin) */</style>
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

## 🛠️ Conversion de Couleurs

### Utiliser le Générateur Officiel

Pour convertir vos couleurs HEX vers OKLCH, utilisez le **générateur de thème officiel DaisyUI** :

👉 **[DaisyUI Theme Generator](https://daisyui.com/theme-generator/)**

Le générateur permet de :
- Entrer des couleurs HEX, RGB ou HSL
- Conversion automatique vers OKLCH
- Prévisualisation en temps réel
- Export code CSS prêt à l'emploi
- Test sur tous les composants DaisyUI

### Conversion Manuelle Approximative

```javascript
/**
 * Conversion approximative HEX → OKLCH (valeurs estimées)
 * Pour production, utilisez le générateur officiel DaisyUI
 */
function hexToOKLCH(hex) {
  // Convertir HEX vers RGB
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  // Calcul approximatif de Lightness
  const L = Math.round((0.2126 * r + 0.7152 * g + 0.0722 * b) * 100);

  // Chroma et Hue (simplifiés - utiliser le générateur pour précision)
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const C = ((max - min) * 0.3).toFixed(2); // Approximation

  // Hue
  let H = 0;
  if (max !== min) {
    if (max === r) H = 60 * (((g - b) / (max - min)) % 6);
    else if (max === g) H = 60 * (((b - r) / (max - min)) + 2);
    else H = 60 * (((r - g) / (max - min)) + 4);
  }
  H = Math.round(H < 0 ? H + 360 : H);

  return `oklch(${L}% ${C} ${H})`;
}

// Exemple (approximatif)
console.log(hexToOKLCH('#3b82f6')); // "oklch(60% 0.20 240)" (approx)
```

**⚠️ Important** : Cette conversion est approximative. Pour des thèmes de production, utilisez **toujours** le [générateur officiel DaisyUI](https://daisyui.com/theme-generator/) pour des valeurs OKLCH précises.

## 📚 Ressources

### Outils
- [DaisyUI Theme Generator](https://daisyui.com/theme-generator/) - Officiel (OKLCH)
- [Coolors](https://coolors.co/) - Palettes couleurs
- [OKLCH Color Picker](https://oklch.com/) - Convertisseur OKLCH

### Documentation
- [DaisyUI v5 Themes](https://daisyui.com/docs/themes/)
- [DaisyUI v5 Config](https://daisyui.com/docs/config/)
- [TailwindCSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [OKLCH Format](https://oklch.com/) - Comprendre OKLCH

### Best Practices
1. **Format OKLCH** : Utiliser OKLCH pour DaisyUI v5 (meilleure gamme de couleurs)
2. **Générateur officiel** : Toujours utiliser le générateur DaisyUI pour thèmes production
3. **Contraste** : Ratio minimum 4.5:1 pour texte (WCAG AA)
4. **Cohérence** : 3-5 couleurs principales max pour clarté visuelle
5. **Accessibilité** : Tester avec WAVE/axe DevTools
6. **Performance** : CSS Variables pour changement dynamique sans rechargement
7. **35 Thèmes intégrés** : light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, caramellatte, abyss, silk

---

**2 thèmes personnalisés prêts à l'emploi** : Ocean Breeze (light) & Midnight Pro (dark) - Format OKLCH DaisyUI v5
