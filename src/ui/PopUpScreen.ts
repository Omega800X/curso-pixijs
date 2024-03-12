import { Container, NineSlicePlane, Sprite, Text, Texture } from "pixi.js";

export class PopUpScreen extends Container {
    constructor() {
        super();

        const box: NineSlicePlane = new NineSlicePlane(
            Texture.from("OrangeBox"),
            35, 35, 35, 35
        );
        box.scale.set(0.35);

        const text: Text = new Text(
            "Level Complete",
            {
                fontSize: 60, 
                fill: 0xFFFFFF, 
                fontFamily: "Arial"
            }
        );
        text.anchor.set(0.5);
        text.position.set(265, 100);

        const closeButton: Sprite = Sprite.from("RedButton");
        closeButton.anchor.set(0.5);
        closeButton.scale.set(0.25);
        closeButton.position.set(500, 30);

        const star1: Sprite = Sprite.from("YellowStar");
        star1.anchor.set(0.5);
        star1.scale.set(0.35);
        star1.position.set(125, 240); 
        
        const star2: Sprite = Sprite.from("YellowStar");
        star2.anchor.set(0.5);
        star2.scale.set(0.35);
        star2.position.set(265, 240);  

        const star3: Sprite = Sprite.from("GreyStar");
        star3.anchor.set(0.5);
        star3.scale.set(0.35); 
        star3.position.set(405, 240); 
        
        const coin: Sprite = Sprite.from("Coin");
        coin.anchor.set(0.5);
        coin.scale.set(0.6);
        coin.position.set(125, 400);

        const blackBox: NineSlicePlane = new NineSlicePlane(
            Texture.from("BlackBox"),
            35, 35, 35, 35
        );
        
        blackBox.position.set(200, 325);
        blackBox.height = 150;
        blackBox.width = 275;

        const text2: Text = new Text(
            "56",
            {
                fontSize: 60, 
                fill: 0xFFFFFF, 
                fontFamily: "Arial"
            }
        );
        text2.anchor.set(0.5);
        text2.position.set(338, 400);

        this.addChild(box);
        this.addChild(text);
        this.addChild(closeButton);
        this.addChild(star1);
        this.addChild(star2);
        this.addChild(star3);
        this.addChild(coin);
        this.addChild(blackBox);
        this.addChild(text2);
    }
}