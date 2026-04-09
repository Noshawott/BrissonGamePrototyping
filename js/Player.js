function Player()
{
    // set up player's starting point
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    // set up player's dimentsions
    this.width = 100;
    this.height = 100;
    this.radius = 50;

    // set players color
    this.color = "#ff0000"

    // set up player's velocity
    this.vx = 0;
    this.vy = 0;

    this.draw = function()
    {
        context.beginPath();
        context.arc(this.x,this.y, this.radius, 0, 360*Math.PI/180, true)
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
        context.restore();
    }

    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}