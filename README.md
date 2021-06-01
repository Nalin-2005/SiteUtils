# SiteUtils
A CDN repository for my website (www.nalinangrish.me)  
Although this repo was initially made to support only my website, i have updated it and can now be used by anyone in their own websites.  
## Folder structure
- `js` - This folder contains all the JavaScript helper files.
- `css` - This folder contains all the CSS helper files.   
	For getting the usage examples of each and every file under these directories, visit the `README.md`s present in these folders.
- `docs` - This folder contains the JSDoc output for documenting the JavaScript code. 
- `package-lock.json` - This file contains the dependencies required to generate the documentation for the repo.
- `gendocs.js` - A script to generate the documentation for all the code using `jsdoc2md`. Run `npm install` in this directory before executing this script.
## Contributing
You can freely contribute to this repo by adding your own files, documenting, and uploading them. You need to document the project using JSDoc comments and then, you have to generate the documentation using the tools provided in this repo. You can generate the documentation by following the below steps:  
- Make sure you have node installed. If not, install it from nodejs.org. Also make sure that it is added to the PATH environment variable and you can successfully run `node --version` inside the current terminal.  
- Run `npm install` in the root directory of this repo.  
- Run `npm run doc` and wait till it generates the Documentation.  
## License
This project is available under the terms of the MIT License.
```
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
SOFTWARE.
```