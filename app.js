let convertFahrToCelsius = function(fahr){
    let cel = 0; 
    cel = (fahr -  32) * 5/9;
    let a = [1,2,3];
    
    if(Array.isArray(fahr)){
        console.log(`[${fahr}] is not a number but a/an Array`);
    }

   else if(typeof fahr === 'object'){
        console.log(`${JSON.stringify(fahr)} is not a number but a/an ${typeof fahr}`);
    }

    else if(isNaN(fahr)){
        console.log(`${fahr} is not a number but a/an ${typeof fahr}`);
    }

    else{
        console.log(cel.toFixed(4));
        // console.log(typeof(fahr))
    }
   
    return cel;
}


let checkYuGiOh = function(n){
    let arr = [];
    if(isNaN(n)){
        console.log(`invalid parameter: ${n}`);
    }
    for(let i = 1; i <= n; i++){
       arr.push(i);
    }

    for(let j = 0; j < arr.length; j++){

        if((arr[j] % 2 === 0) && (arr[j] % 3 === 0) && (arr[j] % 5 === 0)){
            arr[j] = 'Yu-Gi-Oh';
        }

        else if((arr[j] % 2 === 0) && (arr[j] % 3 === 0)){
            arr[j] = 'Yu-Gi';
        }
        else if((arr[j] % 2 === 0) && (arr[j] % 5 === 0)){
            arr[j] = 'Yu-Oh';
        }
        else if((arr[j] % 3 === 0) && (arr[j] % 5 === 0)){
            arr[j] = 'Gi-Oh';
        }
        else if(arr[j] % 2 === 0){
            arr[j] = 'Yu';
        } 
        else if(arr[j] % 3 === 0){
            arr[j] = 'Gi';
        }
        else if(arr[j] % 5 === 0){
            arr[j] = 'Oh';
        }
     }
        console.log(arr);
        return arr;
    }



convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({temp: 0});


checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh(30);
checkYuGiOh("fizzbuzz is meh");
