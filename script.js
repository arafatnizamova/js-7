const users = []
for(let i = 0; i< Infinity; i++){
    let name = prompt('Введите команду')
    let str = name.split(', ')
    if(str[0] == 'add'){
    users.push(str[1])
    }
    else if(str[0] == 'del'){
         for(const key in users){
            users.splice(key,1)
        }
    }
    else if(name == 'stop'){
      break;
    }
    console.log(users)
}
