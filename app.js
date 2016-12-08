// add list item from the input and append item into html
function addListItem() {
   var text = $('#newItem').val();
   if ($('#newItem').val() === '') {} else {
      $('#list').append('<li>' + ' <button  class="done"></button><span> ' + text + '</span>  <button class="delete" ><svg style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 125" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px"><path d="M75.8,10.8L50,36.6L24.2,10.8c-2-2-5.1-2-7.1,0l-5.7,5.7c-2,2-2,5.1,0,7.1l25.8,25.8L11.5,75.1c-2,2-2,5.1,0,7.1l5.7,5.7  c2,2,5.1,2,7.1,0L50,62l25.8,25.8c2,2,5.1,2,7.1,0l5.7-5.7c2-2,2-5.1,0-7.1L62.7,49.3l25.8-25.8c2-2,2-5.1,0-7.1l-5.7-5.7  C80.9,8.8,77.7,8.8,75.8,10.8z"/></svg></button>' + '</li>');
      localStorage.setItem("todolist", $('#list').html());
      $('#newItem').val('')
   }

}

//toggle checked button on and off

function finishItem() {
   $(this).parent().toggleClass('done-checked');
   localStorage.setItem("todolist", $('#list').html());
}

$(document).ready(function () {

   $('#addItem').on('click', addListItem);
   $('#newTask').keypress(function (e) {
      if (e.which == 13) { //Enter key pressed
         $('#addItem').click();
      }
   });

   $(document).on("click", ".delete", function () {
      $(this).parent().remove();
      localStorage.setItem("todolist", $('#list').html());
   });

   $(document).on("click", ".done", finishItem);

});

$(document).keydown(function(keyPressed) {
  if (keyPressed.keyCode === 13) {
    addListItem();
  }
 });

$(function () {
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $('.addBtn').addClass('.addBtn-mobile');
   }
});

$(function () {
   $('#list').html(localStorage.getItem("todolist"));
});
