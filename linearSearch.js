// Javascript program for linear search

function search(arr, search_Element)
{
	let left = 0;
	let length = arr.length;
	let right = length - 1;
	let position = -1;

	// Run loop from 0 to right
	for(left = 0; left <= right;)
	{
		
		// If search_element is found
		// with left variable
		if (arr[left] == search_Element)
		{
			position = left;
			document.write(
				"Element found in Array at " +
				(position + 1) + " Position with " +
					(left + 1) + " Attempt");
			break;
		}
		
		// If search_element is found
		// with right variable
		if (arr[right] == search_Element)
		{
			position = right;
			document.write(
				"Element found in Array at " +
				(position + 1) + " Position with " +
				(length - right) + " Attempt");
			break;
		}
		left++;
		right--;
	}

	// If element not found
	if (position == -1)
		document.write("Not found in Array with " +
					left + " Attempt");
}
	
// Driver code
let arr = [ 1, 2, 3, 4, 5 ];
let search_element = 5;

// Function call
search(arr, search_element);