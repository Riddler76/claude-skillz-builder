# Bibliothèque Complète des 63 Composants DaisyUI

## Actions (6 composants)

### Button
Boutons interactifs avec variantes de couleurs et tailles

```html
<button class="btn">Défaut</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>

<!-- Tailles -->
<button class="btn btn-lg">Large</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-xs">Tiny</button>

<!-- États -->
<button class="btn btn-primary loading">Chargement</button>
<button class="btn btn-disabled">Désactivé</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-wide">Wide</button>
<button class="btn btn-block">Full Width</button>
```

### Dropdown
Menu déroulant contextuel

```html
<div class="dropdown">
  <label tabindex="0" class="btn m-1">Cliquer</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Modal
Boîte de dialogue modale

```html
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Titre du Modal</h3>
    <p class="py-4">Contenu du modal</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Fermer</label>
    </div>
  </div>
</div>

<!-- Trigger -->
<label for="my-modal" class="btn">Ouvrir Modal</label>
```

### Swap
Toggle visuel entre deux états

```html
<label class="swap">
  <input type="checkbox" />
  <div class="swap-on">😁</div>
  <div class="swap-off">😢</div>
</label>
```

### Theme Controller
Contrôleur de thème intégré

```html
<input type="checkbox" value="dark" class="theme-controller toggle" />
```

### FAB (Floating Action Button)
Bouton d'action flottant

```html
<div class="fab">
  <button class="fab-button">+</button>
</div>
```

## Data Display (17 composants)

### Accordion
Contenu pliable avec sections

```html
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="accordion" checked="checked" />
  <div class="collapse-title text-xl font-medium">
    Section 1
  </div>
  <div class="collapse-content">
    <p>Contenu de la section 1</p>
  </div>
</div>
```

### Avatar
Image de profil circulaire

```html
<div class="avatar">
  <div class="w-24 rounded-full">
    <img src="avatar.jpg" />
  </div>
</div>

<!-- Groupe d'avatars -->
<div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12">
      <img src="user1.jpg" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="user2.jpg" />
    </div>
  </div>
</div>
```

### Badge
Indicateurs de statut et labels

```html
<div class="badge">Défaut</div>
<div class="badge badge-primary">Primary</div>
<div class="badge badge-secondary">Secondary</div>
<div class="badge badge-accent">Accent</div>
<div class="badge badge-ghost">Ghost</div>

<!-- Tailles -->
<div class="badge badge-lg">Large</div>
<div class="badge badge-sm">Small</div>
<div class="badge badge-xs">Tiny</div>
```

### Card
Conteneur de contenu avec image et actions

```html
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="image.jpg" alt="Image" /></figure>
  <div class="card-body">
    <h2 class="card-title">Titre de la carte</h2>
    <p>Description de la carte</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

### Carousel
Carrousel d'images défilantes

```html
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="img1.jpg" class="w-full" />
  </div>
  <div id="slide2" class="carousel-item relative w-full">
    <img src="img2.jpg" class="w-full" />
  </div>
</div>
```

### Chat Bubble
Bulles de conversation style messagerie

```html
<div class="chat chat-start">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img src="avatar1.jpg" />
    </div>
  </div>
  <div class="chat-header">
    Jean
    <time class="text-xs opacity-50">12:45</time>
  </div>
  <div class="chat-bubble">Salut !</div>
  <div class="chat-footer opacity-50">Vu</div>
</div>

<div class="chat chat-end">
  <div class="chat-bubble chat-bubble-primary">Comment ça va ?</div>
</div>
```

### Collapse
Contenu extensible click-to-expand

```html
<div class="collapse bg-base-200">
  <input type="checkbox" />
  <div class="collapse-title text-xl font-medium">
    Cliquer pour ouvrir
  </div>
  <div class="collapse-content">
    <p>Contenu caché</p>
  </div>
</div>
```

### Countdown
Compte à rebours animé

```html
<div class="countdown font-mono text-6xl">
  <span style="--value:15;"></span>:
  <span style="--value:30;"></span>:
  <span style="--value:45;"></span>
</div>
```

### Diff
Comparaison avant/après avec slider

```html
<div class="diff aspect-[16/9]">
  <div class="diff-item-1">
    <img alt="Image 1" src="image1.jpg" />
  </div>
  <div class="diff-item-2">
    <img alt="Image 2" src="image2.jpg" />
  </div>
  <div class="diff-resizer"></div>
</div>
```

### Kbd
Affichage de touches de clavier

```html
<kbd class="kbd">ctrl</kbd> + <kbd class="kbd">shift</kbd> + <kbd class="kbd">del</kbd>
```

### Stat
Affichage de statistiques avec valeur et description

```html
<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">Total Views</div>
    <div class="stat-value">89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
</div>
```

### Table
Tableau de données stylisé

```html
<table class="table">
  <thead>
    <tr>
      <th>Nom</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jean Dupont</td>
      <td>jean@example.com</td>
    </tr>
    <tr class="hover">
      <td>Marie Martin</td>
      <td>marie@example.com</td>
    </tr>
  </tbody>
</table>

<!-- Variantes -->
<table class="table table-zebra">...</table>
<table class="table table-pin-rows">...</table>
<table class="table table-pin-cols">...</table>
```

### Timeline
Ligne de temps chronologique

```html
<ul class="timeline timeline-vertical">
  <li>
    <div class="timeline-start">2015</div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="timeline-end timeline-box">Premier événement</div>
    <hr />
  </li>
</ul>
```

### Autres composants de données

- **Divider** : Séparateur horizontal/vertical avec texte optionnel
- **Indicator** : Badge positionné sur un coin d'élément
- **Mask** : Masques de forme pour images (circle, hexagon, triangle, etc.)
- **Progress** : Barre de progression horizontale
- **Skeleton** : État de chargement avec animation shimmer

## Navigation (8 composants)

### Breadcrumbs
Fil d'Ariane pour navigation hiérarchique

```html
<div class="text-sm breadcrumbs">
  <ul>
    <li><a>Accueil</a></li>
    <li><a>Catégorie</a></li>
    <li>Page actuelle</li>
  </ul>
</div>
```

### Bottom Navigation
Navigation en bas d'écran (mobile)

```html
<div class="btm-nav">
  <button>
    <svg>...</svg>
  </button>
  <button class="active">
    <svg>...</svg>
  </button>
  <button>
    <svg>...</svg>
  </button>
</div>
```

### Link
Lien stylisé avec hover

```html
<a class="link">Lien simple</a>
<a class="link link-primary">Lien primary</a>
<a class="link link-hover">Lien avec hover</a>
```

### Menu
Liste de navigation verticale/horizontale

```html
<ul class="menu bg-base-200 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>Sous-item 1</a></li>
        <li><a>Sous-item 2</a></li>
      </ul>
    </details>
  </li>
</ul>

<!-- Menu horizontal -->
<ul class="menu menu-horizontal bg-base-200 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

### Navbar
Barre de navigation principale

```html
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">MonApp</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Lien 1</a></li>
      <li><a>Lien 2</a></li>
    </ul>
  </div>
</div>
```

### Pagination
Navigation entre pages numérotées

```html
<div class="join">
  <button class="join-item btn">«</button>
  <button class="join-item btn">Page 1</button>
  <button class="join-item btn btn-active">2</button>
  <button class="join-item btn">3</button>
  <button class="join-item btn">»</button>
</div>
```

### Steps
Indicateur d'étapes de processus

```html
<ul class="steps">
  <li class="step step-primary">Étape 1</li>
  <li class="step step-primary">Étape 2</li>
  <li class="step">Étape 3</li>
  <li class="step">Étape 4</li>
</ul>
```

### Tabs
Onglets de navigation

```html
<div class="tabs tabs-boxed">
  <a class="tab">Tab 1</a>
  <a class="tab tab-active">Tab 2</a>
  <a class="tab">Tab 3</a>
</div>

<!-- Variantes -->
<div class="tabs tabs-bordered">...</div>
<div class="tabs tabs-lifted">...</div>
```

## Layout (6 composants)

### Artboard
Zone de travail avec dimensions fixes

```html
<div class="artboard artboard-demo phone-1">320×568</div>
```

### Divider
Séparateur avec texte optionnel

```html
<div class="divider">OU</div>
<div class="divider divider-horizontal">OU</div>
```

### Drawer
Tiroir latéral coulissant

```html
<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="my-drawer" class="btn btn-primary drawer-button">Ouvrir</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 bg-base-200">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
</div>
```

### Footer
Pied de page multi-colonnes

```html
<footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <span class="footer-title">Services</span>
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
  </div>
  <div>
    <span class="footer-title">Entreprise</span>
    <a class="link link-hover">À propos</a>
    <a class="link link-hover">Contact</a>
  </div>
</footer>
```

### Hero
Section héro pleine page

```html
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Bonjour !</h1>
      <p class="py-6">Description de votre service</p>
      <button class="btn btn-primary">Commencer</button>
    </div>
  </div>
</div>
```

### Join
Groupement d'éléments adjacents

```html
<div class="join">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>

<!-- Input groupé -->
<div class="join">
  <input class="input input-bordered join-item" placeholder="Email"/>
  <button class="btn join-item">S'inscrire</button>
</div>
```

## Feedback (6 composants)

### Alert
Messages d'alerte contextuels

```html
<div class="alert">
  <svg>...</svg>
  <span>Message d'information</span>
</div>

<div class="alert alert-info">
  <span>Information</span>
</div>

<div class="alert alert-success">
  <span>Succès</span>
</div>

<div class="alert alert-warning">
  <span>Attention</span>
</div>

<div class="alert alert-error">
  <span>Erreur</span>
</div>
```

### Loading
Indicateurs de chargement animés

```html
<span class="loading loading-spinner"></span>
<span class="loading loading-dots"></span>
<span class="loading loading-ring"></span>
<span class="loading loading-ball"></span>
<span class="loading loading-bars"></span>

<!-- Tailles -->
<span class="loading loading-spinner loading-xs"></span>
<span class="loading loading-spinner loading-sm"></span>
<span class="loading loading-spinner loading-md"></span>
<span class="loading loading-spinner loading-lg"></span>
```

### Progress
Barre de progression

```html
<progress class="progress w-56" value="70" max="100"></progress>
<progress class="progress progress-primary w-56" value="70" max="100"></progress>
<progress class="progress progress-secondary w-56" value="70" max="100"></progress>
```

### Radial Progress
Progression circulaire

```html
<div class="radial-progress" style="--value:70;">70%</div>
<div class="radial-progress text-primary" style="--value:70; --size:12rem;">70%</div>
```

### Skeleton
Placeholder de chargement

```html
<div class="flex flex-col gap-4 w-52">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
```

### Toast
Notifications flottantes

```html
<div class="toast toast-top toast-end">
  <div class="alert alert-info">
    <span>Nouveau message</span>
  </div>
</div>

<!-- Positions : toast-top, toast-middle, toast-bottom -->
<!-- Alignements : toast-start, toast-center, toast-end -->
```

## Form Controls (14 composants)

### Checkbox
Cases à cocher

```html
<input type="checkbox" class="checkbox" />
<input type="checkbox" class="checkbox checkbox-primary" checked />
<input type="checkbox" class="checkbox checkbox-secondary" />

<!-- Tailles -->
<input type="checkbox" class="checkbox checkbox-xs" />
<input type="checkbox" class="checkbox checkbox-sm" />
<input type="checkbox" class="checkbox checkbox-md" />
<input type="checkbox" class="checkbox checkbox-lg" />
```

### File Input
Champ de sélection de fichier

```html
<input type="file" class="file-input file-input-bordered w-full max-w-xs" />
<input type="file" class="file-input file-input-primary" />
```

### Radio
Boutons radio

```html
<input type="radio" name="radio-1" class="radio" />
<input type="radio" name="radio-1" class="radio" checked />
<input type="radio" name="radio-2" class="radio radio-primary" />
```

### Range
Curseur de valeur

```html
<input type="range" min="0" max="100" value="50" class="range" />
<input type="range" min="0" max="100" value="50" class="range range-primary" />

<!-- Avec étapes visibles -->
<input type="range" min="0" max="100" value="40" class="range range-primary" step="25" />
<div class="w-full flex justify-between text-xs px-2">
  <span>0</span>
  <span>25</span>
  <span>50</span>
  <span>75</span>
  <span>100</span>
</div>
```

### Rating
Notation par étoiles

```html
<div class="rating">
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" checked />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
</div>

<!-- Couleurs personnalisées -->
<div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
```

### Select
Liste déroulante

```html
<select class="select select-bordered w-full max-w-xs">
  <option disabled selected>Choisir une option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Variantes -->
<select class="select select-primary">...</select>
<select class="select select-ghost">...</select>
```

### Text Input
Champ de texte

```html
<input type="text" placeholder="Texte" class="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="Primary" class="input input-bordered input-primary" />

<!-- Tailles -->
<input type="text" class="input input-xs" />
<input type="text" class="input input-sm" />
<input type="text" class="input input-md" />
<input type="text" class="input input-lg" />
```

### Textarea
Zone de texte multiligne

```html
<textarea class="textarea textarea-bordered" placeholder="Message"></textarea>
<textarea class="textarea textarea-primary" placeholder="Primary"></textarea>

<!-- Tailles -->
<textarea class="textarea textarea-xs">...</textarea>
<textarea class="textarea textarea-lg">...</textarea>
```

### Toggle
Interrupteur on/off

```html
<input type="checkbox" class="toggle" />
<input type="checkbox" class="toggle" checked />
<input type="checkbox" class="toggle toggle-primary" />
<input type="checkbox" class="toggle toggle-secondary" />

<!-- Tailles -->
<input type="checkbox" class="toggle toggle-xs" />
<input type="checkbox" class="toggle toggle-sm" />
<input type="checkbox" class="toggle toggle-md" />
<input type="checkbox" class="toggle toggle-lg" />
```

### Label
Étiquettes pour formulaires

```html
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Nom</span>
    <span class="label-text-alt">Obligatoire</span>
  </label>
  <input type="text" placeholder="Votre nom" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text-alt">Message d'aide</span>
  </label>
</div>
```

### Autres contrôles de formulaire

- **Fieldset** : Groupement de champs avec légende
- **Form Control** : Wrapper pour inputs avec labels
- **Join** : Pour grouper des inputs adjacents

## Mockup (4 composants)

### Browser Mockup
Maquette de navigateur

```html
<div class="mockup-browser border border-base-300">
  <div class="mockup-browser-toolbar">
    <div class="input border border-base-300">https://monsite.com</div>
  </div>
  <div class="px-4 py-16 border-t border-base-300">Contenu</div>
</div>
```

### Code Mockup
Maquette de terminal/code

```html
<div class="mockup-code">
  <pre data-prefix="$"><code>npm install daisyui</code></pre>
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>
```

### Phone Mockup
Maquette de téléphone

```html
<div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">Contenu</div>
  </div>
</div>
```

### Window Mockup
Maquette de fenêtre

```html
<div class="mockup-window border border-base-300">
  <div class="px-4 py-16 border-t border-base-300">Contenu</div>
</div>
```
