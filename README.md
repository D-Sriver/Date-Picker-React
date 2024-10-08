# React DatePicker Component

[![npm version](https://badge.fury.io/js/%40sriver%2Fdate-picker-react-v2.svg)](https://badge.fury.io/js/%40sriver%2Fdate-picker-react-v2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un composant DatePicker. Pour la sélection de date.

## Prérequis

- Vous avez besoin d'un projet react pour utiliser ce composant

## Caractéristiques

- Simple, léger et performant
- Sélection de date par clic simple
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

### Exemple de base

```jsx
import React, { useState } from 'react';
import DatePicker from '@votre-nom/react-datepicker';
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
			/>
		</div>
	);
}
```

### modification du datepicker

- onChange : fonction qui permet de modifier la date
- initialDate : date initiale
- name : nom de la datepicker
  locale : locale de la datepicker
