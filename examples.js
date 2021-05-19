
//Two Number sum solution 
function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}
//validate subsequence
function isValidSubsequence(array, sequence) {
	let sqIdx = 0; 
	for (const value of array){
 		if (sqIdx === sequence.length) break;
		if (sequence[sqIdx] === value) sqIdx++;
	}
	return sqIdx === sequence.length;
}

