let user = {
    name: "Rexha",
    age: 24,
    isConfirmed: true
};
for (let key in user) {
    // keys 
    // console.log(key);// name, age, isConfirmed 
    // values for the keys 
    console.log(key +" : "+user[key]);
}