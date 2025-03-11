import getData from "../js/dom.js"
import {EditUserAsync,AddUserAsync} from "../js/api.js"
//global Variable
let dialogEdit = document.querySelector('.Edit');
let dialogAdd = document.querySelector('.add');
const formEdit = document.querySelector('.formEdit');
const formAdd = document.querySelector('.formAdd');

//Dialog Modal Window
document.querySelector('.close').onclick = ()=>{
    dialogEdit.close();
}
document.querySelector('.closeAdd').onclick = ()=>{
    dialogAdd.close();
}
// add Users Block
function AddUser (data){
    dialogAdd.showModal();
    formAdd.onsubmit = function (event){
        let user = {
            name: formAdd["name"].value,
            active:formAdd["add-country"].value,
            Age:formAdd["add-age"].value,
            email:formAdd["add-email"].value,
        }
        event.preventDefault();
        AddUserAsync(user);
       dialogAdd.close(); 
    }
}

// Edit Users Block
function EditUser(data){
    dialogEdit.showModal();
    formEdit["edit-name"].value = data.name;
    formEdit["edit-country"].value = data.active;
    formEdit["edit-age"].value = data.Age;
    formEdit["edit-email"].value = data.email;
    
    formEdit.onsubmit = function (event){
        event.preventDefault();
        EditUserAsync(data.id);
        dialogEdit.close();
    }
}

export {AddUser}
export {EditUser}
