let fs = require("fs");
let file_exe = require("./util.js");

let testPath = "./download";

let all_files = fs.readdirSync(testPath);
// let f ;

for(let i = 0; i < all_files.length; i++){
    // f = all_files[i];
    // console.log(f);
    sortFile(all_files[i])
}

function getExtension(file){
    file = file.split(".");
    return file[1];
    
}

function checkExtension(extension){
    let exefolderpath = testPath;
    for(key in file_exe){
        let extensions = file_exe[key];
        if(extensions.includes(extension)){
            exefolderpath = exefolderpath+'/'+key;
            break;
        }

    }
    let isFolderExist = fs.existsSync(exefolderpath)
    if(!isFolderExist){
        fs.mkdirSync(exefolderpath);
    }

    return exefolderpath;
}

function moveFile(file , exefolderpath){
    let sourceFilepath = testPath+'/'+file;
    let destinationFilepath = exefolderpath+'/'+file;

    fs.copyFileSync(sourceFilepath , destinationFilepath);

    // fs.unlinkSync(sourceFilepath);
}

function sortFile(file){
    let extension = getExtension(file);
    let exefolderpath = checkExtension(extension);

    moveFile(file , exefolderpath);

}