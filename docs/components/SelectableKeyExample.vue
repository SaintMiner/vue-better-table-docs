<template>
	<BaseExample>
		<div> Selected: {{ selected }} </div>

		<BetterTable 
      selectable
			key-column="name"
			v-model="selected"
      :structure="tableStructure"
      :data="tableData"
    />
	</BaseExample>
</template>

<script>
import BaseExample from "./BaseExample.vue";
/* Import component */
import BetterTable from "vue-better-table";
/* Import styles */
import "vue-better-table/style.css";

import tableStructure from "../json/table-structure.json";
import tableData from "../json/table-data.json";

export default {
	components: {
		BaseExample,
		BetterTable,
	},

	data() {
		return {
			selected: [],
			tableStructure,
			tableData,
		};
	},
};
</script>

<style></style>
