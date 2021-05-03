/**
Giới thiệu về toán tử trong Javascript
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Asignment
    3. Toán tử so sánh - Comparision
    4. Toán tử logic - Logical
*/

/**
 Giới thiệu một số hàm built-in

    1. Alert Thông báo
    2. Console
    3. Confirm // Hộp thoại xác nhận

    comfirm("hôm nay là thứ 2");

    4. Prompt  //

    prompt("Xac nhận độ tuổi");

    5. Set timeout

    setTimeout(function() {

    },1000); // cho một đoạn code chạy sau 1 khoảng thời gian

    6. Set interval

    setInterval(function() {

    },1000);

    // chạy định kỳ sau một khoảng thời gian

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
        - Boolean : true or false (đối với sô 0 false , 1,2,3... true)
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

/**
                    Câu lệnh rẽ nhánh - If else
                    var date = 2;
                        if (date === 2){
                            console.log('Hôm nay là thứ 2');
                        }else if(date === 3){
                            console.log('Hôm nay là thứ 3');
                        }else if (date === 4){
                            console.log('Hôm nay là thứ 4');
                        }else if (date === 5){
                            console.log('Hôm nay là thứ 5');
                        }else if (date === 6){
                            console.log('Hôm nay là thứ 6');
                        }else{
                            console.log('Không phù hợp');
                        }
                        // kiểm tra 1 nhánh đúng kể cả khi 
                        // có 2 nhánh đúng thì chỉ xét nhánh đầu tiên 
*/

/**
                    Câu lệnh rẽ nhánh - Switch
                   var inputdate = document.getElementById('input');
                    var formLogin = document.getElementById('form-login')
                    if (formLogin.attachEvent) {
                        formLogin.attachEvent('submit', onFormSubmit);

                    } else {
                        formLogin.addEventListener('submit', onFormSubmit)
                    }

                    function onFormSubmit(e){
                        var date = inputdate.value;
                    switch(date){
                        case '2': 
                            console.log("hôm nay là thứ 2");
                            break;
                        case '3': // ===
                            console.log("hôm nay là thứ 3");
                            break;
                        case '4': 
                            console.log("hôm nay là thứ 4");
                            break;
                        case '5': 
                            console.log("hôm nay là thứ 5");
                            break;
                        default:
                            console.log('Không biết');
                    }
                    }

*/

/**
                    Toán tử 3 ngôi - Ternary operator
                    var course = {
                        name: 'Javascript',
                        coin: 250
                    }
                    if (course.coin>0){
                        console.log(`${course.coin} Coins`);
                    }else{
                        console.log("free");
                    }

                    Giải quyết bài toán trên bằng toán tử 3 ngôi

                    var result = course.coin > 0 ? `${course.coin} Coins` : Miễn phí;

                    console.log(result);


*/

/**
                Vòng lặp - Loop
                    1. for - Lặp với điều kiện đúng
                    2. for/in - Lặp qua key của đối tượng
                    3. for/of - Lặp qua value của đối tượng
                    4. while - Lặp khi điều kiện đúng
                    5. do/while - Lặp ít nhất 1 lần sau đó lặp khi điều kiện đúng
*/

/**
                For Loop
                    var i = 1
                    for (i=1; i<=1000; i++){
                        console.log(i);
                    }
*/

/**
                    var myArray= [
                        'JavaScript',
                        'Ruby',
                        'Dart',
                        'Solidity',
                    ]
                    var arrayLength = myArray.length;
                    for (var i=0; i<arrayLength ; i++){
                        console.log(myArray[i]);
                    }
*/

/**
                    Phạm vi sử dụng cho object array , chuỗi
var myInfo = {
    name: "Phí Thanh Tùng",
    age: 25,
    address: "Hà nội,VN"
}

for (var key in myInfo){
    console.log(myInfo[key]);
}
*/

/**
        For/of loop phạm vi sử dụng cho Array , chuỗi
        // Sử dụng khi muốn lấy ra phần tử của một mảng hoặc từng chữ cái của một chuỗi

        var languages= [
                        'JavaScript',
                        'Ruby',
                        'Dart',
                        'Solidity',
                    ]
        for (var value in languages){
        console.log(value);
        }

        // Trường hợp object
        var myInfo = {
        name: "Phí Thanh Tùng",
        age: 25,
        address: "Hà nội,VN"
        }

        

        for (var value of Object.keys(myInfo)){
            console.log(myInfo[value]);
        }
*/

/**
        do/while loop

        var i = 0;
        do{
            i++;
            console.log(i);

        }while(i < 10);

        // trường hợp nap thẻ
        var i = 0;
        var isSuccess = false;

        do{
            i++;

            console.log('Nạp thẻ lần' + i);

            if(true){ //false = lặp lại 3 lần
                isSuccess = true;
            }
        }while(!isSuccess && i<=3);


*/

/**
        Break & Continue in Loop
        Break khi muốn thoát khỏi vòng lặp
        Continue khi muốn bỏ qua một vài vòng của vòng lặp
        
        for (var i=0; i<10; i++){
            console.log(i);
              if (i>=5){
                    break
                }
        }

        for (var i=0; i<10;i++){

            if(i%2 !== 0){ // loại bỏ các số lẻ
                continue;
            }
            console.log(i);

        }

*/

/**
        Vòng lặp lồng nhau - Nested Loop

        var myArray = [ [1,2],[3,4],[5,6]];

        for(var i=0; i< myArray.length;i++){
            for(var j=0 ; j< myArray[i].length;j++){
                console.log(myArray[i][j]);
            }

        } // vòng con thực hiện song thì đến vòng cha thực hiện



*/

/**
        Dom events (Document Object Model)
*/

/**
                    Math Object
                        - Math.PI // trả lại số PI
                        - Math.round()  // làm tròn số
                        - Math.abs()    // giá trị tuyệt đối
                        - Math.ceil()   // làm tròn trên 4.000000000001 = 5
                        - Math.floor()  // làm tròn dưới 4.999999999999 = 4   
                        - Math.random() // trả về số ngẫu nhiên < 1
                        - Math.min(-100,100,..)    // lấy số nhỏ nhất trong chuỗi
                        - Math.max(100,102,...)    // lấy số lớn nhất trong chuỗi
*/

/**
        Callback?

        Là hàm (function) được truyền qua đối số
        khi gọi hàm khác

        1. Là hàm
        2. Được truyền qua đối số 
        3. Được gọi lại (trong hàm nhận đối số)

        function MyFunction(param){
            if (typeof param === "function"){
            param("Hello Word");
            }
        }

        function MyCallBack(value){
            console.log('Value',value);
        }


        MyFunction(MyCallBack);

*/
/**
        Ví dụ empty elements of array

        var languages= [
        'JavaScript',
        'Ruby',
        'Dart',
        'Solidity',
        ];

        languages.length = 10;

        for (var index in languages)
        {
            console.log(languages[index]);
        }

*/
/**
        Ví dụ call back

        Array.prototype.map2 = function(callback)
    {
        var output = [], arrayLength = this.length;

        for (var i=0; i< arrayLength; i++){
            var result = callback(this[i],i);
            output.push(result);
        }

        return output;
        }
    var languages= [
            'JavaScript',
            'Ruby',
            'Dart',
            'Solidity',
    ];

    var htmls = languages.map2(function(language){
        return `<h2>${language}</h2>`;

    })

    console.log(htmls.join(''));

    // var htmls = languages.map(function(language){
    //     return `<h2>${language}</h2>`;
    // })
    // console.log(htmls.join(''));

    //Filter
    var ages = [32,33,16,40];

    Array.prototype.filter2 = function(callback) {
    var arrayLength = this.length
    var output = [];
    for(var i = 0; i < arrayLength; i++) {
        if(callback(this[i]) === true){
            output.push(this[i])
        }
    }  
    return output;
    }

    var ageuchia = ages.filter2(function(age){
        return age > 16;
    })
    console.log(ageuchia);
*/

/**
    My forEach Call Back 

    1. Object prototype
    2. For in // không duyệt qua các phân tử trong mảng rỗng 
    3. hasOwnProperty //các phần tử có trong mảng boolean = true ; các prototype tự định nghĩa= false

    var languages= [
    'JavaScript',
    'Ruby',
    'Dart',
    'Solidity',
    ];

    Array.prototype.forEach2 = function(callback){
        for (var index in this){ //duyệt qua cả element trong prototype forEach 2 là 1 prototype tự định nghĩa 
            if(this.hasOwnProperty(index)){ // kiểm trả thứ tự gần nhất của object chỉ duyệt các elemment 
            callback(this[index],index,this); //các phần tử là index trả về true còn lại false
            }
        }
    }
    
    languages.forEach2(function(language,index,array){
            console.log(language,index,array);
    });

    // languages.forEach(function(language,index,array){
    //     console.log(language,index,array);
    // });

*/

/**
   Call Back filter method filter 2
        Array.prototype.filter2 = function(callback){
            
            var output = [];
            
            for (var index in this){
                if(this.hasOwnProperty(index)){
                var result =   callback(this[index],index,this);
                if(result){
                    output.push(this[index]);
                }
                }
            }
            return output;
        }

        var courses = [
            {
                name: 'Javascript',
                coin: 580,
            },
            {
                name: 'Dart',
                coin: 680,
            },
            {
                name: 'Ruby',
                coin: 980,
            },
            {
                name: 'PHP',
                coin: 880,
            },
            {
                name: 'HTML,CSS',
                coin: 780,
            },
        ]


        var filterCourses = courses.filter2(function(course,index,array){
            // console.log(course,index,array);
            return course.coin > 700;
            

        });

        console.log(filterCourses);
*/

/**
        Method some2() array

        Array.prototype.some2 = function(callback){
            var output = false
            for(var index in this){
                if(this.hasOwnProperty(index)){
                    if(callback(this[index],index,this)){
                        output = true;
                        break;
                    }
                }
            }
            return output;
        }

        var courses = [
            {
                name: 'Javascript',
                coin: 580,
                isFinish: false,
            },
            {
                name: 'Dart',
                coin: 680,
                isFinish: true,
            },
            {
                name: 'Ruby',
                coin: 980,
                isFinish: false,
            },
            {
                name: 'PHP',
                coin: 880,
                isFinish: false,
            },
            {
                name: 'HTML,CSS',
                coin: 780,
                isFinish: false,
            },
        ]

        var result = courses.some2(function(course,index,array){
            console.log(course,index,array);
            return course.isFinish;
        
        });

        console.log(result);
*/

/**
        method every2 call back (array)

            Array.prototype.every2 = function(callback){
                var output = true
                for(var index in this){
                    if(this.hasOwnProperty(index)){
                        var result = callback(this[index],index,this)
                            if(!result){
                                output = false;
                                break;
                            }
                        }
                }
                return output;
            }

            var courses = [
                {
                    name: 'Javascript',
                    coin: 580,
                    isFinish: true,
                },
                {
                    name: 'Dart',
                    coin: 680,
                    isFinish: false,
                },
                {
                    name: 'Ruby',
                    coin: 980,
                    isFinish: true,
                },
                {
                    name: 'PHP',
                    coin: 880,
                    isFinish: true,
                },
                {
                    name: 'HTML,CSS',
                    coin: 780,
                    isFinish: true,
                },
            ]

            var result = courses.every2(function(course,index,array){
                return course.coin > 500;

            });

            console.log(result);
*/

/**
            Bài toán loại bỏ các phẩn tử lặp trong mảng
            var array = ['a','b','c','d','a','b','c','d'];

            console.log([...(new Set(array))]);
            Đệ qui trong JavaScript :
                Là hàm tự gọi lại chính nó
                    1.Xác định điểm dừng
                    2.Logic Handle => tạo ra điểm dừng
                        function countDown(num){
                            if(num >0){
                                console.log(num);
                                return countDown(num-1);
                            }
                            return num;
                        }

                        countDown(10);
            // đệ qui
            function loop(start,end,callback){
                    if(start <= end){
                        callback(start);
                        return loop(start+1,end,callback);
                    }
                }

                var array = ['Javascript','PHP','Ruby','PHP','Ruby','PHP','Ruby'];

                loop (0, array.length - 1 , function(index){
                    console.log(array[index]);
                });
            // vòng lặp giai thừa
            function giaithua(num){
                var output = 1
                for (var i = num; i>0;i--){
                    output = output * i;
                }
                
                return output;
            }

            console.log(giaithua(6));

            // đệ qui giai thừa
            function giaithua(num){
                if(num > 0){
                    return num * giaithua(num - 1);
                }
                return 1;
            }

            console.log(giaithua(6));
*/


/**
        // Html Dom (Document Object Model)
        // Khi mà trang web được tải trình duyệt sẽ tạo ra DOM của trang web
        // W3schools.com đọc thêm tài liệu
        // DOM tuân theo quy chuẩn W3C (World Wide Web Consortium)
        // 3 Thành phần : 1. Element 2.Attribute 3.Text
        // Node
        // Dùng JavaScript để thay đổi thuộc tính của DOM
        
        // Core DOM - standard model for all document types : word , excel ...
        // XML DOM - standard model for XML documents
        // HTML DOM - standard model for HTML documents
*/

/**
            Javascript: Browser | Server (NodeJS)

            // Application programming interface (API)

            Browser: HTML -> DOM -> WEB API

            DOM ko phải 1 phần của JavaScript
*/

/**
            DOM Event 
            1. Attribute Event
            2. Assign event using the element node
            Đọc thêm các DOM event tại Web3School key word DOM event

            var h1Element = document.querySelectorAll('h1');

            for(var i=0 ; i<h1Element.length;i++){
                h1Element[i].onclick =function(e){
                    console.log(this.innerText);
                }
            }
*/

/**
            DOM Event
            1. Input /select
            2. Key up / down
            // var InputElement = document.querySelector('input[type="text1"]');
            // var InputElement = document.querySelector('input[type="checkbox"]');
            // var InputElement = document.querySelector('select')
            // console.log(InputElement);

            // InputElement.oninput = function(e){
            //     document.getElementById('root').innerText =  e.target.value;
            // }

            // key up key down

            // InputElement.onkeyup = function(e){
            //     console.log(e.target.value);
            //     console.log(e.which);

            //     switch(e.which){
            //         case 27:
            //             console.log("EXIT");
            //             break ;
            //         case 65: 
            //             console.log("A");
            //             break ;
                

            //     }
            // }

            document.onkeyup = function(e){
                console.log(e.which);

                switch(e.which){
                    case 27:
                        console.log("EXIT");
                        break ;
                    case 65: 
                        console.log("A");
                        break ;
                    case 13:
                        document.getElementById('root').innerText =  e.target.value;
                        break;    
                }
            }
            // InputElement.onchange = function(e){
            //     console.log(e.target.checked);
            // }

            // InputElement.onchange = function(e){
            //     console.log(e.target.value);
            // }
*/


/**
            DOM Event

            1. preventDefault 
                - loại bỏ hành vi mặc định của trình duyệt trên một thẻ HTML
                var aElements = document.querySelectorAll('a');

            for(var i = 0 ; i < aElements.length ;++i) {
                aElements[i].onclick = function(e){

                    if(!e.target.href.startsWith('https://coccoc.com/search')){
                        e.preventDefault(); //khong cho cac trang khác với trang cocococ được chuyển trang
                     }
                }
            }

            var ulElement = document.querySelector('ul');

                ulElement.onmousedown = function(e){
                    e.preventDefault();
                }
                        ulElement.onclick = function(e){
                            
                            console.log(e.target);
                }

            2. StopPropagation
                - Loại bỏ sự kiện nổi bọt
                document.querySelector('div1').onclick = function(e){
                    console.log('DIV');
                }

                document.querySelector('.button').onclick = function(e){
                    e.stopPropagation();
                    console.log('Click me!');
                }
*/



/**
            Text DOM
            
            var headingElement = document.querySelectorAll('.heading');
            for(var i=0 ; i<headingElement.length;i++)
            {
            console.log(headingElement[i].innerText);
            headingElement[i].innerText = "NEW String";
            console.log(headingElement[i].textContent);
            headingElement[i].textContent = "Thanh Tùng";
            }
            //innerText ghi lại đúng thuộc tính nhìn thấy ở trang web
            //textContent ghi lại các thuộc tính trong code    
*/

/**
            Get Element methods
            1. Element: ID , class, tag, Css selector, html collection
            document.getElementById('')
            document.getElementsByClassName('')
            document.getElementsByTagName('h1')
            var headingNode = document.querySelector('.heading'); // kiến thức css
            // dùng cho form trong html
            <form id="form-1"></form>
            document.forms['form-1'];
            // thẻ a
            document.anchors
            // images
            document.images
            // List (thẻ li)
            var listItemNodes = document.querySelectorAll('.box-1 li');
            var boxNode =  document.querySelector('.box-1');
            // công việc 1 : Sử dụng tới `boxNode`
            // công việc 2 : Sử dụng tới các li elements
            // là cong của `box-1`
            console.log(boxNode.querySelectorAll('li'));
            console.log(listItemNodes);

            // document.write('Hello');
            2. Attribute

            //DOM attributes

            var headingElement = document.querySelector('h1');

            //seter
                //title
                headingElement.title = "Heading";
                // id
                headingElement.id = "Heading";
                // class
                headingElement.className = "Heading"
                // href
                var headingElement = document.querySelector('a'); 
                headingElement.href = "Heading";
            /setAttribute
                
                var headingElement = document.querySelector('h1');

                headingElement.setAttribute('data-1','heading');
            //getAttribute
               console.log(headingElement.getAttribute('class'));



            3. Text

*/
/**
            Node properties

            contenteditable=""

            là các propretype của elements //đọc thêm
 
*/

/**
            InnerHTML propretype
            OuterHTML
            var boxElement = document.querySelector('.box');

            boxElement.innerHTML = "<h1>Thanh Tùng</h1>";

            console.log(document.querySelector('h1').innerText);

            console.log(boxElement.outerHTML);
*/

/**
            DOM CSS(Style)

            var boxElement = document.querySelector('.box');

            console.log(boxElement.style);

            //background-position
            //camelCase

            boxElement.style.width = '100px';
            boxElement.style.height = '200px';
            boxElement.style.backgroundColor = 'red';
            // hoac viet theo kieu
            Object.assign(boxElement.style,{
                width: '200px',
                height: '100px',
                backgroundColor: 'green',
            });

*/

/**
            ClassList Property

            //add them
            //contains //kiem tra
            //remove    //xoa
            //toggle    //
            var boxElement = document.querySelector('.box');

            console.log(boxElement.classList);

            boxElement.classList.add('red','blue');

            console.log(boxElement.classList.contains('red')); //result == true neu co

            setInterval(()=>{
                // boxElement.classList.remove('red');
                boxElement.classList.toggle('red'); //kiem tra xem co thi bo khong co thi them
            },3000);

*/

/**
            1. DOM Event / Event Listener
            // DOM event phức tạp trong sử lý nhiều việc
            // Sử dụng trong trường hợp đơn giản và không cần xóa đi sự kiện 
            var btn = document.getElementById('btn');    
                setTimeout(function(){
                    btn.onclick = function(e){
                        console.log('viec 1');
                    
                        console.log('viec 2');
                    
                        console.log('viec 3');
                    }

                    console.log(btn);
                },3000); //huy bỏ lắng nghe 3s đầu

                setTimeout(function(){
                    btn.onclick = function(){} //huy bỏ lắng nghe 
                },3000)

            //Event listener

                btn.addEventListener('click',function(e){
                    console.log(Math.random());
                });//2 đối số chính 1 tên sự kiện , 2 function

                btn.addEventListener('click',function(e){
                    console.log(Math.random());
                });//2 đối số chính 1 tên sự kiện , 2 function

                btn.addEventListener('click',function(e){
                    console.log(Math.random());
                });//2 đối số chính 1 tên sự kiện , 2 function

                // 3 sự kiện này là khác nhau được gọi lần lượt sự kiện nào đặt trc gọi trc .

                //hủy bỏ lắng nghe

                function viec1(){
                    console.log("viec1");
                }

                function viec2(){
                    console.log("viec2");
                }

                btn.addEventListener('click',viec1);
                btn.addEventListener('click',viec2);

                setTimeout(function(){ // hủy bỏ
                    btn.removeEventListener('click',viec1);
                },3000); //sau 3s mất đi ông việc 1
                
            2. JSON (JavaScript Object Notation)
                - Là một định dạng dữ liệu (chuỗi)
                - JSON: Number , String , Boolean , Null , Array , Object (kiểu dữ liệu)
                - Thao tác mã hóa / giải mã (Encode / decode)
                - Stringify / chuyển dữ liệu sang 1 kiểu JSON - 
                Parse -chả lại kiểu dữ liệu ban đầu Json -> JavaScript
                // var JSON = '1'; //Number
                // var JSON = 'true'; //boolean
                // var JSON = '["JavaScript","PHP"]'; //Array
                // var JSON = '"Thanh Tùng"'; // String
                // var json = '{"name":"Thanh Tùng","age":24}';

                // console.log(JSON.parse(json));

                // console.log(JSON.stringify(true)); //Javascript -> JSON

                // console.log(JSON.stringify(["JavaScript","PHP"])); //Javascript -> JSON

                // console.log(JSON.stringify({name:"Thanh Tùng",age:24})); //Javascript -> JSON
            3. Fecth
                
            4. DOM location
            5. Local storage
            6. Session storage
            7. Coding convention
            8. Best Practices
            9. Mistakes
            10. Performance
            11. Promise 
                - JavaScript là ngôn ngữ đồng bộ nhưng bên trong vẫn có xử lý bất đồng bộ
                - Sync - Đồng bộ
                - Async - Bất Đồng bộ
                - Nỗi đau 
                    + Callback hell giải quyết bằng promise (vấn đề của dữ liệu rằng buộc)
                        setTimeout(function(){
                            console.log(1);
                            setTimeout(function(){
                                console.log(2);
                            },1000)
                        },1000);
                    + Pyramid of doom
                - Lý thuyết , Cách hoạt động
                    // ES6
                    // Có 3 trạng thái
                    // 1. Pendding chờ đợi
                    // 2. Fulfilled thành công
                    // 3. Rejected thất bại
                    // Sử dụng promise để khắc phục tình trạng callback hell
                    // Sử dụng trong trường hợp bất đồng bộ
                    var promise = new Promise(
                        //Executor
                        // nếu ko điền 2 function thì sảy ra Memory leak ()
                        function(resolve,reject){
                            // Logic
                            // Thành công : resolve()
                            // Thất bại: reject
                            // Fake call API
                            resolve({
                                id: 1,
                                name: "JavaScript",
                            });
                            // reject('có lỗi');
                        }
                    ); //Object constructor

                    promise // then catch nhận callback function 
                        .then(function(language){ //sau đó của promise resolve
                            console.log(language);  
                        })
                        .catch(function(error){ //khi reject (bẫy) thông báo lỗi cho người dùng
                            console.log(error);
                        })
                        .finally(function(){ //khi thực hiện xong
                            console.log("Done!");
                        });
                        //Chain
                        var promise = new Promise(
                            //Executor
                            // nếu ko điền 2 function thì sảy ra Memory leak ()
                            function(resolve,reject){
                                // Logic
                                // Thành công : resolve()
                                // Thất bại: reject
                                // Fake call API
                                resolve(
                                );
                                // reject('có lỗi');
                            }
                        ); //Object constructor 

                        promise // then catch nhận callback function 
                            .then(function(){ //sau đó của promise resolve
                                // return 1;
                                // trường hợp với 1 Promise
                                return new Promise(function(resolve){
                                    
                                    setTimeout(function(){resolve({id: 1,
                                        name: "JavaScript",});
                                    },3000);
                                })
                            })//then đằng sau phải chờ Promise đằng trước
                            .then(function(data){ //tham số đằng trước có thể kết quả của đằng sau
                                console.log(data); 
                                return 2;
                            })
                            .then(function(data){ //sau đó của promise resolve
                                console.log(data);  
                            })
                            .catch(function(error){ //khi reject (bẫy) thông báo lỗi cho người dùng
                                console.log(error);
                            })
                            .finally(function(){ //khi thực hiện xong
                                console.log("Done!");
                            });
                            // tính chất chuỗi Promise giải quyết vấn đế callback hell
                            function sleep(ms){
                                return new Promise(function(resolve){
                                    setTimeout(resolve, ms);
                                })
                            }

                            sleep(1000)
                                .then(function(){
                                console.log(1);
                                return sleep(1000);
                                // không có return 1 Promise thì ko phải chờ đợi đằng trước thực hiện xong
                                })
                                .then(function(){
                                    console.log(2);
                                    return sleep(1000); 
                                })
                                .then(function(){
                                    console.log(3);
                                    return sleep(1000);
                                });
                - Thực hành, ví dụ 
                    -//Sync / Async
                    Đồng bộ là ai viết trước chạy trước 
                    console.log(1);
                    console.log(2);
                    // Async
                    // Các thao tác bất đồng bộ
                    // -setTimeout , setInterval , fetch , XMLHttpRequest , đọc file
                    // request animation frame
                    // Callback
                    // sleep ngủ 1s
                    setTimeout(function(){ // callback function
                        console.log(1);
                    },1000)
                    console.log(2);
            1. Xử lý nhiều việc khi 1 event xảy ra 
            2. Lắng nghe / hủy bỏ lắng nghe
*/  

/**
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(function(){
    console.log(1);
    return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return new Promise (function(resolve,reject){
            reject();
        })
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .catch(function(error){
        alert("Hệ thống đang có vấn đề")
    });
*/
/**
    1. Promise.resolve
    2. Promise.reject 
    3. Promise.all //chạy song song các Promise

        // var promise = new Promise(function (reslove,reject){
        //     reslove("Success!");
        // });

        // var promise = Promise.resolve("Successfully");
        // var promise = Promise.reject("Error!");
        // promise .then(function(hello){
        //     alert(hello);
        // })
        // .catch(function(error){
        //     alert(error);
        // })
        // .finally(function(){

        // });

        var promise = new Promise(function(reslove){
            setTimeout(function(){
                reslove([1]);
            },1000)
        });

        var promise1 = new Promise(function(reslove){
            setTimeout(function(){
                reslove([2,3]);
            },2000)
        });

        var promise2 = new Promise(function(resolve,reject){
            reject("Có lỗi")
        });
        // nếu promise all mà có 1 thành phần bị lỗi kết quả trả 
        // về sẽ nhận lỗi bỏ qua các thành phần đúng
        Promise.all([promise,promise1,promise2])
        .then(function(result){
            var result1 = result[0];
            var result2 = result[1];
            console.log(result1.concat(result2));
        })
        .catch(function (error) {
            console.log(error);
        });

*/
/////////////////////////////////////////////////////////////////////////////////////////
/**
        ES6- ECMAScript 6 - ECMAScript 2015
        1. Let, const
        2. Template Literals
        3. Multi-line String
        4. Arrow function
        5. Classes
        6. Default parameter values // Định nghĩa giá trị mặc định cho các tham số
            function logger(log, isAlert = false , type='log') {
                if (isAlert) return alert(log);
                console[type](log); 
            }

            logger('Hello World',true);
        7. Destructuring
        8. Rest parameters
        9. Spread
        10. Enhenced object literals 
            // 1. Định nghĩa key: value cho object
            // 2. Định nghĩa method cho object
            // 3. Dịnh nghĩa key cho object dưới dạng biến
                var name = "JavaScript"
                var price = 1000;

                var courses = {
                    name: name, // bình thường
                    price, // Enhenced object literals

                    getName: function(){
                        return name; //bình thường
                    },
                    getPrice() {
                        return price; // method
                    }
                };

                // 3. Định nghĩa key cho object dưới dạng biến
                var fieldName = "name";
                var fieldPrice = "price";


                const course = {
                    [fieldName]: "javascript",
                    [fieldPrice]: 1000
                }

                console.log(course);

                console.log(courses.getName());
                console.log(courses.getPrice());

        11. Tagged template literal
        12. Modules
*/


/**
        Let, const
        1. Var / Let, Const : Scope , Hosting
        // var truy cập được trong và ngoài block
// let const chỉ truy cập được bên trong block
        if(true){
            var course = "JavaScript basic!"; // được
            let course = "JavaScript basic!";  // ko được
            const course = "JavaScript basic!"; // ko được
        }

        console.log(course);

        // Hosting đưa lên trên phạm vị
        // Trình Biên dịch thành
            var a;
            a=1;
            // khai báo
            var a = 1;

            // const let ko hỗ trợ hosting
        2. Const / Var, Let : Assignment

        const a = 1;

        a = 100;

        console.log(a);

        //ko hỗ trợ asignment (thay đổi giá trị) gán lại giá trị của a
        // thay đổi thuộc tính trong const thì vẫn được


        //Code block: if else , loop , {} , ....

        // Code Thuần: Var
        // Babel: Const , Let
        // Khi định nghĩa biến và không gán lại biến đố thì dùng : Const
        // kHi muốn gán lại giá trị cho biến thì dùng Let , Var
*/

/**
        Arrow function // ko dùng được khi là function contructor

        const sum = (a,b) => a+b; // return object ({a: a,b: b});
    console.log(sum(2,3));

        // const MyFunction = (log) => {
        //     console.log(log);
        // } // Arrow function

        // const MyFunction = function(log){
        //     console.log(log); //2. Expression function
        // }


        // function MyFunction(log){ // 1. Declaration function
        //     console.log(log)
        // }

        // MyFunction("Messagge........")

        // khong dung arrow function
        const course = {
            name: "JavaScript",
            getName: function(){
                return this; // context
            }
        }

        console.log(course.getName());
*/

/** 
        const courseName = 'javascript';

        // const description = "Course Name :" + courseName ; //nối chuỗi bình thường

        const description = `Course Name : ${courseName}` // template string chú ý dấu \

        console.log(description);

*/

/**
        Classes //Cách viết khác của constructor function

    class Course {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getName() { return this.name; }
    getPrice() { return this.price; }
    }

    const PHPCourses = new Course("PHP",1000);

    console.log(PHPCourses);

*/


