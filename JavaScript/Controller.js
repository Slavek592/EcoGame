function Draw()
{
    document.getElementById("comment").innerHTML = "";
    document.getElementById("turnline").innerHTML = "Turn " + turn;
    document.getElementById("moneyline").innerHTML = "Money: " + money;
    document.getElementById("peopleline").innerHTML = "People: " + people;
    document.getElementById("pollutionline").innerHTML = "Pollution: " + pollution;
    document.getElementById("pollutioncleanersline").innerHTML = "Pollution Cleaners: " + pollutioncleaners;
    document.getElementById("pollutioncost").innerHTML = "Cost: " + pollutioncost;
    document.getElementById("treesline").innerHTML = "Adult trees: " + trees[2];
    document.getElementById("armyline").innerHTML = "Army: " + army;
}
function NextTurn()
{
    
    turn += 1;
    money += people;
    pollution += (people + army) / 10 / pollutioncleaners;
    pollution = Math.floor(pollution);
    people += people / 10;
    people = Math.floor(people);
    for (let i = 1; i > -1; i--)
    {
        trees[i+1] += trees[i];
        trees[i] = 0;
    }
    
    Draw();
}
function BuyPollution()
{
    if (money >= pollutioncost)
    {
        money -= pollutioncost;
        pollutioncleaners += 1;
        pollutioncost = pollutioncost * 1.5;
        pollutioncost = Math.floor(pollutioncost);
        
        Draw();
    }
}
function BuyTrees()
{
    if (money >= treecost)
    {
        money -= treecost;
        trees[0] += 5;
        
        Draw();
    }
}
function CutTrees1()
{
    if (trees[2] >= 1)
    {
        trees[2]--;
        money = money + 10;
        Draw();
    }
}
function CutTreesAll() {
    if (trees[2] >= 1) {
        
        money = money + 10 * trees[2];
        trees[2] = trees[2] - trees[2];
        Draw();
    }
}
function BuyArmy() {
    if (people > 1) {

        army++;
        people--;
        
        Draw();
    }
}

