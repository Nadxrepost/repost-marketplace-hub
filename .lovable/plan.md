
# Plan : Mise à jour des métadonnées SEO

## Objectif
Modifier le titre et la meta description du site pour améliorer le référencement Google avec :
- **Titre** : "Repost | Vendez la seconde main sur plusieurs plateformes, sans complexité"
- **Meta description** : "Centralisez et pilotez la vente de vos produits de seconde main sur plusieurs plateformes. Repost aide les e-commerçants, retailers et marques, à gagner du temps, réduire les erreurs et structurer leur activité."

## Fichiers à modifier

### 1. index.html
Modifier les balises de base :
- Ligne 7 : Nouveau titre
- Ligne 8 : Nouvelle meta description
- Ligne 12 : og:title (pour les partages réseaux sociaux)
- Ligne 13 : og:description

### 2. src/components/SEO.tsx
Modifier les valeurs par défaut du composant :
- Ligne 13 : Nouveau titre par défaut
- Ligne 14 : Nouvelle description par défaut

### 3. src/pages/Index.tsx
Modifier les props passées au composant SEO :
- Ligne 31 : Nouveau titre
- Ligne 32 : Nouvelle description
- Ligne 24 : Description dans les données structurées (Schema.org)

## Détails techniques

```text
+---------------------------+
|       index.html          |
|  (valeurs initiales HTML) |
+------------+--------------+
             |
             v
+---------------------------+
|     SEO.tsx Component     |
|  (valeurs par défaut JS)  |
+------------+--------------+
             |
             v
+---------------------------+
|       Index.tsx           |
| (valeurs page d'accueil)  |
+---------------------------+
```

Les 3 fichiers doivent être mis à jour pour assurer la cohérence entre :
- Le HTML initial chargé par les moteurs de recherche (index.html)
- Les valeurs par défaut React (SEO.tsx)
- Les valeurs spécifiques de la page d'accueil (Index.tsx)

## Note importante
Après publication, Google peut prendre quelques jours/semaines pour réindexer le site avec les nouvelles métadonnées.
