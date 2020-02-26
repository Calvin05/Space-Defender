module objects
{
    export class Enemy extends GameObject
    {
        private _died:boolean = false;
        private _dy: number =0; //speed
        private _dx:number =0;
        private _enemybullets: Array<objects.Bullet>;
        
        // PRIVATE INSTANCE MEMBERS

        
        // PUBLIC PROPERTIES
        set died(status:boolean) {
            this._died = status;
        }

        // CONSTRUCTOR
        constructor()
        {
            super((config.Game.ASSETS.getResult("enemy")));
            this._enemybullets = new Array<objects.Bullet>();

            this.Start();
        }

        private canFire: boolean = true;

        public canShoot(): boolean
        {
            if(this.canFire)
            {
                this.canFire = false;
                return true;
            }
            return false;
            
        }
        // PRIVATE METHODS
        protected _checkBounds(): void {
            if(this.x >= 640 - this.halfWidth)
            {
                this.x = 640 - this.halfWidth;
            }
            if(this.y >=800 + this.height)
            {
                this.Reset();
            }
        }      

        // PUBLIC METHODS
        public Start(): void {
            // this._dy = 3; //speed
            this.Reset();
            
        }

        public Update(): void {
            if(!this._died) {
                this.Move();
                this._checkBounds();
            }
            
        }

        public Reset(): void {
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.y = -this.height;
            this._dx = Math.floor((Math.random() * 4) -2);
            this._dy = Math.floor((Math.random() * 5) +5);
        }

        public Move(): void
        {
            this.x += this._dx;
            this.y += this._dy;
            this.position = new Vector2(this.x, this.y);
        }

    }
}