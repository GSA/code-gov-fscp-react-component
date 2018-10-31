const fs = require('fs')
const path = require('path')
const showdown  = require('showdown')

const converter = new showdown.Converter()

const filenames = fs.readdirSync('./pages/markdown')

filenames.forEach(filename => {
  const infilepath = path.join('./pages/markdown', filename)
  console.log("filepath:", infilepath)
  const filetext = fs.readFileSync(infilepath, 'utf-8')
  console.log("filetext:", filetext.length)
  const html = converter.makeHtml(filetext)
  console.log("html.length:", html.length)
  const outfilepath = path.join('./pages/html', filename.replace('.md','.html'))
  fs.writeFileSync(outfilepath, html)
})