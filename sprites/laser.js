function Laser(x, y, hit) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 10;
    this.laserWidth = 2; // width from middle
    this.laserHeight = 11; // height from middle
    this.colour = "";
    this.hit = hit;

    Laser.prototype.draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
        context.fillStyle = this.colour;
        context.moveTo(-2, -10);
        context.lineTo(-2, 10);
        context.quadraticCurveTo(0, 12, 2, 10);
        context.lineTo(2, -10);
        context.quadraticCurveTo(2, -12, -2, -10);
        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
    }

    Laser.prototype.laserColour = function (context) {
        if (this.y < 300) {
            this.colour = "#FF2D00" // red
        }
        else {
            this.colour = "#23EC44"; // green
        }
    }

    function laserColour(context) {
        if (this.y > 600) {
            context.fillStyle = "#FF2D00";
            laserRed++;
        }
    }

    // function to move the ship
    Laser.prototype.move = function () {
        // add velocity to y
        this.y -= this.vy;
    }

    Laser.prototype.hit = function () {
        this.hit = true;
    }

    Laser.prototype.setVector = function (vector) {
        //set vx
        this.vx = vector.VX;
        //set vy
        this.vy = vector.VY;
    }

    Object.defineProperty(this, 'VX',
        {
            //getter
            get: function () {
                //return the x posn
                return this.vx;
            },
            set: function (value) {
                this.vx = value;
            }
        }
    )

    Object.defineProperty(this, 'VY',
        {
            //getter
            get: function () {
                //return the y posn
                return this.vy;
            },

            set: function (value) {
                this.vy = value;
            }
        }
    )

    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the y posn less the height
                return this.y - this.laserHeight;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return this.y + this.laserHeight;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the x posn less the width
                return this.x - this.laserWidth;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the x posn plus the width
                return this.x + this.laserWidth;
            }
        }
    )

}