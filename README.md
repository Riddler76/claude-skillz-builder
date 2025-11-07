# 🚀 Claude Skillz Builder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude Code](https://img.shields.io/badge/Claude-Code-blue)](https://code.claude.com)

**Créez facilement des Skills personnalisés pour Claude Code avec un générateur interactif**

Une mini application web qui vous permet de créer, valider et exporter des Skills Claude conformes aux standards officiels, avec templates inclus et validation en temps réel.

## ✨ Features

- 🛠️ **Builder Interactif** : Interface intuitive pour créer des skills
- ✅ **Validation en Temps Réel** : Vérification automatique des standards Claude
- 📋 **6 Templates Inclus** : Frontend, API, Testing, DevOps, Database, Documentation
- 👁️ **Prévisualisation Live** : Voir le résultat avant de télécharger
- 🎨 **Dark/Light Mode** : Interface moderne avec TailwindCSS & DaisyUI
- ⬇️ **Export SKILL.md** : Téléchargement direct au format requis
- 📚 **Documentation Intégrée** : Guide complet basé sur la doc officielle

## 🎯 Exemple Inclus

Le projet inclut un skill complet **TailwindCSS & DaisyUI Expert** comme référence, avec :
- ✅ Frontmatter conforme aux standards Claude
- ✅ 63 composants DaisyUI documentés
- ✅ Gestion complète des thèmes (35 intégrés)
- ✅ Exemples HTML complets (Dashboard, Login, E-commerce)
- ✅ Bonnes pratiques et anti-patterns

## 📦 Structure du Projet

```
claude-skillz-builder/
├── app/
│   ├── index.html          # Application web
│   └── app.js              # Logique et templates
├── skills/
│   └── tailwind-daisyui-expert/
│       ├── SKILL.md        # Skill principal
│       ├── COMPONENTS.md   # Référence des 63 composants
│       └── EXAMPLES.md     # Exemples complets
├── examples/
│   └── (autres skills d'exemple)
└── README.md
```

## 🚀 Quick Start

### Utilisation de la Mini App

1. **Ouvrir l'application** : `app/index.html` dans votre navigateur

2. **Créer un skill** :
   - Remplissez le nom (minuscules, tirets, max 64 caractères)
   - Écrivez la description (incluez "quand utiliser", max 1024 caractères)
   - Ajoutez les outils autorisés (optionnel)
   - Rédigez le contenu en Markdown

3. **Valider** : La validation se fait en temps réel

4. **Télécharger** : Cliquez sur "Générer & Télécharger" pour obtenir `SKILL.md`

### Utilisation des Templates

L'app inclut 6 templates prêts à l'emploi :

- **Frontend Expert** : React, Vue, Angular
- **API Designer** : REST, GraphQL, OpenAPI
- **Testing Expert** : Jest, Vitest, Cypress, Playwright
- **DevOps Helper** : Docker, Kubernetes, CI/CD
- **Database Expert** : SQL, PostgreSQL, MongoDB
- **Documentation Writer** : README, JSDoc, guides

Cliquez sur "Utiliser" dans l'onglet Templates pour charger un template.

## 📖 Format des Skills Claude

### Frontmatter YAML Requis

```yaml
---
name: nom-du-skill
description: Description claire de ce que fait le Skill et quand l'utiliser
allowed-tools: [optionnel] Liste des outils autorisés
---
```

### Contraintes

- **name** :
  - Caractères minuscules, chiffres et tirets uniquement
  - Maximum 64 caractères
  - Exemple : `frontend-expert`, `api-designer`

- **description** :
  - Doit inclure CE QUE fait le skill ET QUAND l'utiliser
  - Maximum 1024 caractères
  - Exemple : *"Expert en développement frontend... Utiliser pour créer des composants, gérer l'état... Idéal pour : SPAs, composants réutilisables, hooks React"*

- **allowed-tools** :
  - Optionnel
  - Liste séparée par virgules
  - Exemple : `Read, Grep, Glob` (pour skills read-only)

### Structure du Contenu Recommandée

```markdown
# Nom du Skill

## Instructions
Guide étape par étape pour Claude

## Examples
Exemples concrets d'utilisation avec code

## Best Practices
Recommandations spécifiques
```

## 🎨 Technologies Utilisées

- **TailwindCSS 4** : Framework CSS utilitaire
- **DaisyUI 5** : 63 composants UI prêts à l'emploi
- **Vanilla JavaScript** : Pas de dépendances lourdes
- **LocalStorage** : Persistance du thème

## 📚 Documentation Officielle

- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills.md)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [DaisyUI Documentation](https://daisyui.com)

## 🛠️ Installation d'un Skill

### Personal Skill (utilisateur)

```bash
# Créer le répertoire
mkdir -p ~/.claude/skills/mon-skill

# Copier le SKILL.md
cp SKILL.md ~/.claude/skills/mon-skill/

# Claude détectera automatiquement le skill
```

### Project Skill (projet)

```bash
# Créer le répertoire dans votre projet
mkdir -p .claude/skills/mon-skill

# Copier le SKILL.md
cp SKILL.md .claude/skills/mon-skill/

# Commiter en git pour partager avec l'équipe
git add .claude/skills/
git commit -m "Add custom skill"
```

## 💡 Bonnes Pratiques

### 1. Descriptions Spécifiques
✅ **BON** : "Extraire texte et tableaux de PDF, remplir formulaires. Utiliser avec fichiers PDF, formulaires, extraction de documents."

❌ **MAUVAIS** : "Aide avec les documents"

### 2. Skills Focus
Chaque skill doit adresser UNE seule capacité spécifique :
- ✅ PDF form filling
- ✅ Excel data analysis
- ✅ Git commit messages
- ❌ "All development tasks"

### 3. Exemples Concrets
Incluez toujours des exemples de code fonctionnels avec commentaires.

### 4. Restriction d'Outils
Pour les skills read-only (documentation, analyse), limitez les outils :
```yaml
allowed-tools: Read, Grep, Glob
```

## 🔍 Validation des Skills

L'app valide automatiquement :

1. **Format du nom** : minuscules, tirets, max 64 caractères
2. **Longueur description** : max 1024 caractères
3. **Présence "quand utiliser"** : description doit inclure les cas d'usage
4. **Syntaxe YAML** : frontmatter bien formé

## 📝 Exemples d'Utilisation

### Créer un Skill de Revue de Code

```yaml
---
name: code-reviewer
description: Expert en revue de code pour identifier bugs, problèmes de sécurité, et améliorer la qualité. Utiliser pour reviewer du code avant merge, identifier les vulnérabilités, ou suggérer des améliorations. Idéal pour : PR reviews, audit de sécurité, refactoring suggestions.
allowed-tools: Read, Grep, Glob
---

# Code Reviewer Skill

## Instructions

1. Analyser le code pour les bugs potentiels
2. Identifier les problèmes de sécurité (injections, XSS, etc.)
3. Vérifier les bonnes pratiques du langage
4. Suggérer des améliorations de performance
5. Proposer des refactorings si nécessaire

## Examples

### Revue d'une fonction JavaScript
\`\`\`javascript
// Code à reviewer
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.query(query);
}

// Problèmes identifiés :
// 1. SQL Injection vulnerability
// 2. Pas de gestion d'erreur
// 3. SELECT * inefficace

// Suggestion :
async function getUserData(userId) {
  try {
    const query = "SELECT id, name, email FROM users WHERE id = ?";
    return await db.query(query, [userId]);
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
\`\`\`

## Best Practices

- Vérifier les vulnérabilités OWASP Top 10
- Suggérer des tests pour le code critique
- Privilégier la lisibilité et la maintenabilité
- Identifier les code smells
- Proposer des patterns appropriés
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingSkill`)
3. Commit vos changements (`git commit -m 'Add amazing skill template'`)
4. Push sur la branche (`git push origin feature/AmazingSkill`)
5. Ouvrir une Pull Request

## 📄 License

MIT © Riddler76

## 🙏 Remerciements

- [Anthropic](https://www.anthropic.com) pour Claude Code
- [TailwindCSS](https://tailwindcss.com) pour le framework CSS
- [DaisyUI](https://daisyui.com) pour les composants UI

## 🔗 Liens Utiles

- [Claude Code Official Docs](https://code.claude.com/docs)
- [Skills Documentation](https://code.claude.com/docs/en/skills.md)
- [Sub-agents Guide](https://code.claude.com/docs/en/sub-agents.md)
- [Hooks Guide](https://code.claude.com/docs/en/hooks-guide.md)

---

**Made with ❤️ for the Claude Code community**
