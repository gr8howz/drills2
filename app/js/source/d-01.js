(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#compute').click(compute);

  }

  function compute(){
    var x = $('#input1').val() *1;
    var y = $('#input2').val() *1;

    $('#result').text(x+y);
  }

})();
