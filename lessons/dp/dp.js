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
    var y = (windowHeight - height) / 2 + 50;
    cnv.position(x, y);
    background(0);
    rectMode(CENTER);
}

function draw(){
    //background
    rectMode(CENTER);
    noFill();
    background(230);

    //draws the border
    strokeWeight(5);
    stroke(0);
    rect(500, 275, 995, 545);
    strokeWeight(1);

    //titles of all the sections, the features of a seg tree
    textSize(30);
    textAlign(LEFT, CENTER);
    textFont("PT Sans");
    fill(color(defaultTextColor));  
    noStroke();

    text("Features", 25, 50);
    text("How it Works", 25, 280);
    text("Visual Demonstration", 525, 50);

    //feature descriptions
    textSize(20);
    text("- Optimization technique for choosing best options", 25, 95);
    text("- Stores previous results to avoid re-calculating", 25, 145);
    text("- Considers all possible positions as ", 25, 195);
    text("- Considers                   from a state to its neighbors", 25, 245);

    //special words
    rectMode(CORNER);
    if (collidePointRect(mouseX, mouseY, 335, 185, 52, 20)) fill(hoverColor);
    else fill(keywordColor);
    text("states", 335, 195);

    if (collidePointRect(mouseX, mouseY, 125, 235, 90, 20)) fill(hoverColor);
    else fill(keywordColor);
    text("transitions", 125, 245);

    //how it works
    fill(defaultTextColor);
    text("- Uses one of two approaches: bottom-up or top-down", 25, 315);
    text("- Considers all transitions at a state, and picks the best value", 25, 365); 
    text("- The \"best value\" could be min or max", 25, 415);
    text("- When querying a range, represents it as <= log N nodes of the tree", 25, 465);
    text("- When updating a point, moves up the tree, updating each interval that contains it", 25, 515);

    //special word

    //visual demonstration

}

function mouseClicked(){
    if (collidePointRect(mouseX, mouseY, 335, 185, 52, 20)) alert("States can be described as the tuple combination of all relevant values of that position. For example, state[i][j] could mean that you are considering the ith item with j weight left to spend in 0-1 knapsack.");
    if (collidePointRect(mouseX, mouseY, 125, 235, 90, 20)) alert("Transitions are the moves that lead from one state to another. For example, at state[i][j], you could either take the current item and go to state[i + 1][j - weight] or you can pass it and go to state[i + 1][j]. Think of them as edges in a directed graph.");
}

//if the initial click is within one of the squares, sets that to be the L value
function mousePressed(){

}

function mouseDragged(){
}

function mouseReleased(){

}

