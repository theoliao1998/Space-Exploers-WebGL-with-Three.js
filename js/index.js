
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        var welcome_button = document.querySelector( '#welcome_sec .button' );


        welcome_button.onclick = function () {
            window.location.href = "cockpit.html";
        }
    };


};


//
// var can_go = function (a,b,c) {
//     if()
// }
