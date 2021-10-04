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
    //takhle vytvoris button
    nextturn.onclick = function () { NextTurn(); };
    //co to udela
    nextturn.innerHTML = "Next turn";
    //co to napise dovnitr
    gamearea.appendChild(document.createElement("p").appendChild(nextturn));
    //takhle pridas button jinak se tam neobjevi
    var imageline = document.createElement("p");
    //vytvori se radek ale musi se pridat
    var image = document.createElement("img");
    //vytvoris obrazek
    image.class = "image2";
    //Styles.css 
    image.src = "Pictures/Planet.jpg";
    //az se bude nacitat na tenhle obrazek se to koukne
    imageline.appendChild(image);
    //pridas obrazek do radku
    gamearea.appendChild(imageline);
    //pridat radek
    var moneyline = document.createElement("p");

    moneyline.id = "moneyline";
    gamearea.appendChild(moneyline);
    
    //pridava gamearea do toho dokumentu
    var peopleline = document.createElement("p");

    peopleline.id = "peopleline";
    gamearea.appendChild(peopleline);

    var polutionline = document.createElement("p");

    polutionline.id = "polutionline";
    gamearea.appendChild(polutionline);

    var peoplerline = document.createElement("p");

    peoplerline.id = "peoplerline";
    gamearea.appendChild(peoplerline);


    document.body.appendChild(gamearea);

    Draw();
    //Controller
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

