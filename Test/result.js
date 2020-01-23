var Demo1;
(function (Demo1) {
    function getSub(arg1) {
        return arg1;
    }
    Demo1.getSub = getSub;
    ;
})(Demo1 || (Demo1 = {}));
;
var Demo2;
(function (Demo2) {
    Demo2.SUB_TWO = "NodeJS";
})(Demo2 || (Demo2 = {}));
;
var Demo3;
(function (Demo3) {
    Demo3.obj = { sub: "MongoDB" };
})(Demo3 || (Demo3 = {}));
/// <reference path="demo1.ts" />
/// <reference path="demo2.ts" />
/// <reference path="demo3.ts" />
console.log(Demo1.getSub("Angular"), "<=>", Demo2.SUB_TWO, "<=>", Demo3.obj.sub);
console.log(Demo1.getSub("ReactJS"), "<=>", Demo2.SUB_TWO, "<=>", Demo3.obj.sub);
