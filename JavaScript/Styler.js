function ChangeMode(toDark)
{
    if (toDark)
    {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        ChangeArray(document.querySelectorAll("button"), toDark);
    }
    else
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        ChangeArray(document.querySelectorAll("button"), toDark);
    }
}
function ChangeArray(array, toDark)
{
    for (i = 0; i < array.length; i++)
    {
        if (toDark)
        {
            array[i].style.backgroundColor = "#0F0F0F";
            array[i].style.color = "white";
        }
        else
        {
            array[i].style.backgroundColor = "#F0F0F0";
            array[i].style.color = "black";
        }
    }
}

