<script setup>
  import SearchableExample from "./components/SearchableExample.vue";
</script>

# Searchable

Better table allows filter data by search.

Search can be enabled by `searchable` property

### Example

Focus search input and type something

<SearchableExample></SearchableExample>

### Vue code

```vue{6}
<template>
	<!-- ... -->
	<BetterTable
		:structure="tableStructure"
		:data="tableData"
		searchable
	/>
	<!-- ... -->
</template>
```