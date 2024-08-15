
/*
console.log("Hello World");
추상화 : 복잡한것들을 목적에 맞게 단순화하는것
목적은 명확히 하고 불필요한 것들은 숨겨서 목적을 드러내는것
*/

// function intro(name,birth,age,job){
//     console.log(name+'님의 생일은 '+birth+'일 이고 나이는 '+age+'세 이며 직업은 '+job+'입니다.');
// }

// intro('박시우',20001214,25,'Developer');

// var input = confirm('[Warning] 아무것도 누르지 마시오');
// console.log(input);

// // alert('Hello'); alert('Everyone')

// // var jap = '아리가또 고자이마시따'
// // console.log(jap)

// // function comp(spec){
// //     console.log('이 컴퓨터의 사양은 '+spec+'입니다')
// // }

// var num = [1,2,3,4,6]
// for(i=0; i<num.length; i++){
//     console.log(num[i])
// }
// //배열.foreach쓰고 콜백함수에는 새로운 매개변수 대입
// var num = [1,2,3,4,6]
// num.forEach(function(numbers) {
//     console.log(numbers)
// });

// var num = [1,2,3,4,5]
// num.forEach(numbers1 => console.log(numbers1))

var name = ['박효진','박시우','한종음','박승범'];
var nameList = document.getElementById('nameList');

name.forEach(function(names){
    var listItem = document.createElement('li');
    listItem.textContent = names;
    nameList.appendChild(listItem);
});

// var name = ['박효진','박시우','한종음','박승범']
// var namelist = document.getElementById('namelist')
// name.forEach(function(names){
//     var listItem = document.createElement('li')
//     listItem.textContent = names;
//     namelist.appendChild(listItem)
// });

// var name = ['박효진','박시우','한종음','박승범']
// name.forEach(names1 => console.log(names1))