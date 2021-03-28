let book;
let store = {
    name: "The Book Store",
    inventoryList:[],
    earnings:0
}


function addBook(title, quantity, value){
    book = {
        title:title,
        quantity:quantity,
        value:value
        }
    for(i=0;i<store.inventoryList.length;i++){
        if(store.inventoryList[i].title === title){
            return  console.log('Already in the inventory')
    }
}
             store.inventoryList.push(book)
            return  console.log(` Book ${book.title} added`)
}

function restockBook(title,quantity){
    for(i=0;i<store.inventoryList.length;i++){
        if(store.inventoryList[i].title === title){
            store.inventoryList[i].title === title;
            store.inventoryList[i].quantity += quantity;
            return console.log(`Restock of ${title} was done`)
    }      
}
            return console.log(`Not in the inventory`)
}


function sellBook(title,quantity){
    for(i=0;i<store.inventoryList.length;i++){
    if(store.inventoryList[i].title===title && store.inventoryList[i].quantity >= quantity){
        store.inventoryList[i].quantity-=quantity;
        store.earnings+= store.inventoryList[i].value*quantity;
        return  console.log('Successful Transaction!')
    } 
    if(store.inventoryList[i].title ===title&&store.inventoryList[i].quantity<quantity){
        return console.log(`Only ${store.inventoryList[i].quantity} stocks left`)
    }
}
        return console.log(`${title} out of stock`)
}


function totalEarnings(){
    console.log(`Total Earnings of ${store.name} was ${store.earnings}`)
}

function listInventory(){
    for(i=0;i<store.inventoryList.length;i++){
        console.log(`Title:${store.inventoryList[i].title} 
                     Quantity:${store.inventoryList[i].quantity} 
                     Value:${store.inventoryList[i].value}`)
    }
}


