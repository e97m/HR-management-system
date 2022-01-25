'use strict';

// constructor
function Employee (employeeID, fullName, department,level, imageURL, salary) {
    this.employeeID = employeeID
    this.fullName = fullName
    this.department = department
    this.level = level
    this.imageURL = imageURL
    this.salary = salary
}

// Get random number to use it in salary
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

// Calcolate the salary after taxes
function netSalary (beforTax) {
      let afterTax
      afterTax = beforTax - (beforTax*7.5/100)
      return afterTax
    }

// Create the salary according to the level of the employee
Employee.prototype.finalSalary = function () {
  if (this.level =='Senior'){
    this.salary = netSalary(getRandomInt(1500,2000))
  } else if(this.level =='Mid-Senior'){
    this.salary = netSalary(getRandomInt(1000,1500))
  } else if (this.level =='Junior'){
    this.salary = netSalary(getRandomInt(500,1000))
  }
}

// Instantiation, Add the employees data using Empolee constructor
const person1 = new Employee(1000,'Ghazi Samer','Administration','Senior','assets/Ghazi.jpg')
person1.finalSalary();
const person2 = new Employee(1001,'Lana Ali','Finance','Senior','assets/Lana.jpg')
person2.finalSalary();
const person3 = new Employee(1002,'Tamara Ayoub','Marketing','Senior','assets/Tamara.jpg')
person3.finalSalary();
const person4 = new Employee(1003,'Safi Walid','Administration','Mid-Senior','assets/Safi.jpg')
person4.finalSalary();
const person5 = new Employee(1004,'Omar Zaid','Development','Senior','assets/Omar.jpg')
person5.finalSalary();
const person6 = new Employee(1005,'Rana Saleh','Development','Junior','assets/Rana.jpg')
person6.finalSalary();
const person7 = new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior','assets/Hadi.jpg')
person7.finalSalary();

// Write the employees's dada
Employee.prototype.render = function(){
  // document.write(`<p>${this.employeeID}, ${this.fullName}, ${ this.department}, ${this.level}, ${this.imageURL}, ${this.salary} </p>`)
  let mainSection = document.getElementsByClassName('flex-container')
  let divEl = document.createElement('div');
  mainSection[0].appendChild(divEl);
  divEl.className ='card'

  let imgEl = document.createElement('img')
  divEl.appendChild(imgEl)
  imgEl.setAttribute('src', this.imageURL)
  imgEl.setAttribute('alt', this.fullName);
  imgEl.className ='personImg'

  let p1El = document.createElement('p')
  divEl.appendChild(p1El)
  p1El.textContent = `Name: ${this.fullName} - ID: ${this.employeeID}`

  let p2El = document.createElement('p')
  divEl.appendChild(p2El)
  p2El.textContent = `Department: ${this.department} - Level: ${this.level}`

  let p3El = document.createElement('p')
  divEl.appendChild(p3El)
  p3El.textContent = `${this.salary}`
}

// Render the employees's dada
let personArr = [person1, person2, person3, person4, person5, person6, person7]
for ( let i=0 ; i <personArr.length ; i++){
  personArr[i].render()
}


//Employee ID generator
let newID = 1006
function autoID (){
 newID = newID + 1
 return newID
}


//Creating a form for adding new person 
let personForm= document.getElementById('add-person');
personForm.addEventListener('submit', addNewPerson);

function addNewPerson(event){
  event.preventDefault();
  let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let imageURL = event.target.imageURL.value;

  let newPerson = new Employee(autoID(), fullName, department,level, imageURL)
  newPerson.finalSalary()
  newPerson.render()
}


