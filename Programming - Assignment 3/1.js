function evenNumberGenerator() {
    let lowNumber = parseInt(prompt('Select Low Number:'));
    let highNumber = parseInt(prompt('Select High Number:'));
    let numbers = '';

    if(highNumber <= lowNumber ) {
        alert('Low Number cannot be higher than High Number!');
    } else if(typeof lowNumber !== 'number' && typeof highNumber !== 'number') {
        alert('Inputs have to be numbers');
    } else {
        for(i=lowNumber; i<=highNumber; i++){
            // have to divide by 2 to get possible remainder
            lowNumber / 2;
            // if the remainder is zero, this code executes
            // every uneven number is not displayed in console
            if(i % 2 == 0){
            //displays even number`
            numbers += i + ' ';
            }
        };

    alert(numbers);
}
}

evenNumberGenerator();



