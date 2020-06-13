module.exports = {
  name: 'common-auth-state',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/auth/state',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
