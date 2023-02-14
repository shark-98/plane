<template>
	<Container :x="plane.x" :y="plane.y">
		<Sprite :texture="PlaneImg"></Sprite>
	</Container>
</template>

<script setup lang="ts">
import PlaneImg from "../assets/plane.png";
import type { PropType } from "vue";
import type { Plane } from "../game";

// eslint-disable-next-line vue/no-setup-props-destructure
const { plane } = defineProps({
	plane: {
		type: Object as PropType<Plane>,
		required: true
	}
});

window.addEventListener("keydown", e => {
	if (e.code === "Space") {
		plane.attack();
	}

	switch (e.code) {
		case "ArrowUp":
			plane.moveUp();
			break;
		case "ArrowDown":
			plane.moveDown();
			break;
		case "ArrowLeft":
			plane.moveLeft();
			break;
		case "ArrowRight":
			plane.moveRight();
			break;

		default:
			break;
	}
});
</script>
