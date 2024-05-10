class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    display(){
        console.log(this.name);
        console.log(this.email);
    }
}

let user = new User('John', 'me@me.com');

user.display();