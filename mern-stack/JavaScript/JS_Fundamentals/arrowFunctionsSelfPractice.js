function sum(a, b) {
    return a + b;
}

// converted: let sum = (a,b) => a + b


function isPositive(number) {
    return number >= 0
}

// converted: let isPositive = number => number >= 0
// because we only have one single parameter, so we remove the parantheses

function randomNumber() {
    return Math.random
}

// converted: let randomNumber = () => Math.random

document.addEventListener('click', function() { console.log('Click') })

// converted:  document.addEventListener('click', () => {console.log('Click')} )


//------------------------------------------------------------
class Person {
    constructor(name) {
      this.name = name
    }
  
    printNameArrow() {
      setTimeout(() => {
        console.log(`Arrow: ${this.name}`)
      }, 100)
    }
  
    printNameFunction() {
      setTimeout(function() {
        console.log(`Function: ${this.name}`)
      }, 100)
    }
  }
  
  const person = new Person('Kyle')
  person.printNameArrow()
  person.printNameFunction()
 