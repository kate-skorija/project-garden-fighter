import { Character } from './../src/Character.js';
import { Weapon } from './../src/Weapon.js';

describe('Character', () => {
  let wizard;
  let fighter;
  let rogue;
  let character;
  let wateringCan;

  beforeEach(() => {
    wizard = new Character("Gandalf", "Wizard", 1, 5, 15);
    wateringCan = new Weapon("Watering Can", 0, 5);
  });

  test('The program should allow the user to name a new character.', () => {
    expect(wizard.name).toEqual("Gandalf");
  });

  test('The program should allow the user to select a class for their character', () => {
    expect(wizard.charClass).toEqual("Wizard");
  });

  test('The program should allow the user to store items in their inventory', () => {
    wizard.addItem("slug potion");
    expect(wizard.inventory).toContain("slug potion");
  });

  test('The program should allow the user to drop items from their inventory', () => {
    wizard.addItem("flower seeds");
    wizard.addItem("slug potion");
    wizard.addItem("soil");
    wizard.dropItem("slug potion");
    expect(wizard.inventory).toEqual(expect.not.arrayContaining(["slug potion"]));
  });

  test('The program should allow the user to equip an item from their inventory', () => {
    wizard.addItem(wateringCan);
    wizard.equipWeapon(wateringCan);
    expect(wizard.equipped).toContain(wateringCan);
  });

  test('The program should allow the user to unequip items back into their inventory', () => {
    wizard.addItem(wateringCan);
    wizard.equipWeapon(wateringCan);
    wizard.unequipWeapon(wateringCan);
    expect(wizard.inventory).toContain(wateringCan);
  });

  test('The program should assign a finite value to the inventory', () => {
    wizard.addItem("flower seeds");
    wizard.addItem("slug potion");
    wizard.addItem("soil");
    wizard.addItem(wateringCan);
    wizard.addItem("mushroom friend");
    expect(wizard.addItem("honey")).toBe(false);
  });

  test('The program should deduct an amount from the players health', () => {
    wizard.loseHealth(5);
    expect(wizard.health).toBe(10);
  });

  test('The program should allow the player character to gain health', () => {
    wizard.gainHealth(5);
    expect(wizard.health).toBe(20);
  });
});