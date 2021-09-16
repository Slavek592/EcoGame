function PrepareLoad()
{
    document.getElementById("starter").innerHTML = "Game key: ";
    var inputbox = document.createElement("input");
    inputbox.type = "text";
    inputbox.id = "gamekey";
    document.getElementById("starter").appendChild(inputbox);
    var button = document.createElement("button");
    button.onclick = function () {LoadGame();};
    button.innerHTML = "Load game";
    document.getElementById("starter").appendChild(button);
}
function NewGame()
{
    document.getElementById("starter").innerHTML = "";
    var gamearea = document.createElement("div");
    gamearea.class = "gamearea";
    gamearea.id = "gamearea";
    var heading = document.createElement("h2");
    heading.innerHTML = "Turn " + turn;
    gamearea.appendChild(heading);
    var imageline = document.createElement("p");
    var image = document.createElement("img");
    image.class = "image2";
    image.src = "Pictures/Planet.jpg";
    imageline.appendChild(image);
    gamearea.appendChild(imageline);
    document.body.appendChild(gamearea);
    Draw();
}
function LoadGame()
{
    NewGame();
}

