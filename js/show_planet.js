
function fadeOut(name, duration) {
    let el = document.getElementById(name);
    var step = 10 / duration, opacity = 0.8;
    function next() {
        if (opacity <= 0) {
            $("#"+name).css("display",'none');
            return;
        }
        el.style.opacity = ( opacity -= step );
        setTimeout(next, 10);
    }

    next();
}

function fadeIn(name, duration) {

    let el = document.getElementById(name);
    var step = 10 / duration, opacity = 0;
    function next() {
        if (opacity >= 0.8) {
            return;
        }
        el.style.opacity = ( opacity += step );
        setTimeout(next, 10);
    }

    next();


}

var names = ["earth","mars","venus"];

function show(name){
    if(!document.getElementById(name).getAttribute("src")){
        document.getElementById(name).setAttribute('src',"planet_"+name+".html")
    }
    for(const i in [0,1,2]){
        if(document.getElementById(names[i]).style.opacity>'0'){
            fadeOut(names[i],2000);
            // $("#"+names[i]).css("display",'none');
        }
    }
    fadeIn(name,2000);
    $("#"+name).css("display",'block');
}