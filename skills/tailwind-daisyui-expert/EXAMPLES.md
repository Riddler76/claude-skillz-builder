# Exemples Complets TailwindCSS, DaisyUI & HeroIcons

## 1. Application Dashboard avec Icons

Application complète intégrant DaisyUI et HeroIcons.

```html
<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard App</title>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="drawer lg:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />

    <!-- Content -->
    <div class="drawer-content flex flex-col">
      <!-- Navbar avec icônes -->
      <div class="navbar bg-base-100 shadow-md">
        <div class="flex-none lg:hidden">
          <label for="drawer" class="btn btn-square btn-ghost">
            <!-- Menu Icon (Bars 3) -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1"><h1 class="text-xl font-bold">Dashboard</h1></div>

        <!-- Search + Notifications + Profile -->
        <div class="flex-none gap-2">
          <div class="form-control hidden md:block">
            <input type="text" placeholder="Rechercher..." class="input input-bordered input-sm" />
          </div>

          <!-- Notifications -->
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span class="badge badge-xs badge-primary indicator-item">3</span>
              </div>
            </label>
          </div>

          <!-- Profile -->
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://i.pravatar.cc/150?img=5" />
              </div>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Profil</a></li>
              <li><a>Paramètres</a></li>
              <li><a class="text-error">Déconnexion</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="p-4 lg:p-8 bg-base-200 min-h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-primary">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div class="stat-title">Utilisateurs</div>
              <div class="stat-value text-primary">4.2K</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div class="stat-title">Ventes</div>
              <div class="stat-value text-secondary">€86.5K</div>
              <div class="stat-desc">↗︎ 12%</div>
            </div>
          </div>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-accent">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <div class="stat-title">Commandes</div>
              <div class="stat-value text-accent">132</div>
              <div class="stat-desc">En attente</div>
            </div>
          </div>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-title">Note moyenne</div>
              <div class="stat-value">4.8/5</div>
              <div class="stat-desc">1,234 avis</div>
            </div>
          </div>
        </div>

        <!-- Actions rapides -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Actions Rapides</h2>
            <div class="flex flex-wrap gap-2">
              <button class="btn btn-primary gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Nouveau projet
              </button>
              <button class="btn btn-secondary gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Créer document
              </button>
              <button class="btn btn-accent gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                Inviter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side">
      <label for="drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-100">
        <li class="menu-title">Navigation</li>
        <li><a class="active">📊 Dashboard</a></li>
        <li><a>📈 Analyses</a></li>
        <li><a>📁 Projets</a></li>
        <li><a>👥 Équipe</a></li>
        <li class="menu-title mt-4">Outils</li>
        <li><a>📅 Calendrier</a></li>
        <li><a>📧 Messages</a></li>
        <li><a>📄 Documents</a></li>
      </ul>
    </div>
  </div>
</body>
</html>
```

## 2. Formulaire Connexion avec Dark Mode

```html
<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="min-h-screen bg-base-200 flex items-center justify-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <!-- Toggle dark mode -->
        <label class="swap swap-rotate absolute top-4 right-4">
          <input type="checkbox" value="dark" class="theme-controller" />
          <!-- Sun Icon -->
          <svg class="swap-on fill-current w-6 h-6" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
          </svg>
          <!-- Moon Icon -->
          <svg class="swap-off fill-current w-6 h-6" viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
          </svg>
        </label>

        <h2 class="card-title text-2xl font-bold">Connexion</h2>

        <div class="form-control">
          <label class="label"><span class="label-text">Email</span></label>
          <input type="email" placeholder="email@example.com" class="input input-bordered" />
        </div>

        <div class="form-control">
          <label class="label"><span class="label-text">Mot de passe</span></label>
          <input type="password" placeholder="••••••••" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Mot de passe oublié ?</a>
          </label>
        </div>

        <div class="form-control">
          <label class="label cursor-pointer justify-start gap-4">
            <input type="checkbox" class="checkbox checkbox-primary" />
            <span class="label-text">Se souvenir de moi</span>
          </label>
        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary">Se connecter</button>
        </div>

        <div class="divider">OU</div>

        <button class="btn btn-outline">
          <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          </svg>
          Continuer avec Google
        </button>
      </div>
    </div>
  </div>
</body>
</html>
```

## 3. Carte Produit E-commerce

```html
<div class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
  <figure class="relative">
    <img src="https://picsum.photos/400/300" alt="Produit" class="w-full h-64 object-cover" />
    <div class="absolute top-4 right-4"><div class="badge badge-secondary">Nouveau</div></div>
    <div class="absolute top-4 left-4"><div class="badge badge-error">-20%</div></div>
  </figure>

  <div class="card-body">
    <h2 class="card-title">
      Produit Premium
      <div class="badge badge-primary">HOT</div>
    </h2>

    <p class="text-base-content/70">
      Description du produit avec ses principales caractéristiques.
    </p>

    <!-- Rating -->
    <div class="flex items-center gap-2 my-2">
      <div class="rating rating-sm">
        <input type="radio" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" class="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" class="mask mask-star-2 bg-orange-400" />
      </div>
      <span class="text-sm text-base-content/60">(4.0) 128 avis</span>
    </div>

    <!-- Prix -->
    <div class="flex items-baseline gap-2">
      <span class="text-3xl font-bold text-primary">49,99€</span>
      <span class="text-lg line-through text-base-content/40">62,49€</span>
    </div>

    <!-- Options -->
    <div class="form-control">
      <label class="label"><span class="label-text">Taille</span></label>
      <select class="select select-bordered select-sm">
        <option>S</option><option selected>M</option><option>L</option><option>XL</option>
      </select>
    </div>

    <!-- Badges -->
    <div class="flex flex-wrap gap-2 mt-2">
      <div class="badge badge-outline">Livraison gratuite</div>
      <div class="badge badge-outline">Retour 30j</div>
      <div class="badge badge-outline">Garantie 2 ans</div>
    </div>

    <div class="card-actions justify-between items-center mt-4">
      <button class="btn btn-circle btn-ghost btn-sm">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </button>
      <button class="btn btn-primary flex-1">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        Ajouter au panier
      </button>
    </div>
  </div>
</div>
```

## 4. Profil Utilisateur

```html
<div class="container mx-auto p-4 max-w-4xl">
  <!-- Header du profil -->
  <div class="card bg-base-100 shadow-xl mb-6">
    <div class="card-body">
      <div class="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <!-- Avatar -->
        <div class="avatar">
          <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.pravatar.cc/150?img=68" />
          </div>
        </div>

        <!-- Informations -->
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl font-bold">Jean Dupont</h1>
          <p class="text-base-content/60">@jeandupont</p>
          <p class="mt-2">
            Développeur Full Stack passionné par les technologies web modernes.
          </p>

          <div class="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            <div class="badge badge-primary gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Paris, France
            </div>
            <div class="badge badge-secondary gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              jean@example.com
            </div>
          </div>

          <div class="flex gap-2 mt-4 justify-center md:justify-start">
            <button class="btn btn-primary btn-sm">Suivre</button>
            <button class="btn btn-outline btn-sm">Message</button>
          </div>
        </div>

        <!-- Stats -->
        <div class="stats stats-vertical shadow">
          <div class="stat">
            <div class="stat-title">Followers</div>
            <div class="stat-value text-primary">2.5K</div>
          </div>
          <div class="stat">
            <div class="stat-title">Following</div>
            <div class="stat-value text-secondary">180</div>
          </div>
          <div class="stat">
            <div class="stat-title">Posts</div>
            <div class="stat-value">342</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tabs de contenu -->
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body p-0">
      <div class="tabs tabs-boxed bg-transparent p-4 border-b border-base-300">
        <a class="tab tab-active">Posts</a>
        <a class="tab">Projets</a>
        <a class="tab">Favoris</a>
      </div>

      <div class="p-4">
        <!-- Post exemple -->
        <div class="card bg-base-200">
          <div class="card-body">
            <div class="flex items-start gap-4">
              <div class="avatar">
                <div class="w-12 rounded-full">
                  <img src="https://i.pravatar.cc/150?img=68" />
                </div>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="font-bold">Jean Dupont</span>
                  <span class="text-sm text-base-content/60">@jeandupont · Il y a 2h</span>
                </div>
                <p class="mt-2">
                  Nouveau projet avec TailwindCSS et DaisyUI ! 🚀
                </p>
                <div class="flex gap-4 mt-4">
                  <button class="btn btn-ghost btn-sm gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    42
                  </button>
                  <button class="btn btn-ghost btn-sm gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    8
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 5. Landing Page Hero

```html
<div class="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
  <div class="hero-overlay bg-opacity-30"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-3xl">
      <div class="mb-5">
        <div class="badge badge-lg badge-ghost">✨ Nouveau 2024</div>
      </div>

      <h1 class="mb-5 text-5xl md:text-7xl font-bold leading-tight">
        Créez des interfaces
        <span class="text-accent">magnifiques</span>
        en quelques minutes
      </h1>

      <p class="mb-8 text-xl md:text-2xl opacity-90">
        La solution complète pour développer des applications web modernes
        avec TailwindCSS et DaisyUI.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="btn btn-accent btn-lg gap-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          Commencer gratuitement
        </button>
        <button class="btn btn-outline btn-lg btn-ghost">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Voir la démo
        </button>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-8 text-sm">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          <span>Gratuit pour toujours</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          <span>Pas de carte requise</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          <span>Support 24/7</span>
        </div>
      </div>

      <div class="mt-12">
        <p class="text-sm opacity-70 mb-4">Utilisé par plus de 10,000 développeurs</p>
        <div class="avatar-group -space-x-6">
          <div class="avatar"><div class="w-12"><img src="https://i.pravatar.cc/150?img=1" /></div></div>
          <div class="avatar"><div class="w-12"><img src="https://i.pravatar.cc/150?img=2" /></div></div>
          <div class="avatar"><div class="w-12"><img src="https://i.pravatar.cc/150?img=3" /></div></div>
          <div class="avatar placeholder">
            <div class="w-12 bg-neutral-focus text-neutral-content"><span>+99</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 6. Table Dashboard Responsive

```html
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Commandes Récentes</h2>
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr><th>ID</th><th>Client</th><th>Statut</th><th>Montant</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src="https://i.pravatar.cc/150?img=1" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Jean Dupont</div>
                  <div class="text-sm opacity-50">jean@mail.com</div>
                </div>
              </div>
            </td>
            <td><span class="badge badge-success">Complété</span></td>
            <td>$120.00</td>
            <td>
              <button class="btn btn-ghost btn-xs">Détails</button>
            </td>
          </tr>
          <tr>
            <td>#12346</td>
            <td>Marie Martin</td>
            <td><span class="badge badge-warning">En cours</span></td>
            <td>$85.50</td>
            <td><button class="btn btn-ghost btn-xs">Détails</button></td>
          </tr>
          <tr>
            <td>#12347</td>
            <td>Pierre Durand</td>
            <td><span class="badge badge-info">En attente</span></td>
            <td>$200.00</td>
            <td><button class="btn btn-ghost btn-xs">Détails</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

## ✅ Best Practices

1. **Icons** : Utiliser HeroIcons pour cohérence (24x24 outline ou 20x20 solid)
2. **Responsive** : Toujours tester mobile-first avec classes `md:` et `lg:`
3. **Accessibilité** : Ajouter `aria-label` sur boutons icon-only
4. **Thèmes** : Utiliser `data-theme` pour changement dynamique
5. **Performance** : CDN pour prototypage, build pour production

## 🔗 Ressources

- [DaisyUI Components](https://daisyui.com/components) - Documentation officielle
- [HeroIcons](https://heroicons.com) - Bibliothèque complète
- [TailwindCSS](https://tailwindcss.com/docs) - Utilities CSS

---

**5 exemples prêts à l'emploi** : Dashboard, Login, E-commerce, Profile, Landing, Table
