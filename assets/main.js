let myCart = document.querySelector('.cart');
let myCard = document.querySelector('.card');
let closeBtn = document.querySelector('.close-btn');
let listCard = document.querySelector('.listCard');
let list = document.querySelector('.list');
let quantity = document.querySelector('.count');
let total = document.querySelector('.total');


myCart.addEventListener('click', () =>{
    myCard.style.display = 'block';
});

closeBtn.addEventListener('click', () =>{
    myCard.style.display = 'none';
});

let products = [
    {
        id : 1,
        title : 'Sneakers',
        price : 1000
    },
    {
        id : 2,
        title : 'Shirt',
        price : 980
    },
    {
        id : 3,
        title : 'T-Shirt',
        price : 450
    },
    {
        id : 4,
        title : 'Polo T-Shirt',
        price : 500
    },
    {
        id : 5,
        title : 'Jeans',
        price : 900
    },
    {
        id : 6,
        title : 'Slides',
        price : 200
    }
]

let listCards = [];

function cards(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="title">${value.title}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add to Cart</button>
        `
        list.appendChild(newDiv);
    })
}

cards();

function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }else{
        listCards[key].quantity++;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = ``;
    let count = 0;
    let totalPrice =0;
    listCards.forEach((value, key) =>{
        totalPrice += value.price * value.quantity;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>${value.title}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="deleteItem(${key})" style="cursor: pointer;">Remove</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count
}

function deleteItem(key){
    if(listCards[key] != null){
        listCards[key].quantity = 0;
        listCards.splice(key, 1);
        reloadCard();
    }
}