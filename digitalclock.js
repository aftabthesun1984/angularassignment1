function digitalclock() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    console.log(t);
}
setInterval(function () {
    digitalclock();
}, 1000);
