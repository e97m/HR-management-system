'use strict';

let allEmployees = []
let allDepartments = []

//Getting data
function getItem(){
    let stringObj = localStorage.getItem('persons');
    let parsObj = JSON.parse(stringObj);
    if (parsObj !== null){
        allEmployees = parsObj
      }
}
getItem();

//Traversing the array to calculate each answer for the table
let sumEmployeesAdmin = 0 , sumSalaryAdmin =0
let sumEmployeesMark = 0 , sumSalaryMark =0
let sumEmployeesDev = 0 , sumSalaryDev =0
let sumEmployeesFin = 0 , sumSalaryFin =0
for(let i=0; i<allEmployees.length;i++){
    if (allEmployees[i].department == 'Administration'){
        sumEmployeesAdmin += 1
        sumSalaryAdmin += allEmployees[i].salary
    }
    if (allEmployees[i].department == 'Marketing'){
        sumEmployeesMark += 1
        sumSalaryMark += allEmployees[i].salary
    }
    if (allEmployees[i].department == 'Development'){
        sumEmployeesDev += 1
        sumSalaryDev += allEmployees[i].salary
    }
    if (allEmployees[i].department == 'Finance'){
        sumEmployeesFin += 1
        sumSalaryFin += allEmployees[i].salary
    }
}
let avgAdmin = sumSalaryAdmin/sumEmployeesAdmin
let avgMark = sumSalaryMark/sumEmployeesMark
let avgDev = sumSalaryDev/sumEmployeesDev
let avgFin = sumSalaryFin/sumEmployeesFin
let totalEmployees = sumEmployeesAdmin + sumEmployeesMark + sumEmployeesDev + sumEmployeesFin
let totalSalary = sumSalaryAdmin + sumSalaryMark + sumSalaryDev + sumSalaryFin
let avgSalary = totalSalary / totalEmployees

// constructor
function DepartmentData (name, totalEmployees, totalSalary,avgSalary) {
    this.name = name
    this.totalEmployees = totalEmployees
    this.totalSalary = totalSalary
    this.avgSalary = avgSalary
    allDepartments.push(this);
}

// Instantiation
const administration= new DepartmentData('Administration',sumEmployeesAdmin,sumSalaryAdmin,avgAdmin)
const marketing= new DepartmentData('Marketing',sumEmployeesMark,sumSalaryMark,avgMark)
const development= new DepartmentData('Development',sumEmployeesDev,sumSalaryDev,avgDev)
const finance= new DepartmentData('Finance',sumEmployeesFin,sumSalaryFin,avgFin)
const total= new DepartmentData('Total',totalEmployees,totalSalary,avgSalary)

//write the table
for(let i=0; i<allDepartments.length;i++){
let department = allDepartments[i];
    let table = document.getElementById('acc-table')

    let trElA = document.createElement('tr')
    table.appendChild(trElA)

    let td0El = document.createElement('td');
    trElA.appendChild(td0El);
    td0El.textContent = department.name;
    
    let td1El = document.createElement('td');
    trElA.appendChild(td1El);
    td1El.textContent = department.totalEmployees;

    let td2El = document.createElement('td');
    trElA.appendChild(td2El);
    td2El.textContent = round(department.totalSalary , 2);

    let td3El = document.createElement('td');
    trElA.appendChild(td3El);
    td3El.textContent = round(department.avgSalary , 2);
}

// convert to 2 digit after decimal point
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}