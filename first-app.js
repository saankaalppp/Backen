console.log('a');

console.log('b');

async function fun1() {
     setTimeOut(() => console.log('c'), 3000)
     
     await function fun2(){
        setTimeOut(() => console.log('d'), 0)
    }
}
console.log('e');
