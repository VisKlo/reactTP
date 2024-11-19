# Exercice : Crée un compteur magique 🔮

## Objectif

Créer un component React interactif utilisant `useState` pour gérer un compteur. À chaque clic, le compteur augmente ou diminue, et affiche un message spécial lorsque le nombre atteint un multiple de 5.

## Instructions

1. **Créer un nouveau component React nommé `MagicCounter`.**
   - Ce component doit afficher un nombre initialisé à **0**.

2. **Ajouter deux boutons :**
   - Un bouton pour **augmenter** le compteur.
   - Un bouton pour **diminuer** le compteur.

3. **Afficher un message spécial 🎉 :**
   - Si le compteur atteint un multiple de 5 (ex. 5, 10, 15...), afficher le message suivant : 
     - *"✨ Nombre magique atteint ! ✨"* 
     - (pour connaître les multiples, on passe par le calcul des modulos, à savoir le symbole %)
   - Sinon, afficher simplement le nombre.

4. **Les règles de style :**
   - Ajoutez une couleur de fond différente lorsque le compteur est un multiple de 5 :
     - `backgroundColor: '#D4F1F4'` pour les multiples de 5.
     - `backgroundColor: '#FDEDEC'` sinon.
   - Ajoutez une bordure arrondie pour rendre le design plus magique : `borderRadius: '10px'` (en permanence).

5. **Bonus (facultatif) :**
   - Ajoutez un bouton "Réinitialiser" pour remettre le compteur à zéro.

**Bonne chance ! 🧙‍♀️✨**