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
  }

}

happyEyes.saveEyes();
console.log('happyEyes.js was injected');




