/**
 * Happy eyes singleton which handles all happy eyes logic
 */
var happyEyes = {

  // List of class/id names we're looking for
  selectorList: ['main', 'content', 'post', 'article', 'primary'],
  domElems: {
    tags: ['body', 'html'],
    ids: [],
    classes: []
  },
  tempBool: false,


  /**
   * Handles toggling of Happy Eyes Effect.  Breaking this out into 
   * seperate method because I will want to toggle effect through other
   * mechanisms at some point.
   *
   * @public
   */
  saveEyes: function(){
    if ( this.tempBool === false ) {
      this.engage();
      this.tempBool = true;
    } else {
      this.disEngage();
      this.tempBool = false;
    }
  },

  /**
   * Adds class to appropriate element to start CSS3 keyframing process
   *
   * @public
   */
  engage: function(){
    var self = this;
    
    // Start by finding necessary dom elements
    self.findBackgrounds();

    // Add class by tags
    this.domElems.tags.forEach( function( tagName ) {
      t = document.getElementsByTagName( tagName )[0];
      self.addClassTo( t );
    });
    
    // Add class by id
    this.domElems.ids.forEach( function( elem ) {
       t = document.getElementById(elem);
       self.addClassTo( t );
    });
    
    // Add class by class
    this.domElems.classes.forEach( function( elem ){
      cls = document.getElementsByClassName(elem);
      for (var i = 0; i < cls.length; ++i) {
        self.addClassTo( cls[i] );
      }
    });
  },

  /**
   * Removes happy eyes effect
   *
   * @public
   */
  disEngage: function(){
    var self = this;

    // Add class by tags
    this.domElems.tags.forEach( function( tagName ) {
      t = document.getElementsByTagName( tagName )[0];
      t.className = t.className.replace('i-want-happy-eyes', '');
    });
    
    // Add class by id
    this.domElems.ids.forEach( function( elem ) {
       t = document.getElementById(elem);
       t.className = t.className.replace('i-want-happy-eyes', '');
    });
    
    // Add class by class
    this.domElems.classes.forEach( function( elem ){
      cls = document.getElementsByClassName(elem);
      for (var i = 0; i < cls.length; ++i) {
        cls[i].className = cls[i].className.replace('i-want-happy-eyes', '');
      }
    });

    // Show that we're done
    self.tempBool = true;
  },

  /**
   * Gather and add to happyEyes.domElems based on happyEyes.selectorList
   *
   * @public
   */
  findBackgrounds: function(){
    // Brute force until I learn how to properly wield javascript...
    var s    = this.selectorList;
    var self = this;

    // Selector might be a class or an id
    s.forEach(function(name){
      // Push each match to Dom elem array
      iMatch = document.getElementById(name);
      cMatch = document.getElementsByClassName(name);
      // Add to selectorList object
      self.pushElem(iMatch);
      self.pushElem(cMatch);
    });

  },

  /**
   * Adds class, trims white space. Is this unnecessary?
   *
   * @public
   */
  addClassTo: function(div){
    // Init
    var empty = 'i-want-happy-eyes', 
        occupied = ' i-want-happy-eyes';

    // Determine which string to use
    var classString = div.className.length === 0 ? empty : occupied;

    // Add class to this dom element
    div.className += classString;
  },

  /**
   * Adds class to appropriate element to start CSS3 keyframing process
   *
   * @public
   */
  pushElem: function(elem){
    var t = Object.prototype.toString.call( elem );
  
    if ( t === "[object HTMLDivElement]" && elem !== null ) {
      
      this.domElems.ids.push(elem.id);

    } else if ( t === "[object NodeList]" && elem.length > 0 ) {
      
      for (var i = 0; i < elem.length; ++i) {
        this.domElems.classes.push(elem[i].className);
      }

    }
    
  },

  //http://stackoverflow.com/questions/6195373/regular-expression-to-get-class-name-with-specific-substring
  // Keeping this method very standalone for now. Not sure if I'm going to need regexp or not
  hasClass: function(string, klass) {
    var regxp = new RegExp("(?:^| )(" + klass + ")(?: |$)"); 
    var match = ( "" + string ).match( regxp );
    return (match) ? true : false;
  }

}

// Get this party started
happyEyes.saveEyes();

/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg) {
  /* If the received message has the expected format... */
  if ( msg.from === 'browserAction' ) {
    happyEyes.saveEyes()
  }
});