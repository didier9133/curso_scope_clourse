const My_global=0;

function my_function(){
    const Number=1;
    console.log(My_global);

    function parent(){
        const Inner=2;
        console.log(My_global, Number);
        
        function child(){
            console.log(Inner, Number, My_global);
        
        }
        
        return child()
    }

    return parent()
}

my_function();