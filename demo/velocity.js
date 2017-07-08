      var pubnub = PUBNUB.init({
      	publish_key   : 'pub-c-71f01ca6-632d-4152-b56b-95c50a5b0c79',
      	subscribe_key : 'sub-c-afa77712-5510-11e5-85f6-0619f8945a4f'
      });

      var channel = "c3-velocity";

      eon.chart({
      	pubnub: pubnub,
      	channel: channel,
      	generate: {
      		bindto: '#velocity',
      		data: {
      			labels: true,
      			type: 'bar'
      		},
      		bar: {
      			width: {
      				ratio: 0.5
      			}
      		},
      		tooltip: {
      			show: false
      		}
      	}
      });