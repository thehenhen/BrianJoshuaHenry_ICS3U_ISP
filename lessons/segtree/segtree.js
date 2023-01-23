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
let sliderX = 890;

//visual demonstration
let locked = false;
let L = 0;
let R = 0;

//array for storing all affected nodes
let affectedNodes = []
let rootNodes = []

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
    text("- Can make point updates and range queries", 25, 95);
    text("- Used for sum, min/max, and other ranges", 25, 145);
    text("- Takes O(log N) per update / query", 25, 195);
    text("- Overall O(N log N) memory for an array of size N", 25, 245);

    //special word
    fill(color(defaultTextColor));

    //how it works
    text("- Represented as a", 25, 315);
    text("- Every node represents an interval within the array", 25, 365); 
    text("- Other than leaves, nodes split their interval to their children", 25, 415);
    text("- When querying a range, represents it as <= log N nodes of the tree", 25, 465);
    text("- When updating a point, moves up the tree, updating each interval that contains it", 25, 515);

    //special word
    if (collidePointRect(mouseX, mouseY, 187, 305, 178, 20)) fill(color(hoverColor));
    else fill(color(keywordColor));
    text("complete binary tree", 187, 315);
    noFill();

    textSize(20);
    textAlign(CENTER);
    //switch for changing between modes
    if (mode){
        strokeWeight(1);
        stroke(0);
        //drawing the base slider
        fill(rootCellColorQuery);
        rect(870, 50, 80, 40, 20);

        //changing the x coordinate if we need to
        if (sliderX < 888) sliderX += 3;

        //drawing the ball inside
        if (collidePointRect(mouseX, mouseY, 830, 30, 80, 40, 20)) fill(rootCellColorUpdate);
        else fill(defaultTextColor);

        ellipse(sliderX, 50, 30, 30);

        //drawing the text
        fill(rootCellColorQuery);
        noStroke();
        text("Query", 950, 50);
    } else {
        strokeWeight(1);
        stroke(0);
        //drawing the base slider
        fill(rootCellColorUpdate);
        rect(870, 50, 80, 40, 20);

        //changing the x coordinate if we need to
        if (sliderX > 851) sliderX -= 3;

        //drawing the ball inside
        if (collidePointRect(mouseX, mouseY, 830, 30, 80, 40, 20)) fill(rootCellColorQuery);
        else fill(defaultTextColor);

        ellipse(sliderX, 50, 30, 30);

        //drawing the text
        fill(rootCellColorUpdate);
        noStroke();
        text("Update", 950, 50);
    }
    textAlign(CORNER);

    //visual demonstration
    textSize(20);
    textAlign(CENTER, CENTER);
    noFill();


    //calculates the range here
    let leftBox = min(L, R);
    let rightBox = max(L, R);

    //coloring the boxes within range
    for (i = 1; i <= 8; i++){
        strokeWeight(1);
        stroke(0);

        //querying
        if (mode){
            if (leftBox <= i && i <= rightBox) fill(rootCellColorQuery);
            else noFill();
        } 
        //updating
        else {
            if (leftBox <= i && i <= rightBox) fill(rootCellColorUpdate);
            else noFill();
        }
        

        rect(450 + (i * 50), 110, 50, 50);
        fill(defaultTextColor);
        noStroke();
        text(i, 450 + (i * 50), 110);
    }

    //renders the tree - each node is a rectangle that shows the interval
    rectMode(CENTER);
    stroke(0);
    strokeWeight(5);
    textSize(15);

    affectedNodes = [];
    rootNodes = [];

    checkTree(1, 1, 8, 4, leftBox, rightBox);
    buildTree(1, 320, 800, 4);

    noFill();
}

//function for coloring the tree
function checkTree(root, lt, rt, level, queriedL, queriedR){
    //in the interval
    if (queriedL <= lt && rt <= queriedR){
        rootNodes.push(root);
        return true;
    } else {
        //should we recurse?
        if (queriedR < lt || rt < queriedL) return false;

        //getting children values
        leftChild = checkTree(root * 2, lt, floor((lt + rt) / 2), level - 1, queriedL, queriedR);
        let localLeftChild = leftChild;
        rightChild = checkTree(root * 2 + 1, floor((lt + rt) / 2) + 1, rt, level - 1, queriedL, queriedR);
        let localRightChild = rightChild;

        //this node is along the way
        if (leftChild || rightChild){
            affectedNodes.push(root);
        }

        return leftChild || rightChild;
    }
}

//lt and rt are the left and right X coordinates - the function returns a the x-coordinate for its top center
function buildTree(root, lt, rt, level){
    mid = (lt + rt) / 2;
    boxY = 400 - 60  * level;

    //local versions of the parameters, since javascript function parameters aren't local
    let localRoot = root, localLt = lt, localRt = rt, localLevel = level, localMid = mid, localBoxY = boxY;

    strokeWeight(1);
    stroke(0);

    //draws the node
    if (mode){
        if (rootNodes.includes(localRoot)) fill(rootCellColorQuery);
        else if (affectedNodes.includes(localRoot)) fill(affectedCellColorQuery);
        else fill(0);
    } else {
        if (rootNodes.includes(localRoot) || affectedNodes.includes(localRoot)) fill(rootCellColorUpdate);
        else fill(defaultTextColor);
    }

    rect(mid + 150, boxY + 20, 50, 25);

    //writes the interval
    if (mode){
        if (rootNodes.includes(localRoot)) fill(rootCellColorQuery);
        else fill(0);
    } else {
        fill(0);    
    }

    let leftIndex = (localLt - 260) / 60, rightIndex = ((localRt - localLt) / 60) + leftIndex - 1;
    noStroke();
    text(`[${leftIndex}, ${rightIndex}]`, mid + 150, boxY + 50);
    
    //checks for recursion to children
    if (level == 1){
        //leaf node
        return (localLt + localRt) / 2;
    }

    //has children to split to
    leftChild = buildTree(root * 2, localLt, localMid, localLevel - 1);
    let localLeftChild = leftChild
    rightChild = buildTree(root * 2 + 1, localMid, localRt, localLevel - 1);
    let localRightChild = rightChild;

    strokeWeight(1);
    stroke(0);
    line(localMid + 125, localBoxY + 32.5, localLeftChild + 150, localBoxY + 67.5);
    line(localMid + 175, localBoxY + 32.5, localRightChild + 150, localBoxY + 67.5);

    return (localLt + localRt) / 2;
}

function mouseClicked(){
    //popups for special words
    if (collidePointRect(mouseX, mouseY, 187, 305, 178, 20)){
        alert("A completely binary tree is a special type of binary tree of height H in which every node that has a height < H has exactly two children. That is, a completely binary tree of height H has exactly 2^H - 1 nodes.");
    }

    if (collidePointRect(mouseX, mouseY, 232, 333, 32, 20)){
        alert("The Least Significant Bit (LSB) of a number is the active bit with the smallest value in that number. For example, the LSB of 14 (1110) is the 2nd bit, with value 2.");
    }

    //slider
    if (collidePointRect(mouseX, mouseY, 830, 30, 80, 40, 20)){
        mode = !mode;
        L = 0;
        R = 0;
    }
}

//if the initial click is within one of the squares, sets that to be the L value
function mousePressed(){
    //querying
    if (mode){
        if (collidePointRect(mouseX, mouseY, 475, 85, 400, 50)){
            locked = false;
            L = max(1, min(8, floor((mouseX - 425) / 50)));
            R = L;
        } else {
            locked = true;
        }
    }
    //updating
    else {
        if (collidePointRect(mouseX, mouseY, 475, 85, 400, 50)){
            L = max(1, min(8, floor((mouseX - 425) / 50)));
            R = L;
        }
    }
}

function mouseDragged(){
    //querying
    if (mode){
        if (!locked){
            R = max(1, min(8, floor((mouseX - 425) / 50)));
        }
    } 
    //updating
    else {
        if (collidePointRect(mouseX, mouseY, 475, 85, 400, 50)){
            L = max(1, min(8, floor((mouseX - 425) / 50)));
            R = L;
        }
    }
}

function mouseReleased(){
    //querying
    if (mode){
        locked = true;
    }
    //updating
    else {
        //pass
    }
}

