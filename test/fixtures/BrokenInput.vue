<template>
	<MyInput :disabled="true" :title="'static'" />
</template>

<script>
export default {
	name: 'BrokenInput',
	data() {
		return { count: 1 };
	},
	mounted() {},
	destroyed() {},
	methods: {
		async load(value) {
			value = 2;
			switch (value) {
				case 2:
					break;
			}
			const result = value;
			return result;
		}
	}
};
</script>
