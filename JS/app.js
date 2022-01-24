'use strict';

function employee (employeeID, fullName, department,level, imageURL, salary) {
    this.employeeID = employeeID
    this.fullName = fullName
    this.department = department
    this.level = level
    this.imageURL = imageURL
    this.salary = salary
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

let afterTax

function netSalary (beforTax) {
      afterTax = beforTax - (beforTax*7.5/100)
      return afterTax
    }

let jSalary = netSalary(getRandomInt(500,1000))
let mSalary = netSalary(getRandomInt(1000,1500))
let sSalary = netSalary(getRandomInt(1500,2000))

const person1 = new employee(1000,'Ghazi Samer','Administration','Senior','https://via.placeholder.com/150',sSalary)
const person2 = new employee(1001,'Lana Ali','Finance','Senior','https://via.placeholder.com/150',sSalary)
const person3 = new employee(1002,'Tamara Ayoub','Marketing','Senior','https://via.placeholder.com/150',sSalary)
const person4 = new employee(1003,'Safi Walid','Administration','Mid-Senior','https://via.placeholder.com/150',mSalary)
const person5 = new employee(1004,'Omar Zaid','Development','Senior','https://via.placeholder.com/150',sSalary)
const person6 = new employee(1005,'Rana Saleh','Development','Junior','https://via.placeholder.com/150',jSalary)
const person7 = new employee(1006,'Hadi Ahmad','Finance','Mid-Senior','https://via.placeholder.com/150',mSalary)

employee.prototype.render = function(){
  document.write(`<p>${this.employeeID}, ${this.fullName}, ${ this.department}, ${this.level}, ${this.imageURL}, ${this.salary} </p>`)
}

person1.render()
person2.render()
person3.render()
person4.render()
person5.render()
person6.render()
person7.render()


