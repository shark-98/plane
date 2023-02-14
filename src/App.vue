<script setup lang="ts">
import Plane from "./components/Plane.vue";
import Bullet from "./components/Bullet.vue";
import { initGame } from "./game";
import { reactive } from "vue";

const { plane, bullets } = initGame(reactive({}), reactive([]));
</script>

<template>
	<Container>
		<Plane :plane="plane"></Plane>
		<Bullet v-for="bullet in bullets" :key="bullet" :bullet="bullet"></Bullet>
	</Container>
</template>
