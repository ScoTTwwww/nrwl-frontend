module.exports = {
  name: 'common-user',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/user',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
