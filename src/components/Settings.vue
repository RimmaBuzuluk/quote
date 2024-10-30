<template>
	<div>
		<h3>Settings</h3>
		<select v-model="localLanguage" @change="updateLanguage">
			<option value="en">English</option>
			<option value="uk">Ukrainian</option>
		</select>
	</div>
</template>

<script>
export default {
	props: ['language'],
	computed: {
		localLanguage: {
			get() {
				return this.language;
			},
			set(value) {
				this.$emit('update:language', value);
			},
		},
	},
	methods: {
		updateLanguage() {
			this.$emit('update:language', this.localLanguage);
		},
	},
};
</script>

<style scoped></style>
