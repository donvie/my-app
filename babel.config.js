/* eslint-disable */

module.exports = api => {
  return {
    plugins: [
      [
        "import",
        {
          libraryName: "vant",
          libraryDirectory: "es",
          style: true
        }
      ]
    ],
    presets: [
      [
        '@quasar/babel-preset-app',
        api.caller(caller => caller && caller.target === 'node')
          ? { targets: { node: 'current' } }
          : {}
      ]
    ]
  }
}
