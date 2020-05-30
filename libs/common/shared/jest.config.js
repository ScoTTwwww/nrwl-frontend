module.exports = {
  name: 'common-shared',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
