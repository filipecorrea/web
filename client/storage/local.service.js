angular.module('myApp')
.service('localStorageService', function ($window) {
  var self = this;

  /**
   * Stores a string that represents a unique Id of the logged user
   * @type {String}
   */
  self.TOKEN = 'token';

  /**
   * Stores the intranet ID of the logged user
   * @type {String}
   */
  self.USER = 'user';

  /**
   * Stores the states assocated with user's country
   * @type {String}
   */
  self.STATES = 'states';

  /**
   * Gets the value of the cookie based on given key
   * @method getData
   * @param  {String} key  Name of the cookie
   * @return {Variant}     Value of the cookie
   */
  self.getData = function(key) {
    if(key === self.TOKEN){
      return $window.localStorage[key];
    } else {
      return JSON.parse($window.localStorage[key]);
    }
  };

  /**
   * Store data into cookie storage labeled by the given key
   * @method setData
   * @param  {String} key  Label used to store the data
   * @param  {[type]} data Value to be stored
   */
  self.setData = function(key, data) {
      if (key === self.TOKEN){
        $window.localStorage[key] = data;
      } else {
        $window.localStorage[key] = JSON.stringify(data);
      }
  };

  /**
   * Remove data from local cookie based on given key
   * @method unSet
   * @param  {String} key label of data to be removed
   */
  self.unset = function(key) {
      delete $window.localStorage[key];
  };

  /**
   * Remove all login data from cookie
   * @method clear
   */
  self.clear = function() {
      self.unset(self.TOKEN);
      self.unset(self.USER);
      self.unset(self.STATES);
  };

  return self;
});
