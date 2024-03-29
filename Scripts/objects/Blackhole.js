"use strict";
var objects;
(function (objects) {
    class Blackhole extends objects.GameObject {
        constructor() {
            super(config.Game.ASSETS.getResult("Blackhole"), 0, 0, true);
            this.Start();
        }
        _checkBounds() {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        }
        _move() {
            this.position = objects.Vector2.add(this.position, this.velocity);
        }
        Start() {
            this._verticalSpeed = 5; // 5 px per frame
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        }
        Update() {
            this.rotation += 10;
            this._move();
            this._checkBounds();
        }
        Reset() {
            let randomx = this.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randomx, -this.height);
        }
        RandomRange(min, max) {
            return Math.random() * (max - min + 1) + min;
        }
    }
    objects.Blackhole = Blackhole;
})(objects || (objects = {}));
//# sourceMappingURL=Blackhole.js.map