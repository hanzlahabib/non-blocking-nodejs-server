process.on('message', (props) => {
    process.send(isPrime(props))
    process.exit();
})

const isPrime = (number) => {
    let startTime = new Date();
    let endTime = new Date();
    let isPrime= true;

    for(let i=3; i < number; i++){
        if(number % i === 0) {
            endTime = new Date();
            isPrime = false;
            break;
        }
    }
    if(isPrime) endTime = new Date();
    return {
        "number": number,
        "isPrime": isPrime,
        "time": endTime.getTime() - startTime.getTime()
    }
}