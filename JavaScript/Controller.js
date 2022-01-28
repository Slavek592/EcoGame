function Draw()
{
    document.getElementById("comment").innerHTML = "";
    document.getElementById("game_over").innerHTML = Over;
    document.getElementById("turn_line").innerHTML = "Turn " + turn;
    document.getElementById("money_line").innerHTML = "Money: " + money;
    document.getElementById("people_line").innerHTML = "People: " + people;
    document.getElementById("pollution_line").innerHTML = "Pollution: " + pollution;
    document.getElementById("pollution_cleaners_line").innerHTML = "Pollution cleaners: " + pollution_cleaners;
    document.getElementById("pollution_cost").innerHTML = "Pollution cleaner cost: " + pollution_cost;
    document.getElementById("trees_line").innerHTML = "Adult trees: " + trees[2];
    document.getElementById("small_trees_line").innerHTML = "Small trees: " + trees[1];
    document.getElementById("seeds_line").innerHTML = "Seeds: " + trees[0];
    document.getElementById("seeds_cost").innerHTML = "Buy seeds: " + tree_cost;
    document.getElementById("army_line").innerHTML = "Police: " + army;
    document.getElementById("best_score").innerHTML = "The largest number of people: " + best_score;
}
function NextTurn()
{
    if (reset == false) Over = "";
    turn += 1;
    money += (people - army);
    if (army <= (people / 10)) {
        Over = "war had begun and your Pollution rose by 10 and you lost" + " army: " + army + " People: " + Math.floor(people / 9) + " trees:" + trees[2] / 5;
        people = people -= people / 9;
        army -= army / 2;
        pollution += 10;
        trees[2] -= trees[2] / 5;
        trees[2] = Math.floor(trees[2])
        army = Math.floor(army);
        
    }
    pollution_decrease = ((people - trees[0] - trees[1] * 1.3 - trees[2] * 1.5) / 10 / (pollution_cleaners + 1));
    if (pollution_decrease <= 0) pollution_decrease = 0;
    pollution += pollution_decrease;
    
    pollution = Math.floor(pollution);
    people1 = people;
    people += people / 10;
    people = Math.floor(people);
    if (people1 == people) {
        people++;
    }
    
    
    if (pollution >= 100) {
        reset = true;
        if (reset = true) Over = "Game Over";
        if (reset) {
            if (best_score <= people) best_score = people;
            turn = 0;
            money = 10
            people = 10;
            pollution = 0;
            people1 = 0;
            trees[0] = 0;
            trees[1] = 0;
            trees[2] = 0;
            pollution_cleaners = 0;
            pollution_cost = 15;
            army = 0;
            reset = false;
            


        }
    }
    

    
    for (let i = 1; i > -1; i--)
    {
        
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
    
    if (money >= tree_cost * trees_buying)
    {
        money -= tree_cost * trees_buying;
        trees[0] += trees_buying;
        document.getElementById("seeds_line").innerHTML = "Seeds: " + trees[0];
        Draw();
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
function BuyPollution() {
    
    if (money >= pollution_cost * pollution_buying) {
        money -= pollution_cost * pollution_buying;
        pollution_cost = pollution_cost* 1.5 * pollution_buying;
        pollution_cleaners += pollution_buying;
        document.getElementById("pollution_cleaners_line").innerHTML = "Pollution cleaners: " + pollution_cleaners;
        Draw();
    }
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
