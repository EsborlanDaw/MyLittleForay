$(function(){
    $('.profile_container').on('click', function(e){
      let $biginfo = $('#teamcontent');
      let $bigname = $('#bigname');
      let $bigjob  = $('#bigjob');
      let $bigdesc = $('#bigdesc');
      let $bigimg  = $('.bigimg');  
      
      let newimg  = $(this).find('.profilepic').attr('src');
      let newname = $(this).find('.profilepic').attr('alt');
      let newrole = $(this).siblings('.job').eq(0).html();
      let newdesc = $(this).siblings('.desc').eq(0).html();
      
      $bigimg.css('background-image', "url(" + newimg + ")");
      $bigname.html(newname);
      $bigjob.html(newrole);
      $bigdesc.html(newdesc);
      
      if($biginfo.css('display') == 'none') {
        $biginfo.slideDown(350);
      }
        
      $('html, body').animate({ scrollTop: $('.team_box').offset().top }, 'slow');  
    });
  });
      
  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
          
        let hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });
  