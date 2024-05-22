# New Trello

### By Martin CAM

English version below

## Lancer localement

Après avoir cloner le dépôt, assurez-vous d'avoir installer npm.
Si c'est le cas, vous pouvez lancer les commandes suivantes :

> cd new-trello

> npm install

Une fois tous les packages téléchargés, vous pouvez démarrer le projet en lançant :

> npm run start

L'application sera disponible à : [http://localhost:3000/](http://localhost:3000/)

## Version en ligne

La version en ligne est accessible via cette URL : [Version En Ligne](https://newtrello-cam.web.app/)

## Revue personnelle

### Difficultés

J'utilise rarement MUI, donc il m'a fallu beaucoup de temps pour trouver exactement quel composant utiliser. J'aurai été plus rapide en utilisant styled-components, avec lequel je suis plus familier.
Comme il s'agit d'une Single Page Application vraiment simple et sans navigation, je dois avouer que je n'ai pas trouver de vrais avantages que NextJS pouvait amener au projet, je ne l'ai donc pas ajouter à l'application.

### Succès

Je pensais qu'il me faudrait plus de temps pour déployer sur Firebase, mais c'était en réalité très simple. Je déploie habituellement sur AWS, et je n'avais jamais vraiment essayé Firebase avant, mais je m'en souviendrais.

### Évolutions possibles

Pour s'approcher encore plus de Trello, nous pourrions ajouter quelques fonctionnalités. 2 fonctionnalités qui pourraient grandement améliorer l'expérience seraient :

1. Ajouter des étiquettes aux cartes. Ce serait facilement faisable avec un tableau sur chaque carte, contenant la liste des étiquettes que cette carte a. Nous pourrions ensuite associer chaque ID d'étiquette à un nom et une color et l'afficher sur chaque carte.
2. Ajouter du drag and drop. Ce serait plus difficile qu'ajouter les étiquettes, mais cela améliorerait grandement l'application. Nous pourrions utiliser cette librairie : [react-beautiful-dnd : Github](https://github.com/atlassian/react-beautiful-dnd) / [react-beautiful-dnd : NPM](https://www.npmjs.com/package/react-beautiful-dnd). Elle n'est pas si difficile à implémenter, et est toujours très utilisée, même si elle n'a pas été mise à jour depuis 2 ans.

## Running locally

After cloning the repository, make sure you have npm installed.
If you have, you can run the following commands :

> cd new-trello
> npm install

When all the packages are downloaded, you can start the project by running :

> npm run start

The application will be available on : [http://localhost:3000/](http://localhost:3000/)

## Online version

The online version can be accessed on this URL : [Online Version](https://newtrello-cam.web.app/)

## Personnal review

### Difficulties

I rarely use MUI, so it took me a lot of time to find exactly which component to use. I would have been faster by using styled-components, that I'm more familiar with.
As it's a really simple Single Page Application without navigation, I must admit that I didn't really thought of great improvement NextJS could bring to the project. As such, I didn't add it to the app.

### Success

I thought I would have a hard time deploying the app on Firebase, but it was actually really easy. I usually deploy on AWS, and never really tried Firebase before, but I'll remember it.

### Possible evolutions

To get even closer to Trello, we could add some features. 2 features that could greatly improve the experience could be :

1. Add tags on cards. It could easily be done with an array on each cards containing the list of tags this card has. We would then map the id of each tag to a name and a color and display it on each cards.
2. Add drag and drop. It would be harder than adding the tags, but it could greatly improve the application. We could use this librairy : [react-beautiful-dnd : Github](https://github.com/atlassian/react-beautiful-dnd) / [react-beautiful-dnd : NPM](https://www.npmjs.com/package/react-beautiful-dnd). It's not that hard to implement, and it's still heavily used, even if it was not updated since 2 years ago.
