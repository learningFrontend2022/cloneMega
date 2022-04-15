const elBoxlist = document.querySelector('.box-list');
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
                                <p>
                                    <span><img src="./img/main/ico-heart-toggle-gray.png" alt="star">${data.data[i].like}</span>
                                    <button>예매</button>
                                </p>
                            </figure>`;
            }
            elBoxlist.innerHTML = figure;

        const elBoking = document.querySelectorAll('.box-list figure p button');
        const elLike = document.querySelectorAll('.box-list figure p span');

        console.log(elBoking, elLike)
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