import { describe, expect, it } from "vitest";
import { Bullet } from "./Bullet";
import { setupPlane } from "./Plane";

describe("plane", () => {
	const defaultOption = {
		x: 0,
		y: 0,
		speed: 5
	};
	const createplane = () => {
		return setupPlane({}, [], defaultOption);
	};
	it("moveUp", () => {
		const plane = createplane();
		plane.moveUp();
		expect(plane.y).toBe((defaultOption.y -= defaultOption.speed));
	});
	it("moveDown", () => {
		const plane = createplane();
		plane.moveDown();
		expect(plane.y).toBe((defaultOption.y += defaultOption.speed));
	});

	it("moveLeft", () => {
		const plane = createplane();
		plane.moveLeft();
		expect(plane.x).toBe((defaultOption.x -= defaultOption.speed));
	});
	it("moveRight", () => {
		const plane = createplane();
		plane.moveRight();
		expect(plane.x).toBe((defaultOption.x += defaultOption.speed));
	});
});

describe("攻击", () => {
	it("attack", () => {
		const bullets: any[] = [];
		const plane = setupPlane({}, bullets);

		plane.attack();

		expect(bullets.length).toBe(1);
	});
});

describe("run", () => {
	it("移动所有的子弹", () => {
		const bullet = new Bullet();
		bullet.y = 0;
		const bullets = [bullet];
		const plane = setupPlane({}, bullets);

		plane.run();

		expect(bullets[0].y).not.toBe(0);
	});

	it("子弹超过边界后，会移除", () => {
		const bullets: any[] = [];
		const plane = setupPlane({}, bullets, { x: 0, y: 0 });
		plane.attack();

		plane.run();

		expect(bullets.length).toBe(0);
	});
});
