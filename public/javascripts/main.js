$(document).ready(function(){
  $(".embolden").click(function(e){
    e.preventDefault();
    document.execCommand('bold',false,null);
  });
  
  $(".italicize").click(function(e){
    e.preventDefault();
    document.execCommand('italic',false,null);
  });
  
  $(".note-outer").draggable({handle:".note-buttons"});
  $(".note-outer").resizable({ handles: "n, e, s, w" });
  $( "#resizable" ).resizable();
  
});