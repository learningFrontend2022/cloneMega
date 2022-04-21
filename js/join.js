const elStep1 = document.querySelector('.certi');
const elStep2 = document.querySelector('.agree');
const elStep3 = document.querySelector('.input');
const elStep4 = document.querySelector('.finish');

const elCertification = document.querySelector('.join-certification');
const elAgree = document.querySelector('.join-agree');
const elInput = document.querySelector('.join-input');
const elFinish = document.querySelector('.join-finish');

// step1 본인인증

const elPhon = document.querySelector('.certi-phon');
const elIpin = document.querySelector('.certi-ipin');

function certification(){
    alert('본 데모 사이트는 본인 인증을 생략합니다.');
    // 가입시 입력한 개인정보는 로컬스토리지에 저장되며, 브라우저 캐시 및 쿠키 삭제시 함께 삭제됩니다. 또한 가입내역도 삭제됩니다. 보안에 주의하세요!
    elStep1.classList.remove('active');
    elStep2.classList.add('active');
    elCertification.classList.remove('active');
    elAgree.classList.add('active');
}

elPhon.onclick = certification;
elIpin.onclick = certification;

// step2 약관동의

const elCheckall = document.querySelector('.checkall input');
const elAll = document.querySelector('.checkall label');

const elCheck1 = document.querySelector('.check1 input');
const elLabel1 = document.querySelector('.check1 label');
const elCheck2 = document.querySelector('.check2 input');
const elLabel2 = document.querySelector('.check2 label');
const elCheck3 = document.querySelector('.check3 input');
const elLabel3 = document.querySelector('.check3 label');
const elCheck4 = document.querySelector('.check4 input');
const elLabel4 = document.querySelector('.check4 label');

const elSubmit = document.querySelector('.join-agree .submit input');

elCheckall.onclick = function all(){
    if(elCheckall.checked != true){
        elCheck1.checked = false;
        elCheck2.checked = false;
        elCheck3.checked = false;
        elCheck4.checked = false;
    }else{
        elCheck1.checked = true;
        elCheck2.checked = true;
        elCheck3.checked = true;
        elCheck4.checked = true;
    }
}
elAll.onclick = function(){
    if(elCheckall.checked == true){
        elCheckall.checked = false;
        elCheck1.checked = false;
        elCheck2.checked = false;
        elCheck3.checked = false;
        elCheck4.checked = false;
    }else{
        elCheckall.checked = true;
        elCheck1.checked = true;
        elCheck2.checked = true;
        elCheck3.checked = true;
        elCheck4.checked = true;
    }
}

elLabel1.onclick = function(){
    if(elCheck1.checked == true){
        elCheck1.checked = false;
        elCheckall.checked = false;
    }else{
        elCheck1.checked = true;
        if(elCheck1.checked && elCheck2.checked && elCheck3.checked && elCheck4.checked){
            elCheckall.checked = true;
        }
    }
}
elCheck1.onclick = function(){
    if(elCheck1.checked != true){
        elCheckall.checked = false;
    }else{
        if(elCheck1.checked && elCheck2.checked && elCheck3.checked && elCheck4.checked){
            elCheckall.checked = true;
        }
    }
}
elLabel2.onclick = function(){
    if(elCheck2.checked == true){
        elCheck2.checked = false;
        elCheckall.checked = false;
    }else{
        elCheck2.checked = true;
        if(elCheck1.checked && elCheck2.checked && elCheck3.checked && elCheck4.checked){
            elCheckall.checked = true;
        }
    }
}
elCheck2.onclick = function(){
    if(elCheck2.checked != true){
        elCheckall.checked = false;
    }else{
        if(elCheck1.checked && elCheck2.checked && elCheck3.checked && elCheck4.checked){
            elCheckall.checked = true;
        }
    }
}
elLabel3.onclick = function(){
    if(elCheck3.checked == true){
        elCheck3.checked = false;
        elCheckall.checked = false;
    }else{
        elCheck3.checked = true;
        if(elCheck1.checked && elCheck2.checked && elCheck3.checked && elCheck4.checked){
            elCheckall.checked = true;
        }
    }
}
elCheck3.onclick = function(){
    if(elCheck3.checked != true){
        elCheckall.checked = false;
    }else{
        if(elCheck1.checked && elCheck2.checked && elCheck3.checked && elCheck4.checked){
            elCheckall.checked = true;
        }
    }
}
elLabel4.onclick = function(){
    if(elCheck4.checked == true){
        elCheck4.checked = false;
        elCheckall.checked = false;
    }else{
        elCheck4.checked = true;
        if(elCheck1.checked && elCheck2.checked && elCheck3.checked && elCheck4.checked){
            elCheckall.checked = true;
        }
    }
}
elCheck4.onclick = function(){
    if(elCheck4.checked != true){
        elCheckall.checked = false;
    }else{
        if(elCheck1.checked && elCheck2.checked && elCheck3.checked && elCheck4.checked){
            elCheckall.checked = true;
        }
    }
}

elSubmit.onclick = function(e){
    e.preventDefault();
    if(!elCheck1.checked || !elCheck2.checked){
        alert('필수 동의항목을 체크해 주세요.')
    }else{
        elStep3.classList.add('active');
        elInput.classList.add('active');
        elStep2.classList.remove('active');
        elAgree.classList.remove('active');
    }
}

//step3 정보입력
const elIDcheck = document.querySelector('.id-check');
const elFinalsub = document.querySelector('.join-input .submit input');

elIDcheck.onclick = function(e){
    e.preventDefault();

}
elFinalsub.onclick = function(e){
    e.preventDefault();
    elStep3.classList.remove('active');
    elInput.classList.remove('active');
    elStep4.classList.add('active');
    elFinish.classList.add('active')
}

// step4 가입완료
const elGohome = document.querySelector('.join-finish button');

elGohome.onclick = function(){
    location.href='./index.html';
}