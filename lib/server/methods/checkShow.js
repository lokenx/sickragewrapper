Meteor.methods({
  checkShow: function(tvdbid){
    try {
      check(SickRage.url, String);
      check(SickRage.port, Number);
      check(SickRage.api, String);
      check(tvdbid, Number);
    } catch (e) {
      console.log(e.message);
      return false;
    }

    try {
      var response = HTTP.call("GET", SickRage.url + ":" + SickRage.port + "/api/" + SickRage.api + "?cmd=show&tvdbid=" + tvdbid, {timeout: 2000} );
    } catch (e) {
      console.log(e.message);
      return false;
    }

    var status;

    if (response.data) {
      status = (response.data.result == "success") ? true : false;
    } else {
      status = false;
    }

    return status;
  }
});
