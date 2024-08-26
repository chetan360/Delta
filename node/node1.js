// let n = 5;

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// console.log("bye!");

let args = process.argv;

for (let i = 2; i < args.length; i++) {
  console.log("Hello welcome to cm360 " + args[i]);
}
