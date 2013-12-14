/**
 * Happy eyes singleton which handles all happy eyes logic
 */
var happyEyes = {

  /**
   * Adds class to appropriate element to start CSS3 keyframing process
   *
   * @public
   */
  saveEyes: function(){
    var bdy = document.getElementsByTagName('body')[0];
    bdy.setAttribute("class", "i-want-happy-eyes");
  },

  // Private methods
  findBackgrounds: function(){
    console.log('looking for the right divs...');
  },

  hasClass: function(string, klass) {
    var regxp = new RegExp("(?:^| )(" + klass + ")(?: |$)"); 
    var match = ( "" + string ).match( regxp );
    return (match) ? true : false;
  }
}

happyEyes.saveEyes();




