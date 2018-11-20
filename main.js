function xyz(x) {
    x=String(x).toString();
    var afterPoint = '';
    if(x.indexOf('.') > 0)
       afterPoint = x.substring(x.indexOf('.'),x.length);
    x = Math.floor(x);
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    return otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree + afterPoint;
  }

function gd(s){
    return document.getElementById(s);
}
const button = gd('convertustophp').addEventListener('click', convert);
const country = gd('countryCode').addEventListener('change', countryConvert);
let phpresult = gd('convertedPHP');
let fixerio = gd('fixerioapisource');  

//left side
let usd = gd('usd'),aud = gd('aud'),gbp = gd('gbp'),sgd = gd('sgd'),ils = gd('ils'),jpy = gd('jpy'),ron = gd('ron'),tryy = gd('try'),hrk = gd('hrk'),mxn = gd('mxn'),nok = gd('nok'),idr = gd('idr'),hkd = gd('hkd'),zar = gd('zar'),isk = gd('isk'),
//right side
cad = gd('cad'),
krw = gd('krw'),
thb = gd('thb'),
php = gd('php'),
myr = gd('myr'),
nzd = gd('nzd'),
pln = gd('pln'),
sek = gd('sek'),
rub = gd('rub'),
cny = gd('cny'),
inr = gd('inr'),
chf = gd('chf'),
bgn = gd('bgn'),
czk = gd('czk');



// USD to PESO Currency Converter
function convert(){
    const dollarInput = document.getElementById('dollarInput').value;
    fetch('https://data.fixer.io/api/latest?access_key=6b3feb8224dcfc1839a21dd630c1b534&%20base=USD&symbols=PHP')
    .then(response => response.text())
    .then(data => {
        const fixerInput = 'Fixer.io @ Levi Web Design&Development';
        const rates = JSON.parse(data);
        const php = rates.rates.PHP;
        const result = dollarInput * php;
        phpresult.innerHTML = '&#36;' + xyz(result.toFixed(2));
        fixerio.innerHTML = fixerInput;
    })
    .catch(err => console.log(err));  
}

function countryConvert() {
    const countryInput = document.getElementById('countryCode').value;
    
    fetch('https://data.fixer.io/api/latest?access_key=6b3feb8224dcfc1839a21dd630c1b534&%20base=' + countryInput + '&symbols=USD,AUD,GBP,SGD,ILS,JPY,RON,TRY,HRK,MXN,NOK,IDR,HKD,ZAR,ISK,CAD,KRW,THB,PHP,MYR,NZD,PLN,SEK,RUB,CNY,INR,CHF,BGN,CZK')
    .then(response => response.text())
    .then(data => {
        const rates = JSON.parse(data);
        const r = rates.rates;
        usd.innerHTML = '&#36;' + r.USD.toFixed(2);
        aud.innerHTML = '&#36;' + r.AUD.toFixed(2);    
        gbp.innerHTML = '&#163;' +r.GBP.toFixed(2); 
        sgd.innerHTML = '&#36;' +r.SGD.toFixed(2); 
        ils.innerHTML = '&#8362;' +r.ILS.toFixed(2); 
        jpy.innerHTML = '&#165;' +r.JPY.toFixed(2); 
        ron.innerHTML = '&#105;' +r.RON.toFixed(2); 
        tryy.innerHTML = '&#8378;' +r.TRY.toFixed(2); 
        hrk.innerHTML = '&#110;' +r.HRK.toFixed(2); 
        mxn.innerHTML = '&#36;' +r.MXN.toFixed(2); 
        nok.innerHTML = '&#107;' +r.NOK.toFixed(2); 
        idr.innerHTML = '&#82;' +r.IDR.toFixed(2); 
        hkd.innerHTML = '&#36;' +r.HKD.toFixed(2);
        zar.innerHTML = '&#82;' +r.ZAR.toFixed(2); 
        isk.innerHTML = '&#107;' +r.ISK.toFixed(2); 

        cad.innerHTML = '&#36;' + r.CAD.toFixed(2); 
        krw.innerHTML = '&#8361;' + r.KRW.toFixed(2); 
        thb.innerHTML = '&#3647;' + r.THB.toFixed(2); 
        php.innerHTML = '&#8369;' + r.PHP.toFixed(2); 
        myr.innerHTML = '&#82;' + r.MYR.toFixed(2); 
        nzd.innerHTML = '&#36;' + r.NZD.toFixed(2); 
        pln.innerHTML = '&#122;' + r.PLN.toFixed(2); 
        sek.innerHTML = '&#107;' + r.SEK.toFixed(2); 
        rub.innerHTML = '&#1088;' + r.RUB.toFixed(2); 
        cny.innerHTML = '&#165;' + r.CNY.toFixed(2); 
        inr.innerHTML = '&#8377;' + r.INR.toFixed(2); 
        chf.innerHTML = '&#67;' + r.CHF.toFixed(2); 
        bgn.innerHTML = '&#1083;' + r.BGN.toFixed(2); 
        czk.innerHTML = '&#75;' + r.CZK.toFixed(2); 
    })
}





