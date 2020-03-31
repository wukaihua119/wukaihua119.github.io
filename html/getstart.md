# HTML Basic 
HTML 包含了一系列的元素（elements），而元素包含了標籤（tags）與內容（content），我們用標籤來控制內容的呈現樣貌，例如字體大小、斜體粗體、在文字或圖片設置超連結等。

### html elements 
```
    <p>My cat is very good</p> 
```
The ```<p>``` is the opening tag, ```</p>``` is the closing tag. ```My cat is very good``` is the content and the ```<p>My cat is very good</p>``` is the element. 
The attribute is contained in the opening tag, e.g. ```<p class="editor-note:>```, separated by a blank.  

#### The nested element 
e.g. 
``` 
    <p>My cat is <strong>very good</strong></p> 
``` 
#### The empty elemenyt 
e.g. 
```
    <img src="imgs/fire-fox.jpeg" alt="My test"> 
```

### The architecture 
```
    <!DOCTYPE html> 
    <html> 
        <head> 
            <meta charset="utf-8">
            <title>My test page</title>
        </head>
        <body> 
            <img src="images/abc.png" alt="My test"> 
        </body>
    </html>
```
* The ```<!DOCTYPE html>``` is type of document that must be placed in HTML. 
* The ```<html> </html>``` is the root element. 
* The ```<head> </head>``` is the place that you can put important info which is invisible to browser. e.g. description of page, css, charecters. 
* The ```<title> </title>``` will be shown on the browser title. 
* The ```<meta charset="utf-8">``` is required. 
* The ```<body> </body>``` element will show anything in it. 
* The ```alt``` in ```<img>``` stands for *alternative* that will be shown only when the images fail to load. 

## Annotation 
### Heading 
From ```<h1>``` to ```<h6>```. 
```
    <h1>My test heading H1</h1>
    <h2>My test heading H2</h2>
    <h3>My test heading H3</h3>
    <h4>My test heading H4</h4>
    <h5>My test heading H5</h5>
    <h6>My test heading H6</h6>
```

### Paragraph 
```
    <p>This is a paragraph.</p>
```

### List 
* unordered lists 

    using ```<ul>``` with ```<li>```. 
    ```
        <p>We have three levels</p>
        <ul>
            <li>low</li>
            <li>medium</li>
            <li>high</li>
        </ul>

    ```

* ordered lists 

    using ```<ol>``` with ```<li>```. 
    ```
        <p>We have three levels</p>
        <ol>
            <li>low</li>
            <li>medium</li>
            <li>high</li>
        </ol>
    ```

### Link 
To add a link, using element ```<a>``` with attribute ```<href>``` to stand for *archor*. 
```
    <a href="https://google.com">Google Search</a>
``` 