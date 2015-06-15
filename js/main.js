
	
	// question 1 answer = yes
	function q1Yes() {
		$('#headingOne a').text( 'Your child is struggling in school' );
		question1()
	}	
	// question 1 answer = no
	function q1No() {
		$('#headingOne a').text( 'Your child is not struggling in school!' );
		question1()
	}	
	// question 1 - called 
	function question1() {
		// hide question 1
		$('#questionOne').slideUp();
		// show question 2
		$('#q2').removeClass('hidden');
		$('#questionTwo').slideDown().addClass('in');
		
	}
	// question 2
	function question2() {
		// hide question 2
		$('#questionTwo').slideUp().removeClass('in');
		$('#questionOne').removeClass('in');
		// get user answer - store as value
		var value = $( "#questionTwo select" ).val();
		// change text to show answer
		$('#headingTwo a').text( 'Your child is in grade ' + value );
		// show question 3
		$('#q3').removeClass('hidden');
		$('#questionThree').slideDown().addClass('in');
	}
	// question 3
	function question3() {
		// hide question 3
		$('#questionThree').slideUp().removeClass('in');
		// get user answer - store as value
		var value = $( "#questionThree select" ).val();
		// change text to show answer
		$('#headingThree a').text( 'Your child needs help in ' + value );
		// show Call to Action
		$('#cta').removeClass('hidden');
		$('#questionFour').slideDown().addClass('in');
	}

	// redisplay questions - if user clicks the heading of a question
	$('#headingOne a').on('click', function() {
		$('#questionOne').css('display', 'block');
	});
	$('#headingTwo a').on('click', function() {
		$('#questionTwo').css('display', 'block');
	});
	$('#headingThree a').on('click', function() {
		$('#questionThree').css('display', 'block');
	});
	$('#headingFour a').on('click', function() {
		$('#questionFour').css('display', 'block');
	});

