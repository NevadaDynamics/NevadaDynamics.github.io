$('#velocityIndicator').radialIndicator({
	radius: 80,
	interaction : true,
	barWidth: 10,
	initValue: 40,
	roundCorner : true,
	barColor: '#33CC33',
	onChange : function(value){
		$(this).find('.cur-value').html(value);
	},
	percentage: true
});


$('#gpsIndicator').radialIndicator({
	radius: 80,
	barWidth: 10,
	initValue: 77,
	roundCorner : true,
	barColor: {
		0: '#FF0000',
		33: '#FFFF00',
		66: '#0066FF',
		100: '#33CC33'
	},
	percentage: true,

});


var radialObj = radialIndicator('#timeIndicator', {
	radius: 80,
	barWidth: 10,
	barColor: {
		0: '#FF0000',
		33: '#FFFF00',
		66: '#0066FF',
		100: '#33CC33'
	},
	minValue: 0,
	maxValue: 60,
	fontWeight: 'normal',
	roundCorner: true,
	format: function (value) {
		//var date = new Date();
		//return date.getHours() + ':' + date.getMinutes();
		return (60-(new Date().getSeconds()))+" minutes";
	}
});

setInterval(function () {
	radialObj.value(60-(new Date().getSeconds()) + 1);
}, 1000);

$('#nasaIndicator').radialIndicator({
	radius: 80,
	initValue : 100,
	barColor: '#33CC33',
	barWidth: 10,
		format: function (value) {
		//var date = new Date();
		//return date.getHours() + ':' + date.getMinutes();
		return "UTM CLEAR";
	}
});





