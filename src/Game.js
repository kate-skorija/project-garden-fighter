import { Character } from "./Character";
import { Weapon } from "./Weapon";
import { Monster, Slug } from "./Monster";

export class Game {
  constructor (character) {
    this.character = character;
  }
  giveCharacterStartingWeapon() {
    if(this.character.charClass === "Fighter"){
      let shovel = new Weapon("Shovel", 5, 0);
      this.character.addItem(shovel);
      this.character.equipWeapon(shovel);
    } else if (this.character.charClass === "Wizard") {
      let wateringCan = new Weapon("Watering Can", 0, 5);
      this.character.addItem(wateringCan);
      this.character.equipWeapon(wateringCan);
    } else if (this.character.charClass === "Rogue") {
      let spade = new Weapon("Spade", 3, 3);
      this.character.addItem(spade);
      this.character.equipWeapon(spade);
    }
  }

  battleMonster(monster) {
    if ((this.character.strength + this.character.magic) < monster.powerLevel) {
      this.character.loseHealth(monster.powerLevel - (this.character.strength + this.character.magic));
    } else if ((this.character.strength + this.character.magic) >= monster.powerLevel) {
      this.character.experience += monster.experienceAmount;
    } 
  } 
};
