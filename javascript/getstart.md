# JavaScript 
是一個成熟的動態程式語言，應用於 HTML 文件（document）上時，就可以為網頁提供動態的互動功能。
與css```<link>```相似, 透過```<script src="">```將js導入至該html. 

main.js 
```
    var myHeading = document.querySelector('h1'); 
    myHeading.textContent = 'Hello World!'; 
```
我們先使用了一個叫做 querySelector() 的函式來取得了我們標題參考（Reference），並且將她存在一個叫做 myHeading 的變數裡面。這跟我們在操作 CSS 時使用的選擇器是相似的。當您想要更動某個元素時，首先您要將她選取起來。

../html/getstart.html 
```
    <body> 
        ...
        <script src="../javascript/main.js"></script>
        ... 
    </body>
```


```
我們選擇```<script>```元素放在接近 HTML 檔案底部的原因，是因為瀏覽器是依照程式碼存在檔案中的順序來讀取 HTML 檔案的。如果 JavaScript 先被瀏覽器讀取了，那她應該要去影響她之後的 HTML 程式碼，但有時候卻行不通，因為她比應該產生改變的 HTML 還要早被讀取到。因此，把她放在接近檔案底部的位置，通常都會是一個不錯的策略。
``` 
