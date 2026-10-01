DARNA IMMOBILIER — Site web (AR / FR / EN)
==========================================

Structure
---------
index.html      Accueil : hero, services, biens à la une, pourquoi nous, témoignages
biens.html      Nos Biens : catalogue de 12 annonces + filtres (type, ville, budget, chambres)
contact.html    Contact : coordonnées, formulaire, carte + Simulateur de crédit immobilier
css/style.css   Tous les styles (responsive, mode RTL arabe inclus)
js/lang.js      Dictionnaires FR/EN/AR + données des biens (trilingue)
js/catalog.js   Rendu du catalogue + filtres
js/simulator.js Simulateur de crédit (mensualité, intérêts, donut chart)
js/main.js      Menu mobile, changement de langue, animations
js/form.js      Formulaire de contact
assets/img/     12 visuels SVG de biens (remplaçables par vos vraies photos : bien-01.jpg etc., puis modifier le chemin dans js/catalog.js)

Comment l'utiliser
------------------
1. Dézippez le dossier.
2. Ouvrez index.html dans un navigateur (double-clic suffit).
3. Changez de langue avec les boutons AR / FR / EN en haut à droite
   (la préférence est mémorisée, et l'arabe active automatiquement le mode RTL).
4. Le simulateur et les filtres fonctionnent sans serveur — tout est en JavaScript.

Notes
-----
- Les icônes (Font Awesome) et les polices Google se chargent via CDN :
  une connexion internet est nécessaire pour l'affichage optimal des icônes.
- La carte de la page Contact utilise OpenStreetMap (embed).
