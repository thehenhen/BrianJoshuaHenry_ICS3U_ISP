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
    cnv.position(x, y+50);
    background(205);
    rectMode(CENTER);
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
    
    
    textAlign(CENTER,CENTER);
    noStroke();
    
    
}

function draw(){
    description();
    show();
}