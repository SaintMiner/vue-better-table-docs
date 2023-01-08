<script setup>
  import DataRowNumExample from "./components/DataRowNumExample.vue";
  import DataRowNumPaginationExample from "./components/DataRowNumPaginationExample.vue";
</script>

# Misc

## Data row num

Number of row can be enabled by `data-row-num` property

### Example

<DataRowNumExample></DataRowNumExample>

### Vue code

```vue{6}
<template>
	<!-- ... -->
	<BetterTable
    :structure="tableStructure"
    :data="tableData"
    data-row-num
  />
	<!-- ... -->
</template>
```

## Data row num with pagination

Numbering also will continue on the pagination

### Example

<DataRowNumPaginationExample></DataRowNumPaginationExample>

### Vue code

```vue{6,7}
<template>
	<!-- ... -->
	<BetterTable
    :structure="tableStructure"
    :data="tableData"
    data-row-num
    pagination
  />
	<!-- ... -->
</template>
```
