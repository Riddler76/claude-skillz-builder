---
name: tailwind-daisyui-heroicons-expert
description: Expert développement frontend TailwindCSS 4, DaisyUI 5 et HeroIcons v2. Créer interfaces modernes avec 75+ composants DaisyUI, 316 icônes HeroIcons (4 styles), 35 thèmes intégrés, dark/light mode. Utiliser pour dashboards, formulaires, landing pages, design systems, SPAs. Compatible CDN et build.
---

# TailwindCSS 4 + DaisyUI 5 + HeroIcons Expert

Expert en développement frontend moderne : **75+ composants DaisyUI v5**, **316 icônes HeroIcons** (4 styles), **35 thèmes** intégrés, **theming personnalisé** complet.

## 🚀 Quick Start

### Via CDN (Prototypage Rapide)

```html
<!DOCTYPE html>
<html data-theme="light">
<head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>
  <button class="btn btn-primary">Hello DaisyUI!</button>
</body>
</html>
```

**Note CDN**: Utilise DaisyUI v5 (OKLCH) avec Tailwind CSS v4 browser. Pour production, préférez le build npm.

### Via Build (Production)

**Installation**:
```bash
npm install -D tailwindcss@latest daisyui@latest
npm install @heroicons/react  # Pour React/Vue
```

**Configuration CSS** (`app.css`):
```css
@import "tailwindcss";

@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
```

**Build**:
```bash
npx tailwindcss -i ./app.css -o ./dist/output.css --watch
```

---

## 📚 Composants DaisyUI v5 (75+)

### Catégories Principales

**Actions (7)**: Button, Dropdown, Modal, Swap, Theme Controller, FAB, Filter
**Data Display (20)**: Card, Badge, Avatar, Table, Stat, Carousel, Timeline, List, Hover Gallery, Hover 3D, Text Rotate, Status...
**Navigation (9)**: Navbar, Menu, Tabs, Breadcrumbs, Pagination, Steps, Dock...
**Forms (15)**: Input, Checkbox, Radio, Select, Range, Toggle, File Input, Fieldset, Validator...
**Feedback (6)**: Alert, Progress, Loading, Toast, Skeleton, Tooltip
**Layout (7)**: Hero, Drawer, Divider, Footer, Artboard, Join, Stack
**Mockup (4)**: Browser, Code, Phone, Window
**Utilities (3+)**: Calendar, Indicator, Mask...

➡️ **Voir [COMPONENTS.md](./COMPONENTS.md)** pour la liste complète avec exemples de code

### Exemple Rapide

```html
<!-- Card avec actions -->
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="image.jpg" alt="Product" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      Chaussures de Course
      <div class="badge badge-secondary">NOUVEAU</div>
    </h2>
    <p>Description du produit ici</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Acheter</button>
    </div>
  </div>
</div>
```

---

## 🎨 Thèmes (35 Intégrés)

### Liste Complète

**Clairs (20)**: light, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, garden, lofi, pastel, fantasy, wireframe, cmyk, autumn, acid, lemonade, winter, nord, caramellatte, silk

**Sombres (15)**: dark, night, coffee, dim, sunset, dracula, business, forest, aqua, black, luxury, halloween, abyss

### Configuration

```css
/* Activer plusieurs thèmes */
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake, cyberpunk;
}

/* Activer TOUS les thèmes */
@plugin "daisyui" {
  themes: all;
}
```

### Appliquer un Thème

```html
<!-- Global -->
<html data-theme="dark">

<!-- Local (imbrication possible) -->
<div data-theme="light">
  Contenu en light theme
  <span data-theme="cyberpunk">Cyberpunk ici</span>
</div>
```

### Toggle Dark/Light avec JavaScript

```html
<!-- Toggle avec theme-controller -->
<label class="swap swap-rotate">
  <input type="checkbox" class="theme-controller" value="dark" />
  <svg class="swap-on fill-current w-8 h-8"><!-- Icône soleil --></svg>
  <svg class="swap-off fill-current w-8 h-8"><!-- Icône lune --></svg>
</label>

<script>
// Sauvegarder le thème
document.querySelectorAll('.theme-controller').forEach(toggle => {
  toggle.addEventListener('change', (e) => {
    const theme = e.target.checked ? e.target.value : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});

// Restaurer au chargement
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
</script>
```

### Sélecteur Multi-Thèmes

```html
<select class="select select-bordered" data-choose-theme>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="cupcake">Cupcake</option>
  <option value="cyberpunk">Cyberpunk</option>
</select>

<script>
document.querySelector('[data-choose-theme]').addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.target.value);
  localStorage.setItem('theme', e.target.value);
});
</script>
```

### 🎨 Thèmes Personnalisés

**Créer vos propres thèmes** avec couleurs et styles uniques :

➡️ **Voir [THEMES.md](./THEMES.md)** pour :
- Guide complet de création DaisyUI v5 (format OKLCH)
- **2 thèmes prêts à l'emploi** : 🌞 Ocean Breeze (light) + 🌙 Midnight Pro (dark)
- Outils de conversion HEX → OKLCH
- Exemples HTML complets

**DaisyUI v5** (OKLCH - Recommandé):
```css
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
  --radius-field: 0.25rem;
}
```

---

## 🎯 HeroIcons v2.1.5 (316 Icônes)

Bibliothèque officielle TailwindCSS : **316 icônes**, **4 styles**, **MIT License**

### 4 Styles Disponibles

| Style | Taille | Stroke | Usage |
|-------|--------|--------|-------|
| **Outline** | 24×24px | 1.5px | Interfaces aérées (défaut) |
| **Solid** | 24×24px | - | CTA, éléments importants |
| **Mini** | 20×20px | - | Petits espaces, badges |
| **Micro** | 16×16px | - | Ultra compact, inline text |

### Utilisation React

```jsx
// Outline (24x24, stroke 1.5px)
import { BeakerIcon } from '@heroicons/react/24/outline'
<BeakerIcon className="w-6 h-6 text-blue-500" />

// Solid (24x24, filled)
import { BeakerIcon } from '@heroicons/react/24/solid'
<BeakerIcon className="w-6 h-6 text-blue-500" />

// Mini (20x20, filled)
import { BeakerIcon } from '@heroicons/react/20/solid'
<BeakerIcon className="w-5 h-5 text-blue-500" />

// Micro (16x16, filled)
import { BeakerIcon } from '@heroicons/react/16/solid'
<BeakerIcon className="w-4 h-4 text-blue-500" />
```

### Utilisation HTML/SVG

```html
<!-- Outline (stroke) -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>

<!-- Solid (fill) -->
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>
```

### Intégration DaisyUI

```html
<!-- Bouton avec icône -->
<button class="btn btn-primary gap-2">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
  </svg>
  Ajouter
</button>

<!-- Input avec icône -->
<label class="input input-bordered flex items-center gap-2">
  <svg class="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
  <input type="text" placeholder="Rechercher..." />
</label>

<!-- Alert avec icône -->
<div class="alert alert-info">
  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
  </svg>
  <span>Nouvelle notification</span>
</div>

<!-- Badge avec icône -->
<div class="badge badge-success gap-1">
  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
  </svg>
  Vérifié
</div>
```

### Tailles Recommandées

```html
<svg class="w-3 h-3">...</svg>  <!-- 12px - Micro inline -->
<svg class="w-4 h-4">...</svg>  <!-- 16px - Mini badges -->
<svg class="w-5 h-5">...</svg>  <!-- 20px - Boutons, inputs -->
<svg class="w-6 h-6">...</svg>  <!-- 24px - Défaut standard -->
<svg class="w-8 h-8">...</svg>  <!-- 32px - Headings, CTA -->
<svg class="w-10 h-10">...</svg> <!-- 40px - Heroes, avatars -->
```

### Coloration (currentColor)

```html
<!-- Hérite de la couleur du texte -->
<div class="text-primary">
  <svg class="w-6 h-6" fill="currentColor">...</svg>
</div>

<!-- Classes DaisyUI -->
<svg class="w-6 h-6 text-error">...</svg>
<svg class="w-6 h-6 text-success">...</svg>
<svg class="w-6 h-6 text-warning">...</svg>

<!-- Avec transitions -->
<button class="text-base-content hover:text-primary transition-colors">
  <svg class="w-6 h-6">...</svg>
</button>
```

### Catégories Principales

➡️ **Voir [HEROICONS.md](./HEROICONS.md)** pour la liste complète des 316 icônes

**Top catégories** : Actions (42), Navigation (38), Communication (28), Fichiers (32), Commerce (24), Status (26), Météo (12), Appareils (18), Social, Media, etc.

### Bonnes Pratiques

✅ **Cohérence** : Un seul style par interface (outline OU solid)
✅ **Accessibilité** : `aria-hidden="true"` pour décoratives, `aria-label` pour fonctionnelles
✅ **Performance** : SVG inline pour icônes fréquentes, sprites pour volume
✅ **Sizing** : Utiliser les classes Tailwind (w-4, w-5, w-6...)

---

## 🎨 Système de Couleurs Sémantiques

### Palette Complète DaisyUI

Utilisez **TOUJOURS** les couleurs sémantiques, jamais les couleurs Tailwind brutes :

```html
<!-- ✅ BON : Couleurs sémantiques -->
<button class="btn btn-primary">Action</button>
<div class="bg-base-100 text-base-content">Contenu</div>
<div class="alert alert-success">Succès</div>

<!-- ❌ MAUVAIS : Couleurs Tailwind brutes -->
<button class="bg-blue-500 text-white">Action</button>
<div class="bg-white text-black dark:bg-gray-900">Contenu</div>
```

### Couleurs Disponibles

| Couleur | Usage | Variante Content |
|---------|-------|------------------|
| `primary` | Couleur principale marque | `primary-content` |
| `secondary` | Couleur secondaire | `secondary-content` |
| `accent` | Accentuation | `accent-content` |
| `neutral` | Texte, bordures neutres | `neutral-content` |
| `base-100` | Fond principal | `base-content` |
| `base-200` | Fond secondaire | - |
| `base-300` | Fond tertiaire | - |
| `info` | Informations | `info-content` |
| `success` | Succès | `success-content` |
| `warning` | Avertissement | `warning-content` |
| `error` | Erreur | `error-content` |

### Exemples

```html
<!-- États de messages -->
<div class="alert alert-info">
  <span>Information importante</span>
</div>
<div class="alert alert-success">
  <span>Opération réussie</span>
</div>
<div class="alert alert-warning">
  <span>Attention requise</span>
</div>
<div class="alert alert-error">
  <span>Erreur détectée</span>
</div>

<!-- Boutons colorés -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-error">Delete</button>

<!-- Badges -->
<span class="badge badge-primary">New</span>
<span class="badge badge-success">Available</span>
<span class="badge badge-warning">Low Stock</span>
<span class="badge badge-error">Sold Out</span>
```

---

## 📱 Responsive Design

Combinez les breakpoints Tailwind avec DaisyUI :

```html
<!-- Navbar responsive -->
<div class="navbar bg-base-100">
  <!-- Mobile: Dropdown menu -->
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg class="w-5 h-5"><!-- Menu icon --></svg>
      </label>
      <ul class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>

  <!-- Desktop: Horizontal menu -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
</div>

<!-- Grid responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="card">...</div>
</div>

<!-- Sizes responsive -->
<button class="btn btn-sm md:btn-md lg:btn-lg">Responsive Button</button>
```

**Breakpoints Tailwind** : `sm:640px` `md:768px` `lg:1024px` `xl:1280px` `2xl:1536px`

---

## ♿ Accessibilité

DaisyUI intègre l'accessibilité par défaut. Bonnes pratiques :

```html
<!-- Labels explicites -->
<label class="label" for="email">
  <span class="label-text">Adresse email</span>
</label>
<input id="email" type="email" class="input input-bordered" required />

<!-- Boutons avec aria-label -->
<button aria-label="Fermer" class="btn btn-circle btn-sm">
  <svg class="w-4 h-4">...</svg>
</button>

<!-- Icônes décoratives -->
<svg aria-hidden="true" class="w-5 h-5">...</svg>

<!-- Rôles ARIA -->
<nav role="navigation" class="navbar">...</nav>
<main role="main">...</main>
<aside role="complementary" class="drawer-side">...</aside>

<!-- Focus visible -->
<button class="btn focus:outline-offset-2 focus:outline-primary">
  Action
</button>
```

---

## 🚀 Bonnes Pratiques

### 1. Cohérence du Système

✅ **Toujours utiliser les classes sémantiques** (btn-primary, bg-base-100)
✅ **Tester les 35 thèmes intégrés** avant de créer un thème custom
✅ **Un seul style d'icônes** par interface (outline OU solid)
✅ **Responsive d'abord** : mobile-first avec breakpoints

### 2. Performance

✅ **CDN pour prototypage**, **Build pour production**
✅ **Purge CSS** : TailwindCSS supprime automatiquement les classes inutilisées
✅ **SVG inline** pour icônes fréquentes (< 10 icônes)
✅ **Sprites SVG** pour nombreuses icônes (> 10)

### 3. Maintenance

✅ **Documentation** : Commenter les choix de thème
✅ **Nomenclature** : Noms de thèmes descriptifs (light-corporate, dark-tech)
✅ **Versioning** : Lock versions en production
✅ **Testing** : Tester sur thèmes light ET dark

### 4. Anti-Patterns à Éviter

❌ **Ne pas mélanger couleurs Tailwind brutes et DaisyUI**
```html
<!-- MAUVAIS -->
<button class="bg-blue-600 hover:bg-blue-700">Button</button>
<!-- BON -->
<button class="btn btn-primary">Button</button>
```

❌ **Ne pas dupliquer les styles DaisyUI**
```html
<!-- MAUVAIS -->
<button class="px-4 py-2 rounded-lg bg-primary text-primary-content">
<!-- BON -->
<button class="btn btn-primary">
```

❌ **Ne pas ignorer le système de theming**
```html
<!-- MAUVAIS -->
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
<!-- BON -->
<div class="bg-base-100 text-base-content">
```

---

## 📖 Exemples Complets

➡️ **Voir [EXAMPLES.md](./EXAMPLES.md)** pour :
- Formulaire de connexion responsive + dark mode
- Dashboard avec sidebar et navigation
- Page profil utilisateur avec avatar
- E-commerce product cards et panier
- Application dashboard complète avec statistiques

---

## 🔍 Guide d'Utilisation Rapide

Quand l'utilisateur demande :

| Demande | Action |
|---------|--------|
| "Crée un formulaire" | `input` + `label` + `btn` + validation |
| "Ajoute le dark mode" | `theme-controller` avec localStorage |
| "Dashboard responsive" | `drawer` + `navbar` + `stats` + grid responsive |
| "Changer les couleurs" | Proposer thèmes intégrés appropriés |
| "Carte de produit" | `card` + `badge` + `rating` + `btn` |
| "Menu navigation" | `navbar` + `menu` + `dropdown` (responsive) |
| "Formulaire avec validation" | `form-control` + `label` + états `input-error` |

**Toujours** :
1. Classes sémantiques (btn-primary, bg-base-100)
2. Thèmes intégrés avant custom
3. Accessibilité (labels, aria, roles)
4. Responsive (sm:, md:, lg:, xl:)
5. Dark mode cohérent (data-theme)

---

## 📚 Ressources

### Documentation Officielle
- **DaisyUI** : https://daisyui.com (v5.5.0)
- **DaisyUI Components** : https://daisyui.com/components/
- **DaisyUI Themes** : https://daisyui.com/docs/themes/
- **TailwindCSS** : https://tailwindcss.com (v4)
- **HeroIcons** : https://heroicons.com (v2.1.5)

### GitHub
- **DaisyUI** : https://github.com/saadeghi/daisyui
- **HeroIcons** : https://github.com/tailwindlabs/heroicons
- **TailwindCSS** : https://github.com/tailwindlabs/tailwindcss

### Outils
- **HeroIcons Search** : https://heroicons.com (copie code)
- **DaisyUI Theme Generator** : https://daisyui.com/theme-generator/
- **TailwindCSS Play** : https://play.tailwindcss.com

### Fichiers Support
- **[COMPONENTS.md](./COMPONENTS.md)** : 75+ composants DaisyUI v5 avec code
- **[HEROICONS.md](./HEROICONS.md)** : 316 icônes cataloguées
- **[THEMES.md](./THEMES.md)** : Guide thèmes OKLCH + 2 exemples prêts
- **[EXAMPLES.md](./EXAMPLES.md)** : Applications complètes DaisyUI v5

---

**Version** : TailwindCSS 4 + DaisyUI 5.5.x + HeroIcons v2.1.5
**Compatibilité** : CDN v5 + Build npm
**License** : MIT pour tous les composants
