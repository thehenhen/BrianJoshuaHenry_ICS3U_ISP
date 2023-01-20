function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//lesson part
function setup(){
    var cnv = createCanvas(1000, 550);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    background(205);
    rectMode(CENTER);
    cnv.parent('sketch-holder'); 
}
let clicked = false;
let clicked2 = false;
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
    textSize(25);
    textAlign(LEFT, CENTER);
    textFont("PT Sans");

    text("Features", 25, 50);
    text("How it Works", 25, 240);

    //feature descriptions
    textSize(20);
    text("- Used to execute static point update", 25, 90);
    text("- Can find range between any two indexes and perform an operation", 25, 135);
    text("- Edits the difference array to do so", 25, 180);


    //how it works
    text("- Create a difference array using the initial array", 25, 280);
    text("- Performs wanted operation to the value in the difference array with desired start index", 25, 325);
    text("- Reverse the operation to the value in the difference array with desired end index + 1", 25, 370);
    text("- Get the prefix sum array, by making each value in the new array the sum of all the numbers previous", 25, 415);
    text("in the difference array", 25, 455);
}

function show(){
    rectMode(CENTER);
    text("Starting array:", 630, 40);
    text("Difference array:", 630, 140)
    if (clicked2) {
    text("Final array: ",630,455);
    textSize(14);
    text("As visible, all elements between index that the operation was performed on ",25,485);
    text("(inclusive) and the index that the operation was reversed on (non-inclusive) all increased by 10.",25,515);
    textSize(25);
    text("-->", 550,485);
    textSize(20);
    }
    stroke(0);
    fill(230);
    
    rect(660,80,40,40);
    rect(700,80,40,40);
    rect(740,80,40,40);
    rect(780,80,40,40);
    rect(820,80,40,40);
    rect(860,80,40,40);
    rect(900,80,40,40);
    rect(940,80,40,40);

    rect(660,260,40,40);
    rect(700,260,40,40);
    rect(740,260,40,40);
    rect(780,260,40,40);
    rect(820,260,40,40);
    rect(860,260,40,40);
    rect(900,260,40,40);
    rect(940,260,40,40);

    if (clicked2) {
    rect(660,500,40,40);
    fill("#FFFF00");
    rect(700,500,40,40);
    rect(740,500,40,40);
    rect(780,500,40,40);
    rect(820,500,40,40);
    rect(860,500,40,40);
    fill(230);
    rect(900,500,40,40);
    rect(940,500,40,40);
    }
    
    fill(0);
    
    text("5",655,80);
    text("12",690,80);
    text("21",730,80);
    text("19",770,80);
    text("15",810,80);
    text("37",850,80);
    text("12",890,80);
    text("8",935,80);

    text("5",655,260);
    text("7",695,260);
    text("9",735,260);
    text("-2",770,260);
    text("-4",810,260);
    text("22",850,260);
    text("-25",885,260);
    text("-4",930,260);
    
    if(clicked2){
    text("5",655,500);
    text("22",690,500);
    text("31",730,500);
    text("29",770,500);
    text("25",810,500);
    text("47",850,500);
    text("12",890,500);
    text("8",935,500);
    }

    if (clicked) {
        fill("#FF0000");
        rect(700,260,40,40);
        rect(900,260,40,40);
        fill(255);
        text("17",690,260);
        text("-35",885,260);
        

    }
    
    fill(255);
    
    if(mouseX<570 && mouseX>480 && mouseY<250 && mouseY>210){
        fill(200);
    }
    rect(530,230,100,40,5);
    fill(0);
    textSize(15);
    text("Push changes",488,230);
    textSize(20);
    if(mouseX<680 && mouseX>640 && mouseY<280 && mouseY>240){
        fill(0);
        rect(660,260,40,40);
        text("5 - 0 = 5", 660, 200);
        fill(255);
        text("5",655,260);
        
        
    }
    if(mouseX<720 && mouseX>680 && mouseY<280 && mouseY>240){
        fill(0);
        rect(700,260,40,40);
        fill(255);
        if (!clicked) {
            text("7",695,260);
            fill(0);
            text("12 - 5 = 7", 660, 200);
        }
        if (clicked) {
            text("17",69,260);
            fill(0);
            text("12 - 5 +      = 17", 660, 200);
            fill("#FF0000")
            text("10", 730, 200)
            fill(255);
            text("17",690,260);
        }
        
        
    }
    if(mouseX<760 && mouseX>720 && mouseY<280 && mouseY>240){
        fill(0);
        rect(740,260,40,40);
        text("21 - 12 = 9", 660, 200);
        fill(255);
        text("9",735,260);
        
    }
    if(mouseX<800 && mouseX>760 && mouseY<280 && mouseY>240){
        fill(0);
        rect(780,260,40,40);
        text("19 - 21 = -2", 660, 200);
        fill(255);
        text("-2",770,260);
        
    }
    if(mouseX<840 && mouseX>800 && mouseY<280 && mouseY>240){
        fill(0);
        rect(820,260,40,40);
        text("15 - 19 = -4", 660, 200);
        fill(255);
        text("-4",810,260);
        
    }
    if(mouseX<880 && mouseX>840 && mouseY<280 && mouseY>240){
        fill(0);
        rect(860,260,40,40);
        text("37 - 15 = 22", 660, 200);
        fill(255);
        text("22",850,260);
        
    }
    if(mouseX<920 && mouseX>880 && mouseY<280 && mouseY>240){
        fill(0);
        rect(900,260,40,40);
        
        if (!clicked) {
            fill(255);
            text("-25",885,260);
            fill(0);
            text("12 - 37 = -25", 660, 200);
        }
        if (clicked) {
            fill(0);
            text("12 - 37 -      = -35", 660, 200);
            fill("#FF0000")
            text("10", 740, 200)
            fill(255);
            text("-35",885,260);
        }
        
    }
    if(mouseX<960 && mouseX>920 && mouseY<280 && mouseY>240){
        fill(0);
        rect(940,260,40,40);
        text("8 - 12 = -4", 660, 200);
        fill(255);
        text("-4",930,260);
        
    }
    
    
    textAlign(CENTER,CENTER);
    noStroke();

    
    
    
}

function draw(){
    description();
    show();
}

function mousePressed(){
    if(mouseX<570 && mouseX>480 && mouseY<250 && mouseY>210){
        clicked = !clicked;
    }
    if(mouseX<900 && mouseX>800 && mouseY<500 && mouseY>400){
        clicked2 = true;
    }
        
}
