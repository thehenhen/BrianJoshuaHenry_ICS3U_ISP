let stage=0;
function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function description(){
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

function show(){
    rectMode(CENTER);
    fill(255);
    rect(400,240,40,40);
    rect(440,240,40,40);
    rect(480,240,40,40);
    rect(520,240,40,40);
    rect(560,240,40,40);
    rect(600,240,40,40);
    rect(640,240,40,40);
    rect(680,240,40,40);
    rect(720,240,40,40);
    rect(760,240,40,40);
    rect(800,240,40,40);
    rect(840,240,40,40);
    rect(880,240,40,40);
    textAlign(CENTER,CENTER);
    fill(0);
    text("0",400,240);
    text("1",440,240);
    text("3",480,240);
    text("4",520,240);
    text("6",560,240);
    text("7",600,240);
    text("9",640,240);
    text("10",680,240);
    text("11",720,240);
    text("14",760,240);
    text("14",800,240);
    text("15",840,240);
    text("17",880,240);
    if(stage==0){
        text("Start",640,280);
    }else if(stage==1){
        
    }
    textAlign(LEFT,CENTER);
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
    description();
    show();
}   