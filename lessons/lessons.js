function openNav(){
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

let binarysearch = document.getElementById("binary-search")

binarysearch.addEventListener('click', function handleClick(){
    window.location.assign("lessons\\binarysearch\\binarysearch.html");
})