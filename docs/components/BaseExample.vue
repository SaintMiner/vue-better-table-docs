<template>
	<div class="vue-better-table">
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.vue-better-table {
	margin-top: 16px;

	input[type=checkbox] {
		border: 1px solid !important;
		border-color: rgb(147 197 253 / var(--tw-border-opacity))!important;
	}
	input[type=checkbox]:disabled {
		border-color: rgb(226 232 240 / var(--tw-border-opacity))!important;
	}

	td {
		border: unset;
	}

	th {
		border: unset;
		font-size: unset;
		background-color: unset !important;
	}

	table {
		display: table !important;
		margin: 0px;
	}

	tr {
		border-top: unset;
		transition: unset;
	}

	tr:nth-child(2n) {
		background-color: var(--vp-c-bg-soft) unset !important ;
	}
	.hover\:bg-gray-100:hover {
		background-color: rgb(243 244 246 / var(--tw-bg-opacity)) !important;
	}
}
</style>
