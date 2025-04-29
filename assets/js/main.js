/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
    document.querySelector('#placeToSee').innerText = ('GOOD MORNING')
} else if (curHr < 18) {
    document.querySelector('#placeToSee').innerText = ('GOOD AFTERNOON')
} else {
    document.querySelector('#placeToSee').innerText = ('GOOD EVENING')
}

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById('contact-form');
	const confirmationMessage = document.getElementById('confirmationMessage');
  
	if (form) {
	  form.addEventListener('submit', async (e) => {
		e.preventDefault(); // Prevent default form submission
		const formData = new FormData(form);
  
		try {
		  const response = await fetch(form.action, {
			method: form.method,
			body: formData,
			headers: {
			  'Accept': 'application/json'
			}
		  });
  
		  if (response.ok) {
			form.reset();
			confirmationMessage.style.display = 'block';
		  } else {
			alert('Oops! There was a problem submitting your form.');
		  }
		} catch (error) {
		  alert('Error: ' + error.message);
		}
	  });
	}
  });
