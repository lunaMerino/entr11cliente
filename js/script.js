fetch('http://localhost:8080/api/v1/products', {
    method: 'GET'
})
let endPointInsert = "/insert"
let endPointDelete = "/delete"

const productsTable = document.getElementById('productsTable');

displayProducts(products);

document.querySelector("#cargar").addEventListener("click", () => {
    peticion(api, (product) => {
        productsTable.appendChild(productCard(product))
    });
});

document.querySelector("#limpiar").addEventListener("click", () => {
    productsTable.innerHTML = ""
})

function displayProducts(products) {
    products.forEach(product => {
        const card = document.createElement('tr');
        card.classList.add('border', 'px-1', 'py-1');

        card.innerHTML = `
            <td class="border px-1 py-1">${product.productPrice}</td>
            <td class="border px-1 py-1">${product.productName}</td>
            let botonBorrar = document.createElement("button")
            botonBorrar. innerHTML = "Borrar"
        `;

        productsTable.appendChild(card);
    });
    }

    botonBorrar.onclick = async () => {
        await deleteProduct(product.productId);
    };