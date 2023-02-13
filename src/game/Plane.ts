interface Plane {
	x: number;
	y: number;
	speed: number;
	moveUp: () => void;
	moveDown: () => void;
	moveLeft: () => void;
	moveRight: () => void;
}

const defaultOption = {
	x: 0,
	y: 0,
	speed: 10
};

export function setupPlane(plane: any, options?: any): Plane {
	Object.assign(plane, defaultOption, options);

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

	return plane;
}
