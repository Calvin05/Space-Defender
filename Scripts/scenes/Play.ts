module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        //privete _startButton:objects.Button;
        private _player:objects.Player;
        private _background: objects.Background;
        // private _enemy1:objects.Enemy;
        // private _enemy2:objects.Enemy;
        // private _enemy3:objects.Enemy;
        private _level:objects.Label;
        private _enemyNum?:number;
        private _ememies:objects.Enemy[];
        private _playBackSound: createjs.PlayPropsConfig;
        //private _collision: createjs.Sound;
        //private _background:createjs.Bitmap;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this._player = new objects.Player;
            this._level = new objects.Label;
            this._ememies = new Array<objects.Enemy>();
            this._background = new objects.Background();
            this._playBackSound= new createjs.PlayPropsConfig();
            //this._collision = new createjs.Sound();


            this.Start();
        }

        // PUBLIC METHODS

        //initilize 
        public Start(): void 
        {
            this._background = new objects.Background();
            this._level = new objects.Label("Level : 1", "15px","Consolas", "#000000", 50, 20, true);

            //unlimited background sound
            this._playBackSound= new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.5});
            createjs.Sound.play("playSound", this._playBackSound)
            //this._collision = new createjs.Sound;

            this._ememies = new Array<objects.Enemy>();
            this._enemyNum =2;
            //add enemies
            for(let count = 0; count < this._enemyNum; count++)
            {
                this._ememies[count] = new objects.Enemy();
            }

            // this._enemy2 = new objects.Enemy;
            // this.nextButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 320, 400, true);
            this.Main();
        }        
        
        public Update(): void 
        {
            this._background.Update();
            this._player.Update();
            this._ememies.forEach(enemy => {
                enemy.Update();
                //check collision player and enemies
                managers.Collision.Check(this._player, enemy);
                if(enemy.isColliding)
                {
                    createjs.Sound.play("crashSound");
                    //createjs.Sound.stop();
                }
            });
            //this._enemy1.Update();
            // this._enemy2.Update();
        }
        
        public Main(): void {
            // adds background to the stage
            this.addChild(this._background);
            this.addChild(this._level);
            this._player = new objects.Player();
            this.addChild(this._player);
            this._ememies.forEach(enemy => {
                this.addChild(enemy);
            });
        }//end public Main() method
    }//end class
}//end module
            //Update
            // if (this._enemy1.y == 480)
            // {
            //     this._enemy1.y = 100;
            // } else
            // {
            //     this._enemy1.y += 1;
            // }

            // if (this._enemy2.y == 480)
            // {
            //     this._enemy2.y = 50;
            // } else
            // {
            //     this._enemy2.y += 2;
            // }

            // if (this._enemy3.y == 480)
            // {
            //     this._enemy3.y = 50;
            // } else
            // {
            //     this._enemy3.y += 2.5;
            // }
            // this._enemy1.position = new objects.Vector2(this._enemy1.x, this._enemy1.y);
            // this._enemy2.position = new objects.Vector2(this._enemy2.x, this._enemy2.y);
            // this._enemy3.position = new objects.Vector2(this._enemy3.x, this._enemy3.y);
            // console.log("player: " + this._player.x + " " +this._player.y);
            // console.log(this._enemy3.x, this._enemy3.y);
            // managers.Collision.AABBCheck(this._player, this._enemy1);
            // managers.Collision.AABBCheck(this._player, this._enemy2);
            //managers.Collision.AABBCheck(this._player, this._ememies[10]);


            // main
            // this._enemy1 = new objects.Enemy();
            // this._enemy1.x = 150;
            // this._enemy1.y = 100;
            //this.addChild(this._enemy1);

            // this._enemy2 = new objects.Enemy();
            // this._enemy2.x = 280;
            // this._enemy2.y = 50;
            // this.addChild(this._enemy2);

            // this._enemy3 = new objects.Enemy();
            // this._enemy3.x = 450;
            // this._enemy3.y = 70;
            // this._enemy3.position = new objects.Vector2(this._enemy3.x, this._enemy3.y);
            // this.addChild(this._enemy3);