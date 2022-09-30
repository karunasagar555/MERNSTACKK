// Guess the output of the question

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
