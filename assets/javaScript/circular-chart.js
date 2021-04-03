var myCircle = Circles.create({
    id:                  'circles-1',
    radius:              60,
    value:               20,
    maxValue:            100,
    width:               20,
    text:                function(value){return value + '%';},
    colors:              ['#f4f4f4', '#2e4067'],
    duration:            400,
    wrpClass:            'circles-wrp',
    textClass:           'circles-text',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  });
  var myCircle = Circles.create({
    id:                  'circles-2',
    radius:              60,
    value:               40,
    maxValue:            100,
    width:               20,
    text:                function(value){return value + '%';},
    colors:              ['#f4f4f4', '#2e4067'],
    duration:            400,
    wrpClass:            'circles-wrp',
    textClass:           'circles-text',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  });