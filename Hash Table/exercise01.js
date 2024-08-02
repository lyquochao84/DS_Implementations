/* 
    Google Question: Return the first recurring character given an array
    Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
    => Return 2

    Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
    => Return 1

    Given an array = [2, 3, 4, 5]
    => Return undefined
*/

function firstRecurringCharacter(array) {
  let hash_table = {};
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (hash_table[array[i]] !== undefined) {
      return array[i];
    } 
    else {
      hash_table[array[i]] = i;
    }
  }
  return undefined;
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);

/* 
    Explanation:
    - The way I use to solve this problem is I created a hash table (hash map) to map each element in the array as the key,
    and it's index as the value. 
        Why?
    - Because in that way, when we face first recurring character in the array, we'll check that if it's already existed in the
    hash table. Then we'll return. Otherwise, we'll set it in the hash table
*/
