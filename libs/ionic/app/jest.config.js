module.exports = {
  name: 'ionic-app',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ionic/app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
