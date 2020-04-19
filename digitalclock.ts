function digitalClock()
{
    var d = new Date();
    var t = d.toLocaleTimeString()

    console.log(t);
}

setInterval (function(){
    digitalClock()
},1000)



