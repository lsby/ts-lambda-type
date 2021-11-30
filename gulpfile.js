var path = require('path')
var exec = require('@lsby/exec_cmd').default

exports.清理一切 = async function 清理一切() {
    process.stdout.write('清理一切...')
    await exec(`rm -rf ./dist`, { cwd: path.resolve(__dirname, '.') })
    await exec(`rm -rf ./node_modules`, { cwd: path.resolve(__dirname, '.') })
    console.log('ok')
}
exports.发布到npm = async function 发布到npm() {
    process.stdout.write('发布到npm...')
    var r = await exec(`npm publish --access=public`, { cwd: path.resolve(__dirname, '.') })

    console.log('ok')
    console.log('发布信息:')
    console.log(r.join('\n'))
}
