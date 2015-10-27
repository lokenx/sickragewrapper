Meteor.methods({
  available: function(){
    try {
      check(SickRage.url, String);
      check(SickRage.port, Number);
      check(SickRage.api, String);
    } catch (e) {
      console.log(e.message);
      return false;
    }

    try {
      var response = HTTP.call("GET", SickRage.url + ":" + SickRage.port + SickRage.directory + "/api/" + SickRage.api + "/?cmd=sb.ping", {timeout: 2000} );
    } catch (e) {
      console.log(e.message);
      return false;
    }

    var status = (response.data) ? true : false;
    return status;
  }
});
