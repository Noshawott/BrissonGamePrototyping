var canvas, context, player, timer, interval = 1000/60;

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")

var p1Score = 0, p2Score = 0;


ball = new GameObject(canvas.width/2,canvas.height/2,100,100,"#7a2876")
ball.radius = 10;
ball.vx = 10;
// ball.vy = 10;

var bar = new GameObject(0, canvas.height/2, 100, 15, "#0059ff");
var bar2 = new GameObject(canvas.width - 15, canvas.height/2, 100, 15, "#ff0000");

// npc1 = new GameObject(300, canvas.height/2, 100, 100, "#00ff15");
// npc2 = new GameObject(700, canvas.height/2, 100, 100, "#0059ff");
// npc3 = new GameObject(900, canvas.height/2, 100, 100, "#ff0000");

var img=document.getElementById("beachBall");



timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = "20px Georgia";
    context.fillText("Player 1|Player 2", canvas.width/2 - 73, 50);
    context.fillText(p1Score + "        " + p2Score, canvas.width/2 - 40, 80);


    


    context.save();
    context.strokeStyle = "#000000"
    context.beginPath();
    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);
    context.closePath();
    context.lineWidth = 2;
    context.stroke();
    context.restore();





    // if(d)
    // {
    //     player.x += 5;
    // }
    // if(a)
    // {
    //     player.x -= 5;
    // }
    if(w)
    {
        bar.y -= 15;
    }
    if(s)
    {
        bar.y += 15;
    }
    if(up)
    {
        bar2.y -= 15;
    }
    if(down)
    {
        bar2.y += 15;
    }

    if(bar.y < 0 + bar.height/2)
    {
        if(w)
        {
            bar.y = 0;
        }
    }

    if(bar.y > canvas.height + bar.height/2 - 140)
    {
        if(s)
        {
            bar.y = canvas.height + bar.height/2 - 140;
        }
    }
    if(bar2.y < 0 + bar2.height/2)
    {
        if(up)
        {
            bar2.y = 0;
        }
    }

    if(bar2.y > canvas.height + bar2.height/2 - 140)
    {
        if(down)
        {
            bar2.y = canvas.height + bar2.height/2 - 140;
        }
    }

    ball.move();
    bar.move();
    bar2.move();
    if(ball.x > canvas.width + ball.width/2 - 50)
    {
        p1Score++;
        ball.x = canvas.width/2;
    }
    if (ball.x < 0 + ball.width/2 - 50)
    {
        p2Score++;
        ball.x = canvas.width/2;
    }
    if(ball.y > canvas.height + ball.height/2 - 50)
    {
        ball.vy *= -1;
    }
    if (ball.y < 0 + ball.height/2 - 50)
    {
        ball.vy = 10;
    }
    

    if(ball.collisionCheck(bar))
    {
        //ball hits top
        if(ball.y <= bar.y || ball.y < bar.y + bar.height/3 && ball.y > bar.y)
        {
            ball.vx = 10;
            ball.vy = -10;
        }
        //ball hits bottom
        else if (ball.y > bar.y + 60)
        {
            ball.vx = 10;
            ball.vy = 10;
        }
        //ball hits middle
        else
        {
            ball.vx = 10;
        }
    }
    if(ball.collisionCheck(bar2))
    {
        //ball hits top
        if(ball.y <= bar2.y || ball.y < bar2.y + bar2.height/3 && ball.y > bar.y)
        {
            ball.vx = -10;
            ball.vy = -10;
        }
        //ball hits bottom
        else if (ball.y > bar2.y + 60)
        {
            ball.vx = -10;
            ball.vy = 10;
        }
        //ball hits middle
        else
        {
            ball.vx = -10;
        }
    }

    //=======================
    //npc 1 collisoion
    // if(npc1.collisionCheck(player))
    // {
    //     npc1.color = "yellow";
    // }
    // else
    // {
    //     npc1.color = "green";
    // }
    // //=======================
    // //npc 2 collisoion
    // if(npc2.collisionCheck(player))
    // {
    //     context.strokeRect(npc2.x-npc2.width/2, npc2.y-npc2.height/2, npc2.width, npc2.height);
    // }
    // else
    // {
    //     npc2.color = "blue";
    // }
    // //=======================
    // //npc 3 collisoion
    // if(npc3.collisionCheck(player))
    // {
    //     player.x = player.prevX;
    //     player.y = player.prevY;
    // }
    // else
    // {
    //     player.prevX = player.x;
    //     player.prevY = player.y;
    // }


    bar.drawRect();
    ball.drawCircle();
    bar2.drawRect();
    context.drawImage(img, ball.x- 40, ball.y - 40, ball.width, ball.height);
    // npc1.drawCircle();
    // npc2.drawCircle();
    // npc3.drawCircle();
}
 

