function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//variable declaration
let hoverColor = "DA2828";

//lesson part
function setup(){
    var cnv = createCanvas(1000, 550);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background(0);
    rectMode(CENTER);

    //draws the border
    rect(500, 275, 995, 545);
}

function draw(){
    //titles of all the sections, the features of a BIT
    textSize(30);
    textAlign(LEFT, CENTER);
    textFont("PT Sans");

    text("Features", 25, 50);
    text("How it Works", 25, 250);

    //feature descriptions
    textSize(20);
    text("- Can make prefix updates and queries", 25, 85);
    text("- Unlike prefix sum array, is        ", 25, 135);
    text("- Takes O(log N) per update / query", 25, 185);

    FileList()

    //how it works
    text("- Can make prefix updates and queries", 25, 85);
    text("- Unlike prefix sum array, is dynamic", 25, 135);
    text("- Takes O(log N) per update / query", 25, 185);
}



