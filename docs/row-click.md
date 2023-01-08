<script setup>
  import RowClickExample from "./components/RowClickExample.vue";
</script>

# Row click

Row clicking can be tracked by `@rowClick` event

### Example

Click any row

<RowClickExample></RowClickExample>

### Vue code

```vue{6,15-17}
<template>
	<!-- ... -->
		<BetterTable
			:structure="tableStructure"
			:data="tableData"
			@rowClick="rowClick"
		/>
	<!-- ... -->
</template>

<script>
export default {
  /* ... */
	methods: {
		rowClick(row, index) {
			alert(`index: ${index} | name: ${row.name}`);
		},
	},
  /* ... */
};
</script>
```
