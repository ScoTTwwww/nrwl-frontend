module.exports = {
  name: 'web-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web/core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
