/*
    Create a function that reverse a string:
    'Hi My name is Andrei' should be: 
    'ierdnA si eman yM iH'
*/

function reverse(str) {
    let array = str.split(''); 
    let start = 0; 
    let end = array.length - 1; 

    while (start < end) { 
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }

    return array.join("");
}

// Test
let string = 'Hao Ly';
reverse(string);

/* 
    Time Complexity: O(N)
    Space Complexity: O(N)
*/