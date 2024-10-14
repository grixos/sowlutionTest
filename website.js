document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const productTemplate = document.getElementById('product-template');

  // Fetch data from API
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const productItem = productTemplate.cloneNode(true);
        productItem.style.display = 'block';
        productItem.setAttribute('draggable', true);
        productItem.querySelector('img').src = product.image;
        productItem.querySelector('h4').textContent = product.title;
        productItem.querySelector('p span').textContent = product.price;
        productItem.onclick = () => openPopup(product);
        
        productItem.addEventListener('dragstart', dragStart);
        productItem.addEventListener('dragover', dragOver);
        productItem.addEventListener('drop', drop);
        
        productList.appendChild(productItem);
      });
    });

  // Open popup with product details
  function openPopup(product) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    document.getElementById('popup-name').textContent = product.title;
    document.getElementById('popup-image').src = product.image;
    document.getElementById('popup-price').textContent = `$${product.price}`;
    document.getElementById('popup-category').textContent = product.category;
    document.getElementById('popup-rating').textContent = product.rating.rate;

    overlay.style.display = popup.style.display = 'block';

    // Close popup on overlay click
    overlay.onclick = () => {
      overlay.style.display = popup.style.display = 'none';
    };
  }

  let draggedItem = null;

  function dragStart(event) {
    draggedItem = this; 
    event.dataTransfer.effectAllowed = 'move';
  }

  function dragOver(event) {
    event.preventDefault(); 
  }

  function drop(event) {
    event.preventDefault(); 

    if (draggedItem !== this) {
      const productList = document.getElementById('product-list');
      productList.insertBefore(draggedItem, this.nextSibling);
    }
  }
});
