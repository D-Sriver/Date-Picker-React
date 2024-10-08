# React DatePicker Component

[![npm version](https://badge.fury.io/js/%40sriver%2Fdate-picker-react-v2.svg)](https://badge.fury.io/js/%40sriver%2Fdate-picker-react-v2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un composant DatePicker. Pour la sélection de date.

![Image du sélecteur de date](/datepiker.gif)

[English version](#english-version)

## Table des matières

- [Prérequis](#prérequis)
- [Caractéristiques](#caractéristiques)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Personnalisation](#personnalisation)
- [Contribution](#contribution)
- [Changelog](#changelog)
- [Licence](#licence)

## Prérequis

- Vous avez besoin d'un projet react pour utiliser ce composant sous typescript

## Caractéristiques

- Simple, léger et performant
- Utilisation de TypeScript
- Sélection de date par simple clic
- Navigation fluide entre les mois et les années
- Personnalisable sans framework css
- Prend en compte la localisation pour l'affichage des mois en fonction de la langue
- Fermeture automatique lors d'un clic à l'extérieur

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

function BasicExample() {
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (date) => {
		setSelectedDate(date);
		console.log('Date sélectionnée:', date);
	};

	return (
		<div>
			<h2>Sélectionnez une date</h2>
			<DatePicker
				onChange={handleDateChange}
				initialDate={new Date()}
				name="basic-date-picker"
				locale="fr-FR"
			/>
			{selectedDate && (
				<p>Date sélectionnée : {selectedDate.toLocaleDateString()}</p>
			)}
		</div>
	);
}
```

## Personnalisation

Le composant DatePicker peut être personnalisé avec les props suivantes :

| Prop        | Type     | Default    | Description                                      |
| ----------- | -------- | ---------- | ------------------------------------------------ |
| onChange    | Function | -          | Fonction appelée lors de la sélection d'une date |
| initialDate | Date     | new Date() | Date initiale à afficher                         |
| name        | string   | ''         | Nom du champ de saisie                           |
| locale      | string   | 'fr-FR'    | Code de langue pour la localisation              |

```bash
npm run test
```

## Contribution

Les contributions sont les bienvenues ! Veuillez suivre ces étapes pour contribuer :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Changelog

### Version 1.0.3

- Ajout de la prop locale pour la localisation (EN ou FR)

### Version 1.0.2

- Ajout du README.md

### Version 1.0.0

- Création du datepicker

## Licence

MIT

---

# English Version

## React DatePicker Component

A DatePicker component for date selection.

![DatePicker Image](/datepiker.gif)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contribution](#contribution)
- [Changelog](#changelog)
- [License](#license)

## Prerequisites

- You need a React project to use this component with TypeScript

## Features

- Simple, lightweight, and performant
- TypeScript usage
- Date selection with a single click
- Smooth navigation between months and years
- Customizable without CSS framework
- Localization support for month display based on language
- Automatic closure when clicking outside

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

function BasicExample() {
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (date) => {
		setSelectedDate(date);
		console.log('Selected date:', date);
	};

	return (
		<div>
			<h2>Select a date</h2>
			<DatePicker
				onChange={handleDateChange}
				initialDate={new Date()}
				name="basic-date-picker"
				locale="en-US"
			/>
			{selectedDate && (
				<p>Selected date: {selectedDate.toLocaleDateString()}</p>
			)}
		</div>
	);
}
```

## Customization

The DatePicker component can be customized with the following props:

| Prop        | Type     | Default    | Description                             |
| ----------- | -------- | ---------- | --------------------------------------- |
| onChange    | Function | -          | Function called when a date is selected |
| initialDate | Date     | new Date() | Initial date to display                 |
| name        | string   | ''         | Name of the input field                 |
| locale      | string   | 'en-US'    | Language code for localization          |

```bash
npm run test
```

## Contribution

Contributions are welcome! Please follow these steps to contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Changelog

### Version 1.0.3

- Added locale prop for localization (EN or FR)

### Version 1.0.2

- Added README.md

### Version 1.0.0

- Created the datepicker

## License

MIT
