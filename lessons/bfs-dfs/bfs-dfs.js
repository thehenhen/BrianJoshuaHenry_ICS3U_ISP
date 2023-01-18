function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

let stage=0;
//lesson part
function setup(){
    var cnv = createCanvas(1000, 550);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    rectMode(CENTER);
}

function draw(){
    description();
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
    text("- Two methods of navigating through a tree", 25, 85);
    text("- DFS is used to scan all possible paths", 25, 135);
    text("- BFS is used to find the shortest path", 25, 185);


    //how it works
    textSize(25);
    text("- Breadth-First Search", 25, 285);
    textSize(20);
    text("- Use a queue, each vertex that is visited is added to the queue", 65, 325);
    text("- Then, travel to each adjacent vertex and repeat", 65, 365);
    textSize(25);
    text("- Depth-First Search", 25, 405);
    textSize(20);
    text("- Use a stack, pushing vertices that are visited", 65, 445);
    text("- Travel to adjacent vertices, popping vertices that have no adjacent vertices", 65, 485);
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