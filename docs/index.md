<script setup>
  import BasicExample from "./components/BasicExample.vue";
</script>

# Getting started

## Requirements

- node v16
- vue 3

## Installation

### yarn

```bash
yarn add vue-better-table
```

### npm

```bash
npm i vue-better-table
```

## Basic usage

### Example

<BasicExample></BasicExample>

### Vue code

```vue
<template>
	<!-- ... -->
	<BetterTable :structure="tableStructure" :data="tableData" />
	<!-- ... -->
</template>

<script>
/* Import component */
import BetterTable from "vue-better-table";
/* Import styles */
import "vue-better-table/style.css";

export default {
	components: {
		/* Register component */
		BetterTable,
	},
};
</script>
```

### Data json example

```json
[
	{
		"id": 1,
		"name": "Uno Sacry SaintoFia",
		"is_leader": true
	},
	{
		"id": 2,
		"name": "Nick Niclson"
	},
	{
		"name": "Ed Hungry"
	},
	{},
	{
		"id": 4,
		"name": "Bars Beautiful"
	},
	{
		"id": 5,
		"name": "Emma"
	},
	{
		"id": 6,
		"name": "Sonja"
	}
]
```

### Structure json example

```json
[
	{
		"name": "id",
		"label": "ID",
		"default": 0,
		"width": 1
	},
	{
		"name": "name",
		"label": "Name",
		"searchable": true
	},
	{
		"name": "is_leader",
		"label": "Is leader",
		"type": "boolean",
		"width": 1
	}
]
```
