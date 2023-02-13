<template>
	<Container>
		<Sprite :texture="PlaneImg" :x="Plane.x" :y="Plane.y"></Sprite>
	</Container>
</template>

<script setup lang="ts">
import PlaneImg from "../assets/plane.png";
import { reactive } from "vue";
import { setupPlane } from "../game";

const Plane = setupPlane(reactive({}));

window.addEventListener("keydown", e => {
	switch (e.code) {
		case "ArrowUp":
			Plane.moveUp();
			break;
		case "ArrowDown":
			Plane.moveDown();
			break;
		case "ArrowLeft":
			Plane.moveLeft();
			break;
		case "ArrowRight":
			Plane.moveRight();
			break;

		default:
			break;
	}
});
</script>
