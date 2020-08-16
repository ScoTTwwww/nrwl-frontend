module.exports = {
  name: 'web-setting',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web/setting',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
