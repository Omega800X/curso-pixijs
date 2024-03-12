import { Container } from "pixi.js";
import { PopUpScreen } from "../ui/PopUpScreen";

export class TestScene extends Container {

    constructor() {
        super();
        const popUp : PopUpScreen = new PopUpScreen();
        popUp.position.set(390, 60);
        this.addChild(popUp);
    }
}