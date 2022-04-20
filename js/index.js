const elBoxlist = document.querySelector('.box-list');
const elBg = document.querySelector('.bg img');
async function banner(){
    await fetch("./js/movie_list.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let figure = '';
            for(let i=0; i<4; i++){
                figure += `<figure>
                                <img src=${data.data[i].image} alt="">
                                <figcaption>
                                    <i>${i+1}</i>
                                    <img src="./img/main/bg-main-movie-rank.png"/>
                                </figcaption>
                                <div class="summary">${data.data[i].story}</div>
                                <div>
                                    <p>
                                        <span>
                                            <img src="./img/main/ico-heart-toggle-main.png" alt="star">
                                        </span>
                                        <span>${data.data[i].like}</span>
                                    </p>
                                    <button>예매</button>
                                </div>
                            </figure>`;
            }
            elBoxlist.innerHTML = figure;
            elBg.src = data.data[0].image;

        const elBoking = document.querySelectorAll('.box-list figure div button');
        const elLike = document.querySelectorAll('.box-list figure p span');

        // 좋아요 버튼
        elLike.forEach(function(v){
            v.onclick = function () {
                alert('로그인 후 이용가능합니다.');
            };
        })
        
        // 예매버튼
        elBoking.forEach(function(v){
            v.onclick=function(){
                location.href='./sub_reservation.html';
            }
        })
    })
    .catch((error) => console.log("error:", error));
}
banner();

// 혜택 슬라이드
fetch("./js/main.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    const elBenefit = document.querySelector('.benefit .event');
    let eventBn = '';
    data.benefit.forEach(function(v){
        eventBn += `<p>
                        <img src=${v.src1} alt=""/>
                        <img src=${v.src2} alt=""/>
                    </p>`;
    })
    elBenefit.innerHTML = eventBn;

    const elBene= document.querySelectorAll('.benefit .event p');
    console.log(elBene)
    let num = elBenefit.children.length -1;

    let clear = function(){
        clearInterval(interval);
    }

    let interval = setInterval(function(){
        // clear;
        // console.log(elBenefit.children)
        // $('.event p').child[num].fadeOut(100);
        // if(num == elBenefit.children.length -1){
        //     num = 0;
        // }else{
        //     num++;
        // }
        // elBenefit.children[num].fadeIn(500);

    },[500])

})
.catch((error) => console.log("error:", error));