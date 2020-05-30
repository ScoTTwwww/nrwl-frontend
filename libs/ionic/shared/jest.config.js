module.exports = {
  name: 'ionic-shared',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ionic/shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
