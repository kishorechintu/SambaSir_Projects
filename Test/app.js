//NameSpaces
//logical grouping of related functionalities called as namespace
//NameSpaces also called as "internal modules" in TypeScript.
//we will define namespaces "namespace" keyword.
//we will import namespaces by using following syntax 
///<ref path="namespace file">
//namespace applicable to variables,functions,classes and interfaces
/*
namespace Demo{
    export let CSE:number = 180;
    export let ECE:number = 240;
};
*/
/*
namespace Demo{
    export let data:string = "Rest Data....!";
    export let ary:Array<number> = [10,20,30,40,50];
    export let obj:any = {
        sub_one:"Angular",
        sub_two:"NodeJS",
        sub_three:"MongoDB"
    };
    export function getData():string{
        return data;
    };
};
*/
/*
namespace Demo1{
    export namespace Demo2{
        export function mean():void{
            console.log("MEAN Soon...!");
        };
    };
};
*/
var Demo;
(function (Demo) {
    let Test1;
    (function (Test1) {
        Test1.PORT = 4200;
    })(Test1 = Demo.Test1 || (Demo.Test1 = {}));
    let Test2;
    (function (Test2) {
        Test2.PORT = 3000;
    })(Test2 = Demo.Test2 || (Demo.Test2 = {}));
})(Demo || (Demo = {}));
;
/*

///<reference path="demo.ts" />
console.log( Demo.CSE,
             Demo.ECE);

//Execution
//tsc --target es6 app.ts --outFile app.js
//node app.js

*/
/*
/// <reference path="demo.ts" />
console.log(Demo.data);

Demo.ary.forEach((element,index)=>{
    console.log(element);
});

console.log(Demo.obj.sub_one,
    Demo.obj.sub_two,
    Demo.obj.sub_three);

console.log(Demo.getData());
*/
/*
/// <reference path="demo.ts" />
Demo1.Demo2.mean();
*/
/// <reference path="demo.ts" />
console.log(Demo.Test1.PORT, Demo.Test2.PORT);
