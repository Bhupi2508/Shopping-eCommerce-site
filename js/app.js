const api = new ApiData();

// get the tag from html
const list = document.getElementById('list'),
    allproduct = document.getElementById('allproduct'),
    teeshirt = document.getElementById('teeshirt'),
    denim = document.getElementById('denim'),
    sweatshirt = document.getElementById('sweatshirt'),
    poloteeshirt = document.getElementById('poloteeshirt'),
    shirt = document.getElementById('shirt'),
    shoppingCart = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.getElementById('clear-cart');



// Invoke the function
listener();
countData();


// function for call all the listerner's on load
function listener() {

    // Added all the event Listerner's
    allproduct.addEventListener('click', allproductfunction);
    teeshirt.addEventListener('click', teeshirtfunction);
    denim.addEventListener('click', denimfunction);
    sweatshirt.addEventListener('click', sweatshirtfunction);
    poloteeshirt.addEventListener('click', poloteeshirtfunction);
    shirt.addEventListener('click', shirtfunction);
    list.addEventListener('click', cartItems);
    shoppingCart.addEventListener('click', removeItem);
    clearCartBtn.addEventListener('click', clearAllData)
    document.addEventListener('DOMContentLoaded', dataFromLocalStorage);
}


// calling this fn from addEventListerners
function allproductfunction(e) {
    e.preventDefault();
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // get the whole response and filteres on it
    api.data()
        .then(response => response.json())
        .then(function (val) {
            val.forEach(value => {
                printData(value)
            })
        })
}

// calling this fn from addEventListerners
function teeshirtfunction(e) {
    e.preventDefault();

    // it will return the total count
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // get the whole response and filteres on it
    api.data()
        .then(response => response.json())
        .then(function (val) {
            val.forEach(value => {
                if (value.image_src[0].indexOf('/Teeshirt') > -1) {
                    printData(value);
                }
            })
        })
}

// calling this fn from addEventListerners
function denimfunction(e) {
    e.preventDefault();
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // get the whole response and filteres on it
    api.data()
        .then(response => response.json())
        .then(function (val) {
            val.forEach(value => {
                if (value.image_src[0].indexOf('/Denim') > -1) {
                    printData(value);
                }
            })
        })
}

// calling this fn from addEventListerners
function sweatshirtfunction(e) {
    e.preventDefault();
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // get the whole response and filteres on it
    api.data()
        .then(response => response.json())
        .then(function (val) {
            val.forEach(value => {
                if (value.image_src[0].indexOf('/Sweater') > -1) {
                    printData(value);
                }
            })
        })
}

// calling this fn from addEventListerners
function poloteeshirtfunction(e) {
    e.preventDefault();
    countData(e.target.value);
    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // get the whole response and filteres on it
    api.data()
        .then(response => response.json())
        .then(function (val) {
            val.forEach(value => {
                if (value.image_src[0].indexOf('/Polo_Tee_Shirt') > -1) {
                    printData(value);
                }
            })
        })
}

// calling this fn from addEventListerners
function shirtfunction(e) {
    e.preventDefault();
    countData(e.target.value);
    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // get the whole response and filteres on it
    api.data()
        .then(response => response.json())
        .then(function (val) {
            val.forEach(value => {
                if (value.image_src[0].indexOf('/Shirt') > -1) {
                    printData(value);
                }
            })
        })
}

// This is common function for all the products with filter
function countData(key) {
    let countData = 0;

    // count
    api.data()
        .then(response => response.json())
        .then(function (val) {

            // use switch case for the filter's
            switch (key) {
                case '1':
                    val.forEach(value => {
                        if (value.image_src[0].indexOf('/Teeshirt') > -1) {
                            countData++
                        }
                    })
                    break;
                case '2':
                    val.forEach(value => {
                        if (value.image_src[0].indexOf('/Denim') > -1) {
                            countData++
                        }
                    })
                    break;
                case '3':
                    val.forEach(value => {
                        if (value.image_src[0].indexOf('/Sweater') > -1) {
                            countData++
                        }
                    })
                    break;
                case '4':
                    val.forEach(value => {
                        if (value.image_src[0].indexOf('/Polo_Tee_Shirt') > -1) {
                            countData++
                        }
                    })
                    break;
                case '5':
                    val.forEach(value => {
                        if (value.image_src[0].indexOf('/Shirt') > -1) {
                            countData++
                        }
                    })
                    break;
                case '6':
                    countData = val.length
                    break;
                default:
                    countData = val.length
                    responseData()
            }

            // this will show the count of product
            const count = document.getElementById('count')
            count.classList = 'product-label2'
            count.textContent = `(${countData} Products)`
        });
}

// this function call on load for first time
function responseData() {
    api.data()
        .then(response => response.json())
        .then(function (val) {
            val.forEach(value => {
                printData(value)
            })
        });
}

// common function for dashboard data which will call on click or onLoad
function printData(value) {
    const image = document.createElement('img');
    const column = document.createElement('div');
    const brand = document.createElement('div');
    const name = document.createElement('div');
    const price = document.createElement('div');
    const hoverDiv = document.createElement('div');
    const sizeDiv = document.createElement('div');
    const buttonHover = document.createElement('button');

    // calculate the percentage of compare
    let perc = ((value.price / value.compare_at_price) * 100).toFixed(0)
    perc = 100 - perc;


    column.className = 'item-div'
    image.className = 'item-img'
    image.setAttribute('src', value.image_src);
    hoverDiv.className = 'hvr-div'
    hoverDiv.id = 'hover-div'
    buttonHover.id = value.id;
    buttonHover.disabled = true;
    buttonHover.className = 'button-cls'
    buttonHover.textContent = "ADD TO CART"
    brand.className = 'list-Of-items-0'
    name.className = 'list-Of-items-2'
    sizeDiv.innerHTML = `
                        <div>
                            <span class="sizetext">Sizes: </span>
                            <a class="sizes" href='#'>XS,</a>
                            <a class="sizes" href='#'>S,</a>
                            <a class="sizes" href='#'>M,</a>
                            <a class="sizes" href='#'>L,</a>
                            <a class="sizes" href='#'>XL</a>
                        </div>
      `;
    price.innerHTML = `
                      <div class='list-Of-items'>
                      <label class="price-val">$${value.price}</label>
                      <label class='price-label'>$${value.compare_at_price}</label>
                      <label class='price-label-2'> (${perc}% OFF)</label>
                     </div>
                    `;

    brand.textContent = value.vendor
    name.textContent = value.name

    hoverDiv.appendChild(buttonHover);
    hoverDiv.appendChild(sizeDiv);
    column.appendChild(image);
    column.appendChild(hoverDiv);
    column.appendChild(brand);
    column.appendChild(name);
    column.appendChild(price);
    list.appendChild(column);
}

// cart function
function cartItems(e) {
    e.preventDefault()
    if (e.target.classList.contains('button-cls')) {

        const cart = e.target.parentElement.parentElement

        // store the data into object
        const cartData = {
            image: cart.querySelector('img').src,
            name: cart.querySelector('.list-Of-items-0').textContent,
            price: cart.querySelector('.price-val').textContent,
            id: cart.querySelector('button').id
        }

        addintoCart(cartData);
    }
}

//add the data into cart
function addintoCart(cartItem) {

    // create a <tr> tag for the tabe row data purpose 
    const tr = document.createElement('tr');

    // Build the template for the cart items
    tr.innerHTML = `
             <tr>
                  <td>
                       <img src="${cartItem.image}" width=100>
                  </td>
                  <td>${cartItem.name}</td>
                  <td>${cartItem.price}</td>
                  <td>
                       <a href="#" class="remove-cart" data-id="${cartItem.id}">delete</a>
                  </td>
             </tr>
        `;
    // Append table data into the shopping cart tag
    shoppingCart.appendChild(tr);

    // Add cart values into Storage
    saveDataIntoStorage(cartItem);
}

// Add the cart value into the local storage
function saveDataIntoStorage(cartItem) {
    let items = getitemsFromStorage();

    // add the cart values into the array
    items.push(cartItem);

    // since storage only saves strings, we need to convert JSON into String
    localStorage.setItem('items', JSON.stringify(items));
}

// Get the contents from storage
function getitemsFromStorage() {

    let items;

    // if something exist on storage then we get the value, otherwise create an empty array
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;

}
// clear the values from Cart
function removeItem(e) {

    let cartId, cartsLocalData;

    if (e.target.classList.contains('remove-cart')) {
        console.log("ok");
        e.target.parentElement.parentElement.remove();
        cartId = e.target.parentElement.parentElement.querySelector('a').getAttribute('data-id');
    }

    cartsLocalData = getitemsFromStorage();

    // loop trought the array and find the index to remove
    cartsLocalData.forEach(function (value, index) {
        if (value.id === cartId) {
            cartsLocalData.splice(index, 1);
        }
    });

    // Add the rest of the array
    localStorage.setItem('items', JSON.stringify(cartsLocalData));
}

function clearAllData() {

    while (shoppingCart.firstChild) {
        shoppingCart.removeChild(shoppingCart.firstChild);
    }

    localStorage.clear();

}

function dataFromLocalStorage() {
    console.log("from local storage");

    let getItems = getitemsFromStorage();

    console.log("from local storage  =>>>  ", getItems);

    // LOOP throught the cart items and print into the cart
    getItems.forEach(cartData => {
        // create the <tr>
        const tr = document.createElement('tr');

        // print the content
        tr.innerHTML = `
                 <tr>
                      <td>
                           <img src="${cartData.image}" width=100>
                      </td>
                      <td>${cartData.name}</td>
                      <td>${cartData.price}</td>
                      <td>
                           <a href="#" class="remove-cart" data-id="${cartData.id}">delete</a>
                      </td>
                 </tr>
            `;

        console.log("tr : ", tr);
        shoppingCart.appendChild(tr);
    });
}