// const users = [
//   {name: "ange", age: 23},
//   {name: "winnie", age: 32}
// ];
const users = new Array(10_000_000).fill({name: "ange", age: 23});
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