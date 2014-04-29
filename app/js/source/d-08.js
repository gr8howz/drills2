(function(){
  'use strict';
  $(document).ready(init);

  function init(){
  $('#div').click(toggle);
  }

  function toggle(){
		if(!$(this).hasClass('greenDiv')) {
			$(this).addClass('greenDiv');
		} else {
			$(this).removeClass('greenDiv');
		}
  }
})();
