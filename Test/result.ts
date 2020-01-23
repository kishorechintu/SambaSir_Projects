/// <reference path="demo1.ts" />
/// <reference path="demo2.ts" />
/// <reference path="demo3.ts" />
console.log(
    Demo1.getSub("Angular"),"<=>",
    Demo2.SUB_TWO,"<=>",
    Demo3.obj.sub
);
console.log(Demo1.getSub("ReactJS"),"<=>",
            Demo2.SUB_TWO,"<=>",
            Demo3.obj.sub);

//tsc --target es6 result.ts --outFile result.js
//node result.js