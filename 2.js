function userName(username){ 
    let regex = /^[a-z]{8}$/ 
    return regex.test(username)
}

function userPassword(password){ 
    let regex1 = /^(\d)\1{2}(\-)/; 
    let regex2 = /(\D)\1{2}$/
    return(regex1.test(password) && regex2.test(password))
}

console.log(userName('arkademy'));
console.log(userPassword('1234-try1'));