var myHeading = document.querySelector('h1'); 
myHeading.textContent = 'Hello World!'; 

var myImg = document.querySelector('img'); 
myImg.onclick = function(){ 
    var mySrc = myImg.getAttribute( 'src' ); 
    
    if( mySrc === 
        '../images/Google-Chrome-記憶體自動釋放教學，開啟「分頁捨棄功能」讓瀏覽器更省資源42130769_m.jpg' ){ 
        myImg.setAttribute( 'src', '../images/diff_selector.png' );
    }else{ 
        myImg.setAttribute( 'src', 
            '../images/Google-Chrome-記憶體自動釋放教學，開啟「分頁捨棄功能」讓瀏覽器更省資源42130769_m.jpg' 
        ); 
    }
}