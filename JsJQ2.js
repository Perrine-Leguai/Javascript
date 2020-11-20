$(document).ready(function(){
  $("body").append("<ol></ol>");
    $("#values-btn").click(function(e){
      
      let href= $('a').attr("href");
      let type= $('a').attr("type");
      let hreflang=$('a').attr("hreflang");
      let rel=$('a').attr('rel');
      $("ol").append("<li>"+href+"</li>");
      $("ol").append("<li>"+type+"</li>");
      $("ol").append("<li>"+hreflang+"</li>");
      $("ol").append("<li>"+rel+"</li>");
      });

})
