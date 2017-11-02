export function multiply(x, y) {
    return x * y;
}

// 注意：导出必须是借口，不能是值；
// 例如：export 1;就会报错；

// var m = 1;
// export m;    //同样会报错；

// 正确1；
// export var m = 1;

// 正确2；
/*var m = 1;
export {m};*/

// 正确3;
/*
var n = 1;
export {n as m}*/

// 他们的实质是，在接口名与模块内部变量之间；建立了一一对应的关系；
