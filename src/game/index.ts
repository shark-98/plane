import { Application } from "pixi.js";
import { setupPlane, type Plane } from "./Plane";
export * from "./Plane";
export * from "./Bullet";

export const game = new Application({
	width: 500,
	height: 500
});

document.body.append(game.view as unknown as Node);

export const initGame = (_plane: any, bullets: any) => {
	const plane = setupPlane(_plane, bullets);

	mainTicker(plane);

	return { plane, bullets };
};
function mainTicker(plane: Plane) {
	game.ticker.add(() => {
		plane.run();
	});
}
