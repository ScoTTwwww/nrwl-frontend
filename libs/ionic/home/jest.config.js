module.exports = {
  name: 'ionic-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ionic/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
