(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#go').click(random);

  }

  function random(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    var a = Math.random();

    var color = 'rgba(' + x + ', ' + y + ', ' + z + ', ' + a + ')';
    $('#go').css('background-color', color);
  }
})();
