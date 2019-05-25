let sign_user = 'X';
let sign_comp = 'O';

let score_user = '0';
let score_comp = '0';

$(document).ready(function(){
    //Увеличение на 120%
    document.body.style.zoom = "120%";

    let exit_flag = false;
    let win_user_array = ['123','456','789','147','258','369','159','357'];
         
    //Определяем победу игрока
    function check_3_user(sign){
        for (let i = 0; i < 8; i++) {
         
            let first = 'button' + win_user_array[i].substr(0,1);
            let second = 'button' + win_user_array[i].substr(1,1);
            let third = 'button' + win_user_array[i].substr(2,1);
             
            if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == sign ){
                $('.button1, .button2, .button3, .button4, .button5, .button6, .button7, .button8, .button9').css("background-color", "#FFF");
                $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
                $('.result').text('Вы выиграли!');
                $('.MAIN_DIV .div').unbind('click');
                score_user++;
                Score();
                exit_flag = true;
            }    
        }
    }
     
    //Определяем возможность победы компьютера
    function check_2_comp(sign){
        for (let i = 0; i < 8; i++) {
         
            let first = 'button' + win_user_array[i].substr(0,1);
            let second = 'button' + win_user_array[i].substr(1,1);
            let third = 'button' + win_user_array[i].substr(2,1);
             
            if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == '' && exit_flag == false ){
                $('.'+third).text(sign);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.MAIN_DIV .div').unbind('click');
                score_comp++;
                Score();
                exit_flag = true;
            }    
             
            if( $('.'+first).text() == sign && $('.'+second).text() == '' && $('.'+third).text() == sign && exit_flag == false ){
                $('.'+second).text(sign);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.MAIN_DIV .div').unbind('click');
                score_comp++;
                Score();
                exit_flag = true;
            }    
             
            if( $('.'+first).text() == '' && $('.'+second).text() == sign && $('.'+third).text() == sign && exit_flag == false ){
                $('.'+first).text(sign);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.MAIN_DIV .div').unbind('click');
                score_comp++;
                Score();
                exit_flag = true;
            }    
        }
    }
     
    //Определяем ход компьютера
    function check_2_user(sign){
 
        for (let i = 0; i < 8; i++) {
         
            let first = 'button' + win_user_array[i].substr(0,1);
            let second = 'button' + win_user_array[i].substr(1,1);
            let third = 'button' + win_user_array[i].substr(2,1);
 
             
            if( exit_flag == false ){
                if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == '' ){
                    $('.'+third).text(sign_comp);
                    exit_flag = true;
                }
            }
                         
            if( exit_flag == false ){
                if( $('.'+first).text() == sign && $('.'+second).text() == '' && $('.'+third).text() == sign ){
                    $('.'+second).text(sign_comp);
                    exit_flag = true;
                }    
            }    
             
            if( $('.'+first).text() == '' && $('.'+second).text() == sign && $('.'+third).text() == sign ){
                $('.'+first).text(sign_comp);
                exit_flag = true;
            }
            
            if(exit_flag) break;
        }
    }
     
    $('.MAIN_DIV .div').click(function(){
        //Если клетка пустая
        if( $(this).text() == '' ){
            $(this).text(sign_user); 
            CHECK();   
            check_3_user(sign_user);
            check_2_comp(sign_comp);
            check_2_user(sign_user);
            if( exit_flag == false ){
                for (let i = 1; i < 10; i++) {    
                    if( $('.button'+i).text() == '' ){
                        $('.button'+i).text(sign_comp);
                        break;
                    }    
                }
            }else exit_flag = false;
        }
    });
});

function Restart(){
    $('.result').text('Ваш ход!');
    $('.button1, .button2, .button3, .button4, .button5, .button6, .button7, .button8, .button9').text('');
    $('.button1, .button2, .button3, .button4, .button5, .button6, .button7, .button8, .button9').css("background-color", "#FFF");
    $( ".MAIN_DIV .div" ).bind("click", function (){
 
        //Если клетка пустая
        if( $(this).text() == '' ){
            $(this).text(sign_user);    
            check_3_user(sign_user);
            check_2_comp(sign_comp);
            check_2_user(sign_user);
             
            if( exit_flag == false ){
                for (let i = 1; i < 10; i++) {    
                    if( $('.button'+i).text() == '' ){
                        $('.button'+i).text(sign_comp);
                        break;
                    }    
                }
            }else exit_flag = false;
        }
    });
}

let exit_flag = false;
let win_user_array = ['123','456','789','147','258','369','159','357'];
     
//Определяем победу игрока
function check_3_user(sign){
    for (let i = 0; i < 8; i++) {
        CHECK();
        let first = 'button' + win_user_array[i].substr(0,1);
        let second = 'button' + win_user_array[i].substr(1,1);
        let third = 'button' + win_user_array[i].substr(2,1);
         
        if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == sign ){
            $('.button1, .button2, .button3, .button4, .button5, .button6, .button7, .button8, .button9').css("background-color", "#FFF");
            $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
            $('.result').text('Вы выиграли!');
            $('.MAIN_DIV .div').unbind('click');
            score_user++;
            Score();
            exit_flag = true;
        }     
    }
}
 
//Определяем возможность победы компьютера
function check_2_comp(sign){
    for (let i = 0; i < 8; i++) {
     
        let first = 'button' + win_user_array[i].substr(0,1);
        let second = 'button' + win_user_array[i].substr(1,1);
        let third = 'button' + win_user_array[i].substr(2,1);
         
        if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == '' && exit_flag == false ){
            $('.'+third).text(sign);
            $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
            $('.result').text('Вы проиграли!');
            $('.MAIN_DIV .div').unbind('click');
            score_comp++;
            Score();
            exit_flag = true;
        }    
         
        if( $('.'+first).text() == sign && $('.'+second).text() == '' && $('.'+third).text() == sign && exit_flag == false ){
            $('.'+second).text(sign);
            $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
            $('.result').text('Вы проиграли!');
            $('.MAIN_DIV .div').unbind('click');
            score_comp++;
            Score();
            exit_flag = true;
        }    
         
        if( $('.'+first).text() == '' && $('.'+second).text() == sign && $('.'+third).text() == sign && exit_flag == false ){
            $('.'+first).text(sign);
            $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
            $('.result').text('Вы проиграли!');
            $('.MAIN_DIV .div').unbind('click');
            score_comp++;
            Score();
            exit_flag = true;
        }    
    }
}
 
//Определяем ход компьютера
function check_2_user(sign){

    for (let i = 0; i < 8; i++) {
     
        let first = 'button' + win_user_array[i].substr(0,1);
        let second = 'button' + win_user_array[i].substr(1,1);
        let third = 'button' + win_user_array[i].substr(2,1);

         
        if( exit_flag == false ){
            if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == '' ){
                $('.'+third).text(sign_comp);
                exit_flag = true;
            }
        }
                     
        if( exit_flag == false ){
            if( $('.'+first).text() == sign && $('.'+second).text() == '' && $('.'+third).text() == sign ){
                $('.'+second).text(sign_comp);
                exit_flag = true;
            }    
        }    
         
        if( $('.'+first).text() == '' && $('.'+second).text() == sign && $('.'+third).text() == sign ){
            $('.'+first).text(sign_comp);
            exit_flag = true;
        }
        if(exit_flag) break;
    }
}
 
$('.MAIN_DIV .div').click(function(){
    //Если клетка пустая
    if( $(this).text() == '' ){
        $(this).text(sign_user); 
        CHECK();   
        check_3_user(sign_user);
        check_2_comp(sign_comp);
        check_2_user(sign_user);  
        if( exit_flag == false ){
            for (let i = 1; i < 10; i++) {    
                if( $('.button'+i).text() == '' ){
                    $('.button'+i).text(sign_comp);
                    break;
                }
            }
        }else exit_flag = false;
    }
});

function CHECK() {
    if ($('.button1').text() != '' && $('.button2').text() != '' && $('.button3').text() != '' && $('.button4').text() != '' && $('.button5').text() != '' && $('.button6').text() != '' && $('.button7').text() != '' && $('.button8').text() != '' && $('.button9').text() != ''){
        $('.result').text("Ничья"); 
        $('.button1, .button2, .button3, .button4, .button5, .button6, .button7, .button8, .button9').css("background-color", "#FFE097");  
    }
}

function O(){
    sign_user = "O";
    sign_comp = "X";
    $('#B2').css("background-color", "lime"); 
    $('#B1').css("background-color", "white"); 
}

function X(){
    sign_user = "X";
    sign_comp = "O";
    $('#B1').css("background-color", "lime"); 
    $('#B2').css("background-color", "white"); 
}

function Score(){
    $('.score').text(score_user + " : " + score_comp); 
}