module.exports = {
  name: 'web-user',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web/user',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
