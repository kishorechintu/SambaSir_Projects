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

namespace Demo{
    export namespace Test1{
        export const PORT:number = 4200;
    }
    export namespace Test2{
        export const PORT:number = 3000;
    }
};

















































