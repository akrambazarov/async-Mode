import getData from "../js/dom.js"
import { SortObject } from "../js/dom.js";
const API = "https://67bebb90b2320ee0501120c8.mockapi.io/api/v1/users";

// function get Data
let data = [];
async function get() {
    try {
        let {data} = await axios.get(API);
        getData(data); 
        SortObject(data)
    } catch (error) {
        console.error(error);
        
    }
}
get();

// function Add user
async function AddUserAsync(user) {
try {
    let {data} = await axios.post(`${API}`,user);
    get();
} catch (error) {
    console.error(error);
    
}    

}

//Function Delete User
async function DelUser(id) {
    try {
        await axios.delete(`${API}/${id}`);
        get()
    } catch (error) {
        console.error(error);
        
    }
}

// function Edit user
async function EditUserAsync(id) {
    try {
        const user = {
            name: document.querySelector('.formEdit')["edit-name"].value,
            active:document.querySelector('.formEdit')["edit-country"].value,
            Age:document.querySelector('.formEdit')["edit-age"].value,
            email:document.querySelector('.formEdit')["edit-email"].value
        }
        let {data} = await axios.put(`${API}/${id}`,user);
    get();
    } catch (error) {
        console.error(error);
    }    
}
    
export default get
export {DelUser}
export {EditUserAsync}
export {AddUserAsync}