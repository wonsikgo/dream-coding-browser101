// number, string, boolean, null, undefined
// object
const obj = {
  name: 'ellie',
  age: 5,
};
console.log(obj.name);

//obj 주소값이 obj2에 복사
const obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('---------');
console.log(obj.name);
console.log(obj2.name);
