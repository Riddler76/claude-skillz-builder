# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.0] - 2025-11-08

### Ajouté

#### Fonctionnalités principales
- 🛠️ **Builder interactif** pour créer des Skills Claude Code
- ✅ **Validation en temps réel** conforme aux standards Claude
- 📋 **6 Templates prêts à l'emploi** : Frontend, API, Testing, DevOps, Database, Documentation
- 👁️ **Prévisualisation live** du SKILL.md généré
- 🎨 **Mode dark/light** avec persistance

#### Fonctionnalités avancées (v1.0.0)
- 💾 **Sauvegarde automatique** dans localStorage (auto-save draft)
- 📥 **Import de fichiers** SKILL.md existants
- 📋 **Copie dans le presse-papier** en un clic
- 🗑️ **Gestion de brouillons** avec possibilité d'effacer
- ⬇️ **Export SKILL.md** téléchargeable

#### Skill d'exemple inclus
- ✨ **TailwindCSS/DaisyUI/HeroIcons Expert Skill** complet avec :
  - 63 composants DaisyUI documentés
  - 292 icônes HeroIcons référencées
  - 35 thèmes intégrés
  - Exemples HTML complets (Dashboard, Login, E-commerce)
  - Bonnes pratiques et anti-patterns

#### Documentation
- 📚 **README complet** avec exemples et guides d'utilisation
- 📖 **Documentation intégrée** dans l'app
- 🔍 **Guide de validation** des contraintes Claude
- 💡 **Bonnes pratiques** pour créer des skills efficaces

### Technique

#### Architecture
- Interface responsive avec **TailwindCSS 4**
- Composants UI avec **DaisyUI 4.12.10**
- Vanilla JavaScript (zéro dépendances lourdes)
- LocalStorage pour la persistance (thème + brouillons)

#### Validation
- Validation du nom : minuscules, chiffres, tirets (max 64 caractères)
- Validation de la description : max 1024 caractères + cas d'usage requis
- Vérification en temps réel avec feedback visuel
- Messages d'erreur clairs et actionnables

#### UX/UI
- Interface moderne et intuitive
- Animations fluides
- Notifications toast pour les actions
- Navigation par onglets (Builder, Templates, Documentation)
- Compteurs de caractères en temps réel

### Corrections

#### CDN et compatibilité
- ✅ Résolu : Erreur MIME type avec DaisyUI 5.0.0 → rétrogradé vers 4.12.10
- ✅ Résolu : Erreur "malformed YAML frontmatter" → description raccourcie et formatée

#### Format des Skills
- Suppression des champs YAML non-standard (version, license, author, tags)
- Frontmatter conforme aux spécifications officielles Claude Code
- Structure multi-fichiers (SKILL.md + fichiers support)

### Structure du projet

```
claude-skillz-builder/
├── app/
│   ├── index.html          # Application web
│   └── app.js              # Logique et templates
├── skills/
│   └── tailwind-daisyui-expert/
│       ├── SKILL.md        # Skill principal
│       ├── COMPONENTS.md   # Référence 63 composants
│       ├── EXAMPLES.md     # Exemples complets
│       └── HEROICONS.md    # Catalogue 292 icônes
├── CHANGELOG.md            # Ce fichier
├── LICENSE                 # Licence MIT
└── README.md               # Documentation principale
```

### Notes de version

Cette version 1.0.0 marque la sortie stable du Claude Skillz Builder. Le projet est maintenant prêt pour un usage en production avec toutes les fonctionnalités essentielles :

- ✅ Conformité complète avec les standards Claude Code
- ✅ Interface utilisateur polie et professionnelle
- ✅ Fonctionnalités avancées (auto-save, import/export)
- ✅ Documentation complète
- ✅ Exemple de skill professionnel inclus

### Remerciements

- [Anthropic](https://www.anthropic.com) pour Claude Code
- [TailwindCSS](https://tailwindcss.com) pour le framework CSS
- [DaisyUI](https://daisyui.com) pour les composants UI
- [HeroIcons](https://heroicons.com) pour les icônes

---

**Made with ❤️ for the Claude Code community**

[1.0.0]: https://github.com/Riddler76/claude-skillz-builder/releases/tag/v1.0.0
