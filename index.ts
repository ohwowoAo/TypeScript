let 이름 :string = 'kim';
let 나이 :number = 30;
let 결혼했니 :boolean  = true;

let 회원들 :string[] = ['kim', 'park']
let 회원들2 : {member1 : string, member2 : string} ={member1 : 'kim', member2 : 'park'}

//Q1
let 내이름:string = "NEJ";
let 내나이:number = 30;
let 내가좋아하는노래:string[] = ['한숨', '이하이']

//Q3
let project : {member : string[], days:number , started:boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}


//문제1
let user:string = 'kim';
let age:undefined | number = undefined;
let married:boolean = false; 
let 철수: (undefined| string |number | boolean)[] = [user, age, married];

//문제2
let 학교: {score: (boolean | number)[], teacher:string, friend: string|string[] } = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

//숙제1
function sayHi(x? :string) {
    if(x){
        console.log('안녕하세요' + x)
    }else{
        console.log('이름없음')
    }
}
sayHi('은정')

//숙제2
//return값 number인것임
function count(x : number | string) :number{
    return x.toString().length //length가 문자여야만 글자수를 셀수있음
}
count(234)

//숙제3
//void return하기 싫을때?
function 매력(월소득: number ,집보유여부:boolean,  매력점수:string) : string|void{
    let score:number = 0;
    score += 월소득;
    if(집보유여부 === true){
        score += 500
    }
    if(매력점수 === '상'){
        score += 100
    }
    if(score >= 600 ){
        return '결혼가능'
    }
}
매력(700, false, '중')


//interface
interface Study {name: string}
interface Teach extends Study{name: string, age : number}
//extends Study = Study내용 복사

//type으로 유사하게 만들기
// type Study = {name : string}
// type Teach = {age : number} & Study
//& 기호 = intersection type / extends 처럼 복사의 개념보다는 두타입을 전부 만족하는 타입이라는 뜻

let 학생: Study = {name: 'kim'}
let 선생: Teach = {name: 'kim', age: 20}

//Q1.
interface Product {brand : string, serialNumber:number,  model: string[]}
let 상품:Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

//Q2
interface Basket {
    product : string,
    price : number
}
let 장바구니: Basket[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 


//Q3
interface card extends Basket {card : boolean}
// { product : '청소기', price : 7000, card : false }


//Q4
// interface Calculator{
//     x : number,
//     y : number
// }

// function plus: Calculator{
//     return x + y
// }
// function minus(x : number, y : number){
//     return x - y
// }
interface Calculator{
    plus : (x : number, y : number) => number,
    minus : (x : number, y : number) => number,
}

let 오브젝트:Calculator = {
    plus(x,y){
        return x + y
    },
    minus(x,y){
        return x - y
    }
}