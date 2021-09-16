function Draw()
{
    document.getElementById("comment").innerHTML = "";
    document.getElementById("turnline").innerHTML = "Turn " + turn;
    document.getElementById("moneyline").innerHTML = "Money: " + money;
}
function NextTurn()
{
    turn += 1;
    Draw();
}

