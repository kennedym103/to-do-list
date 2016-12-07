function addListItem() {
   var text = $('#newItem').val();
   if ($('#newItem').val() === '') {} else {
      $('#list').append('<li>' + ' <button  class="done"></button><span> ' + text + '</span>  <button class="delete" >X</button>' + '</li>');
      localStorage.setItem("todolist", $('#list').html());
      $('#newItem').val('')
   }
}

function finishItem() {
      $(this).parent().toggleClass('done-checked');
      localStorage.setItem("todolist", $('#list').html());
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
