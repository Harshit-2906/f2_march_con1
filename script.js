/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log

    arr.filter(arr => arr.profession === 'developer').map(developer => console.log(developer));

}

arr.forEach(function(arr) {
    if (arr.profession === 'developer') {
      console.log(arr);
    }
});

function addData() {
    //Write your code here, just console.log
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
}

function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(arr => arr.profession !== 'admin');
    console.log(arr);
}

function concatenateArray() {
    //Write your code here, just console.log
    let newEmployees = [
        {id: 5, name: "Anil", age: "20", profession: "manager"},
        {id: 6, name: "Sunil", age: "22", profession: "developer"},
        {id: 7, name: "Raavi", age: "24", profession: "designer"}
      ];
    
      arr = arr.concat(newEmployees);
      console.log(arr);
    
}