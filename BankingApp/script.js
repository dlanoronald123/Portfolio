let create = document.querySelector('.createAccount');
let createForm = document.querySelector('.form');
let createBtn = document.querySelector('#createBtn');
let inputs = document.querySelectorAll('.text');
let tbody = document.querySelector('#tbody');
let users = JSON.parse(localStorage.getItem('users'));

if (users === null){
    users = [];
}

createTable();

function list_users(){
    return users;
}

function createTable(){
    if (tbody !== null){
        tbody.innerHTML = "";
        if (parseInt(list_users().length) === 0) tbody.innerHTML = "</tr><td class = 'emptyData' colspan ='4'>Empty Data</td></tr>";
        for (let i = 0; i < list_users().length; i++){
            let tr = "<tr class='tableRow'>";
            let fullName = list_users()[i].name;
            let amount = list_users()[i].amount;
            tr += "<td class='entry1'>" + (i + 1) + "</td>" + "<td class='entry2'>" + fullName + "</td>" + "<td class='entry3'>" + get_balance(amount) + "</td><td class='entry4'><div class='deleteBtn'><i class= 'fa fa-backspace'></i></div></td></tr>";
            tbody.innerHTML += tr;
        }
    }
}

function get_balance(user){
    let value = Number(parseFloat(user).toFixed(2)).toLocaleString('en',{
        minimumFractionDigits: 2
    });
    return `₱${value}`;
}

function create_user(user, balance) {
    let accountObj = {
        name: user,
        amount: parseFloat(balance)
    }
    if (balance === null || balance === undefined || balance === ''){
        accountObj.amount = 0; 
    }
    let userStatus = true;
    for (const fullname of users) {
        if (fullname.name.toLowerCase() === user.toLowerCase()) userStatus = false;
    }
    if (userStatus) {
        users.push(accountObj);
        localStorage.setItem('users', JSON.stringify(users));
        alert(`Account named ${user} had been successfully created.`);
    } else {
        alert(`Name ${user} already exist.`);
    }
}

function createSubmit() {
    if (createForm) {
        var elements = createForm.elements;
        var user = {};
        for (let i = 0; i<elements.length; i++) {
            var item = elements.item(i);
            user[item.name] = item.value.trim();
        }
        user.fullname = function () {
            return this.firstname + ' ' + this.lastname;
        }
        if (user.fullname()){
            if (parseFloat(user.amount) > 0){
                create_user(user.fullname(), user.amount);
            }
            else {
                alert('Invalid amount.');
            }
        }
        else {
            alert('Must contain letters only.');
        }
        for (let i = 0; i<elements.length; i++){
            var item = elements.item(i);
            item.value = '';
        }
        createTable();
    }
    return false;
}   
    if (tbody.children){
        let deleteButton = document.querySelectorAll('.deleteBtn');
        for (const deleteBtn of deleteButton){
            deleteBtn.addEventListener('click', function(){
                let user = deleteBtn.parentNode.parentNode.children[1].innerHTML;
                let confirmDelete = confirm(`Do you want to delete the account of ${user}?`);
                if (confirmDelete){
                    deleteAccount(user);
                    alert ('Account deleted.')
                    createTable();
                }
            });
        }
    }

function deleteAccount(user){
    for (const [i, fullname] of users.entries()) {
        if (fullname.name.toLowerCase() === user.toLowerCase()) {
            users.splice(i,1);
        }
    }
    localStorage.setItem('users',JSON.stringify(users));
    location.reload();
}


