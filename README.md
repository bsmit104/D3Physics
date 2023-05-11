# D3Physics  
therealc3po and bsmit104 are both my accounts, code for player movement was used from Adam Smith's asteroids example. I also used https://www.codecaptain.io/blog/game-development/shooting-bullets-phaser-3-using-arcade-physics-groups/696 to create fireball shooting.
GAME SATISFIES REQUREMENTS, SHOOTING DOES NOT CURRENTLY COLLIDE WITH OBSTACLES, FLIES THROUGH,  
I WILL ALSO ADD ENEMY SHIPS, REQUIREMENTS ARE MET THO
  
## PROTOTYPE  
https://docs.google.com/presentation/d/1opeTQ_UDd1pT6JNuLcInDx1xT_D0G2mRhegaeEswd4g/edit?usp=sharing  

## LINK TO PLAY

## DESCRIPTION  
All assets were created using Pixilart.com. I took inspiration for the game mechanics from Gravitar the Atari arcade game. The requirement of scene to contextualize gameplay and separate scene is satisfied in the mini level selection in the actual game play. Players will have a choice to fly to a planet to trigger one of the mini games that make up the whole game. This concept was confirmed to meet the requirement in class. Each of the mini games include gravity physics where the player will fall if not flying. There are x and y inputs for continuouse inputs and players use space bar, left, right, and up arrows for discrete inputs. Player will die after 3 collisions. Houses destroy upon being hit with fire balls.
  
## Process requirements:  
Your GitHub repository must show a history of incremental commits with useful commit messages, tracing back to an empty repository at the start.  

Your README.md file describes:  

- Where to play your game (a link to your deployed game)  
- How your design satisfies the experience requirements below  
- How all of your data assets (if you have any) were created  
SEE ABOVE
## Experience requirements  
The game uses both continuous and discrete inputs from the player  

The player’s goal can only be achieved indirectly (by allowing the physics engine to move key objects into position/contact).  

3+ physics-based gameplay scenes (possibly implemented with a single Phaser Scene subclass).  

Other scenes are used to separate and contextualize the gameplay scenes
