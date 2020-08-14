module.exports = {
  name: 'ionic-login',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ionic/login',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
