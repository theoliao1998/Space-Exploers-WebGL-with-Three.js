
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        var welcome_button = document.querySelector( '#welcome_sec .button' );
        var welcome_sec = document.querySelector("#welcome_sec");
        var cockpit = document.querySelector("#cockpit");
        var header = document.querySelector("#header");
        var iframe = document.querySelector("iframe");
        var content_in_cockpit = document.querySelector("#content_in_cockpit");
        console.log(welcome_button);
        welcome_button.onclick = function () {
            welcome_sec.classList.add("fade_out");
            cockpit.classList.add("zoom_out");
            header.classList.add("zoom_out","translate_down");
            welcome_sec.addEventListener("animationend",function () {
                welcome_sec.style.display ="none";
                content_in_cockpit.style.display ="block";
                content_in_cockpit.classList.add("fade_in");
                content_in_cockpit.style.opacity ="100%";
                iframe.style.display="block";
        })
    };

        var navi_earth = document.querySelector("#navi_earth");
        var navi_mars = document.querySelector("#navi_mars");
        var navi_venus = document.querySelector("#navi_venus");

        navi_earth.onclick=function () {
            show('earth');
        };

        navi_mars.onclick=function () {
            show('mars');
        };

        navi_venus.onclick=function () {
            show('venus');
        };


    }
};

//
// var can_go = function (a,b,c) {
//     if()
// }
