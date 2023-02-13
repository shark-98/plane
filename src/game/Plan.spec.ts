import { describe, expect, it } from "vitest";
import { setupPlane } from "./Plane";

describe("plane", () => {
	const defaultOption = {
		x: 0,
		y: 0,
		speed: 5
	};

	it("moveUp", () => {
		const plane = setupPlane({}, defaultOption);
		plane.moveUp();
		expect(plane.y).toBe((defaultOption.y -= defaultOption.speed));
	});
	it("moveDown", () => {
		const plane = setupPlane({}, defaultOption);
		plane.moveDown();
		expect(plane.y).toBe((defaultOption.y += defaultOption.speed));
	});

	it("moveLeft", () => {
		const plane = setupPlane({}, defaultOption);
		plane.moveLeft();
		expect(plane.x).toBe((defaultOption.x -= defaultOption.speed));
	});
	it("moveRight", () => {
		const plane = setupPlane({}, defaultOption);
		plane.moveRight();
		expect(plane.x).toBe((defaultOption.x += defaultOption.speed));
	});
});
