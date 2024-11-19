### **Exercice `useEffect`**

#### **Objectif :**
Créer un composant React qui suit **la _largeur_ de la fenêtre** et modifie **la couleur d’arrière-plan** (du component) en fonction de cette largeur :
- **Bleu clair** si la largeur est supérieure ou égale à **800px**.
- **Rose pâle** si la largeur est inférieure à **800px**.

---

#### **Instructions :**

1. **Créer un composant `ResponsiveBackground`.**
   - Utilisez le Hook `useState` pour stocker la couleur d’arrière-plan.
   - Utilisez le Hook `useEffect` pour écouter les changements de taille de la fenêtre.

2. **Changer la couleur d’arrière-plan :**
   - Si la largeur de la fenêtre est **supérieure ou égale** à **800px**, la couleur doit être **bleu clair** (`#ADD8E6`).
   - Sinon, elle doit être **rose pâle** (`#FFC0CB`).

3. **Bonus :**
   - Afficher dynamiquement la largeur actuelle de la fenêtre (c'est à dire, la première couleur affichée doit être adaptée à la largeur de la fenêtre)