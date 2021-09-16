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
}
function LoadGame()
{
}

