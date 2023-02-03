//nodejs also comes with some core modules built into it for adding functionality
//1.os module
const os = require("os"); //built in file into node
console.log(os.platform(), os.homedir()); // Win32 for ex , homedir name

//2.fs module
//interact with file system with js:
const fs = require("fs");
//note : is it sync func? then fire a callback func when it is done

// reading files
function readSomeFile(path) {
  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    else {
      console.log(data); //buffer : pkg of data
      console.log(data.toString()); //convert to str
    }
  }); // this func(async) will fire when reading is done
}

//writing files
function writeSomeFile(path, txt) {
  fs.writeFile(path, txt, () => {
    console.log("file was written");
  });
  // replace text within the file if it exists
  // create one and append text to it if it doesn't exist
}

// directories
//if dir exits -> delete it, if it is not -> create it
function toggleMakeRemoveDir(path) {
  if (!fs.existsSync(path)) {
    //make dir (not exist case)
    fs.mkdir(path, (err) => {
      if (err) console.log(err);
      console.log("folder created");
      //note
      //default of mkdir without (!fs.existsSync(path)) check:
      //if it is already exits => error
    });
  } else {
    // remove the dir (exist case)
    fs.rmdir(path, (err) => {
      if (err) console.log(err);
      console.log("folder deleted");
    });
  }
}

// deleting files
function removeSomeFile(path) {
  if (fs.existsSync(path)) {
    fs.unlink(path, (err) => {
      if (err) console.log(err);
      console.log("file deleted");
    }); //delete if exists
  } //(default without existance check -> err if not found)
}

//calling functions:

// readSomeFile("./docs/blog2.txt");

// writeSomeFile("./docs/blog.txt", "hello, world");
// writeSomeFile("./docs/blog2.txt", "hello, again"); //try non-existing file name

// toggleMakeRemoveDir("./assets");

// removeSomeFile("./docs/deleteme.txt");
