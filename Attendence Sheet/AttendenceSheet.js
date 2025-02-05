// isssue
// const c1 = document.getElementById("studentName");
// const c2 = document.getElementById("studenRollNo");
// const c3 = document.getElementById("studentday");
// const container = document.getElementByClassName("tbody");


// function addData(){
//     let tr = document.createElement("tr");
//     container.appendChild(tr);

//     let td1 = document.createElement("td");
//     td1.innerHTML = c1.value;
//     tr.appendChild(td1);

//     let td2 = document.createElement("td");
//     td2.innerHTML = c2.value;
//     tr.appendChild(td2);
 
//     let td3 = document.createElement("td");
//     td3.innerHTML = c3.value;
//     tr.appendChild(td3);

//     console.log("Rheman");



// }
console.log("Mujtaba");

const c1 = document.getElementById("studentName");
const c2 = document.getElementById("studentRollNo");
const c3 = document.getElementById("studentday");
const container = document.getElementById("tbody"); // Fixed method name

function addValue() {
    let tr = document.createElement("tr");
    container.appendChild(tr); // Fixed method name

    let td1 = document.createElement("td");
    td1.innerHTML = c1.value;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = c2.value;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = c3.value;
    tr.appendChild(td3);
};

