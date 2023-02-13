import { Application } from "pixi.js"

export const game = new Application({
  width: 500,
  height: 500
})

document.body.append(game.view as unknown as Node)
