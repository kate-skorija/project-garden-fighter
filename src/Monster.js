export class Monster {
  constructor(monstClass, powerLevel, experienceAmount) {
    this.monstClass = monstClass;
    this.powerLevel = powerLevel;
    this.experienceAmount = experienceAmount;
  }
}

export class Slug extends Monster {
  constructor(color){
    super("Slug", 2, 5);
    this.color = color;
  }

}