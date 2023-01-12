function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function setup(){
    var cnv = createCanvas(1000, 550);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background(0);
    rectMode(CENTER);

    

    textAlign(CENTER,CENTER);
    textSize(20);
    // 0 Start screen
    // 1 How to find efficiently element in a sorted array: 
    // 2 start at middle
    //   Compare element with middle of array
    //   If middle of array is smaller, then delete bottom half of array
    //   Restart
    // 3 practice using links
}

function draw(){
    background(255);
    //draws the border
    fill(255); 

    rect(500, 275, 995, 545);

    fill(0); 
    //titles of all the sections, the features of a BIT
    textSize(30);
    textAlign(LEFT, CENTER);
    textFont("PT Sans");

    text("Features", 25, 50);
    text("How it Works", 25, 250);

    //feature descriptions
    textSize(20);
    text("- Used to efficiently find items in a sorted list", 25, 85);
    text("- It is faster than going element by element to find an item", 25, 135);
    text("- Takes O(log N) per search", 25, 185);


    //how it works
    text("- Start at the middle of the array", 25, 285);
    text("- Compare the middle element with the element you want", 25, 335);
    text("- If the middle element is larger, then cut the top half off and restart", 25, 385);
    text("- If the middle element is smaller, then cut the bottom half off and restart", 25, 435);
    text("- If the middle element is equal, then you've found it and you're done", 25, 485);
}   