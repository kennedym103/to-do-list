

// add list item from the input and append item into html
function addListItem() {
   var text = $('#newItem').val();
   if ($('#newItem').val() === '') {} else {
      $('#list').append('<li>' + ' <button  class="done"></button><span> ' + text + '</span>  <button class="delete" >X</button>' + '</li>');
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
   $('#newTask').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#addItem').click();
        }
    });

   $(document).on("click", ".delete", function () {
      $(this).parent().remove();
      localStorage.setItem("todolist", $('#list').html());
   });
   $(document).on("click", ".done", finishItem);

});

$(function () {
   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.addBtn').addClass('.addBtn-mobile');
   }
});



$(function () {
   $('#list').html(localStorage.getItem("todolist"));
});
