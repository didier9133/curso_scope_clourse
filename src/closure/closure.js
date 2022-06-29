/*function Money_box(coins){
    let save_coins=0;
    let total_coins= save_coins+=coins;
    console.log (total_coins);
}*/




function Money_box(){
    let save_coins=0;
 
    function count_coins(coins){
        save_coins+= coins;
        console.log("Money box: $"+ save_coins );
    }

    return count_coins;

}

const my_money_box=Money_box();

my_money_box(5);
my_money_box(20);
