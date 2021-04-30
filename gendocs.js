const jsdoc2md = require('jsdoc-to-markdown');
const fs = require("fs");

const srcdir = "./js/"
const outdir = "./docs/"

const license = `
MIT License

Copyright (c) 2021 Nalin Angrish

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

fs.readdir(srcdir, (err, files) => {
    files.forEach(file => {
        if (file.endsWith(".js")) {
            generate_docs(file);
        }
    });
    generate_docs_root(files)
    console.log("Success!")
});



function generate_docs_root(files) {
    var content = "# Nalin's SiteUtils JavaScript source Documentation.   \n\n";
    for (var fileindex in files) {
        var file = files[fileindex];
        if (file.endsWith(".js")) {
            content += `### [${file}](${file}.md)  \n`;
        }
    }
    content += `# License:  \n\`\`\`\n${license}\n\`\`\``
    fs.writeFileSync(outdir + "README.md", content);
}

function generate_docs(file) {
    console.log(`Generating docs for ${file}`);
    var doc = jsdoc2md.renderSync({ files: srcdir + file })
    try {
        fs.writeFileSync(outdir + file + ".md", doc)
    } catch (error) {
        console.error(error);
        process.abort();
    }
}