(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' +symbol+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      appendQuote(data);
    });
  }

  function appendQuote(data){
    var $div = $('<div>').addClass('quoteDiv');
    $div.append('<p>', + data.Symbol + '</p><p>' + '<p>' + data.Name + '</p><p>' + data.lastPrice);
    $('#quote').append($div);
  }





})();
