const   productAll = document.querySelectorAll('.product'),
        productLinkAll = document.querySelectorAll('.product__link');

// hover state
for (const product of productAll) {
    product.addEventListener('mouseenter', function (e) {
        e.preventDefault();
        if (product.classList.contains('product--disable') === false) {
            this.classList.add('product--hover'); 
        } 
    });

    product.addEventListener('mouseleave', function (e) {
        e.preventDefault();
        if (product.classList.contains('product--hover')) {
            this.classList.remove('product--hover'); 
        }
    });

    // select state
    product.addEventListener('click', function (e) {
        e.stopPropagation();
        if (product.classList.contains('product--disable') === false) {
            this.classList.remove('product--hover'); 
            this.classList.toggle('product--select');
            this.classList.remove('product--select_hover');  
        } 
    })

    // select hover state
    product.addEventListener('mouseenter', function (e) {
        e.preventDefault();
        if (product.classList.contains('product--select')) {
            this.classList.remove('product--hover');
            this.classList.add('product--select_hover'); 
        }
    });

    product.addEventListener('mouseleave', function (e) {
        e.preventDefault();
        if (product.classList.contains('product--select_hover')) {
            this.classList.remove('product--select_hover'); 
        }
    });
}

// select state link
for (const productLink of productLinkAll) {
    productLink.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.add('product--select');  
    })
}