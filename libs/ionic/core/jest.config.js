module.exports = {
  name: 'ionic-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ionic/core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
