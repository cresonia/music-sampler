
$(document).ready(function(){
    function hideAll() {
        $('#perfect').hide();
        $('#best').hide();
        $('#steal').hide();
        $('#ticket').hide();
    }
    
    // run that function right away
    hideAll();
    
    	$('#large').click (function() {
		$('#article').slideToggle();
	});
    
    // when any animal is clicked, make the suitable div appear
    $('.picture').click (function() {
        // but first, hide all the divs to ensure that 
        // only one will be open, ever 
        hideAll();
                
        // here is a switch statement - this was in Codecademy 
        // "More on Control Flow in JS" 
        
        // we can get the ID of the thing that was clicked - 
        switch ( $(this).attr("id") ) {
            case "one" :
                $('#perfect').show();
                document.getElementById("1").play();
                break;
            case "two" :
                $('#best').show();
                document.getElementById("2").play();
                break;
            case "three" :
                $('#steal').show();
                document.getElementById("3").play();
                break;
            case "four" :
                $('#ticket').show();
                document.getElementById("4").play();
                break;
        }
    });  // end of function for clicking 

    
});


