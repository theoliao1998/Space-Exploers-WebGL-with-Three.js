
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        var welcome_button = document.querySelector( '#welcome_sec .button' );
        var welcome_sec = document.querySelector("#welcome_sec");
        var cockpit = document.querySelector("#cockpit");
        var header = document.querySelector("#header");
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
            });
        };
    }
};
