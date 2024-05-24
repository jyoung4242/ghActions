import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { Engine, DisplayMode, TileMap, ImageSource, SpriteSheet, Camera, Vector, Loader, Actor, Graphic } from "excalibur";
//@ts-ignore
import rick from "./assets/rick.gif";
const model = {};

const myImage = new ImageSource(rick);
const template = `
<style> 
    canvas{ 
        position: fixed; 
        top:50%; 
        left:50%; 
        transform: translate(-50% , -50%); 
    }
</style> 
<div> 
    <canvas id='cnv'> </canvas> 
</div>`;
await UI.create(document.body, model, template).attached;

const loader = new Loader();
loader.addResource(myImage);
const game = new Engine({
  width: 800, // the width of the canvas
  height: 600, // the height of the canvas
  canvasElementId: "cnv", // the DOM canvas element ID, if you are providing your own
  displayMode: DisplayMode.Fixed, // the display mode
});

const myActor = new Actor({
  pos: new Vector(game.canvas.width / 2, game.canvas.height / 2),
  width: 150,
  height: 150,
});
myActor.graphics.use(myImage.toSprite());

await game.start(loader);
game.add(myActor);
