function Draw()
{
    document.getElementById("comment").innerHTML = "";
    document.getElementById("turnline").innerHTML = "Turn " + turn;
    document.getElementById("moneyline").innerHTML = "Money: " + money;
    document.getElementById("peopleline").innerHTML = "People: " + people;
    document.getElementById("polutionline").innerHTML = "Polution: " + polution;
    document.getElementById("peoplerline").innerHTML = "Peopler: " + peopler;
}
function NextTurn()
{
    
    turn += 1;
    money += people;
    people += people / 2;
    parseFloat()
    people = Math.floor(people);
    peopler = people;
    
    Draw();
}

