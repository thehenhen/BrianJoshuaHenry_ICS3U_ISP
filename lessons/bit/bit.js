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
let defaultTextColor = "#000000";

let rootCellColorQuery = "#59DC33";
let affectedCellColorQuery = "#93FA75";
let rootCellColorUpdate = "#DA2828";
let affectedCellColorUpdate = "#EA7777";

//true = querying mode, false = updating mode
let mode = true;
let sliderX = 520;

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
    //background
    background(230);

    //draws the border
    strokeWeight(5);
    rect(500, 275, 995, 545);
    strokeWeight(1);

    //titles of all the sections, the features of a BIT
    textSize(30);
    textAlign(LEFT, CENTER);
    textFont("PT Sans");
    fill(color(defaultTextColor));

    text("Features", 25, 50);
    text("How it Works", 25, 250);
    text("Visual Demonstration", 525, 50);

    //feature descriptions
    textSize(20);
    text("- Can make prefix updates and queries", 25, 95);
    text("- Unlike prefix sum array, is        ", 25, 145);
    text("- Takes O(log N) per update / query", 25, 195);

    //special word
    if (collidePointRect(mouseX, mouseY, 263, 136, 70, 18)) fill(color(hoverColor));
    else fill(color(keywordColor));
    text("dynamic", 263, 145);
    fill(color(defaultTextColor));

    //how it works
    text("- Uses the bits of a number to loop through cells", 25, 295);
    text("- Continuously subtracts the        for the next cell to", 25, 345); 
    text("- Continuously adds the LSB for the next cell to", 25, 395);
    text("- Can compute prefix sums, prefix min/max, and count inversions", 25, 445);
    text("- Despite what the name implies, the \"tree\" is actually stored in an array", 25, 495);

    //special word
    if (collidePointRect(mouseX, mouseY, 270, 333, 32, 20)) fill(color(hoverColor));
    else fill(color(keywordColor));
    text("LSB", 270, 345);

    rectMode(CORNER);
    if (collidePointRect(mouseX, mouseY, 474, 335, 45, 20)) fill(color(hoverColor));
    else fill(color(keywordColor));
    text("query", 474, 345);

    if (collidePointRect(mouseX, mouseY, 435, 385, 60, 20)) fill(color(hoverColor));
    else fill(color(keywordColor));
    text("update", 435, 395);

    noFill();
    textSize(20);
    textAlign(CENTER);
    rectMode(CENTER);

    //switch for changing between modes
    if (mode){
        //drawing the base slider
        fill(rootCellColorQuery);
        rect(500, 180, 80, 40, 20);

        //changing the x coordinate if we need to
        if (sliderX < 520) sliderX += 3;

        //drawing the ball inside
        if (collidePointRect(mouseX, mouseY, 460, 160, 80, 40, 20)) fill(rootCellColorUpdate);
        else fill(defaultTextColor);

        ellipse(sliderX, 180, 30, 30);

        //drawing the text
        fill(rootCellColorQuery);
        text("Query", 500, 220);
    } else {
        //drawing the base slider
        fill(rootCellColorUpdate);
        rect(500, 180, 80, 40, 20);

        //changing the x coordinate if we need to
        if (sliderX > 482) sliderX -= 3;

        //drawing the ball inside
        if (collidePointRect(mouseX, mouseY, 460, 160, 80, 40, 20)) fill(rootCellColorQuery);
        else fill(defaultTextColor);

        ellipse(sliderX, 180, 30, 30);

        //drawing the text
        fill(rootCellColorUpdate);
        text("Update", 500, 220);
    }
    textAlign(CORNER);

    //visual demonstration
    affectedCells = [];

    let rootCell = 0;

    for (let i = 1; i <= 20; i++){
        //if the mouse collides with this square
        if (collidePointRect(mouseX, mouseY, 387.5 + 25 * i, 95, 25, 50)){
            rootCell = i;

            console.log(rootCell);
            if (mode){
                //querying mode
                for (let j = i; j > 0; j -= (j & -j)){
                    affectedCells.push(j);
                }
            } else {
                //updating mode
                for (let j = i; j <= 20; j += (j & -j)){
                    affectedCells.push(j);
                }
            }
            
            //makes sure it doesn't pick up on more than one
            break;  
        }
    }

    console.log(rootCell);

    textSize(20);
    textAlign(CENTER, CENTER);
    fill(defaultTextColor);

    //information about the number under "Visual Demonstration"
    if (rootCell != 0){
        let info = `${rootCell}: {`;

        for (let i = 0; i < affectedCells.length; i++){
            info += `${affectedCells[i]}`;

            if (i != affectedCells.length - 1){
                info += ", ";
            } else {
                info += "}";
            }
        }

        text(info, 660, 80);
    }

    //drawing the array with 20 indices
    for (let i = 1; i <= 20; i++){
        if (mode){
            if (i == rootCell) fill(color(rootCellColorQuery));
            else if (affectedCells.includes(i)) fill(color(affectedCellColorQuery));
            else noFill();
        } else {
            if (i == rootCell) fill(color(rootCellColorUpdate));
            else if (affectedCells.includes(i)) fill(color(affectedCellColorUpdate));
            else noFill();
        }

        rect(400 + 25 * i, 120, 25, 50);
    }
    
    //showing the decomposition of the path that the update / query takes
    fill(defaultTextColor);
    if (rootCell != 0){
        for (let i = 0; i < affectedCells.length; i++){

            text(`${affectedCells[i]} -> ${bitRep(affectedCells[i])}`, 660, 180 + i * 20);
        }
    }
    noFill();
}

function mouseClicked(){
    //popups for special words
    if (collidePointRect(mouseX, mouseY, 263, 136, 70, 18)){
        alert("If a data structure is \"dynamic\", it means that it can both be updated and queried at any given time, in optimized time complexity.");
    }

    if (collidePointRect(mouseX, mouseY, 270, 333, 32, 20)){
        alert("The Least Significant Bit (LSB) of a number is the active bit with the smallest value in that number. For example, the LSB of 14 (1110) is the 2nd bit, with value 2.");
    }

    if (collidePointRect(mouseX, mouseY, 474, 335, 45, 20)){
        alert("To \"query\" a data structure is to \"ask\" it a question. For example, a query in a BIT could be to return the prefix sum from [1, R].");
    }

    if (collidePointRect(mouseX, mouseY, 435, 385, 60, 20)){
        alert("To \"update\" a data structure is to change relevant stored values in optimized time complexity to ensure that all subsequent queries are accurate.");
    }

    //slider
    if (collidePointRect(mouseX, mouseY, 460, 160, 80, 40, 20)){
        mode = !mode;
    }
}

//helper function for decomposing a number into its bitwise representation
function bitRep(x){
    og = x
    ret = ""

    while (x > 0){
        if (x % 2 == 1) ret = "1" + ret;
        else ret = "0" + ret;

        x = floor(x / 2);
    }

    console.log(og + " : " + ret);

    return ret;
}



