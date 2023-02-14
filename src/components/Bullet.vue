<template>
	<Container :x="bullet.x" :y="bullet.y">
		<Sprite :texture="bulletImg"></Sprite>
	</Container>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import bulletImg from "../assets/bullet.png";
import type { Bullet } from "../game";

// eslint-disable-next-line vue/no-setup-props-destructure
const { bullet } = defineProps({
	bullet: {
		type: Object as PropType<Bullet>,
		required: true
	}
});
</script>

<style scoped></style>
