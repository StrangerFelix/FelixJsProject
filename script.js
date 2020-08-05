// Code editor Function
    var result = document.getElementById('iframe-box'); //resultBox
function setCode(){
    let code = document.getElementById('textarea'); //textArea
    let submit = document.getElementById('submit'); //button
    let remove = document.getElementById('remove'); //button
    result.style.fontFamily = "Times New Roman";
    submit.onclick = ()=>{
        result.innerHTML = code.value;
        localStorage.setItem('result', code.value);
    }
    remove.onclick = ()=>{
        result.innerHTML = '';
        code.value = '';
    }

    onload = ()=>{
        code.value = localStorage.getItem('result');
    }

}
setCode();

//HTML vars
var liHome = document.getElementsByClassName('a-li-home')[0];
var h1Heading = document.getElementById('heading');
var headingP1 = document.getElementsByClassName('heading-p')[0];
var headingP2 = document.getElementsByClassName('heading-p')[1];
var codeTitle = document.getElementById('code-edidor-title');
var submitButton = document.getElementById('submitButton');
var removeButton = document.getElementById('removeButton');
var resultTitle = document.getElementById('result-title');
var body = document.getElementsByTagName('body')[0];
var code2result = document.getElementById('code2-result');
var felixDev = document.getElementById('felixDev');
var textarea2title = document.getElementById('textarea2-title');
var container = document.getElementById('container');
var resultText = document.getElementById('iframe-result');
var spanLang = document.getElementById('langSelect');
var language = document.getElementById('languageSet');
var setTheme = document.getElementById('themeSet');
var themeSpan = document.getElementById('theme-span');
var darkSet = document.getElementById('btndark');
var lightSet = document.getElementById('btnlight');
var cross = document.getElementById('cross');
var wholeMenu = document.getElementById('whole-menu');
var dropDown = document.getElementById('nav-img');
var arabicLanguage = document.getElementsByClassName('lang')[0];
var englishLanguage = document.getElementsByClassName('lang')[1];
var jsTitle = document.getElementsByClassName('a-li-HTML')[0];
var radioTitle = document.getElementsByClassName('a-li-CSS')[0];
var decoded = document.getElementById('btoa-button');
var encoded = document.getElementById('atob-button');
        lightSet.style.cursor = 'pointer'
        darkSet.style.cursor = 'pointer'
//Clock Fun

function setTime(){
    var clock = document.getElementById('clock-tag');
    var now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();
    if(hours < 10){
        hours = '0' + hours;
    }else if(minutes < 10){
        minutes = '0' + minutes;
    }else if(seconds < 10){
        seconds = '0' + seconds;
    }
    clock.innerHTML = hours + ':' + minutes + ':' + seconds;
    clock.style.letterSpacing = '2px';
    
}

//Classes
class ThemeSet{
    constructor(){
        darkSet.addEventListener('click', ()=>{
            this.setDark();
        })
        lightSet.addEventListener('click', ()=>{
            this.setLight();
        })
    }
    setLight(){
        body.style.background = 'white';
        body.style.transition = '0.4s';
        container.style.color = 'black';
    }
    setDark(){
        body.style.background = '#3A4F63';//#3A4F63 //#44050D
        body.style.transition = '0.4s';
        container.style.color = '#7C98B4';//#A3D1FF
        result.style.background = 'white';
        localStorage.setItem('Dark', setDark().value);
        title.style.color = 'black';
        felixDev.style.color = ('#3A4F63');
        result.style.color = 'black';
        resultText.style.borderColor = '#CBCED1';
    }
}

class Menu{
    constructor(){
        this.isDroped = false;/*
        cross.addEventListener('click', ()=>{
            this.closeMenu();
        })*/
        dropDown.addEventListener('click', ()=>{
            if(this.isDroped == false){
                this.openMenu();
                dropDown.src = 'IMG/cross.png';
                this.isDroped = true;
            }else{
                this.closeMenu();
                dropDown.src = 'IMG/dropdown.png';
                this.isDroped = false;
            }

        })
    }
    openMenu(){
        wholeMenu.style.display = 'block';
    }
    closeMenu(){
        wholeMenu.style.display = 'none';
    }
}
class LangSet{
    constructor(){
        arabicLanguage.addEventListener('click', ()=>{
            this.languageSet('arabic');
        })
        englishLanguage.addEventListener('click', ()=>{
            this.languageSet('english');
        })
    }
    languageSet(type){
        if(type === 'arabic'){
            body.style.fontFamily = "font-family: 'Cairo', sans-serif;";
            liHome.innerHTML = 'الرئيسية';
            decoded.innerHTML = 'الغاء التشفير';
            encoded.innerHTML = 'تشفير';
            liHome.style.letterSpacing = '0';
            h1Heading.innerHTML = 'صفحات الويب الاساسية';
            h1Heading.style.letterSpacing = '0';
            headingP1.innerHTML = 'برنامج تعليمي سهل لإنشاء صفحات ويب بسيطة';
            headingP1.style.letterSpacing = '0';
            headingP2.innerHTML = 'يحدد HTML محتوى كل صفحة ويب على الإنترنت. من خلال "ترميز" المحتوى الخام بعلامات HTML ، يمكنك إخبار متصفحات الويب كيف تريد عرض أجزاء مختلفة من المحتوى الخاص بك. يعد إنشاء مستند HTML بمحتوى مرمز بشكل صحيح الخطوة الأولى لتطوير صفحة ويب.';
            headingP2.style.letterSpacing = '0';
            codeTitle.innerHTML = 'محرر الاكواد';
            submitButton.innerHTML = 'النتيجة';
            removeButton.innerHTML = 'حذف';
            resultTitle.innerHTML = 'النتيجة :';
            resultTitle.style.letterSpacing = '0';
            textarea2title.innerHTML = 'تشفير النص';
            code2result.innerHTML = 'النتيجة:';
                  
       }else if(type === 'english'){
            decoded.innerHTML = 'decode';
            encoded.innerHTML = 'encode';
            textarea2title.innerHTML = 'Text Encoding';
            code2result.innerHTML = 'Result:';
            liHome.innerHTML = 'Home';
            h1Heading.innerHTML = 'basic web pages';
            headingP1.innerHTML = 'A friendly tutorial for making (really) simple web pages';
            headingP2.innerHTML = 'HTML defines the content of every web page on the Internet. By “marking up” your raw content with HTML tags, you’re able to tell web browsers how you want different parts of your content to be displayed. Creating an HTML document with properly marked up content is the first step of developing a web page.';
            codeTitle.innerHTML = 'Code Editor';
            submitButton.innerHTML = 'submit';
            removeButton.innerHTML = 'remove';
            jsTitle.innerHTML = 'JavaScript';
            radioTitle.innerHTML = 'Radio';
            resultTitle.innerHTML = 'Result :';
       }
}   
}
class DeCode
{
    constructor()
    {
        this.textArea1 = document.getElementById('textarea2');
        this.decodeButton = document.getElementById('btoa-button');
        this.encodeButton = document.getElementById('atob-button');
        this.result = document.getElementById('decode-iframe');
        this.decodeButton.addEventListener('click', ()=>{
            this.makeDecoded();
        });
        this.encodeButton.addEventListener('click', ()=>{
            this.makeEncoded();
        })
    }
    makeDecoded()
    {
        this.result.innerText = btoa(this.textArea1.value) ;
    }
    makeEncoded()
    {
        this.result.innerText = atob(this.textArea1.value);
    }
    
}

window.onload = ()=>{
    new ThemeSet(); 
    new Menu();
    new LangSet();
    new DeCode();
    wholeMenu.style.display = 'none';
    setInterval(setTime, 500);
}

