(function(){
  'use strict';
  $(document).ready(init);
  function init(){
    $('#go').click(go);
  }

  function go(){
    getInput().split(',').map(strip).map(casing).map(div).forEach(append);
  }

  function append(div){
    $('#storage').append(div);

  }

  function getInput(){
    var string = $('#sentence').val();
    return string;
  }

  function strip(word){
    return word.trim();
  }

  function casing(word){
    return (word.length % 2) ? word.toUppercase() : word.toLowercase();

  }

  function div(word){
    var cls = (word.length % 2) ? 'odd' : 'even';
    return '<div class="'+cls+'">'+word+'</div>';

  }



})();
