const fetchProductsBtn = document.getElementById('fetchProducts'); 
const productListDiv = document.getElementById('productList');
fetchProductsBtn.addEventListener('click', () => 
{
    fetch('/api/v1/products')
        .then(response => 
        {
            if (!response.ok) 
            {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => 
        {
            productListDiv.innerHTML = '';
            products.forEach(product => 
            {
                const productList = document.createElement('div');
                productList.classList.add('product-list');
                productList.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <p>ID: ${product.id}</p>
                    <hr>`;
                productListDiv.appendChild(productList);
            });
        })
        .catch(error => 
        {
            console.error('Error fetching products:', error);
        });
});