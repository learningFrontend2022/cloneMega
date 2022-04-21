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
        window.scrollBy({top : 1000, behavior: 'smooth'});
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
        window.scrollBy({top : 1000, behavior: 'smooth'});
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
    //스크롤 맨위로
    window.scrollTo({top : 0, behavior: 'smooth'});

    if(!elCheck1.checked || !elCheck2.checked){
        alert('필수 동의항목을 체크해 주세요.');
    }else{
        elStep3.classList.add('active');
        elInput.classList.add('active');
        elStep2.classList.remove('active');
        elAgree.classList.remove('active');
    }
}

//step3 정보입력

const elId = document.querySelector('#id');
const elIDcheck = document.querySelector('.id-check');
const elPass = document.querySelector('#password');
const elPasscheck = document.querySelector('#passagain');
const elName = document.querySelector('#name');
const elBirth = document.querySelector('#birth');
const elEmail = document.querySelector('#email');
const elFinalsub = document.querySelector('.join-input .submit input');

let regId = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/; 
let regPass = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{4,20}$/;
let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;


let purple = "#351F66";
let blue = "#027B94";
let red = "#ac1010";

let inputTrue = [0,0,0,0,0,0];

elId.onkeyup=function(){
    if(regId.test(elId.value)){
        elId.style.border = `2px solid ${blue}`;
        elIDcheck.style.backgroundColor = purple;
        elIDcheck.style.color = "#fff";
    }else{
        elId.style.border = `2px solid ${red}`;
        inputTrue[0] = 0;
    }
}
elIDcheck.onclick = function(e){
    e.preventDefault();
    if(regId.test(elId.value)){
        alert('확인되었습니다.');
        elId.style.border = `2px solid ${blue}`;
        inputTrue[0] = 1;
    }else{
        alert('영문, 숫자 8~12자를 조합해 입력해주십시오.');
        inputTrue[0] = 0;
    }
}
elPass.onkeyup = function(){
    if(regPass.test(elPass.value)){
        elPass.style.border = `2px solid ${blue}`;
        inputTrue[1] = 1;
    }else{
        elPass.style.border = `2px solid ${red}`;
        inputTrue[1] = 0;
    }
}
elPasscheck.onkeyup = function(){
    if(elPasscheck.value == elPass.value){
        elPasscheck.style.border = `2px solid ${blue}`;
        inputTrue[2] = 1;
    }else{
        elPasscheck.style.border = `2px solid ${red}`;
        inputTrue[2] = 0;
    }
}
elName.onkeydown = function(){
    if(elName.value != ''){
        inputTrue[3] = 1;
        elName.style.border = `2px solid ${blue}`;
    }else{
        inputTrue[3] = 0;
        elName.style.border = `2px solid ${red}`;
    }
}
// 생년월일 날짜 비교
let date = new Date();
let mon = '';
function month(m){
    if(m<9){
        return mon = `0${m+1}`;
    }else{
        return mon = `${m+1}`;
    }
}

month(date.getMonth());

let today = `${date.getFullYear()}-${mon}-${date.getDate()}`;

elBirth.onchange = function(){
    if(elBirth.value != '' && elBirth.value <= today){
        inputTrue[4] = 1;
        elBirth.style.border = `2px solid ${blue}`;
    }else if(elBirth.value == '' || elBirth.value > today){
        inputTrue[4] = 0;
        elBirth.style.border = `2px solid ${red}`;
    }
}

elEmail.onkeyup = function(){
    if(regEmail.test(elEmail.value)){
        elEmail.style.border = `2px solid ${blue}`;
        inputTrue[5] = 1;
    }else{
        elEmail.style.border = `2px solid ${red}`;
        inputTrue[5] = 0;
    }
}

// 마켓팅 수신동의
const elYes = document.querySelector('#yes');
const elYeslabel = document.querySelector('.yes');
const elNo = document.querySelector('#no');
const elNolabel = document.querySelector('.no');
const elAlarm = document.querySelector('#alarm');
const elSms = document.querySelector('#sms');
const elToemail = document.querySelector('#toemail');
const elAlert = document.querySelector('.marketing .alert');

elYeslabel.onclick = function(){
    elYes.checked = true;
    elNo.checked = false;

    elAlarm.checked = true;
    elSms.checked = true;
    elToemail.checked = true;
}
elYes.onclick = function(){
    elNo.checked = false;

    elAlarm.checked = true;
    elSms.checked = true;
    elToemail.checked = true;
}
elNolabel.onclick = function(){
    elYes.checked = false;
    elNo.checked = true;

    elAlarm.checked = false;
    elSms.checked = false;
    elToemail.checked = false;
}
elNo.onclick = function(){
    elYes.checked = false;

    elAlarm.checked = false;
    elSms.checked = false;
    elToemail.checked = false;
}

elAlarm.onclick = function(){
    if(!elAlarm.checked && !elSms.checked && !elToemail.checked){
        elAlert.classList.add('on');
    }else if(elAlarm.checked || elSms.checked || elToemail.checked){
        elAlert.classList.remove('on');
    }
}
elSms.onclick = function(){
    if(!elAlarm.checked && !elSms.checked && !elToemail.checked){
        elAlert.classList.add('on');
    }else if(elAlarm.checked || elSms.checked || elToemail.checked){
        elAlert.classList.remove('on');
    }
}
elToemail.onclick = function(){
    if(!elAlarm.checked && !elSms.checked && !elToemail.checked){
        elAlert.classList.add('on');
    }else if(elAlarm.checked || elSms.checked || elToemail.checked){
        elAlert.classList.remove('on');
    }
}
// 회원가입 버튼
function final(){
    elStep3.classList.remove('active');
    elInput.classList.remove('active');
    elStep4.classList.add('active');
    elFinish.classList.add('active');


}
elFinalsub.onclick = function(e){
    e.preventDefault();
    if(inputTrue[0]==0){
        window.scrollTo({top : 0, behavior: 'smooth'});
        alert('아이디 중복확인을 해주세요.');
        elId.style.border = `2px solid ${red}`;
    }
    if(inputTrue[1]==0){
        window.scrollTo({top : 0, behavior: 'smooth'});
        elPass.style.border = `2px solid ${red}`;
    }
    if(inputTrue[2]==0){
        window.scrollTo({top : 0, behavior: 'smooth'});
        elPasscheck.style.border = `2px solid ${red}`;
    }
    if(inputTrue[3]==0){
        window.scrollTo({top : 0, behavior: 'smooth'});
        elName.style.border = `2px solid ${red}`;
    }
    if(inputTrue[4]==0){
        window.scrollTo({top : 0, behavior: 'smooth'});
        elBirth.style.border = `2px solid ${red}`;
    }
    if(inputTrue[5]==0){
        window.scrollTo({top : 0, behavior: 'smooth'});
        elEmail.style.border = `2px solid ${red}`;
    }
    // 항목을 모두 기입하고 나서
    if(inputTrue[0]==1 && inputTrue[1]==1 && inputTrue[2]==1 && inputTrue[3]==1 && inputTrue[4]==1 && inputTrue[5]==1){
        if(elYes.checked){
            if(!elAlarm.checked && !elSms.checked && !elToemail.checked){
                alert('마켓팅 수신 수단 1가지 이상 체크해주세요.');
            }else if(elAlarm.checked || elSms.checked || elToemail.checked){
                final();
            }
        }else{
            final();
        }
    }
}

// step4 가입완료
const elGohome = document.querySelector('.join-finish button');

elGohome.onclick = function(){
    location.href='./index.html';
}