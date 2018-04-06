$(document).ready(()=> {
  $('#sidebarCollapse').on('click',()=>{
    $('#sidebarCollapse').toggleClass('active');
    $('#sidebar').toggleClass('active');
    $('#content').css('display','none');
  })
  $('#sidebar .menu .menu-item').on('click',()=>{
    $('#sidebarCollapse').toggleClass('active');
    $('#sidebar').toggleClass('active');
    $('#content').css('display','flex')
  })
})
