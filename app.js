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

/**
         Làm việc với mảng part 2
            Array Method:
                var courses = [
                    {
                        id:1,
                        name:"JavaScript",
                        coin: 250,
                    },
                     {
                        id:2,
                        name:"HTML,CSS",
                        coin: 0,
                    },
                     {
                        id:3,
                        name:"Ruby",
                        coin: 250,
                    },
                     {
                        id:4,
                        name:"PHP",
                        coin: 250,
                    },
                     {
                        id:5,
                        name:"Dart",
                        coin: 250,
                    },
                ]
                forEach() //duyệt từng phần tử của mảng

                    courses.forEach(function(course , index){
                        console.log(index);
                        console.log(course);
                    }); //callback

                every() // tất cả các phần tử có thỏa mãn điều kiện kiểu trả về boolean
                    
                    var isFree = courses.every(function(course , index){
                        return course.coin === 0;
                    }); //callback
                    console.log(isFree); // result false
                    // duyệt phần tử đến phẩn tử nào không phù hợp thì return 
                    //vd ngay phần tử đầu tiên ko thỏa mãn thì return luôn

                some() // chỉ cần có 1 phần tử trong mảng có kết quả đúng thì ngừng duyệt mảng
                    var isFree = courses.some(function(course , index){
                        return course.coin === 0;
                    }); //callback
                    console.log(isFree);
                find() // tìm kiếm
                    var course = courses.find(function(course , index){
                        return course.name === "Ruby";
                    }); //callback
                    console.log(course); // result mảng của Ruby ngừng lại khi tìm thấy phẩn từ trong mảng
                    // chỉ trả về 1 đối tượng và đối tượng đầu tiên 
                filter() // tìm ra tất cả các phần tử thỏa mãn điều kiện
                    var listcourse = courses.find(function(course , index){
                        return course.name === "Ruby";
                    }); //callback
                    console.log(listcourse);
                map() // dùng khi muốn thay đổi element của một array

                var newCourses = courses.map(function(course,index){
                    
                    return{
                        id: course.id,
                        name: `Khóa học : ${course.name}`,
                        coin: course.coin,
                        coinText: `Giá : ${course.coin}`,
                    };
                    
                });
                console.log(newCourses);    

                // dùng map để tạo giao diện ui
                reduce()
                // khi muốn nhận về một giá trị duy nhất sau khi tính toán trên phần tử array
                // Sử dụng vòng lặp for thay cho reduce để tính tổng số coin

                dùng vòng lặp for dễ hiểu hơn , nhanh hơn

                var TotalCoin = 0;  // biến lưu trữ
                // Lặp qua các phần tử
                for (var course of courses){
                    TotalCoin += course.coin; // Thực hiện lưu trữ
                }
                console.log(TotalCoin);

                // dùng method vì ngắn hơn vòng lặp for 

                // dùng reduce()

                var i=0;

                function coinHandler(accumulator, currentValue,curentIndex, originArray){
                    // accumulator = 0 biến lưu trữ 
                    // currentValue trả về các object của Array
                    i++

                    var total = accumulator + currentValue.coin;

                    console.table({
                        'lượt chạy: ': i,
                        'Biến tích trữ: ': accumulator,
                        'Giá Khóa học: ': currentValue.coin,
                        'Total: ': total,
                    })

                    return total;
                }


                var TotalCoin = courses.reduce(coinHandler,0); // 0 là giá trị khởi tạo

                console.log(TotalCoin);

                // Ví dụ về reduce()

                // Flat - "Làm phẳng " mảng từ Depth array - "Mảng sâu"

                var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

                var flatArray = depthArray.reduce(function(flatoutput,depthItem){
                    return flatoutput.concat(depthItem);
                },[]);

                console.log(flatArray);
                

            tham số truyền vào là hàm

                
*/

/**
                    includes() method

                    prototype của 2 đối tượng Array và String

                    var title = "Responsive web design";
                    // giúp cho việc kiểm tra xem 1 kí tự có trong chuỗi hay không
                    console.log(title.includes('web'));

                    result = true

                    // Array

                    var courses = ['Javascript','PHP','Dart'];

                    console.log(courses.includes('Javascript'));

*/
/**                 
                    RegExp : Là 1 đối tượng phương thức (compile(), exec(), test() , toString())
                    Polyfill? ES6
                    includes với String
                        if(!String.prototype.includes){ // Kiểm tra xem là phương thức includes có trong đối tượng String (Array) hay ko
                            String.prototype.includes= function(search,start){
                                'use strict';
                                
                                if(search instanceof RegExp){
                                    throw TypeError('first argument must not be a RegExp');
                                }
                                if (start === undefined){ start = 0;}
                                return this indexOf(search,start) !== -1;
                            };

                        }

*/


/**
    Hàm (function) trong JavaScript
    1. Hàm?
                -Một khối mã 
                -Làm 1 việc cụ thể
    2. Loại hàm
                -Built-in 
                -Tự định nghĩa 
    3. Tính chất
                -Không thực thi khi định nghĩa
                -Sẽ thực thi khi được gọi
                -Có thể nhận tham số
                -Có thể trả về 1 giá trị
    4.Tạo hàm đầu tiên (quy tắc đặt tên hàm có thể sử dụng các kí tự 
        a đến z từ A đến Z có thể chứa các khí tự _ , $ các số từ 0 đến 9)
    
    function MyFunction(){
    document.getElementById('root').innerText="Hi! Xin Chào";
    }
    Hàm trên
    -Không thực thi khi định nghĩa
    -Sẽ thực thi khi được gọi
    
*/

/**
        Tham số trong Hàm
            1. Tham số ?
                - Định nghĩa?
                    Là giá trị truyền vào khi gọi tới 1 function
                   function writeLog(message){
                        console.log(message);
                    }
                        writeLog("Hello");
                        message là tham số ;
                        Hello đối số
                - Kiểu dữ liệu? tất cả các kiểu dữ liệu của JavaScript
                - Tính private? message chỉ có tác dụng trong scope (phạm vi)
                - 1 Tham số 
                - Nhiều tham số
            2. Truyền tham số
                - 1 tham số
                - Nhiều tham số
            3.Arguments?
                - Đối tượng arguments
                 function writeLog(){
                        console.log(arguments);
                    }
                        writeLog("Hello");
                        result trả về array
                - Giới thiệu vòng for of
                function writeLog(){
                    var myString = '';
                    for (var param of arguments){
                        myString += `${param} - `
                    }
                    console.log(myString);
                }
                writeLog("Hello","Hello1","Hello2");
                
*/

/**
            Một số điều cần biết về function
                1. Khi Function đặt trùng tên ?
                function ShowMessage(){
                    console.log('Message 1');
                }
                function ShowMessage(){
                    console.log('Message 2');
                }
                ShowMessage();
                Result Message 2

                Khi các function trùng tên function sau sẽ ghi đè lên function trước .

                2. Khai báo biến trong hàm ?

                function ShowMessage(){
                    var fullname = "Phí Thanh Tùng"
                    console.log(fullname);
                    // result Phí Thanh Tùng
                }
                //  phạm vi sử dụng của biến chỉ trong function

                3. Định nghĩa hàm trong hàm ?
                function ShowMessage(){
                    ShowMessage2(){
                        console.log("Phí Thanh Tùng")
                    }
                    ShowMessage2();
                    // result Phí Thanh Tùng
                }
                ShowMessage();
*/

/**
                Các Loại function
                    1. Declaration function

                    function showMessage(){

                    }

                    // Xảy ra hoisting có thể gọi function trước khi được định nghĩa

                    2. Expression function

                    var ShowMessage2 = function Name(){
                        // gán cho 1 biến
                    }

                    // call back

                    setTimeout(function Name(){

                    });

                    //

                    var myObject = {
                        myFunction: function(){

                        }
                    }

                    // Không sảy ra hoisting

                    3. Arrow function
*/

/**
                    Object Trong Javasript
                    var MyInfo = {
                        FullName: "Phí Thanh Tùng",
                        age: 25,
                        address: 'Hà Nội, Việt Nam',

                        getName: function(){
                            return this.FullName; // this == MyInfo
                        }


                    };

                    console.log(MyInfo.getName());
                    // console.log(MyInfo.email);
                    console.log(MyInfo.FullName);
                    document.getElementById('root').innerText=MyInfo.FullName;

                    MyInfo.email = "thanhtung19041998@gmail.com";
                    delete MyInfo.age; //xóa 1 value

                    Function --> Phương thức / Method
                    Others --> Thuộc tính / Property

*/

/**
                //Object Constructor
                    function User(firstName, lastName, avatar){
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.avatar = avatar;

                        this.getName = function(){
                            return `${this.firstName} ${this.lastName}` 
                        }
                    }

                    var author = new User('Thanh Tùng','Phí','Avatar');

                    var user = new User('Thanh Phong','Phí','Avatar');

                    author.title = " ADMIN ";
                    user.comment = "Good Job";
                    console.log(author.constructor === User);
                    console.log(user);
                                    
*/

/**
                    Object prototype - Basic

                    1. Prototype là gì ?
                    2. Sử dụng khi nào ?
                    function User(firstName, lastName, avatar){
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.avatar = avatar;

                        this.getName = function(){
                            return `${this.firstName} ${this.lastName}` 
                        }
                    }

                    User.prototype.className = "F8" //thêm 1 thuộc tính bên ngoài hàm tạo
                    User.prototype.getClassName = function(){ // hoạt động hoàn toàn giống nhau
                        return this.className;
                    }

                    var author = new User('Thanh Tùng','Phí','Avatar');
                    var user = new User('Thanh Phong','Phí','Avatar');

                    console.log(author.className);
                    console.log(user.getClassName());

*/

/**
                    Đối tượng Date
                    var date = new Date();

                    console.log(date);
*/

