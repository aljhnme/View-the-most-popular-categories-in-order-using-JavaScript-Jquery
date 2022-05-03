(function($){
 
  $.fn.Move_El_Top = function(opt_e){
     
     let defaults={
        
        target: this.prev(),
        speed: 1000,
        opacity: 0.7,
        start: function () {

        },
        end: function () {

        }        
     };

     let option=$.extend(defaults,opt_e);

     let cu_el=this,
         target_el=option.target,
         cs_sty_bef={
           "position" : "relative",
           //"opacity": option.opacity
         },
         cs_sty_aft={
          "top" : "0",
          //"opacity": 1           
         },
 
         distance = cu_el.offset().top - target_el.offset().top;

         if (distance > 0) {
            cu_el.css(cs_sty_bef);
            option.start();
            $.when(cu_el.animate({
               top: - distance
            }, option.speed))
            .done(function(){
               cu_el.css(cs_sty_aft);
               cu_el.insertBefore(target_el);
               option.end();
            })
         }
  }}(jQuery))