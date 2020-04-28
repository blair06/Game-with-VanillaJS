var tetris = document.querySelector('#tetris');
var tetrisData = [];
// 10x20 칸 만들기
function makeFrame(){
    var fragment = document.createDocumentFragment();
    //다른 노드를 담는 임시 컨테이너 역할을 하는 특수 목적의 노드이다.
    // 마치 메모리상에서만 존재하는 빈 문서 템플릿으로 생각하면 된다.
    // 이를 사용하여 메모리상에서 노드 구조를 만들고 이를 라이브노드 구조에 삽입하면 매우 효율적
    for(var i=0; i<20; i++){
        var tr = document.createElement('tr');
        fragment.appendChild(tr);
        for(var j=0; j<10;j++){
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        
        console.log(tetris,fragment);
        tetris.appendChild(fragment);
    }
    // fragment는 메모리, 화면에서 조작하는 것은 느리나 메모리에서 조작하는 것은 빠르기 때문에
    // 메모리에서 조작한 후 화면에 붙인다.
}
makeFrame();