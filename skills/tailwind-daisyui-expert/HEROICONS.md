# HeroIcons v2.1.5 - Référence Rapide

**316 icônes** en **4 styles** pour TailwindCSS. [Documentation officielle](https://heroicons.com)

## 🎨 4 Styles Disponibles

| Style | Taille | Import React | Usage |
|-------|--------|--------------|-------|
| **Outline** | 24×24 (stroke 1.5px) | `@heroicons/react/24/outline` | Interfaces aérées, navigation, forms |
| **Solid** | 24×24 (filled) | `@heroicons/react/24/solid` | CTA, boutons, états actifs |
| **Mini** | 20×20 (filled) | `@heroicons/react/20/solid` | Badges, labels, menus compacts |
| **Micro** | 16×16 (filled) | `@heroicons/react/16/solid` | Inline text, micro-badges, dense UI |

**Utilisation React:**
```jsx
import { BeakerIcon } from '@heroicons/react/24/outline'  // Outline
import { BeakerIcon } from '@heroicons/react/24/solid'    // Solid
import { BeakerIcon } from '@heroicons/react/20/solid'    // Mini
import { BeakerIcon } from '@heroicons/react/16/solid'    // Micro

<BeakerIcon className="w-6 h-6 text-blue-500" />
```

**Utilisation HTML/SVG:**
```html
<!-- Outline (stroke) -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="..."></path>
</svg>

<!-- Solid (fill) -->
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="..."></path>
</svg>
```

## 📦 Catégories (316 icônes)

### Actions & Édition (42)
**Basiques:** plus, minus, x-mark, check, pencil, trash, clipboard
**Flèches:** arrow-up/down/left/right, arrow-path (refresh), arrow-uturn (undo/redo)
**Chevrons:** chevron-up/down/left/right, chevron-double-*
**Actions:** magnifying-glass (search), ellipsis-*, bars-3 (menu), funnel (filter), adjustments-*

### Navigation (38)
**Localisation:** home, map, map-pin, globe-*, building-office
**Utilisateur:** user, user-circle, user-group, users, identification, finger-print
**Paramètres:** cog, cog-6-tooth, wrench, adjustments, sliders
**Liens:** link, arrow-top-right-on-square, arrow-up-right

### Communication (28)
**Messages:** envelope, chat-bubble, inbox, paper-airplane, at-symbol
**Social:** heart, star, share, bookmark, flag, hand-thumb-up/down
**Notifications:** bell, bell-alert, exclamation-triangle, information-circle

### Fichiers & Documents (32)
**Documents:** document, document-text, clipboard-document, newspaper
**Fichiers:** folder, folder-open, archive-box, photo, film
**Actions:** arrow-down-tray (download), arrow-up-tray (upload), cloud-arrow-up/down
**Gestion:** document-duplicate, document-plus, document-minus, trash

### Commerce & Finance (24)
**Shopping:** shopping-cart, shopping-bag, gift, ticket, tag
**Finance:** currency-dollar/euro/pound, banknotes, credit-card, receipt-percent
**Commerce:** building-storefront, shopping-cart, scale, calculator

### Status & Indicateurs (26)
**Validations:** check-circle, x-circle, exclamation-circle, question-mark-circle
**États:** lock-closed, lock-open, eye, eye-slash, shield-check
**Badges:** check-badge, x-mark-badge, exclamation-triangle, signal

### Météo & Nature (12)
sun, moon, cloud, bolt, fire, sparkles, beaker, light-bulb, rocket-launch, globe-alt

### Appareils & Technologie (18)
**Appareils:** computer-desktop, device-phone-mobile, device-tablet, tv
**Média:** camera, microphone, speaker-wave, musical-note, video-camera
**Tech:** wifi, signal, battery-*, power, printer, qr-code

### Médias & Divertissement (16)
play, pause, stop, forward, backward, play-circle, play-pause, volume-*, photo, film, video-camera, camera, musical-note, speaker-wave

### Autres & Utilitaires (40+)
**Date/Temps:** calendar, calendar-days, clock, stopwatch
**Formes:** square-*, circle-*, rectangle-*
**Outils:** wrench, wrench-screwdriver, scissors, key, cube, puzzle-piece
**Sécurité:** shield-*, lock-*, key, finger-print, identification
**Divers:** academic-cap, book-open, building-library, flag, trophy, gift

## 🎯 Icônes Populaires

**Top 20 les plus utilisées:**
- `home`, `user`, `cog`, `bell`, `envelope`
- `search` (magnifying-glass), `menu` (bars-3), `x-mark`, `check`
- `arrow-*` (navigation), `chevron-*` (dropdowns)
- `heart`, `star`, `shopping-cart`, `calendar`
- `eye`, `lock-closed`, `trash`, `pencil`, `share`

## 💡 Guide Rapide d'Utilisation

### Sizing (TailwindCSS)
```html
<svg class="w-3 h-3">...</svg>  <!-- 12px - Micro -->
<svg class="w-4 h-4">...</svg>  <!-- 16px - Mini/Badges -->
<svg class="w-5 h-5">...</svg>  <!-- 20px - Boutons/Inputs -->
<svg class="w-6 h-6">...</svg>  <!-- 24px - Standard -->
<svg class="w-8 h-8">...</svg>  <!-- 32px - Headings -->
<svg class="w-10 h-10">...</svg> <!-- 40px - Heroes -->
```

### Coloration (currentColor)
```html
<!-- Hérite de la couleur du texte -->
<div class="text-primary"><svg>...</svg></div>

<!-- Classes DaisyUI -->
<svg class="text-error">...</svg>
<svg class="text-success">...</svg>

<!-- Avec hover -->
<button class="text-base-content hover:text-primary transition-colors">
  <svg>...</svg>
</button>
```

### Avec DaisyUI
```html
<!-- Bouton -->
<button class="btn btn-primary gap-2">
  <svg class="w-5 h-5">...</svg>
  Ajouter
</button>

<!-- Input -->
<label class="input input-bordered flex items-center gap-2">
  <svg class="w-4 h-4 opacity-70">...</svg>
  <input placeholder="Rechercher..." />
</label>

<!-- Alert -->
<div class="alert alert-info">
  <svg class="w-6 h-6">...</svg>
  <span>Message</span>
</div>

<!-- Badge -->
<div class="badge badge-success gap-1">
  <svg class="w-3 h-3">...</svg>
  Vérifié
</div>
```

## ✅ Bonnes Pratiques

1. **Cohérence:** Un seul style par interface (outline OU solid)
2. **Accessibilité:**
   ```html
   <!-- Décorative -->
   <svg aria-hidden="true">...</svg>

   <!-- Fonctionnelle -->
   <button aria-label="Fermer"><svg>...</svg></button>
   ```
3. **Performance:** SVG inline pour < 10 icônes, sprites pour > 10
4. **Sizing:** Utiliser classes Tailwind (w-4, w-5, w-6)
5. **Couleurs:** Toujours utiliser currentColor

## 🔗 Ressources

- **Site officiel:** https://heroicons.com (recherche et copie)
- **GitHub:** https://github.com/tailwindlabs/heroicons
- **Figma:** Plugin HeroIcons disponible
- **NPM:** `npm install @heroicons/react`
- **Version:** v2.1.5 | **License:** MIT

---

**316 icônes × 4 styles = 1,264 variations disponibles**
