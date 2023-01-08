<script setup>
  import SelectableExample from "./components/SelectableExample.vue";
  import SelectableKeyExample from "./components/SelectableKeyExample.vue";
  import ObjectSelectableExample from "./components/ObjectSelectableExample.vue";
</script>

# Selectable

## Select

When `selectable` option is active appears new column for checkbox in each row.
Now that can be selected and observed by binding variable to v-model.

By default v-model value is tracked by `id` column.

If row key column is null than that cannot be selected.

### Example

<SelectableExample></SelectableExample>

### Vue code

```vue{4}
<template>
	<!-- ... -->
	<BetterTable
		selectable
		v-model="selected"
		:structure="tableStructure"
		:data="tableData"
	/>
	<!-- ... -->
</template>

<script>
export default {
	data() {
		return {
			selected: [],
		};
	},
};
</script>
```

## Select by custom key

If another tracking is required than you can specify `key-column`
e.g. by name
If custom key is not specified in row data - that can't be selected

### Example

<SelectableKeyExample></SelectableKeyExample>

### Vue code

```vue{5}
<template>
	<!-- ... -->
	<BetterTable
		selectable
		key-column="name"
		v-model="selected"
		:structure="tableStructure"
		:data="tableData"
	/>
	<!-- ... -->
</template>
```

## Object select

To enable objects select add `objects-select` property to component

### Example

<ObjectSelectableExample></ObjectSelectableExample>

### Vue code

```vue{5}
<template>
	<!-- ... -->
	<BetterTable
		selectable
		objects-select
		v-model="selected"
		:structure="tableStructure"
		:data="tableData"
	/>
	<!-- ... -->
</template>
```
