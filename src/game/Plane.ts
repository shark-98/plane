import { Bullet } from "./Bullet";

export interface Plane {
	x: number;
	y: number;
	speed: number;
	moveUp: () => void;
	moveDown: () => void;
	moveLeft: () => void;
	moveRight: () => void;
	attack: () => void;
	run: () => void;
}

const defaultOption = {
	x: 0,
	y: 0,
	speed: 10
};

export function setupPlane(plane: any, bullets: Bullet[], options?: any) {
	plane.bullets = bullets;
	Object.assign(plane, defaultOption, options);

	initAttack(plane, bullets);
	initRun(plane, bullets);
	initMove(plane);

	return plane;
}

function initAttack(plane: Plane, bullets: Bullet[]) {
	plane.attack = () => {
		const bullet = new Bullet();
		bullet.x = plane.x + 22;
		bullet.y = plane.y;

		bullet.onDestory = () => {
			const index = bullets.indexOf(bullet);
			bullets.splice(index, 1);
		};

		bullets.push(bullet);
	};
}

function initRun(plane: Plane, bullets: Bullet[]) {
	plane.run = () => {
		bullets.forEach(bullet => {
			bullet.move();
		});
	};
}

function initMove(plane: Plane) {
	plane.moveUp = function moveUp() {
		plane.y -= plane.speed;
	};
	plane.moveDown = function moveDown() {
		plane.y += plane.speed;
	};
	plane.moveLeft = function moveLeft() {
		plane.x -= plane.speed;
	};
	plane.moveRight = function moveRight() {
		plane.x += plane.speed;
	};
}
