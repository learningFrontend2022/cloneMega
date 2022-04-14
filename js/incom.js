const elBody = document.querySelector('body');

// header, footer 불러오기
fetch("./incom.html")
.then(function(response) {
    return response.text();
})
.then(function(data) {
    let parser = new DOMParser();
	let doc = parser.parseFromString(data, 'text/html');
    // header 넣기
    elBody.prepend(doc.body.children[0], doc.body.children[2]);
    // footer 넣기
    elBody.append(doc.body.children[0]);
    // console.log(doc.body.children)

    const elBurger = document.querySelector('.bugermenu');
    const elBp = document.querySelector('.bugermenu p');
    const elMy = document.querySelector('.my');
    const elSearch = document.querySelector('.search');
    const elNav = document.querySelector('.bugermenu nav');
    const elLogin = document.querySelector('.m-login');
    const elLog = document.querySelector('.login');
    const elClose = document.querySelector('.log-close');

    // 버거메뉴
    elBurger.onclick = function(){
        elBp.classList.toggle('active');
        elMy.classList.remove('active');
        elSearch.classList.remove('active');
        if(elBp.classList.contains('active')){
            elNav.classList.add('active');
        }else{
            elNav.classList.remove('active');
        }
    }
    // 멤버쉽
    elMy.onclick = function(){
        elMy.classList.toggle('active');
        elBp.classList.remove('active');
        elSearch.classList.remove('active');
    }
    // 검색
    elSearch.onclick = function(){
        elSearch.classList.toggle('active');
        elMy.classList.remove('active');
        elBp.classList.remove('active');
    }
    // 로그인
    elLogin.onclick = function(e){
        e.preventDefault();
        // 로그인창 불러오기
        elLog.classList.add('active');
        window.onscroll = function(){
            window.scrollTo(0, 0); 
        };
    }     
    // 로그인창 끄기
    elClose.onclick = function(){
        window.onscroll=function(){};
        elLog.classList.remove('active');
    }

    
})
.catch((error) => console.log("error:", error));
