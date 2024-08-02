/*
    Merge Sorted Arrays
    Given 2 arrays: 
    [0, 3, 4, 31] and [4, 6, 30]
    => [0, 3, 4, 4, 6, 30, 31]
*/

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    // Check if both array empty
    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    // If they're not
    while (arr1Item || arr2Item) {
       if (arr1Item < arr2Item || !arr2Item) {
        result.push(arr1Item);
        arr1Item = arr1[i];
        i++;
       }
       else {
        result.push(arr2Item);
        arr2Item = arr2[j];
        j++;
       }
    }

    return result;
}

// Test
let firstArray = [0, 3, 4, 31];
let secondArray = [4, 6, 30];
mergeSortedArrays(firstArray, secondArray);

/*
    Time Complexity: O(N + M)
    Space Complexity: O(N + M) 

    NOTE: Why space complexity takes O(N + M)?
    - It is because the result array will eventually hold all elements from both `arr1` and `arr2`.
    Hence, it will have N + M elements in worst case
*/