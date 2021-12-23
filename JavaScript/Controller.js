function Draw()
{
    document.getElementById("comment").innerHTML = "";
    document.getElementById("turn_line").innerHTML = "Turn " + turn;
    document.getElementById("money_line").innerHTML = "Money: " + money;
    document.getElementById("people_line").innerHTML = "People: " + people;
    document.getElementById("pollution_line").innerHTML = "Pollution: " + pollution;
    document.getElementById("trees_line").innerHTML = "Adult trees: " + trees[2];
    document.getElementById("small_trees_line").innerHTML = "Small trees: " + trees[1];
    document.getElementById("seeds_line").innerHTML = "Seeds: " + trees[0];
    document.getElementById("army_line").innerHTML = "Police: " + army;
}
function NextTurn()
{
    
    turn += 1;
    money += people;
    pollution += people / 10;
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
function CutTrees1()
{
    if (trees[2] >= buyingshow)
    {
        trees[2]-= buyingshow;
        money = money + 10* buyingshow;
        Draw();
    }
}
function BuyArmy()
{
    if (people > 1 + army_buying + army)
    {
        army += army_buying;
        Draw();
    }
}
function BuyMoreArmy()
{
    army_buying ++;
    document.getElementById("army_buying").innerHTML = army_buying.toString();
}
function BuyLessArmy()
{
    if (army_buying > 0)
    {
        army_buying --;
        document.getElementById("army_buying").innerHTML = army_buying.toString();
    }
}
function BuyArmySet()
{
    army_buying = parseInt(document.getElementById("buy_army_change").value);
    if (isNaN(army_buying))
    {
        army_buying = 0;
    }
    document.getElementById("army_buying").innerHTML = army_buying.toString();
}
function BuyTrees()
{
    let tree_cost = 1;
    if (money >= tree_cost * trees_buying)
    {
        money -= tree_cost * trees_buying;
        trees[0] += trees_buying;
        document.getElementById("seeds_line").innerHTML = "Seeds: " + trees[0];
    }
}
function BuyMoreTrees()
{
    trees_buying ++;
    document.getElementById("trees_buying").innerHTML = trees_buying.toString();
}
function BuyLessTrees()
{
    if (trees_buying > 0)
    {
        trees_buying --;
        document.getElementById("trees_buying").innerHTML = trees_buying.toString();
    }
}
function BuyTreesSet()
{
    trees_buying = parseInt(document.getElementById("buy_trees_change").value);
    if (isNaN(trees_buying))
    {
        trees_buying = 0;
    }
    document.getElementById("trees_buying").innerHTML = trees_buying.toString();
}
function BuyMorePollution()
{
    pollution_buying ++;
    document.getElementById("pollution_buying").innerHTML = pollution_buying.toString();
}
function BuyLessPollution()
{
    if (pollution_buying > 0)
    {
        pollution_buying --;
        document.getElementById("pollution_buying").innerHTML = pollution_buying.toString();
    }
}
function BuyPollutionSet()
{
    pollution_buying = parseInt(document.getElementById("buy_pollution_change").value);
    if (isNaN(pollution_buying))
    {
        pollution_buying = 0;
    }
    document.getElementById("pollution_buying").innerHTML = pollution_buying.toString();
}
