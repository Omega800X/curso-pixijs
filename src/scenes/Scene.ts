import { AnimatedSprite, Container, Graphics, NineSlicePlane, Text, Texture } from "pixi.js";
import { DinoHat } from "../characters/DinoHat";
import { DogBall } from "../characters/DogBall";
import { DogHat } from "../characters/DogHat";

export class Scene extends Container {

    constructor() {
        super();
        
        // Class extending from Container
        const dinoWithHat: DinoHat = new DinoHat();
        dinoWithHat.scale.set(0.5);
        dinoWithHat.x = 200;
        dinoWithHat.y = 300;

        const dogWithBall: DogBall = new DogBall();
        dogWithBall.scale.set(0.8);
        dogWithBall.position.set(1000, 500);
        dogWithBall.angle = -90;
    
        const dogWithHat: DogHat = new DogHat();
        dogWithHat.position.set(640, 360);
        dogWithHat.scale.set(0.5);
        dogWithHat.rotation = Math.PI;

        // Animated sprite
        const movingChar: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("CharW0"),
                Texture.from("CharW1"),
                Texture.from("CharW2"),
                Texture.from("CharW3"),
                Texture.from("CharW4"),
                Texture.from("CharW5"),
                Texture.from("CharW6"),
                Texture.from("CharW7"),
            ], 
            true
        );

        movingChar.scale.set(4);
        movingChar.play();
        movingChar.animationSpeed = 0.25;

        // Graphics
        const myGraph: Graphics = new Graphics();
        myGraph.lineStyle(
            {
                color: 0xFF00FF, 
                width: 10, 
                alpha: 1
            }
        );
        myGraph.moveTo(0, 0);
        myGraph.lineTo(300, 500);
        myGraph.lineTo(300, 100);
        myGraph.lineTo(0, 0);
        
        myGraph.clear();

        myGraph.lineStyle(
            {
                color: 0xFF00FF, 
                width: 10, 
                alpha: 1
            }
        );
        myGraph.beginFill(0x00FF00, 1);
        myGraph.drawCircle(0, 0, 100);
        myGraph.position.set(640, 360);
        myGraph.endFill();
        myGraph.drawCircle(50, 50, 100);

        // Text, not the best practice, better ones in other videos
        const myText: Text = new Text("Hello World", {fontSize: 150, fill: 0xFF0000, fontFamily: "D050000L"});

        myText.text = "asdsdaasd";
        myText.angle = 40;
        myText.scale.set(1);
        myText.position.x = 500;

        // Nine-Slice Plane
        //const panel: Sprite = Sprite.from("Tile");
        //panel.scale.set(5, 3);
        const panel: NineSlicePlane = new NineSlicePlane(
            Texture.from("Tile"),
            35, 35, 35, 35
        );
        panel.width = 500;
        panel.height = 300;
        panel.scale.set(2);
        panel.position.x = 100;
        panel.position.y = 100;

        this.addChild(dinoWithHat);
        this.addChild(dogWithBall);
	    this.addChild(dogWithHat);
        this.addChild(movingChar);
        this.addChild(myGraph);
        this.addChild(myText);
        this.addChild(panel);
    }
}