# DaisyUI v5 - 65 Composants

**Reference rapide** des 65 composants DaisyUI organisés par catégorie. [Documentation officielle](https://daisyui.com/components)

## 📋 Liste Complète par Catégorie

| Catégorie | Composants (Total) |
|-----------|-------------------|
| **Actions (6)** | Button, Dropdown, Modal, Swap, Theme Controller, FAB |
| **Data Display (18)** | Accordion, Avatar, Badge, Card, Carousel, Chat Bubble, Collapse, Countdown, Diff, Divider, Indicator, Kbd, Mask, Progress, Radial Progress, Skeleton, Stat, Table, Timeline |
| **Navigation (8)** | Breadcrumbs, Bottom Nav, Link, Menu, Navbar, Pagination, Steps, Tabs |
| **Feedback (7)** | Alert, Loading, Progress, Radial Progress, Skeleton, Toast, Tooltip |
| **Data Input (14)** | Checkbox, File Input, Radio, Range, Rating, Select, Text Input, Textarea, Toggle, Label, Form Control, Join (forms) |
| **Layout (8)** | Artboard, Divider, Drawer, Footer, Hero, Join, Stack, Indicator |
| **Mockup (4)** | Browser, Code, Phone, Window |

## 🎨 Actions (6)

### Button
```html
<!-- Variantes -->
<button class="btn">Défaut</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>

<!-- États -->
<button class="btn btn-outline">Outline</button>
<button class="btn btn-disabled">Désactivé</button>
<button class="btn loading">Chargement</button>

<!-- Tailles -->
<button class="btn btn-lg">Large</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-xs">Tiny</button>
```

### Dropdown
```html
<div class="dropdown">
  <label tabindex="0" class="btn">Menu</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Modal
```html
<input type="checkbox" id="modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Titre</h3>
    <p class="py-4">Contenu</p>
    <div class="modal-action">
      <label for="modal" class="btn">Fermer</label>
    </div>
  </div>
</div>
<label for="modal" class="btn">Ouvrir</label>
```

### Swap
```html
<label class="swap">
  <input type="checkbox" />
  <div class="swap-on">ON</div>
  <div class="swap-off">OFF</div>
</label>
```

### Theme Controller
```html
<input type="checkbox" value="dark" class="theme-controller toggle" />
```

## 📊 Data Display (18)

### Accordion / Collapse
```html
<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="accordion" checked />
  <div class="collapse-title text-xl font-medium">Section</div>
  <div class="collapse-content"><p>Contenu</p></div>
</div>
```

### Avatar
```html
<div class="avatar">
  <div class="w-24 rounded-full">
    <img src="avatar.jpg" />
  </div>
</div>

<!-- Groupe -->
<div class="avatar-group -space-x-6">
  <div class="avatar"><div class="w-12"><img src="user1.jpg" /></div></div>
  <div class="avatar"><div class="w-12"><img src="user2.jpg" /></div></div>
</div>
```

### Badge
```html
<div class="badge">Défaut</div>
<div class="badge badge-primary">Primary</div>
<div class="badge badge-lg">Large</div>
<div class="badge badge-sm">Small</div>
```

### Card
```html
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="image.jpg" /></figure>
  <div class="card-body">
    <h2 class="card-title">Titre</h2>
    <p>Description</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

### Carousel
```html
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="img1.jpg" class="w-full" />
  </div>
</div>
```

### Chat Bubble
```html
<div class="chat chat-start">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full"><img src="avatar.jpg" /></div>
  </div>
  <div class="chat-header">Jean <time class="text-xs opacity-50">12:45</time></div>
  <div class="chat-bubble">Message</div>
  <div class="chat-footer opacity-50">Vu</div>
</div>
```

### Countdown
```html
<div class="countdown font-mono text-6xl">
  <span style="--value:15;"></span>:
  <span style="--value:30;"></span>
</div>
```

### Diff
```html
<div class="diff aspect-[16/9]">
  <div class="diff-item-1"><img src="before.jpg" /></div>
  <div class="diff-item-2"><img src="after.jpg" /></div>
  <div class="diff-resizer"></div>
</div>
```

### Divider
```html
<div class="divider">OU</div>
<div class="divider divider-horizontal">OU</div>
```

### Indicator
```html
<div class="indicator">
  <span class="indicator-item badge badge-secondary">99+</span>
  <button class="btn">Inbox</button>
</div>
```

### Kbd
```html
<kbd class="kbd">ctrl</kbd> + <kbd class="kbd">shift</kbd> + <kbd class="kbd">del</kbd>
```

### Mask
```html
<img src="image.jpg" class="mask mask-circle" />
<img src="image.jpg" class="mask mask-hexagon" />
<img src="image.jpg" class="mask mask-heart" />
```

### Progress
```html
<progress class="progress w-56" value="70" max="100"></progress>
<progress class="progress progress-primary" value="70" max="100"></progress>
```

### Radial Progress
```html
<div class="radial-progress" style="--value:70;">70%</div>
<div class="radial-progress text-primary" style="--value:70; --size:12rem;">70%</div>
```

### Skeleton
```html
<div class="flex flex-col gap-4 w-52">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
```

### Stat
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
```html
<table class="table">
  <thead>
    <tr><th>Nom</th><th>Email</th></tr>
  </thead>
  <tbody>
    <tr><td>Jean</td><td>jean@mail.com</td></tr>
    <tr class="hover"><td>Marie</td><td>marie@mail.com</td></tr>
  </tbody>
</table>

<!-- Variantes: table-zebra, table-pin-rows, table-pin-cols -->
```

### Timeline
```html
<ul class="timeline timeline-vertical">
  <li>
    <div class="timeline-start">2015</div>
    <div class="timeline-middle">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"/>
      </svg>
    </div>
    <div class="timeline-end timeline-box">Événement</div>
    <hr />
  </li>
</ul>
```

## 🧭 Navigation (8)

### Breadcrumbs
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
```html
<div class="btm-nav">
  <button><svg>...</svg></button>
  <button class="active"><svg>...</svg></button>
  <button><svg>...</svg></button>
</div>
```

### Link
```html
<a class="link">Simple</a>
<a class="link link-primary">Primary</a>
<a class="link link-hover">Hover</a>
```

### Menu
```html
<ul class="menu bg-base-200 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>Sous-item</a></li>
      </ul>
    </details>
  </li>
</ul>

<!-- Horizontal -->
<ul class="menu menu-horizontal bg-base-200 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

### Navbar
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
```html
<div class="join">
  <button class="join-item btn">«</button>
  <button class="join-item btn">1</button>
  <button class="join-item btn btn-active">2</button>
  <button class="join-item btn">3</button>
  <button class="join-item btn">»</button>
</div>
```

### Steps
```html
<ul class="steps">
  <li class="step step-primary">Étape 1</li>
  <li class="step step-primary">Étape 2</li>
  <li class="step">Étape 3</li>
</ul>
```

### Tabs
```html
<div class="tabs tabs-boxed">
  <a class="tab">Tab 1</a>
  <a class="tab tab-active">Tab 2</a>
  <a class="tab">Tab 3</a>
</div>

<!-- Variantes: tabs-bordered, tabs-lifted -->
```

## 💬 Feedback (7)

### Alert
```html
<div class="alert alert-info">
  <svg class="w-6 h-6">...</svg>
  <span>Information</span>
</div>

<!-- Variantes: alert-success, alert-warning, alert-error -->
```

### Loading
```html
<span class="loading loading-spinner"></span>
<span class="loading loading-dots"></span>
<span class="loading loading-ring"></span>
<span class="loading loading-ball"></span>

<!-- Tailles: loading-xs, loading-sm, loading-md, loading-lg -->
```

### Toast
```html
<div class="toast toast-top toast-end">
  <div class="alert alert-info">
    <span>Notification</span>
  </div>
</div>

<!-- Positions: toast-top/middle/bottom -->
<!-- Alignements: toast-start/center/end -->
```

### Tooltip
```html
<div class="tooltip" data-tip="Aide contextuelle">
  <button class="btn">Hover me</button>
</div>

<!-- Positions: tooltip-top, tooltip-bottom, tooltip-left, tooltip-right -->
<!-- Couleurs: tooltip-primary, tooltip-secondary, tooltip-accent -->
```

## 📝 Data Input (14)

### Checkbox
```html
<input type="checkbox" class="checkbox" />
<input type="checkbox" class="checkbox checkbox-primary" checked />

<!-- Tailles: checkbox-xs, checkbox-sm, checkbox-md, checkbox-lg -->
```

### File Input
```html
<input type="file" class="file-input file-input-bordered w-full max-w-xs" />
<input type="file" class="file-input file-input-primary" />
```

### Radio
```html
<input type="radio" name="radio" class="radio" />
<input type="radio" name="radio" class="radio radio-primary" checked />
```

### Range
```html
<input type="range" min="0" max="100" value="50" class="range" />
<input type="range" class="range range-primary" />
```

### Rating
```html
<div class="rating">
  <input type="radio" name="rating" class="mask mask-star" />
  <input type="radio" name="rating" class="mask mask-star" checked />
  <input type="radio" name="rating" class="mask mask-star" />
</div>

<!-- Variantes: mask-star-2, mask-heart -->
```

### Select
```html
<select class="select select-bordered w-full max-w-xs">
  <option disabled selected>Choisir</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Variantes: select-primary, select-ghost -->
```

### Text Input
```html
<input type="text" placeholder="Texte" class="input input-bordered" />
<input type="text" class="input input-primary" />

<!-- Tailles: input-xs, input-sm, input-md, input-lg -->
```

### Textarea
```html
<textarea class="textarea textarea-bordered" placeholder="Message"></textarea>
<textarea class="textarea textarea-primary"></textarea>

<!-- Tailles: textarea-xs, textarea-sm, textarea-md, textarea-lg -->
```

### Toggle
```html
<input type="checkbox" class="toggle" />
<input type="checkbox" class="toggle toggle-primary" checked />

<!-- Tailles: toggle-xs, toggle-sm, toggle-md, toggle-lg -->
```

### Label
```html
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Nom</span>
    <span class="label-text-alt">Obligatoire</span>
  </label>
  <input type="text" class="input input-bordered" />
  <label class="label">
    <span class="label-text-alt">Message d'aide</span>
  </label>
</div>
```

### Form Control
```html
<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">Label</span>
    <input type="checkbox" class="checkbox" />
  </label>
</div>
```

### Join (Forms)
```html
<div class="join">
  <input class="input input-bordered join-item" placeholder="Email"/>
  <button class="btn join-item">S'inscrire</button>
</div>
```

## 🎭 Layout (8)

### Artboard
```html
<div class="artboard artboard-demo phone-1">320×568</div>
```

### Drawer
```html
<div class="drawer">
  <input id="drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="drawer" class="btn drawer-button">Ouvrir</label>
  </div>
  <div class="drawer-side">
    <label for="drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 bg-base-200">
      <li><a>Item 1</a></li>
    </ul>
  </div>
</div>
```

### Footer
```html
<footer class="footer p-10 bg-base-200">
  <div>
    <span class="footer-title">Services</span>
    <a class="link link-hover">Branding</a>
  </div>
  <div>
    <span class="footer-title">Entreprise</span>
    <a class="link link-hover">À propos</a>
  </div>
</footer>
```

### Hero
```html
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Titre</h1>
      <p class="py-6">Description</p>
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

### Stack
```html
<div class="stack">
  <div class="card bg-primary text-primary-content">
    <div class="card-body">Card 1</div>
  </div>
  <div class="card bg-primary text-primary-content">
    <div class="card-body">Card 2</div>
  </div>
</div>
```

## 🖼️ Mockup (4)

### Browser
```html
<div class="mockup-browser border border-base-300">
  <div class="mockup-browser-toolbar">
    <div class="input">https://monsite.com</div>
  </div>
  <div class="px-4 py-16 border-t border-base-300">Contenu</div>
</div>
```

### Code
```html
<div class="mockup-code">
  <pre data-prefix="$"><code>npm install daisyui</code></pre>
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>
```

### Phone
```html
<div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">Contenu</div>
  </div>
</div>
```

### Window
```html
<div class="mockup-window border border-base-300">
  <div class="px-4 py-16 border-t border-base-300">Contenu</div>
</div>
```

## ✅ Best Practices

1. **Accessibilité** : Toujours utiliser `aria-label` pour icônes et boutons sans texte
2. **Responsive** : Utiliser classes responsive Tailwind (`md:`, `lg:`)
3. **Couleurs** : Préférer variantes DaisyUI (`btn-primary`) aux classes Tailwind
4. **Tailles** : Utiliser modificateurs DaisyUI (`btn-lg`, `input-sm`)
5. **Formulaires** : Wrapper inputs dans `form-control` avec `label`

## 🔗 Ressources

- **Documentation officielle** : https://daisyui.com/components
- **Playground** : https://daisyui.com/components (essayer les composants)
- **GitHub** : https://github.com/saadeghi/daisyui
- **Version** : DaisyUI v5.5.0

---

**65 composants** pour créer des interfaces modernes rapidement
