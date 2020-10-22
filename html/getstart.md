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
    You can use the attribute ```type``` in ```<ol\>``` to specify the type of the list. e.g. ```type="A"``` shows the ```A,B,C...```, ```type="a"``` shows the ```a,b,c...```, ```type="I"``` shows the ```I,II,III...``` and ```1,2,3,...``` by default. 
    ```
         <ol type="A">
            <li>low</li>
            <li>medium</li>
            <li>high</li>
        </ol>
    ```
    will show 
    ```
        A. low
        B. medium
        C. high
    ``` 
### Indent - Description List 
Use the ```<dl\>```, ```<dt\>``` and ```<dd\>``` to present the _Indent_ in HTML. <br>

```<dl/>``` is the *description list*, ```<dt/>``` is the *description title*, ```<dd/>``` is the *description description*. 
```
    <!-- description list -->
    <dl> 
        <dt><b>Small</b></dt> <!-- description title -->
        <!-- description description-->
        <dd>
            This is the small. 
        </dd>
        <dt><b>Medium</b></dt> <!-- description title -->
        <!-- description description-->
        <dd>
            This is the medium. 
        </dd>
        <dt><b>Large</b></dt> <!-- description title -->
        <!-- description description-->
        <dd>
            This is the large. 
        </dd>
    </dl>
``` 
1. ```<dl\>``` means Definition List
2. ```<dt\>```means Definition Term
3. ```<dd\>```means Definition Description 

```
    <dl> 
        <dt>Coffer</dt> 
        <dd>- black hot drink
        <dt>Milk</dt>
        <dd>- white cold drink</dd>
    </dl> 
``` 
shows 
    <dl> 
        <dt>Coffer</dt> 
        <dd>- black hot drink
        <dt>Milk</dt>
        <dd>- white cold drink</dd>
    </dl> 

### Link 
To add a link, using element ```<a>``` with attribute ```<href>``` to stand for *archor*. 
```
    <a href="https://google.com">Google Search</a>
``` 



### Footer 
```
    <footer> 
        <p>@Copyright 2045.</p>
    </footer>
```

### Non-semantic wrappers 
 Sometimes you'll come across a situation where you can't find an ideal semantic element to group some items together or wrap some content. Sometimes you might want to just group a set of elements together to affect them all as a single entity with some CSS or JavaScript. Use ```<div>``` and ```<span>``` elements to acheive this. You should preferably with a suitable ```class``` attributes, to provide some kind of label for them so they can easily targeted. 

#### ```<span>```
 ```<span/>``` is an inline non-semantic element, which you should only use if you can't think of a better semantic text element to wrap your content, or don't want to add any specific meaning.

 e.g. 
 ```
   <p>The King walked drunkenly back to his room at 01:00, the beer doing nothing to aid
       him as he staggered through the door 
       <span class="editor-note">[Editor's note: At this point in the play, the lights should be down low]</span>.
    </p>
 ```
 In this case, the editor's note is supposed to merely provide extra direction for the director of the play; it is not supposed to have extra semantic meaning. For sighted users, CSS would perhaps be used to distance the note slightly from the main text.


 #### ```<div>``` 
 ```<div>``` is a block level non-semantic element, which you should only use if you can't think of a better semantic block element to use, or don't want to add any specific meaning. 

 ### Line breaks and horizontal rules 
 #### ```<br>```
 ```<br>``` creates a line break in a paragraph; it is the only way to force a rigid structure in a situation where you want a series of fixed short lines, such as in a postal address or a poem. Without the ```<br>``` elements, the paragraph would just be rendered in one long line
 ```
    <p>There once was a man named O'Dell<br>
    Who loved to write HTML<br>
    But his structure was bad, his semantics were sad<br>
    and his markup didn't read very well.</p>
 ```

#### ```<hr>```
```<hr>``` elements create a horizontal rule in the document that denotes a thematic change in the text (such as a change in topic or scene). Visually it just looks like a horizontal line. 
```
<p>Ron was backed into a corner by the marauding netherbeasts. Scared, but determined to protect his friends, he raised his wand and prepared to do battle, hoping that his distress call had made it through.</p>
<hr>
<p>Meanwhile, Harry was sitting at home, staring at his royalty statement and pondering when the next spin off series would come out, when an enchanted distress letter flew through his window and landed in his lap. He read it hazily and sighed; "better get back to work then", he mused.</p>``
```

### Tables 
Table is a table. Every table is enclosed by the ```<table>```. The ```<td>``` is the so-called *table data* is the cell that you can put data in it. 

A row of four cells, all ```<td>``` makes a row of cells. 
```
    <td>First Cell</td> 
    <td>Second Cell</td> 
    <td>Third Cell</td> 
    <td>Fourth Cell</td> 
```
To create multiple rows, use ```<tr>``` which means *table row*.  
```
   <tr>
     <th>&nbsp;</th>
     <th>Col 1</th>
     <th>Col 2</th>
     <th>Col 3</th>
   </tr>
   <tr>
     <td>Row 1</td>
     <td>[1,1]</td>
     <td>[1,2]</td>
     <td>[1,3]</td>
   </tr>
   <tr>
     <td>Row 2</td>
     <td>[2,1]</td>
     <td>[2,2]</td>
     <td>[2,3]</td>
   </tr>
```
Adding the headers with ```<th>``` elements on tables. 
```
    <table>
       <tr>
         <th>&nbsp;</th>  
         <th>Col 1</th>  <!-- use attribute colspan="num" to replace the &nbsp; --> 
         <th>Col 2</th>
         <th>Col 3</th>
       </tr>
       <tr>
         <td>Row 1</td>
         <td>[1,1]</td>
         <td>[1,2]</td>
         <td>[1,3]</td>
       </tr>
       <tr>
         <td>Row 2</td>
         <td>[2,1]</td>
         <td>[2,2]</td>
         <td>[2,3]</td>
       </tr>
    </table>
```
*The attribute ```colspan="2"``` means that span 2 column right to the element.*

To add a description of the table elements, you need to put the tag ```<caption>``` under the ```<table>```. 
```
   <table>
       <caption>Coordinates</caption>
       <tr>
         <th>&nbsp;</th>
         <th>Col 1</th>
         <th>Col 2</th>
         <th>Col 3</th>
       </tr>
       <tr>
         <td>Row 1</td>
         <td>[1,1]</td>
         <td>[1,2]</td>
         <td>[1,3]</td>
       </tr>
       <tr>
         <td>Row 2</td>
         <td>[2,1]</td>
         <td>[2,2]</td>
         <td>[2,3]</td>
       </tr>
   </table>
```

More info of Table can check [HERE](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced).

### Form 
The forms are wrapped with the tag ```<form>``` like, 
``` 
    <form action = "/myformdata" method="post">
    </form> 
``` 
All of its attributes are optional, but it's standard practice to always set at least the action and method attributes

```<action>``` attribute defines the location <URL> where the form's collected data should be sent when it's submitted. 

```<method>``` attribute defines the HTTP method. 


```
    <form action="/my-handling-form-page" method="post">
        <ul>
         <li>
           <label for="name">Name:</label>
           <input type="text" id="name" name="user_name">
         </li>
         <li>
           <label for="mail">E-mail:</label>
           <input type="email" id="mail" name="user_email">
         </li>
         <li>
           <label for="msg">Message:</label>
           <textarea id="msg" name="user_message"></textarea>
         </li>
        </ul>
    </form>
```
* ```<textarea>``` is the input feild for the multiline text feild.  if you want to define a default value for a ```<textarea>```, you put it between the opening and closing tags of the ```<textarea>``` element
* Use of the ```for``` attribute on all ```<label>``` elements, which takes as its value the id of the form control with which it is associated — this is how you associate a form with its label. i.e. **The ```<label>``` uses its ```for``` attributes to find out and match the same value ```id``` attribute in ```<input>```**

### Format 
* ```<pre\>``` tags <br>
Use ```<pre\>``` tag to persist the original formation of the context. e.g. <br>
```
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>
```
will show  
```
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
```

<br>

```<strong\>```, ```<em\>``` and ```<mark\>``` to make the wrapped words more obviously. 

* ```<strong\>``` <br>
    ```<p>We are the <strong>champion</strong>.</p>```shows We are the <strong>champion</strong>.
* ```<em\>``` <br>
    ```<p>We are the <em>champion</em>.</p>``` shows We are the <em>champion</em>.
* ```<mark\>``` <br>
    ```<p>We are the <mark>champion</mark>.</p>``` shows We are the <mark>champion</mark>, which the ```champion``` will be highlight. 
* ```<sub\>``` <br>
    ```<p>H<sub>2</sub>O</p>``` shows H<sub>2</sub>O. 
* ```<del\>``` <br>
    ```<p><del>H<sub>2</sub>O</del></p>``` shows <del>H<sub>2</sub>O</del>. 
* ```<q\>```<br>
    ```<p>I am so <q>cool</q>.</p>``` shows I am so <q>cool</q>.
* ```<blockquote\>```<br>
    ```<blockquote cite="https://google.com/">This is created by Google.</blockquote>``` shows <blockquote cite="https://google.com/">This is said by Google.</blockquote>


### Links 
* ```<a href="default.html" target="_blank" title="Home">This is goging to detault.html<a>``` will redirect the users to page ```default.html``` with new window and title is ```HOME```.

### Images 

[REFERENCE](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
