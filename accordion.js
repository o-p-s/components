$(document).ready(()=>{
  let section = $('li');

  function toggleAccordion() {

    if($(this).hasClass('active')) {
      $(this).removeClass('active');
    }
    else{
      $(this).addClass('active');
    }
  }
  section.on('click', toggleAccordion);

})
