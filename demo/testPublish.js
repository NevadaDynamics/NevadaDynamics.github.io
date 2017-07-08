var channelG = "c3-gauge";
var channelA = "c3-spline";
var channelV = "c3-velocity";
var channelM = "eonMap";

setInterval(function(){


  pubnub.publish({
    channel: channelA,
    message: {
      columns: [
      ['x', new Date().getTime()],
      ['Drone 1', Math.floor(Math.random() * 99)]
      ]
    }
  });

  pubnub.publish({
    channel: channelG,
    message: {
      columns: [['data', Math.random() * 99]]
    }
  });

  pubnub.publish({
    channel: channelV,
    message: {
      columns: [
      ['X', Math.floor(Math.random() * 99)],
      ['Y', Math.floor(Math.random() * 99)],
      ['Z', Math.floor(Math.random() * 99)],
      ]
    }
  });


}, 1000);