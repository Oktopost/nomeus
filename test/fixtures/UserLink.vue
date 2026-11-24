<script setup>
import { computed } from 'vue';

const props = defineProps({ label: String, html: String });

const title = computed(() => {
	if (!props.label) {
		return '';
	}

	return props.label.trim();
});
</script>

<template>
	<a v-html="html" class="link" href="/" :title="title" :aria-label="title"></a>
</template>
