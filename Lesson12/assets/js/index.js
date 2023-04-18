// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdən sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield


// Variables - Dəyişənlər


// var, let, const

var _count = 5;
console.log(_count);

var b = 10;
var b = 'salam'

console.log(b);


// Scope - Kodunuzun istənilən hissəsində dəyişkənlərin, funksiyaların əlçatanlığıdır.

// Function scope, Block Scope

// function hello(){
//     var a = 5;
// }

// console.log(a);

{
    var b = 12;
}

console.log(b);

// var - function scope , global
// let, const - block, scope 


// {
//     let d  =14;
// }

// console.log(d);

// let vs const 

// let x = 7;
// x = 13;
// console.log(x);

// const f = 13;
// f = 22;
// console.log(f);

// Conditional operator - Budaqlanan alqoritm qurmaq ucun istifade olunur - Sert operatoru

// if  - əgər
// if else - deyilsə əgər
// else - deyilsə


let count = 9;

if (count == 12) {
    console.log('Your count is equal 12');
}
else if (count > 12) {
    console.log('Your count greater than 12');
}
else if (count < 12) {
    console.log('Your count small than 12');
}



const user ={
    name : 'Vusal'
}

// if(user.name == 'Ramal'){
//     alert('Giris ugurludur')
// }
// else{
//     alert('Giris ugursuzdur')
// }