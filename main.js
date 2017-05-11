console.log('linked');

$(document).ready(function(){

var title = $('.title');
var title2 = $('h3');
var boxArray = [$('.one'), $('.two'), $('.three')];
var lieArray = ["It's raining.", "Buffy is great.", "I'm bored.", "Summer sucks.", "Winter also sucks.", "Insomniacs are productive.", "Public transportation in STL is a fucking marvel of human ingenuity."];
var points = 0;
var count = 0;

$('.sub-box').hover(function(){
		$(this).css('background', '#E8D284');
	}, function(){
		$(this).css('background', 'white');
	}	
);

$('.small-box').on('click', '.sub-box', function(event) {
	event.preventDefault();
	// console.log($(this))
	if ($(this).hasClass('lie')) {
		title.html("Wrong. Try Again.").css('color', '#DB6F6F')
		$(this).css('border', 'solid #DB6F6F')
		
	} else {
		$(this).css('border', 'solid #56A589')
		title.html("Correct").css('color', '#56A589')
		count++
	}
})

var next = function(){
	$('.sub-box').css('border', 'solid #E8D284');
	title.html("Guess the lie").css('color', '#E8D284');
	$('.lie').removeClass('lie');
	var lieBox = _.sample(boxArray);
	lieBox.addClass('lie');
	console.log(lieBox)
	for (var i = 0; i < boxArray.length; i++) {
		boxArray[i].html(lieArray[i]).css('font-size', '17px')
	};
	_.shuffle(lieArray)
	if (count === 2) {
		points++
		$('.points').html(points)
	}
}

$('button').on('click', next)

// why won't the fucking border change colors!







});