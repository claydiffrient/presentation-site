$(document).ready(function(){
   //Preload the blue images to make it slightly faster to change them.
   var images = ['img/achievement-blue.png', 'img/affection-blue.png', 'img/anxiety-blue.png',
                 'img/demandingness-blue.png', 'img/depression-blue.png', 'img/other-blue.png',
                 'img/submissiveness-blue.png', 'img/Head_achievement.png', 'img/Head_affection.png',
                 'img/Head_anxiety.png', 'img/Head_demandingness.png', 'img/Head_depression.png',
                 'img/Head_other.png', 'img/Head_submissiveness.png'];
   $(images).each(function(){
      $('<img/>')[0].src = this;
   });

   //Set up the hover events for the icons.

   $('#iconBar').on({
      mouseenter: function(e){
         var src = $(e.currentTarget).attr('src');
         $(e.currentTarget).data('source', src);
         src = src.split('.');
         var newName = src[0] + "-blue." + src[1];
         $(e.currentTarget).attr('src', newName);
      },
      mouseleave: function(e){
         $(e.currentTarget).attr('src', $(e.currentTarget).data('source'));
      },
      click: function(e){
         clickHandle(e.currentTarget);
      }
   }, 'img.imgIcon');

   $('#iconBar').on('hover', 'img.imgIcon', function(e){

   });
});

/**
 * Handles the clicking of one of the icons.
 */
var clickHandle = function(target) {
   var src = $(target).attr('src');
   src = src.split('/');
   var name = src[1].split('-');
   $('#head img').attr('src', "img/Head_" + name[0] + ".png");
   $('#head .caption').text(name[0]);
   $('#message').text("A message about " + name[0] + " goes here.");
}