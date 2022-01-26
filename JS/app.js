'use strict';

// constructor
function Employee (employeeID, fullName, department,level, imageURL, salary) {
    this.employeeID = employeeID
    this.fullName = fullName
    this.department = department
    this.level = level
    this.imageURL = imageURL
    this.salary = salary;
    this.finalSalary()
    Employee.allEmployees.push(this);
}

Employee.allEmployees =[];
console.log(Employee.allEmployees)

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
const person2 = new Employee(1001,'Lana Ali','Finance','Senior','assets/Lana.jpg')
const person3 = new Employee(1002,'Tamara Ayoub','Marketing','Senior','assets/Tamara.jpg')
const person4 = new Employee(1003,'Safi Walid','Administration','Mid-Senior','assets/Safi.jpg')
const person5 = new Employee(1004,'Omar Zaid','Development','Senior','assets/Omar.jpg')
const person6 = new Employee(1005,'Rana Saleh','Development','Junior','assets/Rana.jpg')
const person7 = new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior','assets/Hadi.jpg')

// Write the employees's dada
let mainSection
function render (){
  for(let i=0;i<Employee.allEmployees.length;i++){
    let person = Employee.allEmployees[i]
  
    // let mainSection
    if (person.level =='Senior'){
      mainSection = document.getElementById('seniorSec')
    } else if(person.level =='Mid-Senior'){
      mainSection = document.getElementById('mid-seniorSec')
    } else if (person.level =='Junior'){
      mainSection = document.getElementById('juniorSec')
    }
    
    let divEl = document.createElement('div');
    mainSection.appendChild(divEl);
    divEl.className ='card'

    let imgEl = document.createElement('img')
    divEl.appendChild(imgEl)
    imgEl.setAttribute('src', person.imageURL)
    imgEl.setAttribute('alt', person.fullName);
    imgEl.className ='personImg'

    let p1El = document.createElement('p')
    divEl.appendChild(p1El)
    p1El.textContent = `Name: ${person.fullName} - ID: ${person.employeeID}`

    let p2El = document.createElement('p')
    divEl.appendChild(p2El)
    p2El.textContent = `Department: ${person.department} - Level: ${person.level}`

    let p3El = document.createElement('p')
    divEl.appendChild(p3El)
    p3El.textContent = `${person.salary}`
  }
}

render()

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

  // mainSection =''
  render()
  setData()
}

function setData(){
  let data = JSON.stringify(Employee.allEmployees)
  localStorage.setItem('persons',data)
}

function getItem(){
  let stringObj = localStorage.getItem('persons');
  let parsObj = JSON.parse(stringObj);
  if (parsObj !== null){
    Employee.allEmployees = parsObj
  }
}

getItem();