module.exports = {
  name: 'web-app',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web/app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
