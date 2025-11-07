---
name: tailwind-daisyui-expert
description: Expert en développement frontend avec TailwindCSS et DaisyUI. Utiliser pour créer des interfaces HTML/CSS, implémenter des composants DaisyUI (63 disponibles), gérer les thèmes (35 intégrés), configurer le dark/light mode, ou obtenir des conseils sur les bonnes pratiques TailwindCSS/DaisyUI. Idéal pour : formulaires, dashboards, landing pages, systèmes de design, theming.
---

# TailwindCSS & DaisyUI Expert Skill

Expert en développement frontend avec TailwindCSS et DaisyUI. Ce skill vous aide à créer des interfaces modernes avec les 63 composants DaisyUI, gérer les thèmes (35 intégrés), et implémenter correctement le mode dark/light.

## Configuration de Base

### Installation (TailwindCSS 4 + DaisyUI 5)

```bash
npm install -D tailwindcss@latest @tailwindcss/cli@latest daisyui@latest
```

### Configuration CSS (input.css)

```css
@import "tailwindcss";

@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
```

### Build

```bash
npx tailwindcss -i ./input.css -o ./output.css --watch
```

## Gestion des Thèmes

### 35 Thèmes Intégrés

**Thèmes clairs :** light, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, garden, lofi, pastel, fantasy, wireframe, cmyk, autumn, acid, lemonade, winter, nord

**Thèmes sombres :** dark, night, coffee, dim, sunset, dracula, business, forest, aqua, black, luxury, halloween

**Personnalisables :** Vous pouvez modifier n'importe quel thème ou créer le vôtre

### Activer Plusieurs Thèmes

```css
@import "tailwindcss";

@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake, cyberpunk, forest, night;
}
```

### Activer TOUS les Thèmes

```css
@plugin "daisyui" {
  themes: all;
}
```

### Appliquer un Thème

```html
<!-- Thème global -->
<html data-theme="dark">

<!-- Thème local (peut être imbriqué) -->
<div data-theme="light">
  Ce contenu utilise toujours le thème light
  <span data-theme="cyberpunk">Ce span utilise cyberpunk</span>
</div>
```

## Gestion Dark/Light Mode

### Méthode 1 : Détection Automatique du Système

DaisyUI détecte automatiquement `prefers-color-scheme`.

```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
```

```html
<!-- Classes Tailwind pour réagir au dark mode système -->
<div class="bg-white dark:bg-gray-900">
  <p class="text-gray-900 dark:text-gray-100">Texte adaptatif</p>
  <img src="logo-light.svg" class="block dark:hidden" />
  <img src="logo-dark.svg" class="hidden dark:block" />
</div>
```

### Méthode 2 : Toggle Manuel avec theme-controller

```html
<!-- Toggle simple -->
<input type="checkbox" value="dark" class="theme-controller toggle" />

<!-- Bouton de switch personnalisé -->
<label class="swap swap-rotate">
  <input type="checkbox" value="dark" class="theme-controller" />

  <!-- Icône soleil -->
  <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
  </svg>

  <!-- Icône lune -->
  <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
  </svg>
</label>
```

### Méthode 3 : Sélecteur Dropdown Multi-Thèmes

```html
<select class="select select-bordered" data-choose-theme>
  <option value="">Default</option>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="cupcake">Cupcake</option>
  <option value="cyberpunk">Cyberpunk</option>
  <option value="forest">Forest</option>
</select>

<script>
  const themeSelect = document.querySelector('[data-choose-theme]');
  themeSelect.addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-theme', e.target.value);
    localStorage.setItem('theme', e.target.value);
  });

  // Restaurer le thème sauvegardé
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSelect.value = savedTheme;
  }
</script>
```

### Variant dark: Personnalisé pour Thème Spécifique

```css
@import "tailwindcss";

@plugin "daisyui" {
  themes: winter --default, night --prefersdark;
}

@custom-variant dark (&:where([data-theme=night], [data-theme=night] *));
```

```html
<div class="p-10 dark:p-20 dark:bg-base-300">
  Padding 10 sur winter, padding 20 sur night
</div>
```

## Bibliothèque des 63 Composants DaisyUI

Voir le fichier [COMPONENTS.md](COMPONENTS.md) pour la liste complète des composants organisés par catégorie.

### Catégories de Composants

- **Actions (6)** : Button, Dropdown, Modal, Swap, Theme Controller, FAB
- **Data Display (17)** : Accordion, Avatar, Badge, Card, Carousel, Chat Bubble, Collapse, Countdown, Diff, Kbd, Stat, Table, Timeline, etc.
- **Navigation (8)** : Breadcrumbs, Bottom Navigation, Link, Menu, Navbar, Pagination, Steps, Tabs
- **Layout (6)** : Artboard, Divider, Drawer, Footer, Hero, Join
- **Feedback (6)** : Alert, Loading, Progress, Radial Progress, Skeleton, Toast
- **Form Controls (14)** : Checkbox, File Input, Radio, Range, Rating, Select, Text Input, Textarea, Toggle, Label, etc.
- **Mockup (4)** : Browser, Code, Phone, Window

## Bonnes Pratiques

### Système de Couleurs Sémantiques

Utilisez toujours les couleurs sémantiques de DaisyUI plutôt que les couleurs Tailwind brutes :

✅ **BON :**
```html
<button class="btn btn-primary">Action</button>
<div class="bg-base-100 text-base-content">...</div>
```

❌ **MAUVAIS :**
```html
<button class="bg-blue-500 text-white">Action</button>
<div class="bg-white text-black dark:bg-gray-900 dark:text-white">...</div>
```

### Palette de Couleurs Complète

- **primary** : Couleur principale de la marque
- **secondary** : Couleur secondaire
- **accent** : Couleur d'accentuation
- **neutral** : Couleur neutre pour texte/bordures
- **base-100/200/300** : Couleurs de fond (100=principal, 300=le plus foncé)
- **base-content** : Texte qui s'adapte au fond
- **info** : Informations
- **success** : Succès
- **warning** : Avertissement
- **error** : Erreur

Chaque couleur a une variante **-content** pour le texte (ex: `primary-content`, `success-content`)

### Utiliser les 35 Thèmes Intégrés

Ne créez pas de thème personnalisé sans avoir testé les 35 thèmes intégrés. DaisyUI offre :

- **light**, **dark** : Classiques
- **cupcake**, **bumblebee** : Pastels
- **cyberpunk**, **synthwave** : Rétro-futuriste
- **forest**, **aqua** : Nature
- **luxury**, **business** : Corporate
- **dracula**, **night** : Dark élégants
- Et 20+ autres...

### Responsive Design

Combinez les utilitaires Tailwind avec DaisyUI :

```html
<!-- Menu responsive -->
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg>...</svg>
      </label>
      <ul class="menu menu-compact dropdown-content">
        <li><a>Item 1</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal">
      <li><a>Item 1</a></li>
    </ul>
  </div>
</div>
```

### Accessibilité

DaisyUI est conçu pour l'accessibilité :

```html
<!-- Utilisez les attributs ARIA -->
<button aria-label="Fermer" class="btn btn-circle btn-sm">
  <svg>...</svg>
</button>

<!-- Labels pour les inputs -->
<label class="label" for="email">
  <span class="label-text">Email</span>
</label>
<input id="email" type="email" class="input input-bordered" />

<!-- Rôles appropriés -->
<nav role="navigation" class="navbar">...</nav>
<main role="main">...</main>
```

### Combiner avec Tailwind

DaisyUI fonctionne avec toutes les classes Tailwind :

```html
<!-- Classes DaisyUI + Tailwind -->
<button class="btn btn-primary shadow-lg hover:shadow-xl transition-all duration-300">
  Bouton stylé
</button>

<div class="card bg-gradient-to-r from-purple-500 to-pink-500">
  <div class="card-body text-white">
    <h2 class="card-title text-3xl font-bold">Titre</h2>
  </div>
</div>
```

### Anti-Patterns à Éviter

**1. Ne pas outrepasser le système de couleurs**
```html
❌ <button class="btn bg-blue-600">Action</button>
✅ <button class="btn btn-primary">Action</button>
```

**2. Ne pas dupliquer les styles déjà fournis**
```html
❌ <button class="px-4 py-2 rounded-lg bg-primary text-primary-content">
✅ <button class="btn btn-primary">
```

**3. Ne pas mélanger les approches de theming**
```html
❌ <div class="bg-white dark:bg-gray-900" data-theme="light">
✅ <div class="bg-base-100" data-theme="light">
```

## Exemples Complets

Voir le fichier [EXAMPLES.md](EXAMPLES.md) pour des exemples complets :
- Formulaire de connexion avec dark mode
- Dashboard responsive avec sidebar
- Page de profil utilisateur
- E-commerce product card

## Instructions d'Utilisation du Skill

Lorsque l'utilisateur demande :
- **"Crée un formulaire"** → Utilise les composants form + labels + validation
- **"Ajoute le dark mode"** → Implémente theme-controller avec light/dark
- **"Dashboard responsive"** → Utilise drawer + navbar + stats + responsive classes
- **"Changer les couleurs"** → Suggère des thèmes intégrés appropriés
- **"Liste de produits"** → Cards + badges + rating + responsive grid

Toujours :
1. Utiliser les classes sémantiques (btn-primary, bg-base-100)
2. Proposer des thèmes intégrés avant de créer un custom
3. Inclure les bonnes pratiques d'accessibilité (labels, aria)
4. Rendre responsive avec les breakpoints Tailwind (sm:, md:, lg:)
5. Implémenter le dark mode de manière cohérente

## Références

- Documentation officielle : https://daisyui.com
- Composants : https://daisyui.com/components/
- Thèmes : https://daisyui.com/docs/themes/
- GitHub : https://github.com/saadeghi/daisyui
- TailwindCSS : https://tailwindcss.com
