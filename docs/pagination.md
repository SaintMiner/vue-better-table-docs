<script setup>
  import PaginationExample from "./components/PaginationExample.vue";
  import PaginationLimitExample from "./components/PaginationLimitExample.vue";
</script>

# Pagination

Pagination allows split records to pages and limit it. By default row count per page is 5

## Enabling pagination

Pagination can be enabling by adding `pagination` property to component

### Example

<PaginationExample></PaginationExample>

### Vue code

```vue{6}
<template>
	<!-- ... -->
	<BetterTable
		:structure="tableStructure"
		:data="tableData"
		pagination
	/>
	<!-- ... -->
</template>
```

## Pagination limit

Page row limit can be change by `pagination-limit` property

### Example

<PaginationLimitExample></PaginationLimitExample>

### Vue code

```vue{7}
<template>
	<!-- ... -->
	<BetterTable
		:structure="tableStructure"
		:data="tableData"
		pagination
		:pagination-limit="3"
	/>
	<!-- ... -->
</template>
```
