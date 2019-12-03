$(document).ready(function() {
	
	
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	
		$("a").click(function(event){
			event.preventDefault();
			linkLocation = this.href;
			$("body").fadeOut(500, redirectPage);		
		});
	
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});

$(".button").keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        this.click();  
    }
})

$("li").keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        this.click();  
    }
})

$("#go").keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        this.click();  
    }
})