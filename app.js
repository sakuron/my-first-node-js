//JavaScriptをStrictモードで利用する
'use strict';

/*
 process.argvはコマンドラインの引数が入った配列
0番にはnodeコマンドのファイルパス、1番には実行しているプログラムファイルのパスが入るから、
process.argv[2]になるという決まりがある。 

「||」条件付き論理和の論理演算子
左側の値がtruthyならそれを結果とする、falsyなら右側の値を結果とする。
*/

const number = process.argv[2] || 0;
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum = sum + i;
}

console.log(sum);