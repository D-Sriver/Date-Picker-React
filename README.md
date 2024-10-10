# Composant React DatePicker

[![version npm](https://badge.fury.io/js/%40sriver%2Fdate-picker-react-v2.svg)](https://badge.fury.io/js/%40sriver%2Fdate-picker-react-v2)
[![Licence: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un composant DatePicker pour la sélection de date.

![Image du sélecteur de date](https://github.com/D-Sriver/Date-Picker-React/raw/main/datepiker.gif)

[Version française](#version-française)

# English Version

## Table of Contents

- [Features](#features)
- [Compatibility](#compatibility)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Features

- Simple, lightweight, and performant
- TypeScript implementation
- Date selection via dropdown menu
- Customizable without CSS framework
- Localization support for month display based on language
- Color customization through props
- Automatic closure when clicking outside

## Compatibility

- React: version 16.8.0 or higher
- TypeScript: version 3.7 or higher
- Browsers: Chrome, Firefox, Safari, Edge (latest versions)

## Installation

Install the package via npm:

```bash
npm install @sriver/date-picker-react-v2
```

## Usage

Import and use the component in your application:

```jsx
import React, { useState } from 'react';
import DatePicker from '@sriver/date-picker-react-v2';

function Example() {
	const [startDate, setStartDate] = useState(null);

	return (
		<DatePicker
			onChange={setStartDate}
			name="startDate"
			initialDate={new Date()}
			locale="en-US"
			colorPrimary="#4caf50"
			colorSecondary="#f1faee"
			colorTertiary="#a8dadc"
		/>
	);
}
```

## Customization

The DatePicker component can be customized with the following props:

| Prop           | Type     | Default    | Description                                   |
| -------------- | -------- | ---------- | --------------------------------------------- |
| onChange       | Function | -          | Function called when a date is selected       |
| initialDate    | Date     | new Date() | Initial date to display                       |
| name           | string   | ''         | Name of the input field                       |
| locale         | string   | 'en-US'    | Language code for localization                |
| colorPrimary   | string   | '#4caf50'  | Primary color of the component                |
| colorSecondary | string   | '#ffffff'  | Secondary color (background) of the component |
| colorTertiary  | string   | '#333333'  | Tertiary color (text) of the component        |

## Troubleshooting

### The component is not displaying correctly

- Make sure you have imported the component correctly and all dependencies are installed.

### Custom colors are not applying

- Verify that you have passed the color props with valid hexadecimal values.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the project: https://github.com/D-Sriver/Date-Picker-React/
2. Create your feature branch (`git checkout -b feature/AmazingNewFeature`)
3. Commit your changes (`git commit -m 'Add AmazingNewFeature'`)
4. Push to the branch (`git push origin feature/AmazingNewFeature`)
5. Open a Pull Request

## Changelog

#### Version 1.0.6

- Added color customization with props

#### Version 1.0.5

- Date change via dropdown list

#### Version 1.0.4

- Implemented event propagation prevention

#### Version 1.0.3

- Added locale prop for localization (EN or FR)

#### Version 1.0.2

- Added README.md

#### Version 1.0.0

- Created the datepicker

## License

MIT

# Version française

## Table des matières

- [Caractéristiques](#caractéristiques)
- [Compatibilité](#compatibilité)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Personnalisation](#personnalisation)
- [Dépannage](#dépannage)
- [Contribution](#contribution)
- [Changelog](#changelog)
- [Licence](#licence)

## Caractéristiques

- Simple, léger et performant
- Utilisation de TypeScript
- Sélection de date par menu déroulant
- Personnalisable sans framework CSS
- Prend en compte la localisation pour l'affichage des mois en fonction de la langue
- Permet la personnalisation des couleurs avec les props
- Fermeture automatique lors d'un clic à l'extérieur

## Compatibilité

- React : version 16.8.0 ou supérieure
- TypeScript : version 3.7 ou supérieure
- Navigateurs : Chrome, Firefox, Safari, Edge (dernières versions)

## Installation

Installez le package via npm :

```bash
npm install @sriver/date-picker-react-v2
```

## Utilisation

Importez et utilisez le composant dans votre application :

```jsx
import React, { useState } from 'react';
import DatePicker from '@sriver/date-picker-react-v2';

function Example() {
	const [startDate, setStartDate] = useState(null);

	return (
		<DatePicker
			onChange={setStartDate}
			name="startDate"
			initialDate={new Date()}
			locale="fr-FR"
			colorPrimary="#4caf50"
			colorSecondary="#f1faee"
			colorTertiary="#a8dadc"
		/>
	);
}
```

## Personnalisation

Le composant DatePicker peut être personnalisé avec les props suivantes :

| Prop           | Type     | Défaut     | Description                                      |
| -------------- | -------- | ---------- | ------------------------------------------------ |
| onChange       | Function | -          | Fonction appelée lors de la sélection d'une date |
| initialDate    | Date     | new Date() | Date initiale à afficher                         |
| name           | string   | ''         | Nom du champ de saisie                           |
| locale         | string   | 'fr-FR'    | Code de langue pour la localisation              |
| colorPrimary   | string   | '#4caf50'  | Couleur principale du composant                  |
| colorSecondary | string   | '#ffffff'  | Couleur secondaire (fond) du composant           |
| colorTertiary  | string   | '#333333'  | Couleur tertiaire (texte) du composant           |

## Dépannage

### Le composant ne s'affiche pas correctement

- Assurez-vous d'avoir importé le composant correctement et que toutes les dépendances sont installées.

### Les couleurs personnalisées ne s'appliquent pas

- Vérifiez que vous avez bien passé les props de couleur avec des valeurs hexadécimales valides.

## Contribution

Les contributions sont les bienvenues ! Veuillez suivre ces étapes pour contribuer :

1. Forkez le projet : https://github.com/D-Sriver/Date-Picker-React/
2. Créez votre branche de fonctionnalité (`git checkout -b feature/NouvellefonctionnaliteIncroyable`)
3. Commitez vos changements (`git commit -m 'Ajout de NouvellefonctionnaliteIncroyable'`)
4. Poussez vers la branche (`git push origin feature/NouvellefonctionnaliteIncroyable`)
5. Ouvrez une Pull Request

## Changelog

#### Version 1.0.6

- Ajout de la personnalisation de la couleur avec les props

#### Version 1.0.5

- Changement de date par liste déroulante

#### Version 1.0.4

- Implémentation de la prévention de la propagation des événements

#### Version 1.0.3

- Ajout de la prop locale pour la localisation (EN ou FR)

#### Version 1.0.2

- Ajout du README.md

#### Version 1.0.0

- Création du datepicker

## Licence

MIT

---
