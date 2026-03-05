# Site Web de Mariage - Marie & Jean

Ce projet est un site web minimaliste, moderne et responsive pour un mariage, développé avec Next.js et Tailwind CSS. Il inclut une gestion des RSVPs via Google Sheets et une liste de cadeaux avec intégration PayPal.

## Architecture du Projet

Le projet suit une structure standard pour une application Next.js avec `pages/` router.

-   `pages/`: Contient les pages du site et les routes API.
    -   `index.tsx`: La page d'accueil qui assemble toutes les sections.
    -   `_app.tsx`: Le composant principal de l'application, utilisé pour la configuration globale (ex: PayPal Provider).
    -   `api/`: Contient les endpoints serverless.
        -   `rsvp.ts`: Gère la soumission des formulaires RSVP.
        -   `paypal.ts`: Gère la création des commandes PayPal.
-   `components/`: Contient les composants React réutilisables qui constituent les différentes sections du site.
-   `styles/`: Fichiers de style globaux et configuration Tailwind.
-   `public/`: Contient les ressources statiques comme les images.
-   `utils/`: Fonctions utilitaires pour la validation, et les interactions avec les APIs externes (Google Sheets, PayPal).

## Technologies Utilisées

-   **Frontend**: Next.js (React)
-   **Styling**: Tailwind CSS
-   **Formulaires**: React Hook Form pour la gestion et la validation.
-   **Validation de Schéma**: Zod pour la validation des données frontend et backend.
-   **Paiements**: PayPal REST SDK
-   **Stockage de données (RSVP)**: Google Sheets API
-   **Hébergement**: Prêt pour Vercel ou Netlify.

## Setup du Projet

### 1. Prérequis

-   Node.js (version 18.x ou supérieure)
-   npm ou yarn

### 2. Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/votre-utilisateur/wedding-website.git
cd wedding-website
npm install
