/** 
Giới thiệu về toán tử trong Javascript

1. Toán tử số học - Arithmetic
2. Toán tử gán - Asignment
3. Toán tử so sánh - Comparision
4. Toán tử logic - Logical
*/


/** 
Toán tử số học 
var a= 1+2;
console.log(a)
document.getElementById('root').innerText = a;
*/

/**
Toán tử gán 

let a = "Phí Thanh Tùng"
document.getElementById('root').innerText = a;

dấu bằng ở đây là một toán tử gán

 */

/**
Toán tử so sánh 

let a = 3;
let b = 4;

if (a < b) 
{
    document.getElementById('root').innerText = "Dung";
}else
    document.getElementById('root').innerText = "Sai";
 
cách toán tử so sánh : === ; !== ; < ; > .............
 */


/**
Toán tử logic

let a=3
let b=-4

if (a>0 && b>0)
{
    document.getElementById('root').innerText = "a và b lớn hơn 0";
}esle
    document.getElementById('root').innerText = "Sai";

&& và
|| hoặc
! NOT

 */

/**
Toán tử số học 
+               --> Cộng
-               --> Trừ
*               --> Nhân
*               --> Lũy Thừa
/               --> Chia
%               --> Chia lấy dư
++              --> Tăng 1 giá trị số
--              -->  Giảm 1 giá trị sô
 */

/** 
var a = 5;

var result = a++ + ++a;

document.getElementById('root').innerText = result;

result  = 12;

*/

/**
Toán tử ++ --
Prefix & Postfix
Tiền tố và Hậu Tố
*/

/**
var a = 6;

++a; //tiền tố  // Việc 1: + 1 cho a, a = a + 1 => a = 7 //Việc 2: Trả về a sau khi được + 1
a++; //hậu tố   // Việc 1: a copy , a copy = 6 //Việc 2 : cộng 1 của a , a = a + 1 => a = 7
//Việc 3 : trả về a copy

document.getElementById('root').innerText = a;

*/

/**  var a = 6;

var output = a++;

document.getElementById('root').innerText = output;

result output = 6;

*/


/**  var a = 6;

var output = a++ + --a;

a++ result = 6 trả về cái copy a 
--a result = 6  Sau khi toán tử đầu tiên thực hiện song tức a lúc này = 7 --a => = 6

document.getElementById('root').innerText = output;

result output = 12;

*/


/**
Toán tử gán 

    Toán tử         Ví dụ           Tương đương
    =               x  = y            x = y
    +=              x += y            x = x + y
    -=              x -= y            x = x - y
    *=              x *= y            x = x * y
    /=              x /= y            x = x / y
    **=             x **= y           x = x ** y  
*/

/**
Toán tử chuỗi - String operator

var firstName = "Tùng"
var lastName = "Phí"

document.getElementById('root').innerText = lastName + ' ' + firstName;

dấu cộng là toán tử số học trong trường hợp vế trái và vế phải là số 
dấu cộng là toán từ nối chuổi trong trường hợp vế trái hoặc vế phải là chuỗi

*/

/**
Toán tử
==      -->     Bằng
!=      -->     Không Bằng
>       -->     Lớn Hơn
<       -->     Nhỏ Hơn
>=      -->     Lớn hơn hoặc Bằng    
<=      -->     Nhở hơn hoặc Bằng
*/

/**
Toán tử so sánh cùng kiểu
===
!== 
*/

/**
Toán Tử Logic
1. && - And
2. || - Or
3. !  - Not

var a = 1;
var b = 2;
var c = 3;

if (a > 0 && b > 0){
    document.getElementById('root').innerText = "Điều kiện đúng";
}// biểu thức điều kiện thỏa mãn khi cả hai vế trong câu điều kiện đều đúng
*/

/**

Kiểu dữ liệu trong JavaScript 

1. Kiểu dữ liệu nguyên thủy - Primitive Data
    - Number // var a = 1; // khi thực thi giá trị a = 1 sẽ được lưu vào 1 vùng nhớ x khi gán lại giá trị cho a giá trị mới sẽ lưu vào vị trí vùng nhớ y 
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

    // dữ liệu nguyên thủy là dạng dữ liệu mà một khi được tạo ra sẽ được lưu vào vùng nhớ và giá trị vùng nhớ này không thể thay đổi , khi giá trị thay đổi
    giá trị đó sẽ được gán vào vùng nhớ mới
2. Kiểu dữ liệu phức tạp - Complex Data
    - Function
    - Object  
*/

/**
// Number type

var a = 1;
var b = 2.5;

check kieu du lieu

console.log(typeof a)


// String type;

var fullName = "Phí Thanh Tùng";
var age = "24";

console.log(typeof fullname)

//Boolean type

var Dung = true;
var Sai = false;

//Undefined type

var age; // khong gián toán tử = 

//Null type

var isNull = null; // không có gì

//Symbol type (ES6)

var id = Symbol('id'); // unique
var id2 = Symbol('id'); // unique

console.log(id === id2); // result false

// Function type

var MyFunction = function(){

    document.getElementById('root').innerText = "Phí Thanh Tùng";

}

// Object types

var MyObject = {
    fullname:"Phí Thanh Tùng",
    age:24,
    phone:"0946869198",
    address:"Phú Diễn",
};
console.log(MyObject);

// Array type 

var myArray = ['Phí Thanh Tùng',24,'0946869198'];

console.log(myArray);

*/

/**

Câu lệnh điều kiện và phép so sánh
    0
    ''
    null
    undefined
    NaN
    false
var a = 1;
var b = 2;

var result = 'A' && 'B' && 'C'

console.log(result);

=> result = C

nếu toán tử ko nằm trong 6 giá trị nêu trên thì toán tử && sẽ trả về giá trị cuối cùng 
ngược lại với toán tử ||
*/

/**
Chuỗi Trong JavaScript

1. Tạo Chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào ? Lý do ?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. chú ý độ dài khi viết code
5. Template String ES6

//Cách 1

var fullName = "Phí Thanh Tùng";

//Cách 2

var fullName = new String("Phí Thanh Tùng");

Nên dùng cách số 1

console.log(typeof fullName); ==> result cách 2 kiểu trả về là object

// backslash in javascript
var fullName = 'Phí Thanh Tùng \'DDT15C\'';

console.log(fullName);

//độ dài chuỗi

console.log(fullName.length);

//độ dài ko quá 80 ký tự 1 dòng code

//Template String ES6

var age = "25";

console.log(`Tôi là: ${fullName} ${age} `); //dấu `` chính là template string

*/

/**

Làm việc với chuỗi

Keyword : Javascript string methods

//1. Length Đo độ dài chuỗi

var fullName = "Phí Thanh Tùng";

console.log(fullName.length);

//2. Find index Tìm được vị trí của 1 ký tự trong chuỗi

consolo.log(fullName.indexOf('Tùng')); keyword : indexOf(''); Chỉ trả về phần tử
đầu tiên tìm được trong chuỗi

lastindexOf('') vị trí cuối cùng

search(/Tùng/g);

//3. Cut string

console.log(fullName.slice(4,6))

//4. Replace

var fullName = "Phí Thanh Tùng Tùng Tùng";

console.log(fullName.replace(/Tùng/g,'Thanh'));

/Tùng/g thay thế tất cả các chữ Tùng trong chuỗi

Còn 'Tùng' chỉ thay thế đc chữ đầu tiên trong chuỗi thôi

//5. Convert to upper case Chuyển đổi các chữ trong chuỗi thành chữ hoa

Console.log(fullName.toUpperCase());

//6. Convert to lower case Chuyển đổi các chữ trong chuỗi thành chữ thường

Console.log(fullName.toLowerCase());

//7. Trim Xử Lý chữ nhập vào của người dùng loại bỏ khoảng trắng thừa

var fullName = "    Phí Thanh Tùng      ";

console.log(fullName.trim().length);


//8. Split
Cắt 1 chuỗi thành 1 Array

var languages = "JavaScript , PHP , Ruby , Solidity"

console.log(languages.split(' , '));

//9. Get a character by index

const fullName = "Phí Thanh Tùng";

console.log(fullName.charAt(4)); chả ra ký tự tại vị trí thêm vào ()

Cách 2:

console.log(fullName[]);

*/

/**
Kiểu số (Number) trong JavaScript

// KeyWord : JavaScript Number method

1. Tạo giá trị Number

    - Các cách tạo
        //Cách 1 
            var age = 18;
            var PI = 3.14;
        //Cách 2
            var otherNumber = new Number(18);
    - Dùng cách nào ? Tại sao
        Nên dùng cách 1 vì dễ hơn đỡ tốn 1 đối tượng

    - Kiểu tra data type
        var result = 20 / 'ABC';
        
        console.log(isNaN(result)); // check NaN

2. Làm việc với Number
    - To string
            var age = 18;
            var PI = 3.14;

            console.log(typeof age.toString());

    - To Fixed    Làm tròn số thập phân
            var age = 18;
            var PI = 3.14;

            console.log(PI.toFixed()); result = 3 typeof = string 
            quy tắc làm tròn trên dưới .49 làm tròn dưới .5 làm tròn lên
            thêm số trong ngoặc để thêm số làm tròn đằng sau dấu ,
    
*/

/**
Mảng trong JavaScript - Array

1. Tạo mảng
        -Cách tạo
            //Cách 1:
                var languages = [
                    'JavaScript',
                    'GoLang',
                    'Ruby',
                    'C#',
                    null,
                    undefined,
                    function(){

                    },
                ];
            //Cách 2:
                var languages = new Array(
                    'JavaScript',
                    'GoLang',
                    'Ruby',
                    'C#',
                    null,
                    undefined,
                    function(){
                    },
                );

        -Sử dụng cách nào ? Tại sao?
                Vẫn sử dụng cách 1. Tiện hơn nhanh hơn        
        -Kiểm tra data type?

                    console.log(typeof languages); result = objects
                    console.log(Array.isArray(languages)); kiểm tra array

2. Truy xuất mảng
        -Độ dài mảng
                    console.log(languages.length);
        -Lầy phần tử theo index
                    //index , key
                    console.log(languages[0]); result = JavaScript
*/  

/**

Làm việc với Array

// KeyWord : Javascript array Method

1. To String
            var languages = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
                null,
                undefined,
                function(){
                },
            ];

            console.log(languages.toString()); chuyển kiểu dữ liệu Array
            Thành String

            result = JavaScript,GoLang,Ruby.....

2. Join
            var languages = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
                null,
                undefined,
                function(){
                },
            ];

            console.log(languages.join('-')); chuyển kiểu dữ liệu Array thành 
            1 chuỗi

            result = JavaScript-GoLang-Ruby.....
3. Pop 
            var languages = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
            ];
            console.log(languages.pop()) // Xóa phần tử cuối Element cuối
            // mảng và trả về phần tử đã khóa
            console.log.(languages);
4. Push Thêm phần tử cuối mảng
            var languages = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
            ];
            console.log.(languages.push('Solidity','Java'));
            console.log.(languages);
5. Shift    Xóa phần tử đầu mảng và trả về phần tử đấy
            
            var languages = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
            ];
            console.log(languages.shift());
            console.log.(languages);
6. Unshift Thêm 1 hoặc nhiều phần tử vào đầu mảng 
            var languages = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
            ];
            console.log.(languages.unshift('Solidity','Java'));
            console.log.(languages);
7. Splicing Xóa Cắt Chèn phần tử mới vào mảng
            var languages = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
            ];
            languages.splice(1 , 1) // đặt con trỏ vào đâu và xóa đi bao nhiêu phần tử
            languages.splice(1 , 0 , 'Solidity'); // không xóa element nào cả và thêm Solidity 
            // vào vị trí số 1
            console.log.(languages);
8. Concat Nối array
            var languages = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
            ];
            var languages1 = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
            ];

            console.log(languages.concat(languages1));

9. Slicing
             var languages = [
                'JavaScript',
                'GoLang',
                'Ruby',
                'C#',
            ];
            console.log(languages.slice(1,2)); // Cắt Element của mảng
*/
