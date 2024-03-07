import { Container } from "pixi.js";
import { DinoHat } from "./DinoHat";
import { DogBall } from "./DogBall";
import { DogHat } from "./DogHat";

export class Scene extends Container {

    constructor() {
        super();
        
        const dinoWithHat: Container = new DinoHat();
        dinoWithHat.scale.set(0.5);
        dinoWithHat.x = 200;
        dinoWithHat.y = 300;

        const dogWithBall: Container = new DogBall();
        dogWithBall.scale.set(0.8);
        dogWithBall.position.set(1000, 500);
        dogWithBall.angle = -90;
    
        const dogWithHat: Container = new DogHat();
        dogWithHat.position.set(640, 360);
        dogWithHat.scale.set(0.5);
        dogWithHat.rotation = Math.PI;

        this.addChild(dinoWithHat);
        this.addChild(dogWithBall);
	    this.addChild(dogWithHat);
    }
}