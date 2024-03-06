import { Application, Assets, Container, Sprite } from 'pixi.js'
import { manifest } from './assets';

async function init() {
	// Assets.init must only happen once!
	// Pack all your bundles into one manifest!
	await Assets.init({ manifest: manifest });

	// Load the bundles you need
	await Assets.loadBundle("sprites");
}


const app = new Application<HTMLCanvasElement>({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", () => {
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";
});

window.dispatchEvent(new Event("resize"));

init().then(() => {
	const dino: Sprite = Sprite.from("Dino the dinosaur");
	const hat: Sprite = Sprite.from("Dinohat");
	

	hat.scale.set(0.5);
	hat.position.set(-20, -110);

	const dinoWithHat: Container = new Container();
	dinoWithHat.addChild(dino);
	dinoWithHat.addChild(hat);

	dinoWithHat.scale.set(0.5);
	dinoWithHat.x = 200;
	dinoWithHat.y = 300;

	

	const dog: Sprite = Sprite.from("Dog");
	const basketball: Sprite = Sprite.from("Basketball");
	basketball.position.set(-100, 130);
	basketball.scale.set(0.5);

	const dogWithBall: Container = new Container();
	dogWithBall.addChild(dog);
	dogWithBall.addChild(basketball);

	dogWithBall.scale.set(0.8);
	dogWithBall.position.set(1000, 500);
	dogWithBall.angle = -90;


	const dog2: Sprite = Sprite.from("Dog");
	const hat2: Sprite = Sprite.from("Dinohat");

	hat2.scale.set(0.4);
	hat2.position.set(30, -130);

	const dogWithHat: Container = new Container();
	dogWithHat.addChild(dog2);
	dogWithHat.addChild(hat2);

	dogWithHat.position.set(640, 360);
	dogWithHat.scale.set(0.5);
	dogWithHat.rotation = Math.PI;

	app.stage.addChild(dinoWithHat);
	app.stage.addChild(dogWithBall);
	app.stage.addChild(dogWithHat);
});