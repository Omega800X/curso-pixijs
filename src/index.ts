import { Application, Assets, Sprite } from 'pixi.js'
import { manifest } from './assets';

async function init() {
	// Assets.init must only happen once!
	// Pack all your bundles into one manifest!
	await Assets.init({manifest: manifest});

	// Load the bundles you need
	await Assets.loadBundle("twoSprites");
}


const app = new Application<HTMLCanvasElement>({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

init().then(() => {
	const clampy: Sprite = Sprite.from("Dino the dinosaur");

	console.log("Hola mundo!", clampy.width, clampy.height);

	//clampy.anchor.set(0.5);

	clampy.x = 300;
	clampy.y = 300;

	app.stage.addChild(clampy);
});