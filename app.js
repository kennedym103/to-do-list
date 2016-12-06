function addListItem() {
   var text = $('#newItem').val();
   if ($('#newItem').val() === '') {} else {
      $('#list').append('<li>' + ' <button  class="done"></button> ' + text + '  <button class="delete" >X</button>' + '</li>');
      localStorage.setItem("todolist", $('#list').html());
      $('#newItem').val('')
   }
}

function finishItem() {
   if ($(this).parent().css('background') === 'linear-gradient(to bottom, #656565, #4e4e4e)'){
      $(this).parent().css({'background': '#3d3d3d', 'border-top': '2px solid #535353'});
   } else if ($(this).parent().css('background') ===  '#3d3d3d') {
         $(this).parent().css({'background': 'linear-gradient(to bottom, #656565, #4e4e4e)', 'border-top': '2px solid #6a6a6a'})
   }
}

$(document).ready(function () {

   $('#addItem').on('click', addListItem);

   $(document).on("click", ".delete", function () {
      $(this).parent().remove();
      localStorage.setItem("todolist", $('#list').html());
   });
   $(document).on("click", ".done", finishItem);
});

$(function () {
   $('#list').html(localStorage.getItem("todolist"));
});
