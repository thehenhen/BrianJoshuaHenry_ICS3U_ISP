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
    var y = (windowHeight - height) / 2 + 50;
    //cnv.position(x, y);
    rectMode(CENTER);
    cnv.parent('sketch-holder');
}

function draw(){
    description();
    show();
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
    text("- Two methods of navigating through a graph", 25, 85);
    text("- BFS is used to find the shortest path", 25, 135);
    text("- DFS keeps going down a path as far as possible", 25, 185);


    //how it works
    textSize(25);
    text("- Breadth-First Search", 25, 285);
    textSize(20);
    text("- Push the root node into the queue and mark it", 65, 315);
    text("- While the queue is not empty, pop the top node X from the queue", 65, 345);
    text("- Mark X's unmarked neighbors, then push them into the queue and repeat", 65, 375);
    textSize(25);
    text("- Depth-First Search", 25, 415);
    textSize(20);
    text("- Push the root node into the stack", 65, 445);
    text("- While the stack is not empty, pop the top node X from the stack", 65, 475);
    text("- Mark X as visited, then push its neighbors into the stack and repeat", 65, 505);
}

function show(){
    rectMode(CENTER);
    textAlign(CENTER,CENTER);
    fill(0);
    noStroke();
    text("BFS",550,50);
    text("DFS",850,50);
    fill(255);
    stroke(0);
    //tree 1
    line(550,100,490,200);
    line(550,100,610,200); 
    line(580,150,550,200);
    
    if(stage>=12){
        fill(196, 64, 64);
    }
    circle(610,200,30);
    if(stage>=11){
        fill(196, 64, 64);
    }
    circle(550,200,30);
    if(stage>=8){
        fill(196, 64, 64);
    }
    circle(490,200,30);
    if(stage>=5){
        fill(196, 64, 64);
    }
    circle(580,150,30);
    if(stage>=4){
        fill(196, 64, 64);
    }
    circle(520,150,30);
    if(stage>=1){
        fill(196, 64, 64);
    }
    circle(550,100,30);

    fill(0);
    noStroke();
    text("A",550,100);
    text("B",520,150);
    text("C",580,150);
    text("D",490,200);
    text("E",550,200);
    text("F",610,200);

    //tree 2
    fill(255);
    stroke(0);
    line(850,100,790,200);
    line(850,100,910,200); 
    line(880,150,850,200);
    if(stage>=17){
        fill(196,64,64);
    }
    circle(790,200,30);
    if(stage>=15){
        fill(196,64,64);
    }
    circle(820,150,30);
    if(stage>=13){
        fill(196, 64, 64);
    }
    circle(850,200,30);
    if(stage>=11){
        fill(196, 64, 64);
    }
    circle(910,200,30);
    if(stage>=7){
        fill(196, 64, 64);
    }
    circle(880,150,30);
    if(stage>=3){
        fill(196, 64, 64);
    }
    circle(850,100,30);
    fill(0);
    noStroke();
    text("A",850,100);
    text("B",820,150);
    text("C",880,150);
    text("D",790,200);
    text("E",850,200);
    text("F",910,200);



    textAlign(LEFT,CENTER);
    if(stage==0){
        text("Queue: ",450,230);
        text("Visited: ",450,255);
        text("Node X: ", 450,280);
        text("Stack: ",750,230);
        text("Visited: ",750,255);
        text("Node X: ",750,280);
    } else if(stage==1){
        text("Queue: A",450,230);
        text("Visited: A",450,255);
        text("Node X: ", 450,280);
        text("Stack: A",750,230);
        text("Visited: ",750,255);
        text("Node X: ",750,280);
    } else if(stage==2){
        text("Queue: ",450,230);
        text("Visited: A",450,255);
        text("Node X: ", 450,280);
        text("Stack: ",750,230);
        text("Visited: ",750,255);
        text("Node X: ",750,280);
    } else if(stage==3){
        text("Queue: ",450,230);
        text("Visited: A",450,255);
        text("Node X: A", 450,280);
        text("Stack: ",750,230);
        text("Visited: A",750,255);
        text("Node X: A",750,280);
    } else if(stage==4){
        text("Queue: B",450,230);
        text("Visited: A, B",450,255);
        text("Node X: A", 450,280);
        text("Stack: B",750,230);
        text("Visited: A",750,255);
        text("Node X: A",750,280);
    } else if(stage==5){
        text("Queue: B, C",450,230);
        text("Visited: A, B, C",450,255);
        text("Node X: A", 450,280);
        text("Stack: B, C",750,230);
        text("Visited: A",750,255);
        text("Node X: A",750,280);
    } else if(stage==6){
        text("Queue: C",450,230);
        text("Visited: A, B, C",450,255);
        text("Node X: A", 450,280);
        text("Stack: B",750,230);
        text("Visited: A",750,255);
        text("Node X: A",750,280);
    } else if(stage==7){
        text("Queue: C",450,230);
        text("Visited: A, B, C",450,255);
        text("Node X: B", 450,280);
        text("Stack: B",750,230);
        text("Visited: A, C",750,255);
        text("Node X: C",750,280);
    } else if(stage==8){
        text("Queue: C, D",450,230);
        text("Visited: A, B, C, D",450,255);
        text("Node X: B", 450,280);
        text("Stack: B, E",750,230);
        text("Visited: A, C",750,255);
        text("Node X: C",750,280);
    } else if(stage==9){
        text("Queue: D",450,230);
        text("Visited: A, B, C, D",450,255);
        text("Node X: B", 450,280);
        text("Stack: B, E, F",750,230);
        text("Visited: A, C",750,255);
        text("Node X: C",750,280);
    } else if(stage==10){
        text("Queue: D",450,230);
        text("Visited: A, B, C, D",450,255);
        text("Node X: C", 450,280);
        text("Stack: B, E",750,230);
        text("Visited: A, C",750,255);
        text("Node X: C",750,280);
    } else if(stage==11){
        text("Queue: D, E",450,230);
        text("Visited: A, B, C, D, E",450,255);
        text("Node X: C", 450,280);
        text("Stack: B, E",750,230);
        text("Visited: A, C, F",750,255);
        text("Node X: F",750,280);
    } else if(stage==12){
        text("Queue: D, E, F",450,230);
        text("Visited: A, B, C, D, E, F",450,255);
        text("Node X: C", 450,280);
        text("Stack: B",750,230);
        text("Visited: A, C, F",750,255);
        text("Node X: F",750,280);
    } else if(stage==13){
        text("Queue: E, F",450,230);
        text("Visited: A, B, C, D, E, F",450,255);
        text("Node X: C", 450,280);
        text("Stack: B",750,230);
        text("Visited: A, C, F, E",750,255);
        text("Node X: E",750,280);
    } else if(stage==14){
        text("Queue: E, F",450,230);
        text("Visited: A, B, C, D, E, F",450,255);
        text("Node X: D", 450,280);
        text("Stack: ",750,230);
        text("Visited: A, C, F, E",750,255);
        text("Node X: E",750,280);
    } else if(stage==15){
        text("Queue: F",450,230);
        text("Visited: A, B, C, D, E, F",450,255);
        text("Node X: D", 450,280);
        text("Stack: ",750,230);
        text("Visited: A, C, F, E, B",750,255);
        text("Node X: B",750,280);
    } else if(stage==16){
        text("Queue: F",450,230);
        text("Visited: A, B, C, D, E, F",450,255);
        text("Node X: E", 450,280);
        text("Stack: D",750,230);
        text("Visited: A, C, F, E, B",750,255);
        text("Node X: B",750,280);
    } else if(stage==17){
        text("Queue: ",450,230);
        text("Visited: A, B, C, D, E, F",450,255);
        text("Node X: E", 450,280);
        text("Stack: ",750,230);
        text("Visited: A, C, F, E, B",750,255);
        text("Node X: B",750,280);
    } else if(stage==18){
        text("Queue: ",450,230);
        text("Visited: A, B, C, D, E, F",450,255);
        text("Node X: F", 450,280);
        text("Stack: ",750,230);
        text("Visited: A, C, F, E, B, D",750,255);
        text("Node X: D",750,280);
    }
    textAlign(CENTER,CENTER);
    stroke(0);
    fill(255);
    if(mouseX<740 && mouseX>660 && mouseY<170 && mouseY>130){
        fill(200);
    }
    rect(700,150,80,40,5);
    noStroke();
    fill(0);
    if(stage!=18){
        text("Next",700,150);
    }else{
        text("Restart",700,150);
    }


    textAlign(LEFT,CENTER);
}

function mousePressed(){
    if(mouseX<=740 && mouseX>=660 && mouseY<=170 && mouseY>=130){
        if(stage!=18){
            stage++;
        }else{
            stage=0;
        }
        
    }
}