import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container {

    constructor() {
        super();
        
        const dino: Sprite = Sprite.from("Dino the dinosaur");
        const hat: Sprite = Sprite.from("Dinohat");
        
        hat.scale.set(0.5);
        hat.position.set(-20, -110);

        this.addChild(dino);
	    this.addChild(hat);
    }
}