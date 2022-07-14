// var Links = {

// }

var Body = {
  setColor : function(color) {
    $('body').css('color', color);
  },

  setBackgroundColor : function(color) {
    $('body').css('backgroundColor', color);
  }
}

var Heading = {
  setBorderColor : function(color) {
    $('h1').css('borderColor', color);
  }
}

function nightDayHandler(self) {
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Heading.setBorderColor('white');
    self.value = 'day';
  }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Heading.setBorderColor('black');
    self.value = 'night';
  }
}