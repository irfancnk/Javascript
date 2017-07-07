// Ligth Bulb ON/OFF with Buttons

var on = document.getElementById("onButton");
var bulb = document.querySelector('img');
var source;
on.onclick = function()
{
    source = bulb.getAttribute('src');
    if(source === 'images/off.png')
    {
        bulb.setAttribute ('src','images/on.png');
    }
}
var off = document.getElementById("offButton");
off.onclick = function()
{
    source = bulb.getAttribute('src');
    if(source === 'images/on.png')
    {
        bulb.setAttribute ('src','images/off.png');
    }
}

// 
