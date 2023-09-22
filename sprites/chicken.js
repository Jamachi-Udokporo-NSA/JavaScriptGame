function Chicken(x, y) {
    this.x = x; /*500*/
    this.y = y; /*100*/
    this.vx = 2;
    this.vy = 0;
    this.chickenWidth = 40;
    this.chickenHeight = 21;

    Chicken.prototype.draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
        // add color
        context.fillStyle = "#E8F012";
        // left side of chicken
        context.arc(0, 0, 22, 0, Math.PI * 2);
        context.closePath();
        context.fill();
        context.stroke();

        // left wing
        context.moveTo(-21, -5);
        context.fillStyle = "#E8F012";
        context.arcTo(-40, 14, -10, 19, 3);
        context.lineTo(-19, 11);
        context.fill();
        context.stroke();

        // right wing 
        context.moveTo(21, -5);
        context.fillStyle = "#E8F012";
        context.arcTo(40, 14, 10, 19, 3);
        context.lineTo(19, 11);
        context.fill();
        context.stroke();

        // left eye
        //context.moveTo(-10, -10);
        //context.lineTo(-10, -5);
        //context.stroke();

        context.restore();
    }

    Chicken.prototype.move = function () {
        // change the x-axis by the x velocity
        this.x += this.vx;
        // change the y-axis by the y velocity
        this.y += this.vy;
    }

    // method to change direction of chicken
    Chicken.prototype.sideToSide = function () {
        // multiply the velocity by minus(-) to change direction
        this.vx *= -1;
    }

    //public method to set the vector of the square
    Chicken.prototype.setVector = function (vector) {
        //set vx
        this.vx = vector.VX;
        //set vy
        this.vy = vector.VY;
    }

    // public read only propery for RY 
    Object.defineProperty(this, 'RY',
        {
            get: function () {
                // return the y posn
                return this.y;
            }
        }
    )

    Object.defineProperty(this, 'RX',
        {
            get: function () {
                // return the x posn
                return this.x;
            }
        }
    )

    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the y posn less the height
                return this.y - this.chickenHeight;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return this.y + this.chickenHeight;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the x posn less the width
                return this.x - this.chickenWidth;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the x posn plus the width
                return this.x + this.chickenWidth;
            }
        }
    )
}