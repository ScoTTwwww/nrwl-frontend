module.exports = {
  name: 'common-material',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/material',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
