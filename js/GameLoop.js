var canvas, context, player, timer, interval = 1000/60;

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")


ball = new GameObject(canvas.width/2,canvas.height/2,100,100,"#7a2876")
ball.radius = 10;
ball.vx = 10;
// ball.vy = 10;

var bar = new GameObject(0, canvas.height/2, 100, 15, "#0059ff");

npc1 = new GameObject(300, canvas.height/2, 100, 100, "#00ff15");
npc2 = new GameObject(700, canvas.height/2, 100, 100, "#0059ff");
npc3 = new GameObject(900, canvas.height/2, 100, 100, "#ff0000");


timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

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

    ball.move();
    bar.move();
    if(ball.x > canvas.width + ball.width/2 - 50)
    {
        ball.vx *= -1;
    }
    if (ball.x < 0 + ball.width/2 - 50)
    {
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
            console.log(ball.y, bar.y);
            ball.vx = 10;
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
    // npc1.drawCircle();
    // npc2.drawCircle();
    // npc3.drawCircle();
}
 

