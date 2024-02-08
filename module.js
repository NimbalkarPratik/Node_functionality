// // NPM module.
// const color = require('cli-color') //require function is already wrapped in node js which is automatically gives us parameter as require.
// console.log(color.green('Hello Node js'));




// // // Loacl module
// const auth = require('./auth')

// auth.register('Partik');
// auth.login('Pratik','Pn@9767615164')




// // Core modules which are inbuild modules also
const path = require('path');

// console.log(__filename,"Filename");
// // dirname
// console.log('Folder name : ', path.dirname(__filename));
// // filename
// console.log("File name is : ",path.basename(__filename));
// // extention of file
// console.log("file extention is : ",path.extname(__filename));
// // parse
// console.log('Parse : ',path.parse(__filename));
// //Join 
// console.log('Join : ', path.join(__dirname,'Order','app.js'));




// File System module
const fs = require('fs');

// Make a directory, how to create folder
// fs.mkdir(path.join(__dirname,'/test'),(err) => {
//     if(err) {
//         console.log(err);
//         console.log("something went wrong");
//         return;
//     }
//     console.log('Folder created...');
// })


// // Make a file, how to create file in folder
// fs.writeFile(path.join(__dirname,'test','test.txt'),'Hello Node' , (err) => {
//     if(err) {
//         throw err;
//     }
//     fs.appendFile(path.join(__dirname,'test','test.txt'),' More data added again', (err) => {
//         if(err) {
//             throw err;
//         }
//         console.log("Data added...");
//     })
//     console.log('File created...');
// } )


// // How to read file
// fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data) => {
//     if(err) {
//         throw err;
//     }
//     // console.log(data,'data'); // if we directly display data it will show buffer
//      const content = Buffer.from(data);
//      console.log(content.toString(),"content");

//     console.log(data,"data");  // by adding second parameter utf-8 then we can display direct data without buffer.
// })




// // Operating System module
// const os = require('os');

// console.log("Os type is : ",os.type());
// console.log("Os platform is : ",os.platform());
// console.log("CPU architecture : ",os.arch());
// console.log("CPU details : ",os.cpus());
// console.log("Free memory : ",os.freemem());
// console.log("Total memory : ",os.totalmem());
// console.log("Uptime : ",os.uptime());




// // Events module 

const Emitter = require('events');

// // const myEmitter = new Emitter();
// // myEmitter.on('somename',(data) => {
// //     console.log(data,"data");
// // })

// // myEmitter.emit('somename',{
// //     name: 'Pratik',
// //     age: 26
// // });


// class Auth extends Emitter{
//     register(username) {
//         console.log("Register successfully...");
//         this.emit('registered',username);
//     }
// }

// const auth = new Auth();
// // Listening of event created in register function
// auth.on('registered',(data) => {
//     console.log(`Sending email to ${data}`);
// })
// auth.on('registered',(data) => {
//     console.log(`Sending welcome email to ${data}`);
// })

// auth.register('Pratik')