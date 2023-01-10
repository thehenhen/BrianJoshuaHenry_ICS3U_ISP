function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//lesson portion
function setup(){
    var cnv = createCanvas(1200, 450);
    var x = (windowWidth - width) / 2;
    var y = 3 * (windowHeight - height) / 4;
    cnv.position(x, y);
    background(0);
}

function windowResized(){
    width = windowWidth;
    height = windowHeight;
    resizeCanvas(width, height);
}