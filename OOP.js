// https://www.mycompiler.io/fr/new/nodejs

// L'encapsulation

class Person {
    #name
    #age
    constructor(name, age) {
      this.#name = name
      this.#age = age
    }
  
    getName = () => console.log(this.#name)
    getAge=()=> console.log(this.#age)  
  
    setName=(a)=> this.#name = a 
    setAge=(a)=> this.#age = a  
  
  }
  
  var user = new Person("Hadir", 99)
  
  // console.log(user.name)
  user.getName()
  user.getAge()
  user.setName('Yesser')
  user.getName()
  user.setAge(9)
  user.getAge()


  function Person(name,age){
    let myName = name
    let myAge = age 
  
    this.getName=()=> console.log(myName)
    this.getAge=()=> console.log(myAge)
  }
  
  var user = new Person('Rania',22)
  
  user.getName()
  user.getAge()

//   L'héritage

class Animal{
    name
    age
  
    constructor(name,age){
      this.name = name
      this.age = age
    }
  
    makeSound=()=> console.log('grrrrr')
  }
  
  class Dog extends Animal{
    pattes
  
    constructor(name,age,pattes){
      super(name,age)
  
      this.pattes = pattes
    }
  }
  
  var kalb = new Dog('Hamdi',10,900)
  
  
  
  kalb.makeSound()

// Polymorphisme

class Vehicule{
    pneu
    puissance
  
    constructor(pneu,puissance){
      this.pneu = pneu
      this.puissance = puissance
    }
  
    vehiculeSound=()=> console.log("vromvrom")
  }
  
  class car extends Vehicule{
    toit
  
    constructor(pneu,puissance,toit){
      super(pneu,puissance)
      this.toit = toit
    }
  
    vehiculeSound=()=> console.log('vinvin')
  }
  
  class Lorry extends Vehicule{
  
    quantity
  
    constructor(pneu,puissance,quantity){
      super(pneu,puissance)
      this.quantity = quantity
    }
    
  }
  
  var karhba = new car(3,4,true)
  
  var kamyoun = new Lorry(4,9,70)
  
  karhba.vehiculeSound()
  kamyoun.vehiculeSound()
  
//   Protoype  



  
  
  
  
  
  