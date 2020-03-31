# CSS 
塑造網站的特殊風格。例如這段文字要用一般的黑色，或是改用紅色標明重點？某段重要內容應該置於畫面的何處？想用什麼背景圖片及顏色裝飾你的網站？ 
建立一個```css```file並打上 
```
    p{
        color: red; 
    }
``` 
```p``` means paragraph. 
並放置在```html```中的```<head>```之中, ``` <link href = "../css/style.css" rel="stylesheet" type="text/css"> 

## Analysis 
```
    p{
        color: red; 
    }
``` 
The code above is the so-called **rule set**(規則集). 
```<p>``` is a *selector*, ```color``` is a *property*, the ```red``` is *property value* and ```color : red``` is the *declaration*. 

* selector 

    The tag of the html elements. In this case is ```<p>``` means the all the paragraph tag will be overrided by this rule set. 

* declaration 
    
    ```color:red``` specifies the pattern of the elements. 

* Properties 
* Property values 

```
    * 每一個規則當中，除了選擇器名稱以外，其他都必須被大括號（{}）給包住.
    * 在每一個宣告裡面，屬性跟屬性值之間必須用冒號(:) 做區分。
    * 在每一個規則裡面可以包含有許多宣告，但不同的宣告之間必須使用分號 (;) 來區分。
```

### Multiple selector 
```
    p, li, h2{
        color: red; 
    }
```
All of the selector above are *element selector* until now. 
![Other selectors](./diff_selector.png) 
