const data =[
    {
        id : '0',
        img : 'image/bag.jpg',
        name : 'Latest Stocks',
        price : 190,
        save : 25,
        delivery : 'In 3 - 4 days',
        itemInCart : false
    },
    {
        id : '1',
        img : 'image/desktop.jpg',
        name : 'New Stocks',
        price : 190,
        save : 25,
        delivery : 'In 3 - 4 days',
        itemInCart : false
    },
    {
        id : '2',
        img : 'image/laptop.jpg',
        name : 'Latest Stocks',
        price : 190,
        save : 25,
        delivery : 'In 3 - 4 days',
        itemInCart : false
    },
    {
        id : '3',
        img : 'image/shoping image 2.jpg',
        name : 'Safety Kit Stocks',
        price : 190,
        save : 25,
        delivery : 'In 3 - 4 days',
        itemInCart : false
    },
    {
        id : '4',
        img : 'image/umbrella 2.jpg',
        name : 'Fashion Design Stocks',
        price : 190,
        save : 25,
        delivery : 'In 3 - 4 days',
        itemInCart : false
    },
    {
        id : '5',
        img : 'image/laptop.jpg',
        name : Laptops,
        price : 300,
        save : 50,
        delivery : 'In 3 - 4 days',
        itemInCart : false
    },
    {
        id : '6',
        img : 'image/unbrellla.jpg',
        name : 'Styled Umbrella',
        price : 125,
        save : 10,
        delivery : 'In 3 - 4 days',
        itemInCart : false
    },
    {
        id : '7',
        img : 'image/phone 2.jpg',
        name : 'Mobile Phones',
        price : 169,
        save : 5,
        delivery : 'In 3 - 4 days',
        itemInCart : false
    },

]

let cartList = []; //array to store cart lists
var i;

var detail = document.getElementsByClassName('card-item');
var detailsImage = document.getElementsById('detail-img');
var detailTitle = document.getElementById('detail-title');
var detailPrice = document.getElementById('detail-price');
var youSave = document.getElementById('you-save');
var detailPage = document.getElementById('details-page');
var back = document.getElementById('back');

back.addEventListener('click', refreshPage); //click event to go home page
var addToCarts = document.querySelectorAll('#add-to-cart');
var cart = document.getElementById('cart');

cart.addEventListener('click',displayCart); //click event to display cart

var carts = document.getElementById('carts');

carts.addEventListener('click', ()=>addToCarts(getId)); //click events to add item to cart from details
var getId;
var home = document.getElementById('logo');
home.addEventListener('click',hideCart); //click event to hide cart page and return home page

//click events on dynamically created elements to remove items from list
//document.addEventListener('click', function(e){
//    if(e.target.id=='remove'){
//        var itemId = e.target.parentNode.id;
//        removeFromCart(itemId);
//    }
//})

//click event to display details page
for(i=0;i<data.length;i++){
    detail[i].addEventListener('click', handleDetail)
}

//click events to add items to cart from home page cart icon
addToCarts.forEach(val=>val.addEventListener('click'),()=>addToCarts(val.parentNode.id));

//detail function
function handleDetail(){
    detailsPage.getElementsByClassName.display = 'block'
    getId = this.parentNode.id;
    detailsImage.src = data[getId].img;
    detailTitle.innerHTML = data[getId].name;
    detailPrice.innerHTML = 'Price : $ ' + data[getId].price;
    youSave.innerHTML = 'You save : ($ ' + data[getId].save + ')';
}

//function to display cart page
function displayCart(){;
    document.getElementById('main').style.display = 'none'
    document.getElementById('details-page').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display = 'none';
        document.getElementById('empty-cart').style.display = 'block';
    }
    else{
        document.getElementById('cart-with-items').style.display = 'block';
        document.getElementById('empty-cart').style.display = 'none';
    }
}

//add item to the cart
function addToCarts(id){
    if(!data[id].itemInCart){
        cartList = [...cartList,data[id]];
        addItem();

        alert('item add to your cart');
    }
    else{
        alert('Your item is already there');
    }
    data[id].itemInCart = true;
}

var totalAmount;
var totalItems;
var totalSaving;

//add item to the cart
function addItem(){
    totalAmount = 0;
    totalItems = 0;
    totalSaving = 0;
    var clrNode = document.getElementById('item-body');
    clrNode.innerHTML = '';
    cartList.map((cart)=>{
        var cartCont =document.getElementById('item-body');
        totalAmount = totalAmount + cart.price;
        totalSaving = totalSaving + cart.save;
        totalItems = totalItems + 1;

        var temCart = document.createElement('div')
        tempCart.setAttribute('class','cart-list');
        temCart.setAttribute('id',cart.id);

        var listImg = document.createElement('img');
        listImg.setAttribute('id','list-img');
        listImg.src =cart.img;
        temCart.appendChild(listImg);

        var listName = document.createElement('h3');
        listName.setAttribute('class', 'list-name');
        listName.innerHTML = cart.name;
        temCart.appendChild(listName);

        var listPay = document.createElement('h3');
        listPay.setAttribute('class','Pay');
        listPay.innerHTML = cart.price;
        tempCart.appendChild('listPay');

        var listQuantity = document.createElement('h3');
        listQuantity.setAttribute('class','quantity');
        listQuantity.innerHTML = '1';
        tempCart.appendChild(listQuantity);

        var listTrash = document.createElement('i');
        listTrash.setAttribute('class','fa fa-trash');
        listTrash.setAttribute('id','remove');
        tempCart.appendChild(listTrash);

        cartCont.appendChild(tempCart);
    })
    document.getElementById('total-amount').innerHTML = 'Total Amount : $ ' + totalAmount;
    document.getElementById('total-item').innerHTML = 'Total Items : $ ' + totalItems;
    document.getElementById('you-saved').innerHTML = 'You Saved : $ ' + totalSaving;
    document.getElementById('total').style.display = 'block';
}


//hide your cart page
function hideCart(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('cart-container').style.display = 'none';
}

