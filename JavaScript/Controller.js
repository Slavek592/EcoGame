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
    document.getElementById("multiplicationline").innerHTML = "Buying multiplication " + buyingshow;
    
}
function NextTurn()
{
    
    turn += 1;
    money += people;
    pollution += (people + army) / 10 / pollutioncleaners;
    pollution = Math.floor(pollution);
    people1 = people;
    people += people / 10;
    people = Math.floor(people);
    if (people1 == people) {
        people++;
    }

    
    for (let i = 1; i > -1; i--)
    {
        pollution -= trees[i];
        trees[i+1] += trees[i];
        trees[i] = 0;
        if (pollution < 0)
        {
            pollution = 0;
        }
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
    if (money >= treecost * treesbuying)
    {
        money -= treecost * treesbuying;
        trees[0] += treesbuying;
        
        Draw();
    }
}
function CutTrees1()
{
    if (trees[2] >= buyingshow)
    {
        trees[2]-= buyingshow;
        money = money + 10* buyingshow;
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
    if (people > 1 + buyingshow) {

        army+=buyingshow;
        people-= buyingshow;
        
        Draw();
    }
}
function ChangeBuying() {
    buyingholder++;
    if (buyingholder > 4) {
        buyingholder = 1;
    }
    if (buyingholder == 1)
    {
        buyingshow = buying[0]

        
    }
    if (buyingholder == 2)
    {
        buyingshow = buying[1]


    }
    if (buyingholder == 3)
    {
        buyingshow = buying[2]


    }
    if (buyingholder == 4)
    {
        buyingshow = buying[3]


    }
    treecostshow = treecost * buyingshow;
    treeaddshow = 5 * buyingshow;
    cuttreesshow = buyingshow;
    
        Draw();
    
}
function BuyMoreTrees()
{
    treesbuying ++;
    document.getElementById("treesbuying").innerHTML = treesbuying;
}
function BuyLessTrees()
{
    if (treesbuying > 0)
    {
        treesbuying --;
        document.getElementById("treesbuying").innerHTML = treesbuying;
    }
}

