# _Project Garden Fighter_

#### _JavaScript/jQuery Exercise for [Epicodus](https://www.epicodus.com/), 2020.06.24_

#### By **Sara Kane, Kate Skorija, James Henager**

## Description
This is a garden themed text based rpg.

## Specifications

* _The program should allow the user to name a new character._
  - Input: Name:
  - Output: Name: Trogdor

* _The program should allow the user to select a class for their character_
  - Input: Wizard, Barbarian, Thief
  - Output: => Wizard

* _The program should assign attributes to a character based on class._
  - Input: You have selected Wizard.
  - Output: Wizards have 10 magic and 2 strength.

* _The program should start the character at level 1._
  - Input: New player
  - Output: Experience: 1

* _The program should allow the user to store items in their inventory._
  - Input: You received a sword!
  - Output: The sword is now in your inventory.

* _The program should allow the user to drop items from their inventory._
  - Input: Drop Sword
  - Output: You have dropped the sword.

* _The program should allow the user to equip items in their inventory._
  - Input: Magic Hat
  - Output: Equip Magic Hat

* _The program should affect character's stats when they equip items._
  - Input: The magic hat has been equipped.
  - Output: Your magic has increased by 2!

* _The program should allow the user to unequip equipped items back into their inventory._
  - Input: You have unequipped the magic hat.
  - Output: The magic hat has returned to your inventory.

* _The program should affect character's stats when they unequip items._
  - Input: The magic hat has been unequipped.
  - Output: Your magic has decreased by 2!

* _The program should assign a finite value to the inventory._
  - Input: You tried to pick up a new magic hat.
  - Output: Your inventory is full!

* _The program should present the character with monsters to battle._
  - Input: 
  - Output: A monster has been created.

* _The program should allow the user to choose which monster to fight._
  - Input: Player picks to fight a goblin.
  - Output: Goblin battle initiated.

* _The program should allow the user to win or lose based on the values of their attributes._
  - Input: Player's attributes total value: 10
    Monster's attributes total value: 6
  - Output: Player wins battle.

* _The program should allow the user to add an item to their inventory if they win a battle._
  - Input: You've won a sword.
  - Output: Sword is added to inventory.

* _The program should add experience points to a player if they win a battle._
  - Input: Battle won! 
  - Output: Experience: += 1

* _The program should allow the user to level up after gaining x amount of experience points._
  - Input: Experience: 10 
  - Output: You've leveled up!

* _The program should increase a players attributes if they level up._
  - Input: Level up!
  - Output: All attributes: += 1

* _The program should let players win if they defeat the hardest monster._
  - Input: Player defeats dragon.
  - Output: You've won! Game over.

* _The program should let players lose if they are defeated by a monster._
  - Input: Goblin wins battle.
  - Output: You've lost! Game over.


## Known Bugs
* No known bugs.   

## Setup/Installation Requirements
#### View Online
Visit the GitHub Pages by clicking on the following link or by typing it in your web browser <url>

#### View locally
To clone this repository from your command line you will need [Git](https://git-scm.com/) installed. First navigate in the command line to where you want to clone this repository. 

Then from your command line run:

`$ git clone {repo url}`

Once the repository has been cloned, you can open in your preferred code editor to view and edit the code. 

## Technologies Used
* Visual Studio Code (code editor)
* HTML /CSS
* Bootstrap-3.3.7
* JavaScript/jQuery-3.5.1
* Webpack

## License
This software is licensed under the MIT license. Copyright (c) 2020 Sara Kane, Kate Skorija, James Henager.