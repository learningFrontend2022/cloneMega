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

        const elBoking = document.querySelectorAll('.box-list figure p button');
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
}
banner();