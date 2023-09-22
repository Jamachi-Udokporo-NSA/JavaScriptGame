function Rocket() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    this.x = 900 / 2;
    this.y = 500;
    this.vx = 0;
    this.vy = 0;
    this.shipWidth = 55; // width of ship from middle. Same for left and right
    this.shipTop = 65; // top height of ship from middle
    this.shipBottom = 57; // bottom height of ship from middle
    this.canvasWidth = 900; // width of canvas
    this.canvasStart = 0; // start width of canvas

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Rocket.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(this.x, this.y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#A69A97";
        context.moveTo(0, 44);
        context.lineTo(-50, 57);
        context.lineTo(-55, 47);
        context.lineTo(-37, 38.5);
        context.lineTo(-37, 25);

        // left small engine curve
        //context.beginPath();
        //context.moveTo(-37, 25);
        context.lineTo(-37, 25);
        context.quadraticCurveTo(-35, 24, -33, 25);
        // using the arcTo() method
        //context.arcTo(-32, 24, -33, 25, 0.5 );
        //context.lineTo(-33, 25);

        //context.moveTo(-33, 25);
        context.moveTo(-33, 25);
        context.lineTo(-33, 37);
        context.lineTo(-17, 30);

        // left big side arc. Different from graph
        //context.moveTo(-17, 30);
        //context.lineTo(-17, 30);
        context.quadraticCurveTo(-28, 20, -20, 0);

        //context.moveTo(-20, 0);
        context.lineTo(-20, 0);
        context.lineTo(-16, 0);
        context.lineTo(-10, -30);
        context.lineTo(-7, -30);
        context.lineTo(-7, -40);
        context.lineTo(-9, -40);
        context.lineTo(-5, -60);

        // nose arc. Different from graph
        //context.moveTo(-5, -60);
        context.lineTo(-5, -60);
        context.quadraticCurveTo(0, -70, 5, -60);

        ///////////////////////// right half /////////////////////////////////////

        //context.moveTo(5, -60);
        context.lineTo(5, -60);
        context.lineTo(9, -40);
        context.lineTo(7, -40);
        context.lineTo(7, -30);
        context.lineTo(10, -30);
        context.lineTo(16, 0);
        context.lineTo(20, 0);

        // right big arc
        //context.moveTo(17, 30);
        //context.lineTo(17, 30);
        context.quadraticCurveTo(28, 20, 17, 30);

        //context.moveTo(17, 30);
        context.lineTo(17, 30);
        context.lineTo(33, 37);
        context.lineTo(33, 25);

        // right small engine curve
        //context.moveTo(37, 25);
        context.lineTo(37, 25);
        context.quadraticCurveTo(32, 24, 33, 25);

        //context.moveTo(37, 25);
        context.lineTo(37, 25);
        context.lineTo(37, 38.5);
        context.lineTo(55, 47);
        context.lineTo(50, 57);
        context.lineTo(0, 44);
        context.moveTo(0, 44); // makes the line to end at 0, 44 or else it closes at last quadratic curve 
        //close the path
        context.closePath();
        context.fill();
        // go ahead and draw the line
        context.stroke();
        //////////////////////// end of base sprite ////////////////


        // bottom left engine. Has 3 curves at the edges //
        context.beginPath();
        context.fillStyle = "#A69A97";
        //context.moveTo(-40, 40);
        context.lineTo(-40, 40);
        context.lineTo(-43, 40);
        // bottom left quadratic curve
        context.quadraticCurveTo(-45, 40, -45, 38); //towards - 42, 40
        context.lineTo(-45, 24);
        // top left quadratic curve
        context.quadraticCurveTo(-45, 22, -43, 22);
        context.lineTo(-27, 22);
        // top right quadratic curve
        context.quadraticCurveTo(-25, 22, -25, 24);
        context.lineTo(-25, 33.5);
        context.fill();
        context.stroke();

        // bottom left engine cone
        context.beginPath();
        //context.fillStyle("#F62020");
        //context.moveTo(-40, 22);
        context.lineTo(-40, 22);
        context.lineTo(-37, 19);
        context.quadraticCurveTo(-35, 16, -33, 19);
        context.lineTo(-30, 22)
        context.fill();
        context.stroke();

        // bottom left engine fastener (rod in the middle)
        context.beginPath();
        //context.moveTo(-37, 38.5);
        context.lineTo(-37, 38.5);
        context.lineTo(-37, 48);
        context.quadraticCurveTo(-35, 50, -33, 48);
        context.lineTo(-33, 37);
        context.fill();
        context.stroke();

        // top left engine. Has 4 curves at edges
        context.beginPath();
        context.moveTo(-10, -30);
        //context.lineTo(-10, -30);
        context.lineTo(-15, -30);
        context.lineTo(-15, -28);
        // bottom right quadratic curve
        context.lineTo(-15, -28);
        context.quadraticCurveTo(-15, -26, -17, -26);
        context.lineTo(-33, -26);
        // bottom left quadratic curve
        context.lineTo(-33, -26);
        context.quadraticCurveTo(-35, -26, -35, -28);
        context.lineTo(-35, -42);
        // top left quadratic curve
        context.lineTo(-35, -42);
        context.quadraticCurveTo(-35, -44, -33, -44);
        context.lineTo(-17, -44);
        // top right quadratic curve
        context.lineTo(-17, -44);
        context.quadraticCurveTo(-15, -44, -15, -42);
        context.lineTo(-15, -40);
        context.lineTo(-9, -40);
        context.fill();
        context.stroke();

        // close top left engine
        context.beginPath();
        //context.moveTo(-15, -40);
        context.lineTo(-15, -40);
        context.lineTo(-15, -30);
        context.fill();
        context.stroke();

        // top left engine cone
        context.beginPath();
        context.moveTo(-30, -44);
        context.lineTo(-27, -47);
        context.quadraticCurveTo(-25, -50, -23, -47);
        context.lineTo(-20, -44)
        context.fill();
        context.stroke();

        // top  right engine. Has 4 curves at edges
        context.beginPath();
        context.moveTo(10, -30);
        context.lineTo(15, -30);
        context.lineTo(15, -28);
        // bottom right quadratic curve
        context.lineTo(15, -28);
        context.quadraticCurveTo(15, -26, 17, -26);
        context.lineTo(33, -26);
        // bottom left quadratic curve
        context.lineTo(33, -26);
        context.quadraticCurveTo(35, -26, 35, -28);
        context.lineTo(35, -42);
        // top left quadratic curve
        context.lineTo(35, -42);
        context.quadraticCurveTo(35, -44, 33, -44);
        context.lineTo(17, -44);
        // top right quadratic curve
        context.lineTo(17, -44);
        context.quadraticCurveTo(15, -44, 15, -42);
        context.lineTo(15, -40);
        context.lineTo(9, -40);
        context.fill();
        context.stroke();

        // close top right engine
        context.beginPath();
        context.moveTo(15, -40);
        context.lineTo(15, -30);
        context.fill();
        context.stroke();

        // top right engine cone
        context.beginPath();
        context.moveTo(30, -44);
        context.lineTo(27, -47);
        context.quadraticCurveTo(25, -50, 23, -47);
        context.lineTo(20, -44)
        context.fill();
        context.stroke();

        // bottom right engine. Has 3 curves at the edges //
        context.beginPath();
        context.moveTo(40, 40);
        context.lineTo(43, 40);
        // bottom left quadratic curve
        context.quadraticCurveTo(45, 40, 45, 38); //towards - 42, 40
        context.lineTo(45, 24);
        // top left quadratic curve
        context.quadraticCurveTo(45, 22, 43, 22);
        context.lineTo(27, 22);
        // top right quadratic curve
        context.quadraticCurveTo(25, 22, 25, 24);
        context.lineTo(25, 33.5);
        context.fill();
        context.stroke();

        // bottom right engine cone
        context.beginPath();
        context.moveTo(40, 22);
        context.lineTo(37, 19);
        context.quadraticCurveTo(35, 16, 33, 19);
        context.lineTo(30, 22)
        context.fill();
        context.stroke();

        // bottom right engine fastener (rod in the middle)
        context.beginPath();
        context.moveTo(37, 38.5);
        context.lineTo(37, 48);
        context.quadraticCurveTo(32, 50, 33, 48);
        context.lineTo(33, 37);
        context.fill();
        context.stroke();

        // lower middle left
        context.beginPath();
        context.moveTo(-17, 30);
        context.lineTo(-2, 23);
        context.moveTo(0, 8);
        context.lineTo(-2, 8);
        context.lineTo(-2, 34);
        context.lineTo(0, 34);
        context.fill();
        context.stroke();

        // lower middle right
        context.beginPath();
        context.moveTo(17, 30);
        context.lineTo(2, 23);
        context.moveTo(0, 8);
        context.lineTo(2, 8);
        context.lineTo(2, 34);
        context.lineTo(0, 34);
        context.fill();
        context.stroke();

        // line through the middle of the ship
        context.beginPath();
        context.moveTo(-20, 0);
        context.lineTo(20, 0);
        context.fill();
        context.stroke();

        // restore the state of the canvas to what it was before our drawing
        context.restore();
    }

    function BottomEngine(context, xposn, yposn, colour) {

    }
     
    function topEngine(context, xposn, yposn, colour) {

    }

    function Fastener(context, xposn, yposn, colour) {

    }

    function Cone(context, xposn, yposn, colour) {

    }

    Rocket.prototype.move = function () {
        // change the x-axis by the x velocity
        this.x += this.vx;
        // change the y-axis by the y velocity
        this.y += this.vy;

        // stop ship from leaving canvas
        // if the ship hits the right edge of the canvas
        if ((this.x + this.shipWidth) > this.canvasWidth) {
            this.x = 845; // 900 - 55 (right width of rocket from middle)
            // if the ship hits the left edge of the canvas
        } else if ((this.x - this.shipWidth) < this.canvasStart) {
            this.x = 55; // 0 + 55 (left width of rocket from middle)
        }
    }

    //public method to set the vector of the rocekt
    Rocket.prototype.setVector = function (vector) {
        //set vx
        this.vx = vector.VX;
        //set vy
        this.vy = vector.VY;
    }

    // set ship velocity to zero
    Rocket.prototype.halt = function () {
        this.vx = 0;
        this.vy = 0;
    }

    // public read only propery for the y posn
    Object.defineProperty(this, 'RY',
        {
            get: function () {
                // return the y posn
                return this.y;
            }
        }
    )

    // public read only propery for the x posn
    Object.defineProperty(this, 'RX',
        {
            get: function () {
                // return the x posn
                return this.x;
            }
        }
    )

    Object.defineProperty(this, 'VX',
        {
            set: function (value) {
                // return the y posn
                this.vx = value;
            }
        }
    )

    // public read only propery for the x posn
    Object.defineProperty(this, 'VY',
        {
            set: function (value) {
                // return the x posn
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
                return this.y - this.shipTop;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return this.y + this.shipBottom;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the x posn less the width
                return this.x - this.shipWidth;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the x posn plus the width
                return this.x + this.shipWidth;
            }
        }
    )

}