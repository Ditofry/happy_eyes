/**
 * Happy eyes singleton which handles all happy eyes logic
 */
var happyEyes = {

  // List of class/id names we're looking for
  selectorList: ['main', 'content', 'post', 'article'],
  domElems: {
    tags: ['body', 'html'],
    ids: [],
    classes: []
  },

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
    // Brute force until I learn how to properly wield javascript...
    var s = this.selectorList;
    s.forEach(function(name){
      // Push each match to Dom elem array
      iMatch = document.getElementById(name);
      cMatches = document.getElementsByClassName(name);

    });
    console.log('looking for the right divs...');
  },

  // Keepin it dryyyyy
  pushElem: function(elemm){
    var t = Object.prototype.toString.call( elemm );

    if ( t = "[object Object]" && elemm !== null ){
      this.domElems.ids.push(elemm.id);
    } elseif ( t = "[object Object]" && elemm.length > 0 ) {
      this.domElems.classes.push(elem.classes);
    }
  }
  //http://stackoverflow.com/questions/6195373/regular-expression-to-get-class-name-with-specific-substring
  // Keeping this method very standalone for now. Not sure if I'm going to need regexp or not
  hasClass: function(string, klass) {
    var regxp = new RegExp("(?:^| )(" + klass + ")(?: |$)"); 
    var match = ( "" + string ).match( regxp );
    return (match) ? true : false;
  }
}

happyEyes.saveEyes();
happyEyes.findBackgrounds();




