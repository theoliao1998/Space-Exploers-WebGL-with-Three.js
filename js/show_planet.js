<<<<<<< HEAD


=======
>>>>>>> a0c8aee532c5414e069443650d78790cb8c21eb5
function fadeOut(name, duration) {
    let el = document.getElementById(name);
    var step = 10 / duration, opacity = 1;
    function next() {
        if (opacity <= 0) { return; }
        el.style.opacity = ( opacity -= step );
        setTimeout(next, 10);
    }

    next();
}

function fadeIn(name, duration) {
<<<<<<< HEAD
    let el = document.getElementById(name)
=======
    let el = document.getElementById(name);
>>>>>>> a0c8aee532c5414e069443650d78790cb8c21eb5
    var step = 10 / duration, opacity = 0;
    function next() {
        if (opacity >= 1) { return; }
        el.style.opacity = ( opacity += step );
        setTimeout(next, 10);
    }

    next();
}

var names = ["earth","mars","venus"];

function show(name){
    for(const i in [0,1,2]){
<<<<<<< HEAD
        console.log(i);
        if(document.getElementById(names[i]).style.opacity==='1'){
            fadeOut(names[i],2000);
            $("#"+names[i]).css("display",'none');
        }
    }
    fadeIn(name,2000);
    $("#"+name).css("display",'block');
=======
        console.log(i,i);
        if(document.getElementById(names[i]).style.opacity==='1'){
            console.log(i);
            fadeOut(names[i],2000);
        }
    }
    fadeIn(name,2000);
    console.log(name);
>>>>>>> a0c8aee532c5414e069443650d78790cb8c21eb5
}