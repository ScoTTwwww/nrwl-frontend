module.exports = {
  name: 'web-shared',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web/shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
