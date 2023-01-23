let stage=0;
let timer;
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

function description(){
    fill(230);
    //draws the border
    stroke(0);
    strokeWeight(5);
    rect(500, 275, 995, 545);
    strokeWeight(1);
    noStroke();

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
    stroke(0);
    fill(230);
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
    noStroke();
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
    //stage variable changes what is being shown to the screen
    if(stage==0){
        fill(255);
        stroke(0);
        if(mouseX>600 && mouseX<680 && mouseY>300 && mouseY<340){
            fill(200);
        }
        rect(640,320,80,40,5);
        noStroke();
        fill(0);
        text("Start",640,320);
    } else if(stage==1){
        fill(255);
        stroke(0);
        if(mouseX>600 && mouseX<680 && mouseY>300 && mouseY<340){
            fill(200);
        }
        rect(640,320,80,40,5);
        noStroke();
        fill(0);
        text("Stop",640,320);
        text("Looking for 6",640,190);

        bracket(0,0);
        bracket(1,13);

        if(millis()-timer>2000){
            stage=2;
            timer=millis();
        }
    } else if(stage==2){
        fill(255);
        stroke(0);
        if(mouseX>600 && mouseX<680 && mouseY>300 && mouseY<340){
            fill(200);
        }
        rect(640,320,80,40,5);
        noStroke();
        fill(0);
        text("6 ? 9",640,180);
        text("Stop",640,320);

        bracket(0,0);
        bracket(1,13);
        arrow(6);
        if(millis()-timer>1000){
            stage=3;
            timer=millis();
        }
    } else if(stage==3){
        fill(255);
        stroke(0);
        if(mouseX>600 && mouseX<680 && mouseY>300 && mouseY<340){
            fill(200);
        }
        rect(640,320,80,40,5);
        noStroke();
        fill(0);
        text("6 < 9",640,180);
        text("Stop",640,320);

        bracket(0,0);
        bracket(1,13);
        arrow(6);
        if(millis()-timer>1000){
            stage=4;
            timer=millis();
        }
    } else if(stage==4){
        fill(255);
        stroke(0);
        if(mouseX>600 && mouseX<680 && mouseY>300 && mouseY<340){
            fill(200);
        }
        rect(640,320,80,40,5);
        noStroke();
        fill(0);
        text("6 ? 3",480,180);
        text("Stop",640,320);

        bracket(0,0);
        bracket(1,6);
        arrow(2);
        if(millis()-timer>1000){
            stage=5;
            timer=millis();
        }
    } else if(stage==5){
        fill(255);
        stroke(0);
        if(mouseX>600 && mouseX<680 && mouseY>300 && mouseY<340){
            fill(200);
        }
        rect(640,320,80,40,5);
        noStroke();
        fill(0);
        text("6 > 3",480,180);
        text("Stop",640,320);

        bracket(0,0);
        bracket(1,6);
        arrow(2);
        if(millis()-timer>1000){
            stage=6;
            timer=millis();
        }
    } else if(stage==6){
        fill(255);
        stroke(0);
        if(mouseX>600 && mouseX<680 && mouseY>300 && mouseY<340){
            fill(200);
        }
        rect(640,320,80,40,5);
        noStroke();
        fill(0);
        text("6 ? 6",560,180);
        text("Stop",640,320);

        bracket(0,3);
        bracket(1,6);
        arrow(4);
        if(millis()-timer>1000){
            stage=7;
            timer=millis();
        }
    } else if(stage==7){
        fill(255);
        stroke(0);
        if(mouseX>600 && mouseX<680 && mouseY>300 && mouseY<340){
            fill(200);
        }
        rect(640,320,80,40,5);
        noStroke();
        fill(0);
        text("6 = 6!",565,180);
        text("Found 6!",640,180);
        text("Restart",640,320);

        bracket(0,3);
        bracket(1,6);
        arrow(4);
    }
    textAlign(LEFT,CENTER);
}

function setup(){
    var cnv = createCanvas(1000, 550);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2 + 50;
    background(0);
    rectMode(CENTER);

    textAlign(CENTER,CENTER);
    textSize(20);
    cnv.parent('sketch-holder');
    // 0 Start screen
    // 1 Steps: 
    //   start at middle
    //   Compare element with middle of array
    //   If middle of array is smaller, then delete bottom half of array
    //   Repeat
}

function draw(){
    description();
    show();
    console.log(stage);
}

function mousePressed(){
    if(mouseX>600 && mouseX<680 && mouseY>300 && mouseY<340){//if within coords
        if(stage==0 || stage==7){
            stage=1;//start
            timer=millis();//set timer
        }else{
            stage=0;
        }
    }
}

function bracket(type,level){
    if(type==0){
        noStroke();

        fill(156, 14, 14);
        rect(375+level*40,240,10,80);
        rect(385+level*40,200,30,10);
        rect(385+level*40,280,30,10);

        stroke(0);
    }else{
        noStroke();

        fill(156, 14, 14);
        rect(385+level*40,240,10,80);
        rect(375+level*40,200,30,10);
        rect(375+level*40,280,30,10);

        stroke(0);
    }
}

function arrow(level){
    noStroke();
    fill(156, 14, 14);
    rect(400+40*level,200,10,10);
    triangle(400+40*level-10,200,400+40*level+10,200,400+40*level,215);
    stroke(0);
}