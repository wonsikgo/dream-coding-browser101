//false : 0, -0, '', null, undefined
//true : -1 'hello', {}, []
let num; //undifined

let obj = {
  name: 'ellie',
};
if (num) {
  console.log('true');
} else {
  console.log('false');
}

obj && console.log(obj.name);
