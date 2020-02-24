module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _background: objects.Background;
        private endLabel:objects.Label;
        private _backButton:objects.Button;
        // private  _ocean:objects.Ocean;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.endLabel = new objects.Label();
            this._background = new objects.Background();
            this._backButton = new objects.Button();
            // this._ocean = new objects.Ocean();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this._background = new objects.Background();
            this.endLabel = new objects.Label("Game Over", "80px","Consolas", "#FFFFFF", 320, 200, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("returnButton"), 320, 400, true);
           
            this.Main();
        }        
        
        public Update(): void 
        {
            // this._ocean.Update();
        }
        
        public Main(): void {
            // this.addChild(this._ocean);
            this.addChild(this._background);
            this.addChild(this.endLabel);
    
            this.addChild(this._backButton);
    
            this._backButton.on("click", function() {
                config.Game.SCENE_STATE = scenes.State.PLAY;
                createjs.Sound.stop();
            });
        }

        
    }
}