const fs = require('fs');
const replaceThis = "harry"
const path = require('path');
const replaceWith = "john"
const preview = false
const folder = __dirname

try {
    fs.readdir(folder, (err, data)=>{
        for (let index = 0;index<data.length;index++){
            const item = data[index];
            let oldFile = path.join(folder, item)
            let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
            if(!preview){
                fs.rename(oldFile, newFile, ()=>{
                    console.log("Rename Success");
                })
            }
            else{
                if( oldFile !== newFile) console.log("data/" + item + " will be renamed to " + newFile)
            }
            
        }
    })
} catch(err){
    console.error(err);
}

