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
    const elNav = document.querySelector('header nav');
    const elMy = document.querySelector('.my');
    const elMycontents = document.querySelector('.my-contents');
    const elSearch = document.querySelector('.search');
    const elSearchcon = document.querySelector('.search-contents');
    const elSearchList = document.querySelector('.rank-list');
    const elSearchImg = document.querySelector('.no1-img img');
    const elLogin = document.querySelector('.m-login');
    const elLog = document.querySelector('.login');
    const elClose = document.querySelector('.log-close');
    const elMyLog = document.querySelector('.my-contents button');

    // 검색 데이터 비동기 처리
    let searchBar = function(){
        fetch("./js/movie_list.json")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let rankList = '';
            let rankImg = data.data[0].image;
            for(let i=0; i<5; i++){
                rankList += `
                    <p>
                        <i>${i+1}</i>
                        <span>${data.data[i].movieNm}</span>
                    </p>
                `;
            }
            elSearchList.innerHTML=rankList;
            elSearchImg.src = rankImg;
        })
    }

    // 버거메뉴
    elBurger.onclick = function(){
        elBp.classList.toggle('active');
        elMy.classList.remove('active');
        elMycontents.classList.remove('active');
        elSearch.classList.remove('active');
        elSearchcon.classList.remove('active');
        if(elBp.classList.contains('active')){
            elNav.classList.add('active');
        }else{
            elNav.classList.remove('active');
        }
    }
    // 멤버쉽
    elMy.onclick = function(){
        elMy.classList.toggle('active');
        elMycontents.classList.toggle('active');
        elBp.classList.remove('active');
        elNav.classList.remove('active');
        elSearch.classList.remove('active');
        elSearchcon.classList.remove('active');
    }
    elMyLog.onclick = function(){
        elMy.classList.toggle('active');
        elMycontents.classList.toggle('active');
        elBp.classList.remove('active');
        elNav.classList.remove('active');
        elSearch.classList.remove('active');
        elSearchcon.classList.remove('active');
        // 로그인창 불러오기
        elLog.classList.add('active');
        window.onscroll = function(){
            window.scrollTo(0, 0); 
        };
    }
    // 검색
    elSearch.onclick = function(){
        searchBar()
        elSearch.classList.toggle('active');
        elSearchcon.classList.toggle('active');
        elMy.classList.remove('active');
        elMycontents.classList.remove('active');
        elBp.classList.remove('active');
        elNav.classList.remove('active');
    }
    // 로그인
    elLogin.onclick = function(e){
        e.preventDefault();
        elBp.classList.remove('active');
        elNav.classList.remove('active');
        elMy.classList.remove('active');
        elMycontents.classList.remove('active');
        elSearch.classList.remove('active');
        elSearchcon.classList.remove('active');
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
