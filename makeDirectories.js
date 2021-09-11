const fs = require('fs');
let tensDir = '';
let hundredsDir = '';
let thousandsDir = '';

for (let i = 0, j = 1; i < 200+1; i++) {

  tensDir = `/${i*10+1}-${i*10+10}`

  if(!(i%10)) {
    hundredsDir  =  `/${i*10+1}-${i*10+100}`
    const folderName100s = thousandsDir+hundredsDir
    if (!fs.existsSync(folderName100s)) {
      fs.mkdirSync(folderName100s)
    }
  }

  if(!(i%100)) {
    thousandsDir  =  `./${i*10+1}-${i*10+1000}`
    const folderName1000s = thousandsDir
    if (!fs.existsSync(folderName1000s)) {
      fs.mkdirSync(folderName1000s)
    }
  }

  const folderName10s = thousandsDir+hundredsDir+tensDir

  if (!fs.existsSync(folderName10s)) {
    fs.mkdirSync(folderName10s)
  }
}
