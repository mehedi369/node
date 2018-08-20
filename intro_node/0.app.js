let os = require('os');
let fs = require('fs');

let writeFile = os.userInfo();

fs.appendFile('osInfo.txt',writeFile, (err)=>{
	if (err) throw err;
});


