var tetris = document.querySelector('#tetris');

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