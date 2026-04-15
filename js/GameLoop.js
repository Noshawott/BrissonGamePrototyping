var canvas, context, player, timer, interval = 1000/60;

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")


player = new GameObject(canvas.width/2,canvas.height/2,100,100,"#7a2876")
player.vx = 0;
player.vy = 0;

var bar = new GameObject(20, canvas.height/2, 50, 20, "#0059ff");

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

    if(bar.y > canvas.height + bar.height/2 - 70)
    {
        if(s)
        {
            bar.y = canvas.height + bar.height/2 - 70;
        }
    }


    bar.move();
    // if(bar.x > canvas.width + bar.width/2 - 100)
    // {
    //     bar.vx *= -1;
    // }
    // if (bar.x < 0 + bar.width/2)
    // {
    //     bar.vx = 30;
    // }
    // if(bar.y > canvas.height + bar.height/2 - 100)
    // {
    //     bar.vy *= -1;
    // }
    // if (bar.y < 0 + bar.height/2)
    // {
    //     bar.vy = 30;
    // }

    //=======================
    //npc 1 collisoion
    if(npc1.collisionCheck(player))
    {
        npc1.color = "yellow";
    }
    else
    {
        npc1.color = "green";
    }
    //=======================
    //npc 2 collisoion
    if(npc2.collisionCheck(player))
    {
        context.strokeRect(npc2.x-npc2.width/2, npc2.y-npc2.height/2, npc2.width, npc2.height);
    }
    else
    {
        npc2.color = "blue";
    }
    //=======================
    //npc 3 collisoion
    if(npc3.collisionCheck(player))
    {
        player.x = player.prevX;
        player.y = player.prevY;
    }
    else
    {
        player.prevX = player.x;
        player.prevY = player.y;
    }


    bar.drawRect();
    // player.drawCircle();
    // npc1.drawCircle();
    // npc2.drawCircle();
    // npc3.drawCircle();
}
 

