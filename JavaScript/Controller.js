function Draw()
{
    document.getElementById("comment").innerHTML = "";
    document.getElementById("turnline").innerHTML = "Turn " + turn;
    document.getElementById("moneyline").innerHTML = "Money: " + money;
    document.getElementById("peopleline").innerHTML = "People: " + people;
    document.getElementById("pollutionline").innerHTML = "Pollution: " + pollution;
    document.getElementById("pollutioncleanersline").innerHTML = "Pollution Cleaners: " + pollutioncleaners;
    document.getElementById("pollutioncost").innerHTML = "Cost: " + pollutioncost;
}
function NextTurn()
{
    
    turn += 1;
    money += people;
    pollution += people / 10 / pollutioncleaners;
    pollution = Math.floor(pollution);
    people += people / 10;
    people = Math.floor(people);
    
    Draw();
}
function BuyPollution()
{
    if (money >= pollutioncost) {
        money -= pollutioncost;
        pollutioncleaners += 1;
        pollutioncost = pollutioncost * 1.5;
        pollutioncost = Math.floor(pollutioncost);
        
        Draw();
    }    


}

