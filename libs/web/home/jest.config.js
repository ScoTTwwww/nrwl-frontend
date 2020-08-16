module.exports = {
  name: 'web-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
