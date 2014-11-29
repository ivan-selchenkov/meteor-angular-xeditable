Package.describe({
  name: 'selchenkov:angular-xeditable',
  summary: 'Meteor package for the angular-xeditable',
  version: '0.0.2',
  git: 'https://github.com/vashik/meteor-angular-xeditable.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
        'urigo:angular@0.5.5',
        'mvrx:bluebird@0.0.1',
        'stevezhu:lodash@1.0.2'],
      'client');
  // Add bower
  api.addFiles('xeditable.js');
  api.addFiles('xeditable.css');
  api.addFiles('selchenkov:angular-xeditable.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('selchenkov:angular-xeditable');
  api.addFiles('selchenkov:angular-xeditable-tests.js');
});
