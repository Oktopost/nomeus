<template>
	<MyInput :disabled="true" :title="'static'" />
</template>

<script>
export default {
	data() {
		return { count: 1 };
	},
	name: 'BrokenInput',
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
