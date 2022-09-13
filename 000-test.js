// const users = [
//   {name: "ange", age: 20},
//   {name: "winnie", age: 25}
// ];
const users = new Array(10_000_000).fill({name: "ange", age: 20});
users.push({name: "winnie", age: 32});

function findByName(userList, name){
  for(const user of userList){
    if(user.name === name){
      console.log(user);
      break;
    }
  }   
}

findByName(users, "winnie"); // O(n) --> linear Time 