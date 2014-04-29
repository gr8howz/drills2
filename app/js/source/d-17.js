(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
    $.getJSON(url, function(data){
      appendQuote(data);
    });
  }

  function appendQuote(data){
    var shares = $('#shares').val() * 1;
    var position = shares * (data.LastPrice);
    var $div = $('<div>').addClass('quotediv');
    $div.append('<p>' +  shares + '</p><p>$' + data.LastPrice.toFixed(2) + '</p><p>$' + position.toFixed(2));
    $('#quote').append($div);
  }
})();
