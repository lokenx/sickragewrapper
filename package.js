Package.describe({
  name: 'lokenx:sickragewrapper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for the SickRage API',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lokenx/sickragewrapper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('check');
  api.use('http');

  api.addFiles('lib/server/export/functions.js', ['server']);
  api.addFiles('lib/server/methods/available.js', ['server']);
  api.addFiles('lib/server/methods/checkShow.js', ['server']);

  api.export("SickRage");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sickragewrapper');
  api.addFiles('sickragewrapper-tests.js');
});