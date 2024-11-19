### **Exercice : Charger des données avec Axios et naviguer avec React Router**

---

#### **Objectif :**
Créer une application React avec deux pages :
1. Une page d'accueil (`/`), avec rien de particulièrement spécifique. Seulement un titre.
2. Une page "Users" (`/users`) qui utilise **Axios** pour récupérer des données depuis l'API [JSONPlaceholder](https://jsonplaceholder.org/users) et les afficher.
    - Afficher seulement les email dans une liste
    - Inclure une gestion du chargement.
3. Les deux pages contiennent la même **Navbar**

---

#### **Étapes :**
1. Installer `react-router-dom` et `axios` :
   ```bash
   npm install react-router-dom axios
   ```
2. Créer un projet React structuré avec un `App.jsx` pour le routing.
3. Utiliser **React Router** pour définir deux routes (`/` et `/users`).
4. Dans la route `/users`, récupérer les données avec `axios.get` et les afficher.

---

#### **EXEMPLE de structure finale :**
```
src/
├── components/
│   ├── Navbar.jsx      // Component de Navbar commune à toutes les pages
│   ├── Users.jsx    // Page pour afficher les users
│   ├── Home.jsx        // Page d'accueil
├── App.jsx             // Gestion des routes
```