var canvas, context, player, timer, interval = 1000/60;

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")


player = new GameObject(canvas.width/2,canvas.height/2,100,100,"#7a2876")
player.vx = 0;
player.vy = 0;

npc1 = new GameObject(300, canvas.height/2, 100, 100, "#00ff15");
npc2 = new GameObject(700, canvas.height/2, 100, 100, "#0059ff");
npc3 = new GameObject(900, canvas.height/2, 100, 100, "#ff0000");


timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    if(d)
    {
        player.x += 5;
    }
    if(a)
    {
        player.x -= 5;
    }
    if(w)
    {
        player.y -= 5;
    }
    if(s)
    {
        player.y += 5;
    }


    player.move();
    if(player.x > canvas.width + player.width/2 - 100)
    {
        player.vx *= -1;
    }
    if (player.x < 0 + player.width/2)
    {
        player.vx = 30;
    }
    if(player.y > canvas.height + player.height/2 - 100)
    {
        player.vy *= -1;
    }
    if (player.y < 0 + player.height/2)
    {
        player.vy = 30;
    }
    if(player.x > canvas.width + player.width/2 - 100 && player.y > canvas.height + player.height/2 - 100)
    {
        player.vx *= -1;
        player.color = "#001aff";
    }
    if(player.x > canvas.width + player.width/2 - 100 && player.y < 0 + player.height/2)
    {
        player.vx *= -1;
        player.color = "#ae00ff";
    }
    if (player.x < 0 + player.width/2 && player.y > canvas.height + player.height/2 - 100)
    {
        player.vx = 30;
        player.color = "#fffb00";
    }
    if (player.x < 0 + player.width/2 && player.y < 0 + player.height/2)
    {
        player.vx = 30;
        player.color = "#00ff0d";
    }

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



    player.drawCircle();
    npc1.drawCircle();
    npc2.drawCircle();
    npc3.drawCircle();
}
 

