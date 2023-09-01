# Gradient : actions aux petits oignons

> En repartant du support `gradient-vanilla`(support du jour du prof)

## Objectifs

- améliorer les actions existantes
- factoriser certains traitements

## Instructions

### Etape 1

- Ajouter 1 premier bouton dans le html (voir `src/assets/index.html)` pour changer la direction à `45 degrés`
- Ajouter un écouteur au click pour émettre une action qu'on traduira en nouveau state dans le reducer

### Etape 2

- ajouter 3 nouveaux boutons pour changer la direction du dégradé
  - 135 degrés
  - 225 degrés
  - 315 degrés
- modifier le reducer et les actions pour gérer toutes les directions avec 1 seule action :thinking:
- créer l'action creator et s'en servir lorsqu'on veut dispatcher nos actions
