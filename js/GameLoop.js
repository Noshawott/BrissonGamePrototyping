var canvas, context, player, Score = 0, timer, interval = 1000/60;

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")

var p1Score = 0, p2Score = 0;

var d = false;
var a = false;

var frictionX = 1;
var frictionY = 1;
var gravity = 0.3;



ball = new GameObject(canvas.width/2,canvas.height/2,100,100,"#7a2876")
ball.radius = 10;
ball.vx = 10;
// ball.vy = 10;

// var bar = new GameObject(0, canvas.height/2, 100, 15, "#0059ff");
// var bar2 = new GameObject(canvas.width - 15, canvas.height/2, 100, 15, "#ff0000");
player = new GameObject( canvas.width/2, 700, 190, 40,);
player.color = "#7e0073";


// npc1 = new GameObject(300, canvas.height/2, 100, 100, "#00ff15");
// npc2 = new GameObject(700, canvas.height/2, 100, 100, "#0059ff");
// npc3 = new GameObject(900, canvas.height/2, 100, 100, "#ff0000");

// var img=document.getElementById("beachBall");



timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    // context.font = "20px Georgia";
    // context.fillText("Player 1|Player 2", canvas.width/2 - 73, 50);
    // context.fillText(p1Score + "        " + p2Score, canvas.width/2 - 40, 80);

    context.font = "20px Georgia";
    context.fillText("Score: ", 50, 75);
    context.fillText(Score, 180, 76);

   
    doHandleAcceleration();
    doApplyFriction();
    doHandleGravity();
    doUpdatePosition();
    doCheckBottomBounds();
     


    ball.move();
    if(ball.x > canvas.width + ball.width/2 - 100)
    {
         ball.vx *= -1;
    }
     if (ball.x < 0 + ball.width/2)
     {
         ball.vx *= -1;
         ball.x ++;
     }
     if(ball.y > canvas.height + ball.height/2 - 100)
     {
         ball.vy *= -1;
         Score = 0;
     }


    player.move();

    if (player.x < canvas.width/2 -400)
    {
        player.x = canvas.width/2 - 400
        if (player.vx < 0) player.vx = 0;
    }
    if (player.x > canvas.width/2 + 400)
    {
        player.x = canvas.width/2 + 400
        if (player.vx > 0) player.vx = 0;
    }
    
    function doHandleAcceleration () 
    {
        if (d) {
            player.vx += player.ax * player.force;
        }

        if (a) {
            player.vx += player.ax * -player.force;
        }
    }

    if(ball.collisionCheck(player))
    {

        /////OUTER LEFT
        if(ball.x < player.x - player.width/3)
        {
            console.log("Outer Left")
            ball.vy =- 10
            ball.vx = ball.force * -5
            Score++;

        }
        /////INNER LEFT
        else if(ball.x < player.x - player.width/6)
        {
            console.log("Inner Left")
            ball.vy =- 10
            ball.vx = ball.force * -2.5
            Score++;
        }
        /////CENTER
        else if(ball.x < player.x + player.width/6)
        {
            console.log("Center")
            ball.vy =- 10
            ball.vx = ball.force * 0
            Score++;
        }
        /////INNER RIGHT 
        else if(ball.x < player.x + player.width/3)
        {
            console.log("Inner Right")
            ball.vy =- 10
            ball.vx = ball.force * 2.5
            Score++;
        }
        /////OUTER LEFT
        else
        {
            console.log("Outer Right")
            ball.vy =- 10
            ball.vx = ball.force * 5
            Score++;
        }

    
    }

    function doHandleGravity () {
        ball.vy += gravity;
    }

    function doUpdatePosition () {
        ball.x += ball.vx;
        ball.y += ball.vy;
    }

    function doCheckBottomBounds() {
        if (ball.y > canvas.height - ball.height/2) 
        {
        }
    }

    function doApplyFriction()
    {
        player.vx *= 0.93;
    }


        context.beginPath();
    {
        context.moveTo(ball.x, ball.y);
        context.lineTo(player.x, player.y);
        context.closePath();
        context.lineWidth = 6;
        context.stroke();
        
    }

        ball.drawCircle();
        player.drawRect();



}
