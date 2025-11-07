---
name: tailwind-daisyui-heroicons-expert
description: Expert en développement frontend avec TailwindCSS, DaisyUI et HeroIcons. Utiliser pour créer des interfaces HTML/CSS, implémenter des composants DaisyUI (63 disponibles), intégrer des icônes HeroIcons (292 en 3 styles), gérer les thèmes (35 intégrés), configurer le dark/light mode. Idéal pour formulaires, dashboards, landing pages, design systems, iconographie.
---

# TailwindCSS, DaisyUI & HeroIcons Expert Skill

Expert en développement frontend avec TailwindCSS, DaisyUI et HeroIcons. Ce skill vous aide à créer des interfaces modernes avec les 63 composants DaisyUI, 292 icônes HeroIcons, gérer les thèmes (35 intégrés), et implémenter correctement le mode dark/light.

## Configuration de Base

### Installation (TailwindCSS 4 + DaisyUI 5 + HeroIcons)

```bash
npm install -D tailwindcss@latest @tailwindcss/cli@latest daisyui@latest
npm install @heroicons/react
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

## HeroIcons - Bibliothèque d'Icônes

HeroIcons est la bibliothèque d'icônes officielle de TailwindCSS, créée par les mêmes auteurs. Elle contient **292 icônes** disponibles en **3 styles** différents.

### 3 Styles d'Icônes

**1. Outline (24x24)** : Style par défaut, trait fin
```jsx
import { BeakerIcon } from '@heroicons/react/24/outline'

function MyComponent() {
  return <BeakerIcon className="w-6 h-6 text-blue-500" />
}
```

**2. Solid (24x24)** : Version remplie, plus audacieuse
```jsx
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return <BeakerIcon className="w-6 h-6 text-blue-500" />
}
```

**3. Mini (20x20)** : Version compacte pour petits espaces
```jsx
import { BeakerIcon } from '@heroicons/react/20/solid'

function MyComponent() {
  return <BeakerIcon className="w-5 h-5 text-blue-500" />
}
```

### Utilisation en HTML/SVG

Pour les projets sans React, utilisez les SVG directement :

```html
<!-- Outline -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
</svg>

<!-- Solid -->
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>
```

### Intégration avec DaisyUI

Les icônes s'intègrent parfaitement avec les composants DaisyUI :

```html
<!-- Boutons avec icônes -->
<button class="btn btn-primary gap-2">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
  </svg>
  Ajouter
</button>

<!-- Input avec icône -->
<div class="form-control">
  <div class="input-group">
    <span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </span>
    <input type="text" placeholder="Rechercher..." class="input input-bordered" />
  </div>
</div>

<!-- Alert avec icône -->
<div class="alert alert-info">
  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
  </svg>
  <span>Nouvelle notification</span>
</div>

<!-- Menu avec icônes -->
<ul class="menu bg-base-200 w-56 rounded-box">
  <li>
    <a>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
      Accueil
    </a>
  </li>
  <li>
    <a>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
      Profil
    </a>
  </li>
  <li>
    <a>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      Paramètres
    </a>
  </li>
</ul>

<!-- Card avec icône -->
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <div class="flex items-center gap-4">
      <div class="avatar placeholder">
        <div class="bg-primary text-primary-content rounded-full w-16">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      <div>
        <h2 class="card-title">Jean Dupont</h2>
        <p>Développeur Full Stack</p>
      </div>
    </div>
  </div>
</div>

<!-- Badge avec icône -->
<div class="badge badge-primary gap-2">
  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
  </svg>
  Vérifié
</div>
```

### Catégories d'Icônes Principales

Voir le fichier [HEROICONS.md](HEROICONS.md) pour la liste complète des 292 icônes.

**Catégories populaires :**
- **Actions** : plus, minus, x-mark, check, arrow-*, chevron-*, etc.
- **Navigation** : home, bars-3, magnifying-glass, cog-6-tooth, user, etc.
- **Media** : play, pause, stop, forward, backward, volume, etc.
- **Communication** : envelope, phone, chat-bubble, bell, at-symbol, etc.
- **Commerce** : shopping-cart, credit-card, currency-dollar, gift, etc.
- **Files** : document, folder, cloud, archive, arrow-down-tray, etc.
- **Social** : heart, star, share, bookmark, flag, etc.
- **Status** : check-circle, x-circle, exclamation-triangle, information-circle, etc.
- **Weather** : sun, moon, cloud, bolt, etc.
- **Devices** : computer-desktop, device-phone-mobile, printer, etc.

### Sizing avec TailwindCSS

```html
<!-- Tailles standards -->
<svg class="w-3 h-3">...</svg>  <!-- 12px - Très petit -->
<svg class="w-4 h-4">...</svg>  <!-- 16px - Petit -->
<svg class="w-5 h-5">...</svg>  <!-- 20px - Normal -->
<svg class="w-6 h-6">...</svg>  <!-- 24px - Défaut -->
<svg class="w-8 h-8">...</svg>  <!-- 32px - Grand -->
<svg class="w-10 h-10">...</svg> <!-- 40px - Très grand -->
<svg class="w-12 h-12">...</svg> <!-- 48px - Extra grand -->
```

### Coloration

Les icônes utilisent `currentColor`, elles héritent donc automatiquement de la couleur du texte :

```html
<!-- Via classe text-* -->
<svg class="w-6 h-6 text-primary">...</svg>
<svg class="w-6 h-6 text-error">...</svg>
<svg class="w-6 h-6 text-success">...</svg>

<!-- Via fill ou stroke -->
<svg class="w-6 h-6" fill="currentColor">...</svg>
<svg class="w-6 h-6" stroke="currentColor">...</svg>

<!-- Avec hover -->
<button class="text-base-content hover:text-primary transition-colors">
  <svg class="w-6 h-6" fill="currentColor">...</svg>
</button>
```

### Bonnes Pratiques HeroIcons

1. **Utiliser le bon style** :
   - Outline pour les interfaces aérées
   - Solid pour les CTA et éléments importants
   - Mini pour les petits espaces (badges, labels)

2. **Cohérence visuelle** :
   - Utiliser un seul style par interface (ne pas mélanger outline et solid)
   - Garder des tailles cohérentes pour les icônes similaires

3. **Accessibilité** :
   - Ajouter `aria-label` ou `aria-hidden="true"` selon le contexte
   - Utiliser `role="img"` pour les icônes décoratives importantes

4. **Performance** :
   - Préférer le SVG inline pour les icônes fréquemment utilisées
   - Utiliser des sprites SVG pour de nombreuses icônes

```html
<!-- Icône décorative -->
<svg aria-hidden="true" class="w-5 h-5">...</svg>

<!-- Icône avec signification -->
<button aria-label="Fermer">
  <svg class="w-5 h-5">...</svg>
</button>

<!-- Icône avec texte visible -->
<button>
  <svg class="w-5 h-5">...</svg>
  <span>Fermer</span>
</button>
```

### Ressources HeroIcons

- **Site officiel** : https://heroicons.com
- **GitHub** : https://github.com/tailwindlabs/heroicons
- **Recherche d'icônes** : https://heroicons.com (avec aperçu et copie)
- **Figma** : Plugin HeroIcons disponible

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
