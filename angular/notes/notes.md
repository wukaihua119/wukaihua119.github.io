## Angular 
Angular is a framework used to develop the html application using typescript. 


## Archecture 
![GRAPH](./overview2.png)
### Component 
#### template 
template就是就是*.html, 負責資料綁定與事件綁定, 與controller裡面的物件binding. 透過event binding, property binding, object binding等方式購艦畫面  
  * event binding <br> 
    html呼叫component的函數 
    e.g. ```(click)="functionName()"```
  * object binding <br> 
    e.g. ```{{ data }} ```
  * property binding <br> 
    呼叫component的變數放進html的變數中 
    e.g. ```[propertName]="propertValue"``` 
  * both<br> 
    屬性綁定一樣，數據屬性值將從組件輸入到輸入框中。用戶的更改也會返回到組件，將屬性重置為最新值，就像事件綁定一樣。
    e.g. ```[(ngModel)]="value"``` 

    [More Binding](https://ithelp.ithome.com.tw/articles/10193917)

#### component 
component就是*.component.ts, 存在一些函數或屬性資料提供template呼叫使用 

#### meta data 
metadata存放在*.component.ts中的@Component區塊中用以標註該class( or Component )要如何在別的template或是component中被使用 <br> 
其中, 在@Component中的```selector```可以被用來標住在parent template中的tag 

### Modules 
每一個Angular開發的application都至少有一個NgModule的類別, 稱之為*Root Module*, 通常會把*Root Module*取名為**AppModule**, 且將其放置在```app.module.ts```下 

一個NgModule，無論是root module還是feature modules，該class裡一定會有@ngModule的宣告區域，在angular裡會有許多＠開頭的宣告，這樣的宣告稱為decorator，可以在元件或模組裡設定許多metadata。 在```my-app```的範例中, 僅存在一個Module的Angular 

#### AppModule 

Every application developed with Angular must contains at least one NgModule class, the *Root Module*, named **AppModule**, and placed in ```app.module.ts```. 

e.g.  NgModule 
```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    @NgModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        ppRoutingModule
      ],
      providers: [],
      bootstrap: [AppComponent, ]
    })

    export class AppModule { } // Root Module, the NgModule

```
``` AppModule```就是這個application的*root module*. 

* Import Block 

    To import the modules that this applicaion will use. 
    ```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    ```

* Decorator 

    ```
        @NgModule({
          declarations: [
            AppComponent,
          ],
          imports: [
            BrowserModule,
            ppRoutingModule
          ],
          providers: [],
          bootstrap: [AppComponent, ]
        })
    ```
    The objects placed in the Decorator is the so-called **MetaData** in Angular to tell Angular what to do with the these objects.  
  * ```declaration``` - The Components, Directive and Pipe that belongs to current NgModule. 
  * ```bootstrap``` - Only the root module needs this to show the default application view when it is boot. 
  * ```import``` - The modules used by this module. 
  * ```provider``` - The *service* used by this module. 
  * ```export``` - Needed if it is not the root module. 

### Directive 
directive是透過Angular使用內建或自訂directive用來自己定義html元素，並簡化dom操作的功能。可以讓template裡去使用。一個directive會由```@Directive```來宣告。其實directive與component的本質是相同的，只是component是一個有template的directive，而directive沒有。我們可以視component為directive的擴展，擴展了template的功能。

可以分成: 
  * 架構型 
    ```
      <li *ngFor="let a of A"></li> 
      <app-hero-detail *ngIf="selectHero"></app-hero-detail> 
    ``` 
    * ```*ngFor```會對```<li>```做迴圈 
    * ```*ngIf```會判斷只有```selectHero```為```true```的時候才會顯示```<app-hero-detail>```. 

  * 屬性型 
    ```
      <input [(ngModel)]="hero.name"> 
    ```
    雙向binding的```ngModel```會將```hero.name```的值放入```input```的```value```屬性內, 並且*listen*使用者修改```input```的值之event並將之修改回傳至```hero.name```. 

### Services 
架構圖的左下區是很多的Service注入至Component裡。幾乎所有功能都可以是service，但是它應該是目的明確且狹義的功能。 i.e.有點像是專門處理商業邏輯的地方 <br> 
The ```service```s need to be placed in ```provider``` in the decorator ```@NgModel()``` of the root module, which makes the ```service``` available to anywhere in the module. 
You can also place them in the ```@Component``` that needs this ```service```, which makes that ```service``` available only locally. 

### Dependency injection 
The Dependency injection is the so-called *DI*. It is what it is. 

The export class must be annotated by ```@Injectable``` to annotate it is a service which can be *DI* in the ```*.service.ts```. 

### Angular Libraries 
All the Angular libraries are prefix with ```@angular``` and can be managed by ```npm```.  
#### @ahgular/core 
Implements Angular's core functionality, low-level services, and utilities. 
* Defines the class infrastructure for components, view hierarchies, change detection, rendering, and event handling.
* Defines the decorators that supply metadata and context for Angular constructs.
* Defines infrastructure for dependency injection (DI), internationalization (i18n), and various testing and debugging facilities.

#### @Directive 
A decorator that marks a class as an Angular directive. You can define your own directives to attach custom behavior to elements in the DOM. The options provide configuration metadata that determines how the directive should be processed, instantiated and used at runtime.

#### @Component 
A Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime. 
Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated per an element in a template.

A component must belong to an NgModule in order for it to be available to another component or application. To make it a member of an NgModule, list it in the declarations field of the NgModule metadata.

@Component inherits from @Directive. 

How to add new components can reference [HERE](https://ithelp.ithome.com.tw/articles/10192652)

##### Difference @Component between @Directive 

#### @Input() 
Used for receive the data from parent. 

#### @Injectable() 
Used in service that may be injected to somewhere. 

### Create a new component 
use command ``` $ ng generate componet ``` to create a new component under ```src/app```. 
Then adding the tag ```selector``` of the new component that defined in the ```@Component``` to the root component. 

### Routing 
Routing意指路由器，也就是由一個路由器來決定現在要顯示的頁面是什麼在套用Routing時，會有下列的實踐流程

1. 套用轉址設定（讓伺服器不去真正網址所在的位置去讀取資料，而改由Routing來決定現在要顯示什麼畫面）
2. 由url分析要顯示的狀態是什麼
3. 由狀態去獲得真正要取得那些資訊
4. 從這些資訊組成實體
5. 套用導覽動作，由這個畫面切換至另一個畫面 

在Angular裡，最佳做法是將載入和設定Routing放在一個top-level的模組內，並於AppModule內來import所有的路由資訊。
Angular的Routing 產生的虛擬 URL，並不是真的存在於檔案系統裡，因此需要伺服器能夠支援，否則重新整理時會出現404 not found。

### TypeScript 

### Pipe 
Pipe將data作為輸入並將其轉換成所需要的輸出 
```
  <p>Today is {{ Date | date: "yyyy-MM-dd" }}</P>
```

### Template Syntax 
對於template.html來說，所有的html標籤都可以使用，除了```<script>```以外，這是為了維護模版的安全性，去除template被攻擊的風險，因此在template中所有的```<script>```會被忽略，並跳出警告。

#### for loop 
use syntax ```*ngFor``` to do the for-loop. 

#### let, var, constant 
```let``` is used in block scope. <br>
```var``` is used in function local scope.<br>
[REFERENCE](https://stackoverflow.com/questions/35572895/what-is-the-difference-between-var-and-let-in-typescript)

#### If 
```*ngIf```. 

#### Data bind 
1. 插植表達式, 使用{{ value }} 來表達, data flow from Component to DOM 
2. property bind, 使用[propertyName] = "value"來綁定, data flow from Component to DOM 
3. Event bind, 使用(event) = "handler"來綁定, data flow from DOM to Component 
4. 雙向綁定, 使用[(ngModel)]="propetyName"來綁定, 使用方式是在 HTML 元素上加上 [(ngModel)]="property" 即可從 Component 將資料綁定進去，且在使用者有修改其值時，即時將資料設定回去。

[More Binding](https://ithelp.ithome.com.tw/articles/10193917)

### RxJS
RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

#### Observable 
方法回傳值前面加上Observable宣告，當service內的資料變動時，其他注入的內容也會同步被異動

```Observable.subscribe()```是最關鍵的相異之處最大的差異在於我們送出修改到伺服器傳回回應之間，未使用```Observable.subscribe()```方法時，它不會先凍結UI不讓使用者修改，而有可能會造成資料的不一致。而使用```Observable.subscribe()```可以避免這個問題。

[REFERENCE](https://ithelp.ithome.com.tw/users/20107113/ironman/1240) 