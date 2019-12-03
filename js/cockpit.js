
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        var cockpit = document.querySelector("#cockpit");
        var header = document.querySelector("#header");
        var iframe = document.querySelector("iframe");
        var content_in_cockpit = document.querySelector("#content_in_cockpit");
            cockpit.classList.add("zoom_out");
            header.classList.add("zoom_out","translate_down");
            cockpit.addEventListener("animationend",function () {
                content_in_cockpit.style.display ="block";
                content_in_cockpit.classList.add("fade_in");
            });


        var navi_earth = document.querySelector("#navi_earth");
        var navi_mars = document.querySelector("#navi_mars");
        var navi_venus = document.querySelector("#navi_venus");
        var go = document.querySelector("#go");
        var target = '';
        var can_go = false;

        navi_earth.onclick=function () {
            show("earth");
            target = 'earth.html';
            go.classList.add("clickable");
            can_go = true;
        };

        navi_mars.onclick=function () {
            show("mars");
            target = 'mars.html';
            go.classList.add("clickable");
            can_go = true;
        };

        navi_venus.onclick=function () {
            show("venus");
            target = 'unknown.html';
            go.classList.add("clickable");
            can_go = true;
        };

        function redirectPage() {
            window.location = target;
        }

        go.onclick = function () {
            if(can_go){
                $("body").fadeOut(500, redirectPage);
            } 
                // content_in_cockpit.style.opacity ="100%";
                // iframe.style.display="block";
        }
    };


};

//
// var can_go = function (a,b,c) {
//     if()
// }
