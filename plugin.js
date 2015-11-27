'use strict'

var riot = Npm.require('riot')

function compileFile(file) {
  var source, output
  try {
    source = file.getContentsAsString()
    output = riot.compile(source)
  }
  catch (e) {
    file.error({
      message: 'Riot compiler error: ' + e.message,
      column: e.column,
      line: e.line
    })
  }
  file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' })
}

// create a compiler class
function RiotCompiler() {}
RiotCompiler.prototype.processFilesForTarget = function (files) {
  files.forEach(compileFile)
}

Plugin.registerCompiler({ extensions: [ 'tag' ] }, function () {
  return new RiotCompiler()
})
