Meteor.methods({
  addShow: function(tvdbid){
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
      var response = HTTP.call("GET", SickRage.url + ":" + SickRage.port + "/api/" + SickRage.api + "?cmd=show.addnew&tvdbid=" + tvdbid, {timeout: 2000} );
    } catch (e) {
      console.log(e.message);
      return false;
    }

    var status;

    console.log(response);

    if (response.data) {
      status = (response.data.result == "success") ? true : false;
    } else {
      status = false;
    }

    return status;
  }
});
