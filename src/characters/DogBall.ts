import { Container, Sprite } from "pixi.js";

export class DogBall extends Container {

    constructor() {
        super();
        const dog: Sprite = Sprite.from("Dog");
        const basketball: Sprite = Sprite.from("Basketball");
        basketball.position.set(-100, 130);
        basketball.scale.set(0.5);
        this.addChild(dog);
        this.addChild(basketball);
    }
}