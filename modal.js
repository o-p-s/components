$(document).ready(()=>{
$('[data-modal-open]').on('click', function(e)  {
var targeted_modal_class = $(this).attr('data-modal-open');
$('[data-modal="' + targeted_modal_class + '"]').fadeIn(350);
e.preventDefault();
});
//----- CLOSE
$('[data-modal-close]').on('click', function(e)  {
var targeted_modal_class = $(this).attr('data-modal-close');
$('[data-modal="' + targeted_modal_class + '"]').fadeOut(350);
e.preventDefault();
});
});
