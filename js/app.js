const api = new ApiData();

// get the tag from html
const list = document.getElementById('list');


// create eventListerner for cart data from localStorage
function listener() {

    // count
    api.data()
        .then(response => response.json())
        .then(function (val) {
            const count = document.getElementById('count')
            count.classList = 'productLabel2'
            count.textContent = `(${val.length} Products)`
        });

    // data
    api.data()
        .then(response => response.json())
        .then(function (val) {
            val.forEach(value => {
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
                column.appendChild(image)
                column.appendChild(brand)
                column.appendChild(name)
                column.appendChild(price)
                list.appendChild(column)


            })
        });
}

// Invocked function
listener();