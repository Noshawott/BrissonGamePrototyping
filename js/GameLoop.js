var canvas, context, player, timer, interval = 1000/60;

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")


player = new Player()
player.vx = 30;
player.vy = 30;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
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

    player.draw();
}


