// Arithmetic Operators - Riyazi, cəbri operatorlar
// +  - toplama
// -  - çıxma
// *  - vurma 
// /  - bölmə 
// %  - qalıq
// ** - qüvvət
// ++  - bir vahid artırma 
// --  - bir vahid azaltma

var a = 7;
var b = 13;

console.log(a + b);
console.log(13 * 7);

let c = 10;
--c;
console.log(c);

let d = 15;
++d;
console.log(d);


//  Assingment Operators - Bərabərləşdirmə, Mənimsətmə operatorları
// = - bərabər
// +=  - toplayıb mənimsətmə
// -=  - çıxıb mənimsətmə
// *=  - vurub mənimsətmə
// /=  - bölüb mənimsətmə
// %=  - qalıq tapıb mənimsətmə
// **= - qüvvətə yüksəldib mənimsətmə

let e = 14;
e += 12;
// e =  e + 12
console.log(e);



// Comparison operators - Müqayisə operatorları
// ==   
// ===  
// !=   - fərqlidir
// !==  - fərqlidir
// <    - kiçikdir
// <=   - kiçik bərabər
// >    - böyükdür
// >=   - böyük bərabər


console.log(8 == '8');
console.log(8 === '8');

// Logical operator - Məntiiqi operatorlar

// &&  - və 
// ||  - və ya
// !   - fərqlidir

const user = {
    name: 'Nihad',
    age: 12
}

if (user.name === 'Nihad' && user.age === 16) {
    console.log('Giris ugurludur');
}
else if (user.name === 'Nihad' && user.age !== 16) {
    console.log('Yasiniz dogru deyil');
}
else if (user.name !== 'Nihad' && user.age === 16) {
    console.log('Adiniz dogru deyil');
}
else {
    console.log("Melumatlari duzgun daxil edin");
}


let user1 = null;

let user2;


console.log(user1);
console.log(user2);

console.log(user1 == user2);
console.log(user1 === user2);

console.log(typeof null);
console.log(typeof undefined);





// --------------------------------------------------------------------------------------------------
// Other (Special) Operators (Xüsusi operatorlar) Start

// ,            (vergül)-- (kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// \            (tərs slash) -- (Qaçındırma operatorudur)
// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)
// ?:           (sual üst-üstə qoşa nöqtə)((şərt) ? ifadə1 : ifadə2) Ternary operator !!!
// şərt            ? true                 : false
// void         (dəyişkənin dəyərini undefined etmək üçündür)
// delete       (objectin dəyərini silmək üçündür)
// new          (yeni dəyər yaratməq üçündür)
// this         (mövcud dəyəri işarələmək üçündür)
// in           (dəyişkənin(object) daxilində dəyərin olub olmamasını yoxlamaq üçündür)
// instanceof   (dəyişkənin(objectin xüsusiyyətinin) içində xüsusiyyət olub olmamasını yoxlamaq üçündür)


// Other (Special) Operators (Xüsusi operatorlar) End
// --------------------------------------------------------------------------------------------------


