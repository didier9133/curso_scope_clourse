function fruits(){
    if(true){
        var fruta1="apple"; //function scope 
        let fruta2="banana"; //block scope (if) no se puede acceder por fuera del bloque 
        const fruta3= "orange"; //block scope (if) no se puede acceder por fuera del bloque 
    }

    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);

}

fruits();