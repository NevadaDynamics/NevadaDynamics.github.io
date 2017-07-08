var pubnub = PUBNUB.init({
      publish_key   : 'pub-c-71f01ca6-632d-4152-b56b-95c50a5b0c79',
      subscribe_key : 'sub-c-afa77712-5510-11e5-85f6-0619f8945a4f'
      });

      var channelA = "c3-spline";

      eon.chart({
        pubnub: pubnub,
        history: true,
        channel: channelA,
        flow: {
          duration: 100
        },
        generate: {
          bindto: '#altitudeIndicator',
          data: {
            x: 'x',
            labels: false
          },
          axis : {
            x : {
              type : 'timeseries',
              tick: {
                format: '%S'
              }
            }
          }
        }
      });