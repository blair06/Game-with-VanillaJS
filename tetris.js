var tetris = document.querySelector('#tetris');
var blockArr = [
    ['red',true,[
        [1,1],
        [1,1],
    ]],
    ['blue',true,[
        [0,2,0],
        [2,2,2],
    ]],
    ['orange',true,[
        [3,3,0],
        [0,3,3],
    ]],
    ['skyblue',true,[
        [0,4,4],
        [4,4,0],
    ]],
    ['yellow',true,[
        [5,5,5],
        [5,0,0],
    ]],
    ['pink',true,[
        [6,6,6],
        [0,0,6],
    ]],
    ['green',true,[
        [7,7,7,7]
    ]],
]
var blockDict = {
    0:['white',false,[]],
    1: ['red',true,[
        [1,1],
        [1,1],
    ]],
    2: ['blue',true,[
        [0,1,0],
        [1,1,1],
    ]],
    3: ['orange',true,[
        [1,1,0],
        [0,1,1],
    ]],
    4: ['skyblue',true,[
        [0,1,1],
        [1,1,0],
    ]],
    5: ['yellow',true,[
        [1,1,1],
        [1,0,0],
    ]],
    6: ['pink',true,[
        [1,1,1],
        [0,0,1],
    ]],
    7: ['green',true,[
        [1,1,1,1]
    ]],
    10: ['red',false,[]],
    20: ['blue',false,[]],
    30: ['orange',false,[]],
    40: ['skyblue',false,[]],
    50: ['yellow',false,[]],
    60: ['pink',false,[]],
    70: ['green',false,[]]
}
var tetrisData = [

];
    // 10x20 칸 만들기
function makeFrame(){
    var fragment = document.createDocumentFragment();
    //다른 노드를 담는 임시 컨테이너 역할을 하는 특수 목적의 노드이다.
    // 마치 메모리상에서만 존재하는 빈 문서 템플릿으로 생각하면 된다.
    // 이를 사용하여 메모리상에서 노드 구조를 만들고 이를 라이브노드 구조에 삽입하면 매우 효율적
    for(var i=0; i<20; i++){
        var tr = document.createElement('tr');
        var arr = [];
        tetrisData.push(arr);
    //arr변수와 tetrisData는 참조관계, arr값이 변하면 tetrisData의 값도 변한다.
        fragment.appendChild(tr);
        for(var j=0; j<10;j++){
            var td = document.createElement('td');
            tr.appendChild(td);
            arr.push(0);
        }
        
    }
  
    tetris.appendChild(fragment);
    // fragment는 메모리, 화면에서 조작하는 것은 느리나 메모리에서 조작하는 것은 빠르기 때문에
    // 메모리에서 조작한 후 화면에 붙인다.
}

// 랜덤으로 나온 blockArr의 index2 인자를 tetrisData에 복사한다.
function makeBlock(){
    var block = blockArr [Math.floor(Math.random()*7)][2];
    console.log(block);
    block.forEach(function(tr, i){
        tr.forEach(function(td,j){
            tetrisData[i][j] = td;
        });
    })
    drawing();
}
function drawing(){
    tetrisData.forEach(function(tr, i){
        tr.forEach(function(td,j){
            tetris.children[i].children[j].className = blockDict[td][0];
        });
    })
}
    // 누른키의 값을 알기 위한 코드
    // keydown은 꾹누르고 있으면 계속 시행되기 때문에 keyup사용
    // keypress는 화살표가 안먹는다.(원래 그런건지 모르겠음)
window.addEventListener('keyup', function (e){
    console.log(e);
    switch(e.code){
        case 'Space':
            break;
        case 'ArrowRight':
            break;
        case 'ArrowLeft':
            break;
        case 'ArrowDown':
            break;
        case 'ArrowUp':
            break;
        default:
            break;
    }
});
makeFrame();
makeBlock();