function Server() {
  this.url = "http://192.168.0.1";
  this.port = 8081;
  this.api = "abcdef012345";
}

SickRage = new Server();

SickRage.available = function() {
  return Meteor.call("available", {});
}

SickRage.checkShow = function(tvdbid) {
  return Meteor.call("checkShow", tvdbid, {});
}

SickRage.addShow = function(tvdbid) {
  return Meteor.call("addShow", tvdbid, {});
}
