Meteor.methods({
  addShow: function(tvdbid, episodes){
    try {
      check(SickRage.url, String);
      check(SickRage.port, Number);
      check(SickRage.api, String);
      check(tvdbid, Number);
      check(episodes, Number);
    } catch (e) {
      console.log(e.message);
      return false;
    }

    var episodeStatus = (episodes === 1) ? "&status=wanted" : "";

    try {
      var response = HTTP.call("GET",
        SickRage.url + ":" + SickRage.port + "/api/" + SickRage.api + SickRage.directory + "?cmd=show.addnew&tvdbid=" + tvdbid + episodeStatus, 
        {timeout: 2000} );
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
