$(document).ready(()=>{
  $('.fat').on('mouseenter', (event)=>{$(event.currentTarget).addClass('fine')}).on('mouseleave', (event)=>{$(event.currentTarget).removeClass('fine')});
  })
