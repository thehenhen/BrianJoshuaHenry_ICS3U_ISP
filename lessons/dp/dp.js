function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("shift").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("shift").style.marginLeft = "0";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//variable declaration
let keywordColor = "#DA2828";
let hoverColor = "#2CEA90";
let lightHoverColor = "#8FDBB7";
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
    background(0);
    rectMode(CENTER);
    cnv.parent('sketch-holder');
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
    text("Visual Demonstration", 615, 50);

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
    text("- The \"best value\" comes from the transitions, but with respect to the value gained at the current position, too", 25, 465);
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
    selectedItem = -1;
    selectedWeight = -1;

    //stores the states that can be reached from the selected one
    let affectedStates = [];

    for (i = 1; i <= 3; i++){
        for (j = 0; j <= 4; j++){
            if (collidePointRect(mouseX, mouseY, 670 + j * 50, 125 + 50 * i, 50, 50)){
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

        rect(470 + i * 150, 100, 125, 50);

        noStroke();
        fill(defaultTextColor);
        //writes the weight and value
        text(`Value: ${items[i][0]}`, 470 + i * 150, 90);
        text(`Weight: ${items[i][1]}`, 470 + i * 150, 110);
    }

    rectMode(CORNER);

    //drawing the grid
    for (i = 1; i <= 3; i++){
        for (j = 0; j <= 4; j++){
            stroke(0);
            strokeWeight(1);

            //checking if affectedStates includes this one
            flag = false;
            for (thisState in affectedStates){
                if (thisState[0] == j && thisState[1] == i){
                    flag = true;
                    console.log("jogothewarrior");
                }
            }
        
            if (i == selectedItem && j == selectedWeight) fill(hoverColor);
            else if (flag) fill(lightHoverColor);
            else noFill();

            rect(670 + 50 * j, 125 + 50 * i, 50, 50);

            noStroke();
            fill(defaultTextColor);
            //rendering the dp value
            text(dp[i][j], 695 + 50 * j, 150 + 50 * i);
        }
    }

    //labels
    stroke(1);
    text("Weight Left", 795, 145);

    for (i = 1; i <= 3; i++){
        text(`Item ${i}:`, 620, 150 + 50 * i);
    }

    for (i = 0; i <= 4; i++){
        text(i, 695 + i * 50, 165);
    }

    //text about the possible choices
    let possibleChoices = [];

    //an item is selected
    if (selectedItem != -1){
        //it is the last item
        if (selectedItem == 3){
            //can't afford
            if (selectedWeight < items[selectedItem][1]){
                possibleChoices.push(`We cannot afford the last item,`);
                possibleChoices.push(`so the maximum possible cost is 0.`);
            } else {
                possibleChoices.push(`We can afford the last item,`);
                possibleChoices.push(`so the maximum possible cost is ${dp[selectedItem][selectedWeight]}.`);
            }
        }
        //it has a "next" item
        else {
            //not buying this one

            possibleChoices.push(`If we do not buy, we can get ${dp[selectedItem + 1][selectedWeight]}.`);
            //can't afford
            if (selectedWeight < items[selectedItem][1]){
                possibleChoices.push(`We cannot afford this item,`);
                possibleChoices.push(`so the maximum possible cost is ${dp[selectedItem + 1][selectedWeight]}.`);
            } else {
                possibleChoices.push(`We can afford this item though,`);
                possibleChoices.push(`which would give us ${dp[selectedItem + 1][selectedWeight - items[selectedItem][1]]} + ${items[selectedItem][0]} = ${dp[selectedItem + 1][selectedWeight - items[selectedItem][1]] + items[selectedItem][0]},`);
                possibleChoices.push(`since it sends us to dp[${selectedItem + 1}][${selectedWeight - items[selectedItem][1]}].`);

                //answer
                possibleChoices.push(`Overall, the maximum sum possible is ${dp[selectedItem][selectedWeight]}.`);
            }
        }
    }

    //textWrap(WORD);

    for (i = 0; i < possibleChoices.length; i++){
        text(possibleChoices[i], 820, 340 + i * 20);
    }
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
