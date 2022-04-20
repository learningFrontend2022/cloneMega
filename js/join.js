const elPhon = document.querySelector('.certi-phon');
const elIpin = document.querySelector('.certi-ipin');

const elStep1 = document.querySelector('.certi');
const elStep2 = document.querySelector('.agree');

const elCertification = document.querySelector('.join-certification');
const elAgree = document.querySelector('.join-agree');

// step1 인증
function certification(){
    alert('데모 사이트는 본인 인증은 생략합니다.');
    elStep1.classList.remove('active');
    elStep2.classList.add('active');
    elCertification.classList.remove('active');
    elAgree.classList.add('active');
}

elPhon.onclick = certification;
elIpin.onclick = certification;

