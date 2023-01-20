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

let renderedDP = false;
let items = [
    [0, 0],
    [50, 1],
    [24, 2],
    [70, 4]
];

let dp = new Array(5).fill(0).map(() => new Array(5).fill(0));

let selectedItem = 0;
let selectedWeight = 0;

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
    //for the first iteration, will compute all values in rendered DP
    if (!renderedDP){
        calculateDP();
        renderedDP = true;
    }

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
    text("- Uses one of two approaches:                   or", 25, 315);
    text("- Solves simpler                      to build the answer for the main problem", 25, 365);
    text("- Considers all transitions from a state, and picks the best value", 25, 415); 
    text("- The \"best value\" could be min or max, but with respect to the value gained, too", 25, 465);
    text("- For instance, taking an item in                       would add to the value, which should be considered", 25, 515);

    //special word
    rectMode(CORNER);
    if (collidePointRect(mouseX, mouseY, 287, 305, 92, 20)) fill(hoverColor);
    else fill(keywordColor);
    text("bottom-up", 287, 315);

    if (collidePointRect(mouseX, mouseY, 405, 305, 82, 20)) fill(hoverColor);
    else fill(keywordColor);
    text("top-down", 405, 315);

    if (collidePointRect(mouseX, mouseY, 165, 355, 110, 20)) fill(hoverColor);
    else fill(keywordColor);
    text("subproblems", 165, 365);

    if (collidePointRect(mouseX, mouseY, 301, 505, 112, 20)) fill(hoverColor);
    else fill(keywordColor);
    text("0-1 knapsack", 301, 515);

    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(15);

    //visual demonstration - figures out which item is being selected
    selectedItem = 0;
    selectedWeight = 0;

    for (i = 1; i <= 3; i++){
        for (j = 1; j <= 4; j++){
            if (collidePointRect(mouseX, mouseY, 600 + j * 50, 125 + 50 * i, 50, 50)){
                selectedItem = i;
                selectedWeight = j;
            }
        }
    }
    
    //draws all the items
    for (i = 1; i <= 3; i++){
        stroke(0);
        strokeWeight(1);

        if (i == selectedItem) fill(hoverColor);
        else noFill();

        rect(400 + i * 150, 100, 125, 50);

        noStroke();
        fill(defaultTextColor);
        //writes the weight and value
        text(`Value: ${items[i][0]}`, 400 + i * 150, 90);
        text(`Weight: ${items[i][1]}`, 400 + i * 150, 110);
    }

    rectMode(CORNER);

    //drawing the grid
    for (i = 1; i <= 3; i++){
        for (j = 1; j <= 4; j++){
            stroke(0);
            strokeWeight(1);
        
            if (i == selectedItem && j == selectedWeight) fill(hoverColor);
            else noFill();
            rect(600 + 50 * j, 125 + 50 * i, 50, 50);

            noStroke();
            fill(defaultTextColor);
            //rendering the dp value
            text(dp[i][j], 625 + 50 * j, 150 + 50 * i);
        }
    }

    //labels
    stroke(1);
    text("Weight Left", 750, 145);

    for (i = 1; i <= 3; i++){
        text(`Item ${i}:`, 600, 150 + 50 * i);
    }

    for (i = 1; i <= 4; i++){
        text(i, 625 + i * 50, 165);
    }

    //text about the 
}

function mouseClicked(){
    if (collidePointRect(mouseX, mouseY, 335, 185, 52, 20)) alert("States can be described as the tuple combination of all relevant values of that position. For example, state[i][j] could mean that you are considering the ith item with j weights left to spend in 0-1 knapsack.");
    if (collidePointRect(mouseX, mouseY, 125, 235, 90, 20)) alert("Transitions are the moves that lead from one state to another. For example, at state[i][j], you could either take the current item and go to state[i + 1][j - weight] or you can pass it and go to state[i + 1][j]. Think of them as edges in a directed graph.");
    if (collidePointRect(mouseX, mouseY, 287, 305, 92, 20)) alert("The bottom-up approach involves starting with the subproblems first, and iterating through states in increasing degrees. It's like saying: \"I will graduate high school, get a master's degree in astronomy, then become an astronaut at NASA.\"");
    if (collidePointRect(mouseX, mouseY, 405, 305, 82, 20)) alert("The top-down approach involves recursively finding the subproblems, starting with the main problem first and moving down. It's like saying: \"To become an astronaut at NASA, I need a master's degree in astronomy, which means I need to graduate high school.\"");
    if (collidePointRect(mouseX, mouseY, 165, 355, 110, 20)) alert("Subproblems are smaller samples within a larger problem. For instance, if there were 5 weights for a knapsack problem, a subproblem could just consider the first four knapsacks, and use that to solve for the fifth one.");
    if (collidePointRect(mouseX, mouseY, 301, 505, 112, 20)) alert("The 0-1 knapsack problem is a very common term used to describe a simple dynamic programming problem. Basically, imagine there are some items that each have a value and a weight. You have a knapsack, but the knapsack can only hold a certain amount of weight. The problem is to find the maximum sum of the values that you put in the knapsack.");
}

//if the initial click is within one of the squares, sets that to be the L value
function mousePressed(){

}

function calculateDP(){
    for (let i = 3; i >= 1; i--){
        for (let j = 1; j <= 4; j++){
            dp[i][j] = dp[i + 1][j];

            let cost = items[i][1];
            //can take
            if (j >= cost){
                dp[i][j] = max(dp[i][j], dp[i + 1][j - cost] + items[i][0]);
            }

            console.log(dp[i][j]);
        }
    }
}
