
function greet( name:string ): string{
  return `Hola ${name}`;
}


const greet2 = (name: string) => {
`Hola ${name}`;
}
interface User{
  uid: string;
  username: string;
}

function getUser(): User{
  return{
    uid: 'ABC_123',
    username: 'vivi19',
  }
}

const getUser2 = () => ({
    uid: 'ABC_123',
    username: 'vivi19',
});

const user = getUser();
const user2 = getUser2();
const message = greet('Goku');
const message2 = greet2('Vilma');

console.log(message, ", ",message2);
console.log(user, user2);

const myNumbers: number[] = [1,2,3,4,5];

// myNumbers.forEach( function(value) {
//   console.log({value})
// });
// myNumbers.forEach(
//   (value) => {
//   console.log({value})
// });
myNumbers.forEach(console.log);