# Thymeleaf 
Thymeleaf is a template view that used in the MVC. Instead of Spring Boot with RESTful API, we use Spring Boot with Thymeleaf to fullfill the view. 

<br>

### Thymeleaf tag 
The syntax start with the ```th:``` to use the template. 

#### ```th:text``` 
```th:text="'text_value'"``` to show the text. or use ```th:text="#{test.hello}"```, which the ```test.hello``` is set in the ```src/main/resources/application.properties```. 

#### ```th:each``` 
iterates over a collection of elements, rendering the HTML once for each item in the collection.
```
    <ul th:each="string : ${messages}">
        <li th:text="${string}"></li>
    </ul> 
``` 
The ```messagees``` is an attribute get from backend. ```th:each``` is similiar with the  for-loop that traverse all the attribute. 

#### ```th:value``` 
The check box uses Thymeleaf’s ```th:value``` to set the rendered ```<input>``` element’s value attribute to the value found in others properties. 

#### ```th:href```
Used for url for certain website or html resouces. 
```
    <a th:href="@{https://google.com/"}>Google Search</a>
```

#### ```th:src``` 
Used for source path for a images. 
```
    <img th:src="@{./images/ABC.jpg}" alt="An image"> 
```
Using the ```th:src``` will make Spring find this file according the classpath by default. If you use ```src``` instead, you must specify the *complete* relative path to get the resources, e.g. ```myapp/images/ABC.jpg``` if it is ```http://localhost/myapp/```. 

Adding parameters 
```
    <a th:href="@{/api-v1/detail(id=3,...)}"></a>
    // convert to normal html element 
    <a href="@{/api-v1/detail?id=3&...)}"></a>
```
[reference](https://www.thymeleaf.org/doc/articles/standardurlsyntax.html)

#### ```th:feild```
#### ```th:object```
The object. 

#### ```th:if```
```th:if``` is the syntax of ```if```. 
```
    <span th:if="${user.isAdmin}" th:text=${user.name}></span>
```
If the ```user.isAdmin``` is true, then show the ```user.name```. 

Other condition tag like ```switch``` can refer to [HERE](https://blog.csdn.net/hry2015/article/details/73253080).

#### ```th:error```
#### ```th:action```
The ```th:action``` attribute is all you need for Thymeleaf to render the hidden field for you

<br>

### Thymeleaf syntax 
#### ```@{}```
The standard url syntax, using ```@{}``` to express urls. 
e.g. 
```
    <a href="https://google.com/">Google Search</a> 
    <img src="./ABC.png" alt="An image"> 
    // replaced by Thymeleaf 
    <a th:href="@{https://google.com/}">Google Search</a> 
    <img th:src="@{./ABC.png}" alt="An image"> 
    // where the images are under src/main/resources/static 
```

#### ```${}``` 
When the template is rendered into HTML, the body of the <p> element will be
replaced with the value of the servlet request attribute whose key is "message". The
th:text attribute is a Thymeleaf-namespaced attribute that performs the replacement.
```
    <p th:text="${message}>placeholder</p>
```
The ${} operator tells it to use the value of a request attribute ("message", in this case). Namely, things in ```${}``` is the attributes that set from the backend or html. 

#### ```*{}``` 
The ```*{}``` follow with the ```th:object``` to *select* the attributes of that **object**. 
```
    <ul th:each="string : ${messages}">
        <li th:text="${string}"></li>
        <div th:object="${string}">
            <li th:text="*{charAt(1)}"></li>
        </div>
    </ul>
```
原文網址：https://kknews.cc/code/y8barvk.html

<br>

### Reference 
[REFERENCE](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/397455/)