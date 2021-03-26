// Instance of APIdata 
const api = new ApiData();

// tag initialiser using DOM element
const list = document.getElementById('list'),
    allproduct = document.getElementById('allproduct'),
    teeshirt = document.getElementById('teeshirt'),
    denim = document.getElementById('denim'),
    sweatshirt = document.getElementById('sweatshirt'),
    poloteeshirt = document.getElementById('poloteeshirt'),
    shirt = document.getElementById('shirt'),
    shoppingCart = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.getElementById('clear-cart'),
    sortSelect = document.getElementById('select'),
    findFilterItemButton = document.getElementsByClassName('row-ok').child
console.log("findFilterItemButton : ", findFilterItemButton);



// Invoke the function on load
listener();
countData();


// function which have all the eventListerner's
function listener() {

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
    sortSelect.addEventListener('click', sortSelectFilter);
}


/**
 * @function allproductfunction(e) this function is for all the product
 */
function allproductfunction(e) {
    e.preventDefault();

    let sort;

    // will return all count
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // return all the data 
    api.data()
        .then(response => response.json())
        .then(function (val) {

            // will checkc the sort filter 
            sort = sortDataDependOnCondition(val);
            sort.forEach(value => {
                printData(value)
            })
        })
}


/**
 * @function teeshirtfunction(e) this function is for teeshirt product
 */
function teeshirtfunction(e) {
    e.preventDefault();

    let sort;

    // will return all count
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // return the tesShirt data
    api.data()
        .then(response => response.json())
        .then(function (val) {

            // will checkc the sort filter 
            sort = sortDataDependOnCondition(val)
            sort.forEach(value => {
                if (value.image_src[0].indexOf('/Teeshirt') > -1) {
                    printData(value);
                }
            })
        })
}


/**
 * @function denimfunction(e) this function is for Denim product
 */
function denimfunction(e) {
    e.preventDefault();

    let sort;

    // will return denim count
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // return the Deim data
    api.data()
        .then(response => response.json())
        .then(function (val) {

            // will checkc the sort filter 
            sort = sortDataDependOnCondition(val)
            sort.forEach(value => {
                if (value.image_src[0].indexOf('/Denim') > -1) {
                    printData(value);
                }
            })
        })
}


/**
 * @function sweatshirtfunction(e) this function is for Sweater product
 */
function sweatshirtfunction(e) {
    e.preventDefault();

    let sort;

    // will return sweater count
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // return the sweater data
    api.data()
        .then(response => response.json())
        .then(function (val) {

            // will checkc the sort filter 
            sort = sortDataDependOnCondition(val)
            sort.forEach(value => {
                if (value.image_src[0].indexOf('/Sweater') > -1) {
                    printData(value);
                }
            })
        })
}


/**
 * @function poloteeshirtfunction(e) this function is for polo tee shirt product
 */
function poloteeshirtfunction(e) {
    e.preventDefault();

    let sort;

    // will return polo teeshirt count
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // return the polo teeshirt data
    api.data()
        .then(response => response.json())
        .then(function (val) {

            // will checkc the sort filter 
            sort = sortDataDependOnCondition(val)
            sort.forEach(value => {
                if (value.image_src[0].indexOf('/Polo_Tee_Shirt') > -1) {
                    printData(value);
                }
            })
        })
}

/**
 * @function shirtfunction(e) this function is for shirt product
 */
function shirtfunction(e) {
    e.preventDefault();

    let sort;

    // will return shirt count
    countData(e.target.value);

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // return the shirt data
    api.data()
        .then(response => response.json())
        .then(function (val) {

            // will checkc the sort filter 
            sort = sortDataDependOnCondition(val)
            sort.forEach(value => {
                if (value.image_src[0].indexOf('/Shirt') > -1) {
                    printData(value);
                }
            })
        })
}

/**
 * @function sortSelectFilter(e) this function is for sorting the data based on filter
 */
function sortSelectFilter(e) {
    e.preventDefault();
    let sort;

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    // price Low To High
    if (e.target.value === '1') {

    }

    // price High To Low
    if (e.target.value === '2') {

    }

    // better Discount
    if (e.target.value === '3') {

    }

    // popularity
    if (e.target.value === '4') {

    }
}

/**
 * @function sortDataDependOnCondition(val) this function will check that what is sort filter on every click
 */
function sortDataDependOnCondition(val) {

    // low o high filter
    if (sortSelect.value === '1') {
        let sort;
        sort = val.sort((a, b) => {
            let low = a.price
            let high = b.price
            return low - high;
        });
        return sort;
    }

    // high to low filter
    if (sortSelect.value === '2') {
        let sort;
        sort = val.sort((a, b) => {
            let low = a.price
            let high = b.price
            return high - low;
        });
        console.log("sort", sort);
        return sort;
    }

    // based on high to low discount
    if (sortSelect.value === '3') {
        sort = val.sort((a, b) => {

            // calculate the percentage for better discount filter
            let priceOfA = ((a.price / a.compare_at_price) * 100).toFixed(0)
            let priceOfB = ((b.price / b.compare_at_price) * 100).toFixed(0)
            let low = 100 - priceOfA;
            let high = 100 - priceOfB;
            return high - low;
        });
        return sort;
    }

    // higest base price
    if (sortSelect.value === '4') {
        let sort;
        sort = val.sort((a, b) => {
            let low = a.compare_at_price
            let high = b.compare_at_price
            return high - low;
        });
        return sort;
    }
}

/**
 * @function countData(key) this function will return count based on filter
 */
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

/**
 * @function responseData() this function call on load for first time for all data
 */
function responseData() {

    // If data has already present
    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

    api.data()
        .then(response => response.json())
        .then(function (val) {

            // default low to high sort
            sort = val.sort((a, b) => {
                let low = a.price
                let high = b.price
                return low - high;
            });
            sort.forEach(value => {
                printData(value)
            })
        });
}

/**
 * @function printData(value) this function will return the dashbaord data
 */
function printData(value) {
    const image = document.createElement('img');
    const column = document.createElement('div');
    const brand = document.createElement('div');
    const name = document.createElement('div');
    const price = document.createElement('div');
    const hoverDiv = document.createElement('div');
    const sizeHoverDiv = document.createElement('div');
    const sizeDiv = document.createElement('div');
    const buttonHover = document.createElement('button');

    // calculate the percentage of compare proces
    let perc = ((value.price / value.compare_at_price) * 100).toFixed(0)
    perc = 100 - perc;


    // main div
    column.className = 'add-to-cart-main-div'

    // image div
    image.className = 'item-img'
    image.setAttribute('src', value.image_src);

    // add to cart main div
    hoverDiv.className = 'add-to-cart-hover-div'
    hoverDiv.id = 'add-to-cart-hover-id'

    // add to cart button div
    buttonHover.id = value.id;
    buttonHover.className = 'add-to-cart-button'
    buttonHover.textContent = "ADD TO CART"
    // buttonHover.disabled = true;

    // brand div
    brand.className = 'list-Of-items-0'
    brand.textContent = value.vendor

    // name div
    name.className = 'list-Of-items-2'
    name.textContent = value.name

    // sizes div
    sizeDiv.innerHTML = `
                        <div class="size-div">
                            <span class="alph-size-text">Sizes: </span>
                            <span class="alph-sizes" href='#'>XS,</span>
                            <span class="alph-sizes" href='#'>S,</span>
                            <span class="alph-sizes" href='#'>M,</span>
                            <span class="alph-sizes" href='#'>L,</span>
                            <span class="alph-sizes" href='#'>XL</span>
                        </div>
      `;

    // sizes div on hover
    sizeHoverDiv.innerHTML = `
                         <div class="num-size-main-div">
                         <span class="num-size-text">Select Size </span><br>
                         <button class="num-sizes" href='#'>38</button>
                         <button class="num-sizes" href='#'>40</button>
                         <button class="num-sizes" href='#'>42</button>
                         <button class="num-sizes" href='#'>44</button>
                         <button class="num-sizes" href='#'>46</button>
                         </div>
       `;

    // price div   
    price.innerHTML = `
                      <div class='list-Of-items'>
                      <label class="price-val">$${value.price}</label>
                      <label class='price-label'>$${value.compare_at_price}</label>
                      <label class='price-label-2'> (${perc}% OFF)</label>
                     </div>
                    `;

    // append tags
    hoverDiv.appendChild(buttonHover);
    hoverDiv.appendChild(sizeHoverDiv);
    hoverDiv.appendChild(sizeDiv);
    column.appendChild(image);
    column.appendChild(hoverDiv);
    column.appendChild(brand);
    column.appendChild(name);
    column.appendChild(price);
    list.appendChild(column);
}


/**
 * @function cartItems(e) this function willl return add to cart data object
 */
function cartItems(e) {
    e.preventDefault()

    // will find clas on click
    if (e.target.classList.contains('add-to-cart-button')) {
        const cart = e.target.parentElement.parentElement

        // store the data into object
        const cartData = {
            image: cart.querySelector('img').src,
            name: cart.querySelector('.list-Of-items-0').textContent,
            price: cart.querySelector('.price-val').textContent,
            id: cart.querySelector('button').id
        }

        // call addIntoCart function
        addIntoCart(cartData);
    }
}

/**
 * @function addIntoCart(cartItem) this function will add data into cart memory
 */
function addIntoCart(cartItem) {

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
                       <a href="#" class="edit-cart" data-id="${cartItem.id}">edit</a>
                       <a href="#" class="remove-cart" data-id="${cartItem.id}">delete</a>
                  </td>
             </tr>
        `;
    // Append table data into the shopping cart tag
    shoppingCart.appendChild(tr);

    // Add cart values into Storage
    saveDataIntoStorage(cartItem);
}

/**
 * @function saveDataIntoStorage(cartItem) Add the cart value into the local storage
 */
function saveDataIntoStorage(cartItem) {
    let items = getitemsFromStorage();

    // add the cart values into the array
    items.push(cartItem);

    // since storage only saves strings, we need to convert JSON into String
    localStorage.setItem('items', JSON.stringify(items));
}

/**
 * @function getitemsFromStorage() Get the contents from storage
 */
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

/**
 * @function removeItem(e) clear the values from Cart by click on delete
 */
function removeItem(e) {

    let cartId, cartsLocalData;

    // get the tag and then delete
    if (e.target.classList.contains('remove-cart')) {
        e.target.parentElement.parentElement.remove();
        cartId = e.target.parentElement.parentElement.querySelector('a').getAttribute('data-id');
    }

    // get the latest data from localStorage
    cartsLocalData = getitemsFromStorage();

    // loop trought the array and find the index to remove
    cartsLocalData.forEach(function (value, index) {
        if (value.id === cartId) {
            cartsLocalData.splice(index, 1);
        }
    });

    // Add the latest data into storage
    localStorage.setItem('items', JSON.stringify(cartsLocalData));
}

/**
 * @function clearAllData() clear cart memory
 */
function clearAllData() {

    // loop till all the data deleted
    while (shoppingCart.firstChild) {
        shoppingCart.removeChild(shoppingCart.firstChild);
    }

    // remove all the data from local storage
    localStorage.clear();

}

/**
 * @function dataFromLocalStorage() clear cart memory
 */
function dataFromLocalStorage() {

    // get the latest data from localstorage
    let getItems = getitemsFromStorage();

    // LOOP throught the cart items and print into the cart
    getItems.forEach(cartData => {

        // create the <tr> tag for cart
        const rowdata = document.createElement('tr');

        // print the content
        rowdata.innerHTML = `
                 <tr>
                      <td>
                           <img src="${cartData.image}" width=100>
                      </td>
                      <td>${cartData.name}</td>
                      <td>${cartData.price}</td>
                      <td>
                           <a href="#" class="edit-cart" data-id="${cartData.id}">edit</a>
                           <a href="#" class="remove-cart" data-id="${cartData.id}">delete</a>
                      </td>
                 </tr>
            `;

        shoppingCart.appendChild(rowdata);
    });
}