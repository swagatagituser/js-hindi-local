// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "swagatadedotcom"

let anothername = myYoutubename

anothername = "me aur javacript"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"Abc123@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "swagata@google.com"

console.log(userOne.email);
console.log(userTwo.email);