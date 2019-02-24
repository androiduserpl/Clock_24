// Clock setup
var displayClock = (function () {
    var startTime, checkTime, checkDay;

    startTime = function () {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
        return h;
    };

    checkTime = function (i) {
        if (i < 10) {
            i = "0" + i
        }; // add zero in front of numbers < 10
        return i;

    };

    // Check time of day
    checkDay = function () {
        var czas = startTime();
        if (czas > 8 && czas < 20) {
            document.getElementById('day').innerHTML = 'DAY'
        } else {
            document.getElementById('day').innerHTML = 'NIGHT'
        }
    }

    checkDay();
    startTime();
});

displayClock();
