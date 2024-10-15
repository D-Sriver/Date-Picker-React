# Composant React DatePicker

[![version npm](https://badge.fury.io/js/%40sriver%2Fdate-picker-react-v2.svg)](https://badge.fury.io/js/%40sriver%2Fdate-picker-react-v2)
[![Licence: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un composant DatePicker pour la sélection de date.

![Image du sélecteur de date](https://github.com/D-Sriver/Date-Picker-React/raw/main/datepikerv2.gif)

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

- Simple, lightweight and performant
- Uses TypeScript
- Date selection via dropdown menu
- "Today" button with icon for better user experience
- Wide range of year selection (100 years in the past to 10 years in the future)
- Customizable without CSS framework
- Takes into account localization for displaying months according to the language (en,fr)
- Allows color customization with props (colorPrimary, colorSecondary, colorTertiary, colorBackgroundField, colorBorderField, colorIcon)
- Automatic closure on click outside
- Month and year selectors by props

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
			yearRangeStart={100}
			yearRangeEnd={10}
			blurBackground={2}
			colorBackgroundSelect="#000000"
			placeholder="Select a date"
			placeholderColor="#333333"
			colorTextField="#333333"
			colorBackgroundField="#ffffff"
			colorBorderField="#d1d5db"
			colorIcon="#333333"
		/>
	);
}
```

## Customization

The DatePicker component can be customized with the following props:

| Prop                  | Type     | Default         | Description                                          |
| --------------------- | -------- | --------------- | ---------------------------------------------------- |
| onChange              | Function | -               | Function called when a date is selected              |
| initialDate           | Date     | new Date()      | Initial date to display                              |
| name                  | string   | ''              | Name of the input field                              |
| locale                | string   | 'en-US'         | Language code for localization                       |
| colorPrimary          | string   | '#4caf50'       | Primary color of the component                       |
| colorSecondary        | string   | '#ffffff'       | Secondary color (background) of the component        |
| colorTertiary         | string   | '#333333'       | Tertiary color (text) of the component               |
| yearRangeStart        | number   | 100             | Number of years in the past for selection            |
| yearRangeEnd          | number   | 10              | Number of years in the future for selection          |
| placeholder           | string   | 'Select a date' | Text of the placeholder for the input field          |
| placeholderColor      | string   | '#333333'       | Color of the placeholder for the input field         |
| colorBackgroundField  | string   | '#ffffff'       | Background color of the input field                  |
| colorBorderField      | string   | '#d1d5db'       | Border color of the input field                      |
| colorIcon             | string   | '#333333'       | Color of the icon of the "Today" button              |
| colorTextField        | string   | '#333333'       | Color of the text of the input field                 |
| blurBackground        | number   | 2               | Amount of blur for the background of the datepicker  |
| colorBackgroundSelect | string   | '#000000'       | Background color for the dropdowns of the datepicker |

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

#### Version 1.0.10

- Added blurBackground prop to customize the blur of the datepicker
- Added colorBackgroundSelect prop to customize the background color of the dropdowns of the datepicker

#### Version 1.0.9

- Added colorTextField prop to customize the text input color of the datepicker

#### Version 1.0.7

- Added yearRangeStart and yearRangeEnd props to customize the year selection range
- Added placeholder prop to customize the placeholder of the input field
- Added placeholderColor prop to customize the color of the placeholder
- Added colorBackgroundField prop to customize the background color of the input field
- Added colorBorderField prop to customize the border color of the input field
- Added colorIcon prop to customize the color of the "Today" button icon

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
- Bouton "Aujourd'hui" avec icône pour une meilleure expérience utilisateur
- Large plage de sélection d'années (100 ans dans le passé à 10 ans dans le futur)
- Personnalisable sans framework CSS
- Prend en compte la localisation pour l'affichage des mois en fonction de la langue (en,fr)
- Permet la personnalisation des couleurs avec les props (colorPrimary, colorSecondary, colorTertiary, colorBackgroundField, colorBorderField, colorIcon)
- Fermeture automatique lors d'un clic à l'extérieur
- Sélecteurs de mois et d'année par props

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
			yearRangeStart={150}
			yearRangeEnd={20}
			blurBackground={2}
			colorBackgroundSelect="#000000"
			placeholder="Sélectionner une date"
			placeholderColor="#333333"
			colorTextField="#333333"
			colorBackgroundField="#ffffff"
			colorBorderField="#d1d5db"
			colorIcon="#333333"
		/>
	);
}
```

## Personnalisation

Le composant DatePicker peut être personnalisé avec les props suivantes :

| Prop                  | Type     | Défaut                  | Description                                      |
| --------------------- | -------- | ----------------------- | ------------------------------------------------ |
| onChange              | Function | -                       | Fonction appelée lors de la sélection d'une date |
| initialDate           | Date     | new Date()              | Date initiale à afficher                         |
| name                  | string   | ''                      | Nom du champ de saisie                           |
| locale                | string   | 'fr-FR'                 | Code de langue pour la localisation              |
| colorPrimary          | string   | '#4caf50'               | Couleur principale du composant                  |
| colorSecondary        | string   | '#ffffff'               | Couleur secondaire (fond) du composant           |
| colorTertiary         | string   | '#333333'               | Couleur tertiaire (texte) du composant           |
| yearRangeStart        | number   | 100                     | Nombre d'années dans le passé pour la sélection  |
| yearRangeEnd          | number   | 10                      | Nombre d'années dans le futur pour la sélection  |
| placeholder           | string   | 'Sélectionner une date' | Texte du placeholder pour le champ de saisie     |
| placeholderColor      | string   | '#333333'               | Couleur du placeholder pour le champ de saisie   |
| colorBackgroundField  | string   | '#ffffff'               | Couleur de fond du champ de saisie               |
| colorBorderField      | string   | '#d1d5db'               | Couleur de bordure du champ de saisie            |
| colorIcon             | string   | '#333333'               | Couleur de l'icône du bouton "Aujourd'hui"       |
| colorTextField        | string   | '#333333'               | Couleur du texte du champ de saisie              |
| blurBackground        | number   | 2                       | Transparence du fond du datepicker               |
| colorBackgroundSelect | string   | '#000000'               | Couleur de fond pour les listes déroulantes      |

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

#### Version 1.0.10

- Ajout de la prop blurBackground pour personnaliser la transparence du fond du datepicker
- Ajout de la prop colorBackgroundSelect pour personnaliser la couleur de fond des listes déroulantes du datepicker

#### Version 1.0.9

- Ajout de la prop colorTextField pour personnaliser la couleur du texte de l’input du datepicker

#### Version 1.0.7

- Ajout des props yearRangeStart et yearRangeEnd pour personnaliser la plage d'années sélectionnables
- Ajout de la prop placeholder pour personnaliser le placeholder du champ de saisie
- Ajout de la prop placeholderColor pour personnaliser la couleur du placeholder
- Ajout de la prop colorBackgroundField pour personnaliser la couleur de fond du champ de saisie
- Ajout de la prop colorBorderField pour personnaliser la couleur de bordure du champ de saisie
- Ajout de la prop colorIcon pour personnaliser la couleur de l'icône du bouton "Aujourd'hui"

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

#### Version 1.0.7

- Ajout des props yearRangeStart et yearRangeEnd pour personnaliser la plage d'années sélectionnables

## Licence

MIT

---
