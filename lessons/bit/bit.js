function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//variable declaration
let keywordColor = "#DA2828";
let hoverColor = "#2CEA90";
let defaultTextColor = "#000000";

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
    //background
    background(230);

    //titles of all the sections, the features of a BIT
    textSize(30);
    textAlign(LEFT, CENTER);
    textFont("PT Sans");
    fill(color(defaultTextColor));

    text("Features", 25, 50);
    text("How it Works", 25, 260);
    text("Visual Demonstration", 525, 50);

    //feature descriptions
    textSize(20);
    text("- Can make prefix updates and queries", 25, 95);
    text("- Unlike prefix sum array, is        ", 25, 145);
    text("- Takes O(log N) per update / query", 25, 195);

    //mouse hover
    if (collidePointRect(mouseX, mouseY, 263, 136, 70, 18)) fill(color(hoverColor));
    else fill(color(keywordColor));

    //special word
    text("dynamic", 263, 145);
    fill(color(defaultTextColor));

    //how it works
    text("- Uses the bits of a number to loop through cells", 25, 295);
    text("- Continuously adds the        for the next cell to query", 25, 345);
    text("- Continuously subtracts the LSB for the next cell to update", 25, 395);
    text("- Can compute prefix sums, prefix min/max, and counts inversions", 25, 445);
    text("- Despite what the name implies, the BIT is not stored using a tree structure", 25, 495);

    if (collidePointRect(mouseX, mouseY, 232, 333, 32, 20)) fill(color(hoverColor));
    else fill(color(keywordColor));

    //special word
    text("LSB", 232, 345);
    noFill();

    //visual demonstration - a sample array with 10 indices
    for (let i = 1; i <= 10; i++){
        rect(400 + 50 * i, 120, 50, 50);
    }
}

function mouseClicked(){
    //popups for 
    if (collidePointRect(mouseX, mouseY, 263, 126, 70, 18)){
        alert("If a data structure is \"dynamic\", it means that it can both be updated and queried at any given time, in optimized time complexity.");
    }

    if (collidePointRect(mouseX, mouseY, 232, 323, 32, 20)){
        alert("The Least Significant Bit (LSB) of a number is the active bit with the smallest value in that number. For example, the LSB of 14 (1110) is the 2nd bit, with value 2.");
    }
}



