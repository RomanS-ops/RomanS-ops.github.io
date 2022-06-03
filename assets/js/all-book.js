$.getJSON('goods.json', function (data) {
    
    
      
    var out = '';
    //длина массива с данными 
    // let len = Object.keys(data).length;
    let len = Object.keys(data).length;
    for (let i = 1; i < len +1 ; i++) {
        out+='<div class="book-all__item">';
        out+=' <img class="book-all__item-book" src="'+data[i]["image"]+'" alt="#">';
        out+='<div class="book-all__content">';
        out+='<div class="book-all__header">';
        out+=' <h2 class="popular__item-h2 book-all-h2">'+data[i ]["name"]+'</h2>';
        out+='<p class="popular__item-name">'+data[i]["autor"]+'</p>';
        out+='<p class="popular__footer-price">'+data[i]["cost"]+' <span>₴</span></p>';
        out+='</div>';
        out+='<div class="book-all__footer">';
        
        out+='<a class="popular__footer-btn" onclick="jsFunction('+i +');" href="../book-info.html">Купити<img src="assets/images/shop-cart-2.svg" alt="#"></a>';
        out+='</div>';
        out+='</div>';
        out+='</div>';
       
    }
    $('#all-book').html(out);

    //$('button.add-to-cart').on('click', addToCart);
});