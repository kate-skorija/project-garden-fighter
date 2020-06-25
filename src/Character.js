export class Character {
  constructor(name, charClass, strength, magic, health) {
    this.name = name;
    this.charClass = charClass;
    this.strength = strength;
    this.magic = magic;
    this.health = health;
    this.experience = 0;
    this.level = 1;
    this.inventory = [];
    this.equipped = [];  
  }

  addItem(item) {
    if(this.inventory.length  < 5){
      this.inventory.push(item);
      return true;
    } else {
      return false;
    }
  }

  dropItem(item) {
    const droppedItem = this.inventory.indexOf(item);
    if (droppedItem >= 0) {
    this.inventory.splice(droppedItem, 1);
    }
  }

  equipWeapon(weapon) {
    if (this.inventory.includes(weapon)){
      this.equipped.push(weapon);
      this.dropItem(weapon);
      this.strength += weapon.strength;
      this.magic += weapon.magic;
    }
  } 

  unequipWeapon(weapon) {
    if (this.equipped.includes(weapon)) {
      this.addItem(weapon);
      this.equipped.splice(this.equipped.indexOf(weapon), 1);
      this.strength -= weapon.strength;
      this.magic -= weapon.magic;
    }
  }

  loseHealth(amount) {
    this.health -= amount;
  }

  gainHealth(amount) {
    this.health += amount;
  }
};
