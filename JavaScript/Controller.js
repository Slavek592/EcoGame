function Draw()
{
    document.getElementById("comment").innerHTML = "";
    document.getElementById("turnline").innerHTML = "Turn " + turn;
    document.getElementById("moneyline").innerHTML = "Money: " + money;
    document.getElementById("peopleline").innerHTML = "People: " + people;
    document.getElementById("polutionline").innerHTML = "Polution: " + polution;
    
    document.getElementById("polutioncleanersline").innerHTML = "Polution Cleaners: " + polutioncleaners;
}
function NextTurn()
{
    
    turn += 1;
    money += people;
    polution += people / 10 / polutioncleaners;
    polution = Math.floor(polution);
    people += people / 2;
    people = Math.floor(people);
    
    
    Draw();
}
function Buypolution() {
    if (money >= polutioncost) {
        money -= polutioncost;
        polutioncleaners += 1;
        polutioncost * 2.2;
        polutioncost = Math.floor(polutioncost);
    }    


}

