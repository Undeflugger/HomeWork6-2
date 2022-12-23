const myFirstArray = ['Lviv', 'Dnipro', 'Ternopil', 'London'];
const mySecondArray = ['Dnipro', 'Paris', 'York', 'Ternopil'];
function uniqueElement (arrayOne, arrayTwo){
    const uniqueArray = [];
    for (let i=0; i< arrayOne.length; i++){
        let element = arrayOne[i];
        if (!arrayTwo.includes(element)){
            uniqueArray.push(element);
        }
    }
    for (let i=0; i< arrayTwo.length; i++){
        let element = arrayTwo[i];
        if (!arrayOne.includes(element)){
            uniqueArray.push(element);
        }
    }
    return uniqueArray;
}

console.log(uniqueElement(myFirstArray, mySecondArray));