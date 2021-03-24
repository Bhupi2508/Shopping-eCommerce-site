const api = new ApiData();

// get the tag from html
const list = document.getElementById('list');
const allproduct = document.getElementById('allproduct');
const teeshirt = document.getElementById('teeshirt');
const denim = document.getElementById('denim');
const sweatshirt = document.getElementById('sweatshirt');
const poloteeshirt = document.getElementById('poloteeshirt');
const shirt = document.getElementById('shirt');
const hoverDiv = document.getElementById('hoverDiv');
console.log("hoverDiv :  ", hoverDiv);

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
            count.classList = 'productLabel2'
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
    let sizes = value.options
    console.log(sizes);

    column.className = 'itemDiv'
    image.className = 'itemImg'
    image.setAttribute('src', value.image_src);
    hoverDiv.className = 'hvrDiv'
    hoverDiv.id = 'hoverDiv'
    buttonHover.id = 'btnhvr'
    buttonHover.className = 'buttoncls'
    buttonHover.setAttribute('href', '#');
    buttonHover.textContent = "ADD TO CART"
    brand.className = 'listOfItems0'
    name.className = 'listOfItems2'
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
                      <div class='listOfItems'> $${value.price} 
                      <label class='priceLabel'>$${value.compare_at_price}</label>
                      <label class='priceLabel2'> (${perc}% OFF)</label>
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

// Invoke the function
countData();
