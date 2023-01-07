module.exports = {
  presets: [
    [
      '@antd-relx/cli/preset.cjs',
      {
        loose: process.env.NODE_ENV === 'compile',
      },
    ],
  ],
}
