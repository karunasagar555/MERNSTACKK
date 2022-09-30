//  1)

let a = 10;
a = 20;
console.log(a);

// 2)

var hero = {
    _name : 'John Doe',
    getSecretIdentity : function (){
       return this._name;
    }
}

var stoleSecretIdentity = hero.getSecretIdentity;
stoleSecretIdentity();
console.log(hero.getSecretIdentity);
console.log(stoleSecretIdentity());

// 3)

const person = {
    name : "karun",
    walk (){
        console.log(this);
    }
}

// person.walk();       -- will return reference to an object
const walk = person.walk;  
console.log(walk());   // -- calling it standalone will return window object, undefined in React due to strict mode


// 4) 

const person = {
    talk (){
        // var self = this
        setTimeout( () => {
            console.log(self);
        })
    }
}

person.talk();







