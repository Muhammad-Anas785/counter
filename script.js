let low_btn=document.getElementById('low_btn');
let hi_btn=document.getElementById('hi_btn');

hi_btn.addEventListener('click',incr);
low_btn.addEventListener('click',decr);


var qty=0;
function incr(){
    if(qty<20)
    {
        qty++;
        document.getElementById('counter_num').innerHTML=qty;
        document.getElementById('warning2').style.display="none"
        document.getElementById('warning2').style.transition="1s"

        

    }
    else{
        document.getElementById('warning').style.display="block"
    }
}

function decr(){
    if(qty>0){
        qty--;
        document.getElementById('counter_num').innerHTML=qty;
        document.getElementById('warning').style.display="none"

    }

    else{
        document.getElementById('warning2').style.display="block"


    }
}
