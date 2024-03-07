import { Container, Sprite } from "pixi.js";

export class DogHat extends Container {

    constructor() {
        super();

        const dog2: Sprite = Sprite.from("Dog");
        const hat2: Sprite = Sprite.from("Dinohat");
    
        hat2.scale.set(0.4);
        hat2.position.set(30, -130);
    
        this.addChild(dog2);
        this.addChild(hat2);
    }
}