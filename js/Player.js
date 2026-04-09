function GameObject(x,y,h,w,color)
{
    // set up player's starting point
    if(x==undefined)
        this.x = canvas.width/2;
    else
        this.x = x;
    if(y==undefined)
        this.y = canvas.height/2;
    else
        this.y = y;
    // set up player's dimentsions
    if(w==undefined)
        this.width = 100;
    else
        this.width = w;
    if(h==undefined)
        this.height = 100
    else
        this.height = h;
    this.radius = 50;

    // set players color
    if(color==undefined)
        this.color = "#ff0000";
    else
        this.color = color;

    // set up player's velocity
    this.vx = 0;
    this.vy = 0;

    this.drawCircle = function()
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