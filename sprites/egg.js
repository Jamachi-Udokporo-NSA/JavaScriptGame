function Egg(x, y, randTime, dropped) {
    chicken = new Chicken();
    this.x = x; //200,
    this.y = y; //50,
    this.vx = chicken.vx; // give the egg the same velocity as the chicken
    this.vy = 0;
    this.randTime = randTime;
    this.eggBottom = 25 / 2;
    this.eggTop = 13 / 2;
    this.eggWidth = 14 / 2;
    // dropped status of egg
    this.dropped = dropped;

    Egg.prototype.draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
        // give the egg a color
        context.fillStyle = "#ffffff";
        // left half of egg
        context.moveTo(-6 / 2, -8 / 2); // dividing the coordinates by 2 to reduce the size
        // left curve of egg
        context.quadraticCurveTo(-18 / 2, 10 / 2, -10 / 2, 20 / 2);
        //bottom of egg
        //context.moveTo(-10, 20);
        context.arcTo(0 / 2, 30 / 2, 10 / 2, 20 / 2, 13 / 2);

        // right half of egg
        //context.moveTo(10, 20);
        // right curve of egg
        context.quadraticCurveTo(18 / 2, 10 / 2, 6 / 2, -8 / 2);
        context.moveTo(6 / 2, -8 / 2);

        //top of egg
        context.arcTo(0 / 2, -18 / 2, -6 / 2, -8 / 2, 7 / 2);
        context.moveTo(-6 / 2, -8 / 2);
        context.closePath();
        //context.strokeStyle = "#FFFFFF";
        context.stroke();
        context.fill();
        context.restore();
    }

    // function to move the chicken
    Egg.prototype.move = function () {
        this.x += this.vx;
        this.y += this.vy;
    }

    Egg.prototype.dropEggs = function() {
        var randoTime = Math.random() * 90,
            temp = Math.floor(randoTime),
            count = 0;
        for (var count = 0; count < eggs.count; count++) {
            if (eggs.item(count).randTime == temp) {
                // stop following chicken
                eggs.item(count).vx = 0;
                // drop the egg
                eggs.item(count).vy = 2;
            }
        }
    }

    // method to change direction of chicken
    Egg.prototype.sideToSide = function () {
        // multiply the velocity by minus(-) to change direction
        this.vx *= -1;
    }

    Egg.prototype.setVector = function (vector) {
        //set vx
        this.vx = vector.VX;
        //set vy
        this.vy = vector.VY;
    }

    // method to remove all velocity applied to the egg
    Egg.prototype.halt = function () {
        // set vx to zero
        this.vx = 0;
        // set vy to zero
        this.vy = 0;
    }

    //public method to set the vector of the laser
    Egg.prototype.accelerate = function (Acceleration) {
        //set vx
        this.vx += Acceleration.AX;
        //set vy
        this.vy += Acceleration.AY;
    }

    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the y posn less the height
                return this.y - this.eggTop;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return this.y + this.eggBottom;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the x posn less the width
                return this.x - this.eggWidth;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the x posn plus the width
                return this.x + this.eggWidth;
            }
        }
    )

}