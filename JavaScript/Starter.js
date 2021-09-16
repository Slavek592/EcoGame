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
    heading.id = "turnline";
    gamearea.appendChild(heading);
    var nextturn = document.createElement("button");
    nextturn.onclick = function () {NextTurn();};
    nextturn.innerHTML = "Next turn";
    gamearea.appendChild(document.createElement("p").appendChild(nextturn));
    var imageline = document.createElement("p");
    var image = document.createElement("img");
    image.class = "image2";
    image.src = "Pictures/Planet.jpg";
    imageline.appendChild(image);
    gamearea.appendChild(imageline);
    var moneyline = document.createElement("p");
    moneyline.id = "moneyline";
    gamearea.appendChild(moneyline);
    document.body.appendChild(gamearea);
    Draw();
}
function LoadGame()
{
    if (document.getElementById("gamekey").value == "")
    {
        document.getElementById("comment").innerHTML = "Write the game key.";
    }
    else
    {
        NewGame();
    }
}

