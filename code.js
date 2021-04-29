//Creator Daniel Connell
//Version 2 of count down from 10 to 1 then Blast Off, more efficient using fewer lines of code
function countDownV2() {
    var count = 10;
    for (var i = 1; i < 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        },1000 * i);
    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff";
        count--;
    },10000);
}



//creating count down from 10 to 1 then Blast Off
function countDown() {
    var count = 10;
    //starting countdown at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;
    //countdown decreases to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //countdown decreases to 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //countdown decreases to 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //countdown decreases to 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //countdown decreases to 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //countdown decreases to 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //countdown decreases to 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //countdown decreases to 2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //countdown decreases to 1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //countdown to Blast Off
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast off";
        count = count - 1;
    }, 10000);
}

function playCraps() {
    //die1 variable roll
    var die1;
    //die2 variable roll
    var die2;
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;
    //Lose sequence
    if (sum == 7 || sum == 11) { document.getElementById("crapsResults").innerHTML = "CRAPS!! You Lose!"; }
    //Win Sequence sequence
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles! You Win!";
    }
    //push sequence
    else { document.getElementById("crapsResults").innerHTML = "Push, Roll Again Please."; }

}

function runSandbox() {
    var count = 10;
    for (var i = 1; i < 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        },1000 * i);
    }
    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff";
        count--;
    },10000);
}