/*

 


*/

	$(document).ready(function() { // Document ready
	"use strict";


    /* ==========================
	   PRE-LOADER
	=============================*/
	
	$(window).load(function() {
		// will fade loading animation
		$("#object").delay(600).fadeOut(2000);
		// will fade loading background					
		$("#loading").delay(1000).fadeOut(2000);
	})            


	/* =====================================
	   AJAX CHIMP ( NEWSLETTER SUBSCRIPTION )
	========================================*/
	$('#mc-embedded-subscribe-form').ajaxChimp({
		callback: mailchimpCallback,
	    url: 'http://craftxhtml.us11.list-manage.com/subscribe/post?u=cfe258a0cf370d5efaa793bc7&amp;id=fa81ce5caf'
	    // Replace the URL above with your mailchimp URL (put your URL inside '').
	});

	// callback function when the form submitted, show the notification box
	function mailchimpCallback(resp) {
        if (resp.result === 'success') {
			$('#newsletter-error').slideUp();
            $('#newsletter-success').slideDown();
        }
        else if (resp.result === 'error') {
			$('#newsletter-success').slideUp();
            $('#newsletter-error').slideDown();
        }
    }
	
	}); // End document ready