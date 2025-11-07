// Templates de skills
const templates = {
  frontend: {
    name: 'frontend-expert',
    description: 'Expert en développement frontend avec React, Vue.js, et Angular. Utiliser pour créer des composants, gérer l\'état, optimiser les performances, ou résoudre des problèmes spécifiques aux frameworks frontend. Idéal pour : SPAs, composants réutilisables, hooks React, Vuex/Pinia, routing.',
    allowedTools: '',
    content: `# Frontend Expert Skill

## Instructions

1. Identifier le framework utilisé (React, Vue, Angular)
2. Analyser la structure du projet et les conventions
3. Proposer des solutions suivant les bonnes pratiques du framework
4. Optimiser les performances (memoization, lazy loading, etc.)
5. Assurer l'accessibilité et le responsive design

## Examples

### Créer un composant React avec hooks
\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
\`\`\`

### Composant Vue 3 avec Composition API
\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)
const loading = ref(true)

onMounted(async () => {
  const response = await fetch('/api/user')
  user.value = await response.json()
  loading.value = false
})
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else>{{ user.name }}</div>
</template>
\`\`\`

## Best Practices

- Utiliser TypeScript pour la sûreté des types
- Implémenter le code splitting et lazy loading
- Optimiser avec React.memo, useMemo, useCallback
- Suivre les principes SOLID et DRY
- Écrire des tests unitaires avec Jest/Vitest
- Assurer l'accessibilité (ARIA, sémantique HTML)
`
  },
  api: {
    name: 'api-designer',
    description: 'Expert en conception d\'APIs REST et GraphQL. Utiliser pour concevoir des endpoints, documenter avec OpenAPI/Swagger, gérer l\'authentification, optimiser les requêtes, ou résoudre des problèmes d\'API. Idéal pour : design d\'API, documentation, versioning, rate limiting, sécurité.',
    allowedTools: '',
    content: `# API Designer Skill

## Instructions

1. Analyser les besoins fonctionnels
2. Concevoir une architecture RESTful ou GraphQL cohérente
3. Définir les schémas de données et validations
4. Documenter avec OpenAPI/Swagger
5. Implémenter l'authentification et l'autorisation
6. Gérer les erreurs et codes HTTP appropriés

## Examples

### Endpoint REST avec Express.js
\`\`\`javascript
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
\`\`\`

### Schéma GraphQL
\`\`\`graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type Query {
  user(id: ID!): User
  users(limit: Int = 10, offset: Int = 0): [User!]!
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
}
\`\`\`

## Best Practices

- Utiliser les codes HTTP appropriés (200, 201, 400, 401, 404, 500)
- Implémenter la pagination pour les listes
- Versionner l'API (v1, v2) pour maintenir la compatibilité
- Utiliser JWT ou OAuth2 pour l'authentification
- Implémenter rate limiting et throttling
- Documenter avec OpenAPI/Swagger
- Valider les entrées côté serveur
- Gérer CORS correctement
`
  },
  testing: {
    name: 'testing-expert',
    description: 'Expert en tests logiciels : unitaires, intégration, E2E. Utiliser pour créer des tests avec Jest, Vitest, Cypress, Playwright, configurer la CI, ou améliorer la couverture de tests. Idéal pour : TDD, tests unitaires, tests d\'intégration, E2E testing, mocking.',
    allowedTools: '',
    content: `# Testing Expert Skill

## Instructions

1. Identifier le type de tests nécessaires (unitaire, intégration, E2E)
2. Choisir le framework approprié (Jest, Vitest, Cypress, Playwright)
3. Écrire des tests clairs et maintenables
4. Utiliser les mocks et stubs efficacement
5. Viser une bonne couverture sans over-testing
6. Intégrer les tests dans la CI/CD

## Examples

### Test unitaire avec Jest
\`\`\`javascript
import { sum, fetchUser } from './utils';

describe('sum', () => {
  it('should add two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
  });
});

describe('fetchUser', () => {
  it('should fetch user data', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ id: 1, name: 'John' })
      })
    );

    const user = await fetchUser(1);
    expect(user.name).toBe('John');
    expect(fetch).toHaveBeenCalledWith('/api/users/1');
  });
});
\`\`\`

### Test E2E avec Playwright
\`\`\`javascript
import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('http://localhost:3000/dashboard');
  await expect(page.locator('h1')).toContainText('Dashboard');
});
\`\`\`

### Test de composant React avec Testing Library
\`\`\`javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('increments counter on button click', () => {
    render(<Counter />);

    const button = screen.getByText('Increment');
    const count = screen.getByText('Count: 0');

    fireEvent.click(button);

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
\`\`\`

## Best Practices

- Suivre le pattern AAA (Arrange, Act, Assert)
- Un test = une assertion principale
- Nommer les tests de manière descriptive
- Utiliser des fixtures et factories pour les données de test
- Mocker les dépendances externes (API, DB)
- Tester les cas limites et les erreurs
- Maintenir une couverture de code >80% sur la logique critique
- Intégrer les tests dans la CI/CD
- Utiliser snapshot testing avec parcimonie
`
  },
  devops: {
    name: 'devops-helper',
    description: 'Expert en DevOps, CI/CD, containerisation, et infrastructure. Utiliser pour configurer Docker, Kubernetes, pipelines CI/CD, monitoring, ou automatisation de déploiements. Idéal pour : Dockerfiles, K8s manifests, GitHub Actions, GitLab CI, Terraform, monitoring.',
    allowedTools: '',
    content: `# DevOps Helper Skill

## Instructions

1. Analyser l'infrastructure et les besoins de déploiement
2. Containeriser les applications avec Docker
3. Orchestrer avec Kubernetes si nécessaire
4. Configurer les pipelines CI/CD
5. Mettre en place le monitoring et logging
6. Automatiser avec Infrastructure as Code

## Examples

### Dockerfile multi-stage
\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
EXPOSE 3000
USER node
CMD ["node", "dist/index.js"]
\`\`\`

### GitHub Actions CI/CD
\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to production
        run: |
          echo "Deploying to production..."
          # Your deployment commands here
\`\`\`

### Kubernetes Deployment
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
\`\`\`

## Best Practices

- Utiliser des images Docker officielles et légères (alpine)
- Implémenter le multi-stage build
- Ne pas stocker de secrets dans les images
- Utiliser des health checks (liveness, readiness)
- Configurer les resource limits Kubernetes
- Versionner l'infrastructure (IaC)
- Mettre en place le monitoring (Prometheus, Grafana)
- Automatiser les backups
- Utiliser GitOps pour les déploiements
- Implémenter le blue-green ou canary deployment
`
  },
  database: {
    name: 'database-expert',
    description: 'Expert en bases de données relationnelles et NoSQL. Utiliser pour modéliser des schémas, optimiser des requêtes, configurer des migrations, ou résoudre des problèmes de performance. Idéal pour : SQL, PostgreSQL, MySQL, MongoDB, Redis, indexation, transactions.',
    allowedTools: '',
    content: `# Database Expert Skill

## Instructions

1. Analyser les besoins de données et les relations
2. Concevoir un schéma de base de données normalisé
3. Créer des migrations versionnées
4. Optimiser les requêtes et les index
5. Gérer les transactions et la cohérence des données
6. Mettre en place les backups et la réplication

## Examples

### Schéma PostgreSQL avec relations
\`\`\`sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_published ON posts(published) WHERE published = TRUE;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_comments_post_id ON comments(post_id);
\`\`\`

### Requête optimisée avec JOIN
\`\`\`sql
-- Récupérer les posts avec leurs auteurs et le nombre de commentaires
SELECT
  p.id,
  p.title,
  u.name AS author_name,
  COUNT(c.id) AS comment_count
FROM posts p
INNER JOIN users u ON p.user_id = u.id
LEFT JOIN comments c ON p.id = c.post_id
WHERE p.published = TRUE
GROUP BY p.id, p.title, u.name
ORDER BY p.created_at DESC
LIMIT 10;
\`\`\`

### Migration avec Prisma
\`\`\`prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  posts     Post[]
  comments  Comment[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId  Int
  comments  Comment[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([authorId])
  @@index([published])
}

model Comment {
  id        Int      @id @default(autoincrement())
  content   String
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId    Int
  author    User?    @relation(fields: [authorId], references: [id], onDelete: SetNull)
  authorId  Int?
  createdAt DateTime @default(now())

  @@index([postId])
}
\`\`\`

## Best Practices

- Normaliser les données (3NF minimum)
- Créer des index sur les colonnes fréquemment interrogées
- Utiliser les foreign keys pour l'intégrité référentielle
- Implémenter des transactions pour les opérations critiques
- Utiliser EXPLAIN ANALYZE pour optimiser les requêtes
- Éviter les N+1 queries avec des JOINs ou eager loading
- Versionner les migrations
- Faire des backups réguliers automatisés
- Utiliser un pool de connexions
- Implémenter le soft delete plutôt que DELETE physique
`
  },
  docs: {
    name: 'documentation-writer',
    description: 'Expert en rédaction de documentation technique claire et complète. Utiliser pour créer des README, API docs, guides utilisateur, ou améliorer la documentation existante. Idéal pour : README.md, JSDoc, OpenAPI, guides, tutoriels, architecture docs.',
    allowedTools: 'Read, Grep, Glob, Write',
    content: `# Documentation Writer Skill

## Instructions

1. Analyser le code et comprendre sa fonctionnalité
2. Structurer la documentation de manière logique
3. Utiliser un langage clair et accessible
4. Inclure des exemples concrets
5. Maintenir la documentation à jour avec le code

## Examples

### README.md complet
\`\`\`markdown
# Mon Projet Awesome

[![Build Status](https://img.shields.io/github/workflow/status/user/repo/CI)](https://github.com/user/repo/actions)
[![npm version](https://img.shields.io/npm/v/my-package.svg)](https://www.npmjs.com/package/my-package)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Description courte et claire du projet en 1-2 phrases.

## ✨ Features

- 🚀 Feature 1 : description
- 💡 Feature 2 : description
- 🔒 Feature 3 : description

## 📦 Installation

\\\`\\\`\\\`bash
npm install my-package
# ou
yarn add my-package
\\\`\\\`\\\`

## 🚀 Quick Start

\\\`\\\`\\\`javascript
import { myFunction } from 'my-package';

const result = myFunction({ option: true });
console.log(result);
\\\`\\\`\\\`

## 📖 Documentation

### API Reference

#### myFunction(options)

Description de la fonction.

**Parameters:**
- \`options\` (Object) - Options de configuration
  - \`option1\` (boolean) - Description de l'option 1
  - \`option2\` (string) - Description de l'option 2

**Returns:** \`Promise<Result>\`

**Example:**
\\\`\\\`\\\`javascript
const result = await myFunction({
  option1: true,
  option2: 'value'
});
\\\`\\\`\\\`

## 🤝 Contributing

Les contributions sont les bienvenues ! Voir [CONTRIBUTING.md](CONTRIBUTING.md).

## 📝 License

MIT © [Your Name](https://github.com/yourusername)
\`\`\`

### JSDoc pour TypeScript
\`\`\`typescript
/**
 * Calcule la somme de deux nombres
 *
 * @param {number} a - Le premier nombre
 * @param {number} b - Le second nombre
 * @returns {number} La somme de a et b
 * @throws {TypeError} Si les paramètres ne sont pas des nombres
 *
 * @example
 * const result = sum(2, 3);
 * console.log(result); // 5
 */
function sum(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Parameters must be numbers');
  }
  return a + b;
}

/**
 * Interface représentant un utilisateur
 *
 * @interface User
 * @property {string} id - Identifiant unique
 * @property {string} name - Nom de l'utilisateur
 * @property {string} email - Adresse email
 * @property {Date} createdAt - Date de création
 */
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}
\`\`\`

## Best Practices

- Structurer avec des titres clairs (H1, H2, H3)
- Commencer par un résumé concis
- Inclure des exemples de code fonctionnels
- Utiliser des badges pour le statut (build, version, license)
- Documenter les cas d'erreur et edge cases
- Maintenir un changelog (CHANGELOG.md)
- Ajouter des diagrammes pour les architectures complexes
- Utiliser des GIFs/screenshots pour les interfaces
- Inclure les prérequis et dépendances
- Fournir des liens vers des ressources supplémentaires
`
  }
};

// Validation
function validateName(name) {
  const regex = /^[a-z0-9-]+$/;
  if (!name) return { valid: false, message: 'Le nom est requis' };
  if (name.length > 64) return { valid: false, message: 'Le nom doit faire maximum 64 caractères' };
  if (!regex.test(name)) return { valid: false, message: 'Le nom doit contenir uniquement des minuscules, chiffres et tirets' };
  return { valid: true, message: '' };
}

function validateDescription(description) {
  if (!description) return { valid: false, message: 'La description est requise' };
  if (description.length > 1024) return { valid: false, message: 'La description doit faire maximum 1024 caractères' };
  if (!description.toLowerCase().includes('utiliser')) {
    return { valid: false, message: 'La description devrait inclure "quand utiliser" ce skill' };
  }
  return { valid: true, message: '' };
}

function updateValidation() {
  const name = document.getElementById('skillName').value;
  const description = document.getElementById('skillDescription').value;
  const content = document.getElementById('skillContent').value;

  const validations = [
    validateName(name),
    validateDescription(description)
  ];

  const messagesDiv = document.getElementById('validationMessages');
  messagesDiv.innerHTML = '';

  let allValid = true;

  validations.forEach(validation => {
    if (!validation.valid) {
      allValid = false;
      const alertDiv = document.createElement('div');
      alertDiv.className = 'alert alert-error';
      alertDiv.innerHTML = `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
        </svg>
        <span>${validation.message}</span>
      `;
      messagesDiv.appendChild(alertDiv);
    }
  });

  if (allValid && name && description) {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.innerHTML = `
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
      <span>Votre skill est valide ! Vous pouvez le télécharger.</span>
    `;
    messagesDiv.appendChild(successDiv);
  }

  updatePreview();
}

function updatePreview() {
  const name = document.getElementById('skillName').value || 'mon-skill';
  const description = document.getElementById('skillDescription').value || 'Description du skill';
  const allowedTools = document.getElementById('allowedTools').value;
  const content = document.getElementById('skillContent').value || '# Contenu du skill ici';

  let yaml = `---
name: ${name}
description: ${description}`;

  if (allowedTools) {
    yaml += `\nallowed-tools: ${allowedTools}`;
  }

  yaml += `\n---

${content}`;

  document.getElementById('preview').textContent = yaml;
}

function generateSkill() {
  const name = document.getElementById('skillName').value;
  const description = document.getElementById('skillDescription').value;

  const nameValidation = validateName(name);
  const descValidation = validateDescription(description);

  if (!nameValidation.valid || !descValidation.valid) {
    alert('Veuillez corriger les erreurs avant de générer le skill');
    return;
  }

  const allowedTools = document.getElementById('allowedTools').value;
  const content = document.getElementById('skillContent').value;

  let skillContent = `---
name: ${name}
description: ${description}`;

  if (allowedTools) {
    skillContent += `\nallowed-tools: ${allowedTools}`;
  }

  skillContent += `\n---

${content}`;

  // Créer le blob et télécharger
  const blob = new Blob([skillContent], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'SKILL.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // Afficher un message de succès
  const toast = document.createElement('div');
  toast.className = 'toast toast-top toast-end';
  toast.innerHTML = `
    <div class="alert alert-success">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
      <span>SKILL.md téléchargé avec succès !</span>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3000);
}

function loadTemplate(templateName) {
  const template = templates[templateName];
  if (!template) return;

  document.getElementById('skillName').value = template.name;
  document.getElementById('skillDescription').value = template.description;
  document.getElementById('allowedTools').value = template.allowedTools;
  document.getElementById('skillContent').value = template.content;

  updateValidation();

  // Revenir à l'onglet builder
  showTab('builder');

  // Scroll vers le haut
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Toast de confirmation
  const toast = document.createElement('div');
  toast.className = 'toast toast-top toast-end';
  toast.innerHTML = `
    <div class="alert alert-info">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
      </svg>
      <span>Template ${templateName} chargé !</span>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 3000);
}

function showTab(tabName) {
  // Masquer tous les tabs
  document.getElementById('tab-builder').classList.add('hidden');
  document.getElementById('tab-templates').classList.add('hidden');
  document.getElementById('tab-docs').classList.add('hidden');

  // Afficher le tab sélectionné
  document.getElementById(`tab-${tabName}`).classList.remove('hidden');

  // Mettre à jour les classes des tabs
  document.querySelectorAll('.tabs .tab').forEach(tab => {
    tab.classList.remove('tab-active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('tab-active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Character counters
  const nameInput = document.getElementById('skillName');
  const descInput = document.getElementById('skillDescription');

  nameInput.addEventListener('input', (e) => {
    document.getElementById('nameCount').textContent = `${e.target.value.length}/64`;
    updateValidation();
  });

  descInput.addEventListener('input', (e) => {
    document.getElementById('descCount').textContent = `${e.target.value.length}/1024`;
    updateValidation();
  });

  document.getElementById('allowedTools').addEventListener('input', updateValidation);
  document.getElementById('skillContent').addEventListener('input', updatePreview);

  // Generate button
  document.getElementById('generateBtn').addEventListener('click', generateSkill);

  // Tabs
  document.querySelectorAll('.tabs .tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = e.target.getAttribute('data-tab');
      showTab(tabName);
    });
  });

  // Template buttons
  document.querySelectorAll('[data-template]').forEach(button => {
    button.addEventListener('click', (e) => {
      const templateName = e.target.getAttribute('data-template');
      loadTemplate(templateName);
    });
  });

  // Theme toggle persistence
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });

  // Initial validation
  updateValidation();
});
