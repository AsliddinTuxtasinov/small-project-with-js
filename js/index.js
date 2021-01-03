let myinput = document.getElementById( "myinput" );
let plus = document.getElementById( "plus" );
let reset = document.getElementById( "reset" );
let minus = document.getElementById( "minus" );

// ================================================
plus.addEventListener( 'click', function()
{
    myinput.value = parseInt(myinput.value) + 1;
});
// =================================================
reset.addEventListener( 'click', function()
{
    myinput.value = 0;
});
// =================================================
minus.addEventListener( 'click', function()
{
    myinput.value = myinput.value - 1;
});