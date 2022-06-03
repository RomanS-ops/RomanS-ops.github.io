$.getJSON('goods.json', function (data) {
    let i = 1;
    console.log(data[localStorage.test]);
    var out = '';
    
    
        out+='<div class="popular__item">';
        out+=' <img class="popular__item-book" src="'+data[localStorage.test]["image"]+'" alt="#">';
        out+=' <h2 class="popular__item-h2">'+data[localStorage.test]["name"]+'</h2>';
        out+='<p class="popular__item-name">'+data[localStorage.test]["autor"]+'</p>';
        out+='<div class="popular__footer">';
        out+='<p class="popular__footer-price">'+data[localStorage.test]["cost"]+' <span>₴</span></p>';
        out+='<a class="popular__footer-btn" onclick="jsFunction();" href="price.html">Купить<img src="assets/images/shop-cart-2.svg" alt="#"></a>';
        out+='</div>';
        out+='</div>';
        // <div class="popular__item">
        //         <img class="popular__item-book" src="assets/images/book-1.png" alt="#">
        //         <h2 class="popular__item-h2">Грокаем алгоритмы</h2>
        //         <p class="popular__item-name">Адитья Бхаргава</p>
        //         <div class="popular__footer">
        //             <p class="popular__footer-price">310 <span>₴</span></p>
        //             <a class="popular__footer-btn" href="#">Купить<img src="assets/images/shop-cart-2.svg" alt="#"></a>
        //         </div>
        //     </div>
     
        
    
    $('#book-info').html(out);
    //$('button.add-to-cart').on('click', addToCart);
});
