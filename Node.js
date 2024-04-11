// node.js practice

console.log(global)
// window object  in terminal gives error but in browser it prints output
good = 'manu'
// console.log(window.good) error occurs

// modules and modularity to maintain separate files for codes
// importing module from the script file of module.js
const calc = require('./module')

// calc.addition(1,2) o/p is 3

// node modules
// child process in node modules

// /perform different task using subprocess

const cp = require('child_process')
// able to work on which is not part of the our c=script

// cp.execSync('calc') opens calculator

// cp.execSync('start chrome:https://www.youtube.com/')

// cp.execSync('node script.js') opens file of script.js to run it

// os module

const os = require('os')

// console.log(os.arch()) o/p ix x64

// console.log(os.platform()) o/p is win32

// console.log(os.networkInterfaces()) o/p is network information

// console.log(os.cpus()) o/p system configuration

// path module in node.js

//  when we need a file or folder to get it take the path in require and use it

const path = require('path')

let ext = path.extname('C:\Users\madhu\Desktop\PROJECTS\javscript practice projects\javascript mini projects\path.txt')
// extension name for file can be found
console.log(ext)


let basename = path.basename('C:\Users\madhu\Desktop\PROJECTS\javscript practice projects\javascript mini projects\path.txt')
//name for file can be found
console.log(basename)

// console.log(__filename) gives o/p workinh=g file name
// console.log(__dirname) gives folder name working in as o/p

// files modules and fs modules

const fs = require('fs')

// to read a file
let filecontent = fs.readFileSync('path.txt')
console.log('data'+filecontent)
// this gives o/p of buffer format of number to get actual output 
// use console.log('data'+filename) o/p as needed

// to write a file

fs.appendFileSync('path.txt','this is added new')
// some other methods to work with files

// to input or write file by delete old content use writeFilesync and
// if want to just add new with old use appendFileSync

// to delete file use unlinkSync('filename with extension name')

// fs.mkdirSync('javascript mini projects')

// to check folder exists of not
let exists = fs.existsSync('javascript mini projects')
// console.log(exists) o/p is true


// node package manager

//  how to install npm use npm init

// too install particular project use npm i npm package name

// ABOUT .gitignore

// semantic versioning
// in package.json of package points to particular version of a character

// how to create our own package

// setup
// npm init

// npm nameofyour_package


