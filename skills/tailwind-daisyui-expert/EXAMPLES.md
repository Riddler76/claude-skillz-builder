# Exemples Complets TailwindCSS, DaisyUI & HeroIcons

## Application Complète avec HeroIcons

Exemple d'une application moderne intégrant DaisyUI et HeroIcons pour une expérience utilisateur optimale.

```html
<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>App avec HeroIcons</title>
  <link href="output.css" rel="stylesheet">
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
            <!-- Bars 3 Icon (Menu) -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>

        <div class="flex-1 gap-2">
          <h1 class="text-xl font-bold">Mon App</h1>
        </div>

        <!-- Search bar avec icône -->
        <div class="flex-none gap-2">
          <div class="form-control hidden md:block">
            <div class="input-group">
              <input type="text" placeholder="Rechercher..." class="input input-bordered input-sm" />
              <button class="btn btn-square btn-sm">
                <!-- Magnifying Glass Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Notifications -->
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <!-- Bell Icon -->
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                </svg>
                <span class="badge badge-xs badge-primary indicator-item">3</span>
              </div>
            </label>
            <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow">
              <div class="card-body">
                <h3 class="font-bold text-lg">Notifications</h3>
                <div class="space-y-2">
                  <div class="alert alert-info">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Nouveau message reçu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile dropdown -->
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://i.pravatar.cc/150?img=5" />
              </div>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a class="gap-2">
                  <!-- User Icon -->
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Profil
                </a>
              </li>
              <li>
                <a class="gap-2">
                  <!-- Cog Icon -->
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Paramètres
                </a>
              </li>
              <li>
                <a class="gap-2 text-error">
                  <!-- Arrow Right on Rectangle Icon -->
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path>
                  </svg>
                  Déconnexion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Page content -->
      <div class="p-4 lg:p-8 bg-base-200 min-h-screen">
        <!-- Stats avec icônes -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-primary">
                <!-- Users Icon -->
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div class="stat-title">Utilisateurs</div>
              <div class="stat-value text-primary">4,200</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-secondary">
                <!-- Chart Bar Icon -->
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path>
                </svg>
              </div>
              <div class="stat-title">Ventes</div>
              <div class="stat-value text-secondary">€86.5K</div>
              <div class="stat-desc">↗︎ 12% vs mois dernier</div>
            </div>
          </div>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-accent">
                <!-- Shopping Cart Icon -->
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                </svg>
              </div>
              <div class="stat-title">Commandes</div>
              <div class="stat-value text-accent">132</div>
              <div class="stat-desc">En attente</div>
            </div>
          </div>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-success">
                <!-- Sparkles Icon -->
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                </svg>
              </div>
              <div class="stat-title">Note moyenne</div>
              <div class="stat-value">4.8/5</div>
              <div class="stat-desc">Sur 1,234 avis</div>
            </div>
          </div>
        </div>

        <!-- Actions rapides -->
        <div class="card bg-base-100 shadow-xl mb-6">
          <div class="card-body">
            <h2 class="card-title mb-4">Actions Rapides</h2>
            <div class="flex flex-wrap gap-2">
              <button class="btn btn-primary gap-2">
                <!-- Plus Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.5v15m7.5-7.5h-15"></path>
                </svg>
                Nouveau projet
              </button>
              <button class="btn btn-secondary gap-2">
                <!-- Document Plus Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                </svg>
                Créer document
              </button>
              <button class="btn btn-accent gap-2">
                <!-- User Plus Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
                </svg>
                Inviter
              </button>
              <button class="btn btn-outline gap-2">
                <!-- Arrow Down Tray Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                </svg>
                Exporter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar avec icônes -->
    <div class="drawer-side">
      <label for="drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-100">
        <li class="menu-title">Navigation</li>
        <li>
          <a class="active gap-2">
            <!-- Home Icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
            </svg>
            Tableau de bord
          </a>
        </li>
        <li>
          <a class="gap-2">
            <!-- Chart Bar Icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path>
            </svg>
            Analyses
          </a>
        </li>
        <li>
          <a class="gap-2">
            <!-- Folder Icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
            </svg>
            Projets
          </a>
        </li>
        <li>
          <a class="gap-2">
            <!-- Users Icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
            </svg>
            Équipe
          </a>
        </li>

        <li class="menu-title mt-4">Outils</li>
        <li>
          <a class="gap-2">
            <!-- Calendar Icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
            </svg>
            Calendrier
          </a>
        </li>
        <li>
          <a class="gap-2">
            <!-- Envelope Icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
            </svg>
            Messages
            <span class="badge badge-sm badge-primary">12</span>
          </a>
        </li>
        <li>
          <a class="gap-2">
            <!-- Document Text Icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
            </svg>
            Documents
          </a>
        </li>
      </ul>
    </div>
  </div>
</body>
</html>
```

## Formulaire de Connexion avec Dark Mode

```html
<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connexion - DaisyUI</title>
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <div class="min-h-screen bg-base-200 flex items-center justify-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <!-- Toggle dark mode en haut à droite -->
        <label class="swap swap-rotate absolute top-4 right-4">
          <input type="checkbox" value="dark" class="theme-controller" />

          <!-- Icône soleil -->
          <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
          </svg>

          <!-- Icône lune -->
          <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
          </svg>
        </label>

        <h2 class="card-title text-2xl font-bold">Connexion</h2>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email@example.com" class="input input-bordered" required />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Mot de passe</span>
          </label>
          <input type="password" placeholder="••••••••" class="input input-bordered" required />
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
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continuer avec Google
        </button>
      </div>
    </div>
  </div>
</body>
</html>
```

## Dashboard Responsive avec Sidebar

```html
<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - DaisyUI</title>
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <div class="drawer lg:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="drawer" class="btn btn-square btn-ghost">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">Dashboard</div>
        <div class="flex-none gap-2">
          <!-- Sélecteur de thème -->
          <select data-choose-theme class="select select-bordered select-sm">
            <option value="light">☀️ Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="cupcake">🧁 Cupcake</option>
            <option value="cyberpunk">🤖 Cyberpunk</option>
            <option value="forest">🌲 Forest</option>
            <option value="dracula">🧛 Dracula</option>
          </select>

          <!-- Avatar dropdown -->
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://i.pravatar.cc/150?img=12" />
              </div>
            </label>
            <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li><a>Profil</a></li>
              <li><a>Paramètres</a></li>
              <li><a>Déconnexion</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contenu principal -->
      <div class="p-4 lg:p-8 bg-base-200 min-h-screen">
        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div class="stat bg-base-100 shadow rounded-box">
            <div class="stat-figure text-primary">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <div class="stat-title">Total Users</div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div class="stat bg-base-100 shadow rounded-box">
            <div class="stat-figure text-secondary">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">↗︎ 90 (14%)</div>
          </div>

          <div class="stat bg-base-100 shadow rounded-box">
            <div class="stat-figure text-accent">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
            </div>
            <div class="stat-title">New Registers</div>
            <div class="stat-value text-accent">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>

          <div class="stat bg-base-100 shadow rounded-box">
            <div class="stat-figure text-success">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="stat-title">Revenue</div>
            <div class="stat-value">$89,400</div>
            <div class="stat-desc">↗︎ 40 (2%)</div>
          </div>
        </div>

        <!-- Grille de contenu -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <!-- Tableau des commandes récentes -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Commandes Récentes</h2>
              <div class="overflow-x-auto">
                <table class="table table-zebra">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Client</th>
                      <th>Statut</th>
                      <th>Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#12345</td>
                      <td>Jean Dupont</td>
                      <td><div class="badge badge-success">Complété</div></td>
                      <td>$120.00</td>
                    </tr>
                    <tr>
                      <td>#12346</td>
                      <td>Marie Martin</td>
                      <td><div class="badge badge-warning">En cours</div></td>
                      <td>$85.50</td>
                    </tr>
                    <tr>
                      <td>#12347</td>
                      <td>Pierre Durand</td>
                      <td><div class="badge badge-info">En attente</div></td>
                      <td>$200.00</td>
                    </tr>
                    <tr>
                      <td>#12348</td>
                      <td>Sophie Bernard</td>
                      <td><div class="badge badge-success">Complété</div></td>
                      <td>$150.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Activité récente -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Activité Récente</h2>
              <ul class="timeline timeline-vertical">
                <li>
                  <div class="timeline-start">10:00</div>
                  <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box">Nouvelle commande #12348</div>
                  <hr class="bg-primary"/>
                </li>
                <li>
                  <hr class="bg-primary"/>
                  <div class="timeline-start">09:30</div>
                  <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-success">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box">Paiement reçu</div>
                  <hr class="bg-success"/>
                </li>
                <li>
                  <hr class="bg-success"/>
                  <div class="timeline-start">09:00</div>
                  <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="timeline-end timeline-box">Nouvel utilisateur inscrit</div>
                  <hr/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side">
      <label for="drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 min-h-full">
        <li class="menu-title">Navigation</li>
        <li><a class="active">📊 Dashboard</a></li>
        <li><a>👥 Utilisateurs</a></li>
        <li><a>📦 Commandes</a></li>
        <li><a>📈 Analytiques</a></li>
        <li><a>💰 Finances</a></li>
        <li class="menu-title">Paramètres</li>
        <li><a>⚙️ Préférences</a></li>
        <li><a>🔐 Sécurité</a></li>
        <li><a>🔔 Notifications</a></li>
      </ul>
    </div>
  </div>

  <script>
    // Gestion du changement de thème
    const themeSelect = document.querySelector('[data-choose-theme]');
    const html = document.documentElement;

    themeSelect.addEventListener('change', (e) => {
      html.setAttribute('data-theme', e.target.value);
      localStorage.setItem('theme', e.target.value);
    });

    // Restaurer le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      html.setAttribute('data-theme', savedTheme);
      themeSelect.value = savedTheme;
    }
  </script>
</body>
</html>
```

## Carte de Produit E-commerce

```html
<div class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
  <figure class="relative">
    <img src="https://picsum.photos/400/300" alt="Produit" class="w-full h-64 object-cover" />
    <div class="absolute top-4 right-4">
      <div class="badge badge-secondary">Nouveau</div>
    </div>
    <div class="absolute top-4 left-4">
      <div class="badge badge-error">-20%</div>
    </div>
  </figure>

  <div class="card-body">
    <h2 class="card-title">
      Produit Premium
      <div class="badge badge-primary">HOT</div>
    </h2>

    <p class="text-base-content/70">
      Description courte du produit avec ses principales caractéristiques et avantages.
    </p>

    <!-- Rating -->
    <div class="flex items-center gap-2 my-2">
      <div class="rating rating-sm">
        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
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
      <label class="label">
        <span class="label-text">Couleur</span>
      </label>
      <div class="flex gap-2">
        <input type="radio" name="color" class="btn btn-xs" aria-label="Rouge" />
        <input type="radio" name="color" class="btn btn-xs" aria-label="Bleu" checked />
        <input type="radio" name="color" class="btn btn-xs" aria-label="Vert" />
      </div>
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Taille</span>
      </label>
      <select class="select select-bordered select-sm">
        <option>S</option>
        <option selected>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </div>

    <!-- Badges de caractéristiques -->
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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        Ajouter au panier
      </button>
    </div>
  </div>
</div>
```

## Profil Utilisateur

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
            J'adore créer des interfaces utilisateur élégantes et performantes.
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
            <div class="badge badge-accent gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
              Membre depuis 2022
            </div>
          </div>

          <div class="flex gap-2 mt-4 justify-center md:justify-start">
            <button class="btn btn-primary btn-sm">Suivre</button>
            <button class="btn btn-outline btn-sm">Message</button>
            <button class="btn btn-ghost btn-sm btn-circle">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
              </svg>
            </button>
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
        <!-- Liste de posts -->
        <div class="space-y-4">
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
                    Viens de terminer un nouveau projet avec TailwindCSS et DaisyUI !
                    Les résultats sont impressionnants 🚀
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
                    <button class="btn btn-ghost btn-sm gap-2">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                      </svg>
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
</div>
```

## Landing Page Hero Section

```html
<div class="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
  <div class="hero-overlay bg-opacity-30"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-3xl">
      <div class="mb-5">
        <div class="badge badge-lg badge-ghost">✨ Nouveau produit 2024</div>
      </div>

      <h1 class="mb-5 text-5xl md:text-7xl font-bold leading-tight">
        Créez des interfaces
        <span class="text-accent">magnifiques</span>
        en quelques minutes
      </h1>

      <p class="mb-8 text-xl md:text-2xl opacity-90">
        La solution complète pour développer des applications web modernes
        avec TailwindCSS et DaisyUI. Simple, rapide, et élégant.
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
          <span>Pas de carte bancaire requise</span>
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
          <div class="avatar">
            <div class="w-12">
              <img src="https://i.pravatar.cc/150?img=1" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="https://i.pravatar.cc/150?img=2" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="https://i.pravatar.cc/150?img=3" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="https://i.pravatar.cc/150?img=4" />
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="w-12 bg-neutral-focus text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
