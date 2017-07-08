      var pubnub = PUBNUB.init({
      publish_key   : 'pub-c-71f01ca6-632d-4152-b56b-95c50a5b0c79',
      subscribe_key : 'sub-c-afa77712-5510-11e5-85f6-0619f8945a4f'
      });

      var channelG = "c3-gauge";

        eon.chart({
          pubnub: pubnub,
          channel: channelG,
          generate: {
            bindto: '#batteryGauge',
            data: {
              type: 'gauge',
            },
            gauge: {
              min: 0,
              max: 100
            },
            color: {
              pattern: ['#FF0000', '#F6C600', '#60B044'],
              threshold: {
                values: [30, 60, 90]
              }
            }
          }
        });