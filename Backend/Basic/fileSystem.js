const fs = require("fs");
const fsPromise = require("fs/promises");
// console.log(fs);

// make directory
// asynchronously
// synchronously

// first error handling callback function

// console.log("start");
// ================== Asynchronously
// fs.mkdir("./newDir", (error) => {
//   console.log("inside callback");

//   if (error) {
//     console.log("Error in creating directory", error);
//     console.log("inside error callback");
//   } else {
//     console.log("Directory created successfully");
//   }
// });

//====== Synchronous=======
// try {
//   fs.mkdirSync("./newDirSync");
//   console.log("Directory created successfully");
// } catch (error) {
//   console.log("Error in creating directory", error);
// }
// console.log("end");

// === read directory===
// fs.readdir("./newDir", (error, dirs) => {
//   if (error) {
//     console.log("Error in reading directory", error);
//   } else {
//     console.log("Contents of newDir:", dirs);
//   }
// });
//===delete directory=== rmdir
//  fs.rmdir('./newDir',(error)=>{
//      if(error){
//        console.log("Error in deleting directory", error);
//      } else {
//        console.log("Directory deleted successfully");
//      }

// })

// operations on filesystem==
//1--> file path
//2--> content
//3-->callback
// Asynchronous
// let content = "Muskan Nishi Priya";
// fs.writeFile("./name.txt", `${content}`, (error) => {
//   if (error) {
//     console.log("Error in writing file", error);
//   } else {
//     console.log("File created successfully");
//   }
// });

// Synchronous

// let content = "Abhishek  ridhima tidak";
// fs.appendFile("./name.txt", `${content}`, (error) => {
//   if (error) {
//     console.log("Error in writing file", error);
//   } else {
//     console.log("File created successfully");
//   }
// });

// Read file
// Asynchronously
// fs.readFile("./name.txt", "utf-8",(error, content) => {
//   if (error) {
//     console.log("Error in reading file", error);
//   } else {
//     console.log("File content:", content);
//   }
// });
// using promise

const readFilePromise = async () => {
  try {
    const content = await fsPromise.readFile("./name.txt", "utf-8");
    console.log("File content:", content);
  } catch (error) {
    console.log("Error in reading file", error);
  }
};

readFilePromise();
