$(document).ready(function() {
	$('#newContainer').on('click', function() {
		var generateCounter = 0;
		// generateCounter++
		var deleteButton = '<button id="deleteButton">delete</button>';
		var changeButton = '<button id="changeButton">change</button>';
		var container = '<div class="container">'+ deleteButton + changeButton + generateCounter + '</div>';
		$('#content').append(container);

		
		$('.container').children().last().data('gen', generateCounter);
		// generateCounter++;
	
		// $('#newContainer').on('click', generateCounter, counter);

		$('.container').on('click', '#deleteButton', function() {
			$(this).parent().remove();
		});

		$('.container').on('click', '#changeButton', function() {
				$(this).parent().toggleClass('red');
		});



	});

	

	function counter() {

		var generateCounter = 0;
		generateCounter++
		var generated = $(this).data('gen');
	}


});