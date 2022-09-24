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