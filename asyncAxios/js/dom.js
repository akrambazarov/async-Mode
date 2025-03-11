import get from "../js/api.js"
import {EditUser,AddUser} from "../js/main.js"
import {DelUser} from "../js/api.js"


let table = document.querySelector('tbody');
function getData(data){
table.innerHTML = "";
data.forEach(element => {
    let tr = document.createElement('tr');
tr.innerHTML = `
    <td>${element.id}</td>
    <td>${element.name}<br><small>${element.email}</small></td>
    <td>${element.number}</td>
    <td>${element.Age}</td>
    <td>${element.active}</td>
    <td><p aria-valuetext = "${element.status}">${element.status}</p></td>
`;
//Icon Block Append
let btnDateHide = document.createElement('button');
btnDateHide.classList.add('faq-button');
let spanInfoUser = document.createElement('div');
spanInfoUser.classList.add('tooltip');
spanInfoUser.innerHTML = `
<div>
<span>Name <h4>${element.name}</h4> </span>
<span>Number <h4>${element.number}</h4></span>
<span>Age <h4>${element.Age}</h4></span>
<span>Country <h4>${element.active}</h4></span>
<span>Status <h4  aria-valuetext = "${element.status}">${element.status}</h4></span>
</div>
`;
let tdIcons = document.createElement('td');
let iconAdd = document.createElement('i');
iconAdd.classList.add('fa','fa-add');
let iconEye = document.createElement('i');
iconEye.classList.add('fa','fa-eye');
let iconEdit = document.createElement('i');
iconEdit.classList.add('fa','fa-edit');
let iconDel = document.createElement('i');
iconDel.classList.add('fa','fa-trash');

btnDateHide.append(iconEye,spanInfoUser)
tdIcons.append(btnDateHide,iconEdit,iconDel,iconAdd);
tdIcons.classList.add('actions');
tr.append(tdIcons);
table.append(tr);

iconEye.onclick = ()=>{
    spanInfoUser.classList.toggle('block');
}
iconEdit.onclick = ()=>{
    EditUser(element)
}
iconDel.onclick = ()=>{
    DelUser(element.id)
}
iconAdd.onclick = ()=>{
    AddUser(element)
}
// document.querySelector('.sortAge').onclick = ()=>{
//     SortObject(element);
// }
});
}

//Sort Object
let bool = true;
function SortObject(data) {
    document.querySelector('.sortAge').onclick =function(){
        this.children[0].classList.toggle('sort');
        let result = data.sort((a,b)=> bool ? a.Age - b.Age :b.Age - a.Age);
        bool = !bool;
        getData(result);
    }
    document.querySelector('.sortName').onclick = function (){
        this.children[0].classList.toggle('sort');
        let result = data.sort((a,b)=>{return bool ? a.name.localeCompare(b.name,'ru') : b.name.localeCompare(a.name,'ru');        })
        bool = !bool;
        getData(result);
    }
    document.querySelector('.sortContact').onclick = function (){
        this.children[0].classList.toggle('sort');
        let result = data.sort((a,b)=>{return bool ? a.name.localeCompare(b.name,'ru') : b.name.localeCompare(a.name,'en');        })
        bool = !bool;
        getData(result);
    }
    document.querySelector('.sortCountry').onclick = function (){
        this.children[0].classList.toggle('sort');
        let result = data.sort((a,b)=>{return bool ? a.active.localeCompare(b.active,'ru') : b.active.localeCompare(a.active,'en');        })
        bool = !bool;
        getData(result);
    }
    document.querySelector('.sortStatus').onclick = function (){
        this.children[0].classList.toggle('sort');
        let result = data.sort((a,b)=>{return bool ? a.status.localeCompare(b.status,'ru') : b.status.localeCompare(a.status,'en');        })
        bool = !bool;
        getData(result);
    }
}
export default getData
export {SortObject}
