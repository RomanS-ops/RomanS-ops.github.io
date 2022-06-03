$.getJSON('goods.json', function (data) {
    let i = 1;
    console.log(data);
    var out = '';
    let len = 6;
    let lenstr = Object.keys(data).length;
    //let lenstr = 7;
    let lensum = lenstr / len;
    lensum = Math.ceil(lensum)
    for (let i = 1; i < lensum ; i++)
    for (let i = 1; i < len +1 ; i++) {
        out+='<div class="popular__item">';
        out+=' <img class="popular__item-book" src="'+data[i]["image"]+'" alt="#">';
        out+='<div class="popular__content">';
        out+=' <h2 class="popular__item-h2">'+data[i]["name"]+'</h2>';
        out+='<p class="popular__item-name">'+data[i]["autor"]+'</p>';
        out+='</div>';
        out+='<div class="popular__footer">';
        out+='<p class="popular__footer-price">'+data[i]["cost"]+' <span>₴</span></p>';
        out+='<a class="popular__footer-btn" onclick="jsFunction('+i+');" href="../book-info.html">Купити<img src="assets/images/shop-cart-2.svg" alt="#"></a>';
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
     
        
    }
    $('#popular').html(out);
    //$('button.add-to-cart').on('click', addToCart);
});

$.getJSON('goods.json', function (data) {
    
    let i = 1;
    
    var nums = [], numsLen = 6, maxNum = 12, num;
while (nums.length < numsLen) {
    num = Math.round(Math.random() * maxNum);
    if (num != 0){
        if (nums.indexOf(num) === -1) {
            nums.push(num);
        }
    }
}
      
      let rand = 0;
      let numb = 0;
    var out = '';
    //длина массива с данными 
    // let len = Object.keys(data).length;
    let len = 6;
    for (let i = 1; i < len +1 ; i++) {
        numb = nums[rand];
        
        out+='<div class="popular__item">';
        out+=' <img class="popular__item-book" src="'+data[numb ]["image"]+'" alt="#">';
        out+='<div class="popular__content">';
        out+=' <h2 class="popular__item-h2">'+data[numb ]["name"]+'</h2>';
        out+='<p class="popular__item-name">'+data[numb ]["autor"]+'</p>';
        out+='</div>';
        out+='<div class="popular__footer">';
        out+='<p class="popular__footer-price">'+data[numb ]["cost"]+' <span>₴</span></p>';
        out+='<a class="popular__footer-btn" onclick="jsFunction('+numb +');" href="../book-info.html">Купити<img src="assets/images/shop-cart-2.svg" alt="#"></a>';
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
     
        rand++;
    }
    $('#recommendation').html(out);

    //$('button.add-to-cart').on('click', addToCart);
});



