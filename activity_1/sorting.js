let fileextension = require("./util.js");
let fs = require("fs");

// console.log(fileextension);

let testpath = "./download";

let allfiles = fs.readdirSync(testpath);
// console.log(allfiles);

for(let i = 0; i < allfiles.length; i++){
    // file = allfiles[i];
    sortFile(allfiles[i]);
}

function getexe(file){
    file = file.split(".");
    return file[1];
}

function checkexe(extension){
    let extensionFolderName  = testpath;
    for(key in fileextension){
        let extensions = fileextension[key];
        if(extensions.includes(extension)){
            extensionFolderName  = extensionFolderName +"/"+ key;
            break;
        }
    }
    let isfolderexist = fs.existsSync(extensionFolderName);
    if(!isfolderexist){
        fs.mkdirSync(extensionFolderName);
    }
    return extensionFolderName;
}

function moveFile(file , extensionFolderName){
    let sourceFile = testpath+"/"+file;
    let destinationFile = extensionFolderName+"/"+file;
    // copy file from the source path to destination path !!
    fs.copyFileSync(sourceFile , destinationFile);
    // then delete file from the source path !!
    // fs.unlinkSync(sourceFile);
}

function sortFile(file){
    let extension = getexe(file);
    // console.log(extension);
    let extensionFolderName = checkexe(extension);
    moveFile(file , extensionFolderName);
}