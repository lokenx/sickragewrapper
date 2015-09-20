# SickRage API Wrapper

A package that allows you to interface with [SickRage](http://www.sickrage.tv/), specifically built for [Plex Requests](https://github.com/lokenx/plexrequests-meteor/). Not all API calls are available, and those available aren't complete.

## Features
- Check availability of server
- Check if TV Show exists on server
- Add new TV show

## Installation

`meteor add lokenx:sickragewrapper`

## Usage

Define your SickRage server details somewhere in your server-side code.

    if (Meteor.isServer) {
      SickRage.url = "http://192.168.0.1";
      SickRage.port = 8081;
      SickRage.api = "abcdef012345";
    }

## Functions

**available:** Checks if server is available

    SickRage.available();

**checkShow:** Check if show exists on server

    SickRage.checkShow(tvdbid)
    tvdbid should be a TVDB ID

**addShow:** Add new TV show to server

    SickRage.addShow(tvdbid)
    tvdbid should be a TVDB ID

## License

This application is licensed under The MIT License.
