let depositBtn = document.querySelector('.depositBtn');
let withdrawBtn = document.querySelector('.withdrawBtn');
let transferBtn = document.querySelector('.transferBtn');

let depositForm = document.querySelector('.depositForm');
let withdrawForm = document.querySelector('.withdrawForm');
let transferForm = document.querySelector('.transferForm');

let tbody = document.querySelector('#tbody');
let inputs = document.querySelectorAll('.text');
let users = JSON.parse(localStorage.getItem('users'));

let state = true;

if (users === null) {
    users = [];
}

function list_users() {
    return users;
}

function get_balance(user) {
    let value = Number(parseFloat(user).toFixed(2)).toLocaleString('en', {
        minimumFractionDigits: 2
    });
    return `₱${value}`;
}

function deposit(user, amount) {
    let state = false;
    if (parseFloat(amount) > 0) {
        for (const account of users) {
            if (account.name.toLowerCase() === user.toLowerCase()) {
                account.amount = parseFloat(amount) + parseFloat(account.amount);
                localStorage.setItem('users', JSON.stringify(users));
                alert('Deposited ' + get_balance(amount)+ ' to ' + user +"'s Account.");
                state = true;
            }
        } 
        if (!state) alert('Please input a valid account.');
    } 
}

function withdraw(user, amount) {
    let state = false;
    let insufficient = false;
    if (parseFloat(amount) > 0) {
        for (const account of users) {
            if (account.name.toLowerCase() === user.toLowerCase()) {
                state = true;
                if (parseFloat(account.amount) < parseFloat(amount)) {
                    insufficient = true;
                } else {
                    account.amount = parseFloat(account.amount) - parseFloat(amount);
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('Withdrawn '+ get_balance(amount) + ' from ' + user +"'s Account.");
                }
            }
        }
        if (!state) alert('Please input a valid account.');
        if (insufficient) alert(user + ' has insufficient balance to withdraw the requested amount.');
    } 
}

function send(from_user, to_user, amount) {
    let insufficient = false;
    let fromState = false;
    let toState = false;
    let alert1 = '';
    let alert2 = '';
    for (const check of users) {
        if (check.name.toLowerCase() === from_user.toLowerCase()) fromState = true;
        if (check.name.toLowerCase() === to_user.toLowerCase()) toState = true;
    }
    if (fromState && toState) {
        for (const account of users) {
            if (parseFloat(amount) > 0) {
                if (account.name.toLowerCase() === from_user.toLowerCase()) {
                    state = true;
                    if (parseFloat(account.amount) < parseFloat(amount)) {
                        insufficient = true;
                    } else {
                        account.amount = parseFloat(account.amount) - parseFloat(amount);
                    }
                }
                if (account.name.toLowerCase() === to_user.toLowerCase() && !insufficient) {
                    account.amount = parseFloat(amount) + parseFloat(account.amount);
                }
            }
        }
        if (insufficient) {
            alert(from_user + ' has insufficient balance to transfer the requested amount.');
        }else{
                alert(`Transferred ${get_balance(amount)} from ${from_user} to ${to_user}'s Account.`); 
             }      
        }else{
            if (!fromState) alert1 = 'Please put valid Sender';
            if (!toState) alert2 = 'Please put valid Receiver';
            alert(alert1 + '\n' + alert2);
             }
        localStorage.setItem('users', JSON.stringify(users));
    }


function stringFilter(str) {
    let arrayString = str.split('');
    let state = true;
    for (const [i, findspace] of arrayString.entries()) {
        if (findspace === " ") arrayString.splice(i, 1);
    }
    for (const letter of arrayString) {
        if (!isNaN(letter)) { 
            state = false; 
        }
    }
    return state;
}


depositBtn.addEventListener('click', function () {
        let elements = depositForm.elements;
        let user = {};
        for (let i = 0; i < elements.length; i++) {
            let item = elements.item(i);
            user[item.name] = item.value.trim();
        }
        user.fullname = function () {
            return this.firstname + ' ' + this.lastname;
        }
        if (stringFilter(user.fullname())) {
            deposit(user.fullname(), user.amount);   
        }
        else {
            alert('Must contain letters only.')
        }
});

withdrawBtn.addEventListener('click', function () {
        let elements = withdrawForm.elements;
        let user = {};
        for (let i = 0; i < elements.length; i++) {
            let item = elements.item(i);
            user[item.name] = item.value.trim();
        }
        user.fullname = function () {
            return this.firstname + ' ' + this.lastname;
        }
        if (stringFilter(user.fullname())) {
            withdraw(user.fullname(), user.amount);
        }
        else {
            alert('Must contain letters only.')
        }
});

transferBtn.addEventListener('click', function () {
        let elements = transferForm.elements;
        let user = {};
        for (let i = 0; i < elements.length; i++) {
            let item = elements.item(i);
            user[item.name] = item.value.trim();
        }
        user.senderFullname = function () {
            return this.senderFirstname + ' ' + this.senderLastname;
        }
        user.receiverFullname = function () {
            return this.receiverFirstname + ' ' + this.receiverLastname;
        }
        if (stringFilter(user.senderFullname()) && stringFilter(user.receiverFullname())) {
            if (user.senderFullname().toLowerCase() === user.receiverFullname().toLowerCase()) {
                alert('The account were the same.');
            }
            else {
                send(user.senderFullname(), user.receiverFullname(), user.senderAmount);
            }
        }
        else {
            alert('Must contain letters only.')
        }
});
