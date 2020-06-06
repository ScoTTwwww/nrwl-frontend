module.exports = {
  name: 'common-auth-shared',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/auth/shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
