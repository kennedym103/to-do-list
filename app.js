function addListItem() {
   var text = $('#newItem').val();
   if ($('#newItem').val() === '') {

   }
   else {
      $('#list').append('<li>'+' <input type="checkbox" class="done" /> ' + text + '  <button class="delete" >Delete</button>' + '</li>');
      localStorage.setItem("todolist", $('#list').html());
      $('#newItem').val('')
   }
}

function finishItem() {
   if ( $(this).parent().css('text-decoration') === 'line-through') {
      $(this).parent().css('text-decoration', 'none');
   }
   else {
      $(this).parent().css('text-decoration', 'line-through');
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


$(function(){
  $('#list').html(localStorage.getItem("todolist"));
});
