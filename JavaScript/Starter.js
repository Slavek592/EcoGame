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

    
    

    var changebuying = document.createElement("button");

    changebuying.onclick = function () { ChangeBuying(); };

    changebuying.innerHTML = "Change Buying Multiples";

    gamearea.appendChild(document.createElement("p").appendChild(changebuying));

    var buttonline1 = document.createElement("p");
    
    var buypollution = document.createElement("button");
    
    buypollution.onclick = function () { BuyPollution(); };
    
    var line_1_1 = document.createElement("p");
    line_1_1.innerHTML = "Buy pollution cleaner";
    buypollution.appendChild(line_1_1);
    
    var line_1_2 = document.createElement("p");
    line_1_2.id = "pollutioncost";
    line_1_2.innerHTML = "Cost: " + pollutioncost;
    buypollution.appendChild(line_1_2);
    
    var line_1_3 = document.createElement("p");
    line_1_3.innerHTML = "+1 pollution cleaner";
    buypollution.appendChild(line_1_3);
    
    buttonline1.appendChild(buypollution);
    
    var buytrees = document.createElement("button");
    
    buytrees.onclick = function () { BuyTrees(); };
    
    var line_2_1 = document.createElement("p");
    line_2_1.innerHTML = "Buy trees";
    buytrees.appendChild(line_2_1);
    
    var line_2_2 = document.createElement("p");
    line_2_2.innerHTML = "Cost: " + treecostshow;
    buytrees.appendChild(line_2_2);
    
    var line_2_3 = document.createElement("p");
    line_2_3.innerHTML = "+ " + treeaddshow + " trees in 2 turns";
    buytrees.appendChild(line_2_3);
    
    buttonline1.appendChild(buytrees);

    var cuttrees = document.createElement("button");
    
    cuttrees.onclick = function () { CutTrees1(); };
    
    cuttrees.innerHTML = "Cut "+ cuttreesshow +" adult tree";
    
    buttonline1.appendChild(cuttrees);

    var cuttreesall = document.createElement("button");

    cuttreesall.onclick = function () { CutTreesAll(); };

    cuttreesall.innerHTML = "Cut all adult trees";

    buttonline1.appendChild(cuttreesall);

    var buyarmy = document.createElement("button");

    buyarmy.onclick = function () { BuyArmy(); };

    buyarmy.innerHTML = "Transform 1 person into a soldier";

    buttonline1.appendChild(buyarmy);

    

    
    gamearea.appendChild(buttonline1);


    var moneyline = document.createElement("p");

    moneyline.id = "moneyline";
    gamearea.appendChild(moneyline);

    var armyline = document.createElement("p");

    armyline.id = "armyline";
    gamearea.appendChild(armyline);

    var multiplicationline = document.createElement("p");

    multiplicationline.id = "multiplicationline";
    gamearea.appendChild(multiplicationline);
    //pridava gamearea do toho dokumentu
    var peopleline = document.createElement("p");

    peopleline.id = "peopleline";
    gamearea.appendChild(peopleline);

    var pollutionline = document.createElement("p");

    pollutionline.id = "pollutionline";
    gamearea.appendChild(pollutionline);

    
    var pollutioncleanersline = document.createElement("p");

    pollutioncleanersline.id = "pollutioncleanersline";
    gamearea.appendChild(pollutioncleanersline);
    
    var treesline = document.createElement("p");

    treesline.id = "treesline";
    gamearea.appendChild(treesline);


    document.body.appendChild(gamearea);

    Draw();
    //Controller
}
function LoadGame()
{
    document.getElementById("comment").innerHTML = "";
    if (document.getElementById("gamekey").value == "")
    {
        document.getElementById("comment").innerHTML = "Write the game key.";
    }
    else
    {
        NewGame();
    }
}

