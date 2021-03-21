const api = new ApiData();

// get the tag from html
const list = document.getElementById('list');
const allproduct = document.getElementById('allproduct');
const teeshirt = document.getElementById('teeshirt');
const denim = document.getElementById('denim');
const sweatshirt = document.getElementById('sweatshirt');
const poloteeshirt = document.getElementById('poloteeshirt');
const shirt = document.getElementById('shirt');

// create a function
function listener() {

    // Added all the event Listerner's
    allproduct.addEventListener('click', allproductfunction);
    teeshirt.addEventListener('click', teeshirtfunction);
    denim.addEventListener('click', denimfunction);
    sweatshirt.addEventListener('click', sweatshirtfunction);
    poloteeshirt.addEventListener('click', poloteeshirtfunction);
    shirt.addEventListener('click', shirtfunction);
}

// Invocked function
listener();


// calling this fn from addEventListerners
function allproductfunction(e) {
    e.preventDefault();
    countData(e.target.value);

    // If data has already present
    if (list.childElementCount) list.removeChild();

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
    countData(e.target.value);
    console.log("ok => ", list.childElementCount);
    // If data has already present
    if (list.childElementCount) list.removeChild();

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
    console.log(list);
    console.log("ok 2 => ", list.childElementCount);
    // If data has already present
    if (list.childElementCount) {
        list.removeChild();
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
    if (list.childElementCount) list.removeChild();

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
    if (list.childElementCount) list.removeChild();

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
    if (list.childElementCount) list.removeChild();

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
            }

            // this will show the count of product
            const count = document.getElementById('count')
            count.classList = 'productLabel2'
            count.textContent = `(${countData} Products)`
        });
}

// Data will show on dashboard with all the filter's
// function responseData() {

//     api.data()
//         .then(response => response.json())
//         .then(function (val) {
//             val.forEach(value => {

//             })
//         });
// }

// common dashboard print data
function printData(value) {
    const image = document.createElement('img');
    const column = document.createElement('div');
    const brand = document.createElement('div');
    const name = document.createElement('div');
    const price = document.createElement('div');

    // calculate the percentage of compare
    let perc = ((value.price / value.compare_at_price) * 100).toFixed(0)

    column.className = 'col-md-2'
    image.classList = 'itemImg'
    image.setAttribute('src', value.image_src);
    brand.className = 'listOfItems'
    name.className = 'listOfItems2'
    price.innerHTML = `
                      <div class='listOfItems'> $${value.price} 
                      <label class='priceLabel'>$${value.compare_at_price}</label>
                      <label class='priceLabel2'> (${perc}% OFF)</label>
                     </div>
                    `;

    brand.textContent = value.vendor
    name.textContent = value.name
    column.appendChild(image);
    column.appendChild(brand);
    column.appendChild(name);
    column.appendChild(price);
    list.appendChild(column);
}

// Invoke the function
countData();
// responseData();
