function HeathSort(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > arr[i+1])
        {
            var idx = i;
            while(arr[idx] > arr[idx+1])
            {
                var temp = arr[idx + 1];
                arr[idx + 1] = arr[idx];
                arr[idx] = temp;
                idx++;
            }
        }
        if(arr[i] < arr[i-1])
        {
            var idx = i;
            while(arr[idx] < arr[idx-1])
            {
                var temp = arr[idx - 1];
                arr[idx - 1] = arr[idx];
                arr[idx] = temp;
                idx--;
            }
        }
    }
    return arr;
}
console.log(HeathSort([1,7,4,9,5,14,63,35,64,78,54,33,333,66,89,96,65,2,0,100,121,143,176,285,13,19,75,88,53,52,39]));

function partition(arr, start, end)
{
    let pivot = arr[start];
    let lastlower = start;
    let idx = start + 1;
    while(idx < end)
    {
        if(arr[idx] < pivot)
        {
            arr[lastlower] = arr[idx];
            if(idx - 1 != lastlower)
            {
                let j =idx;
                while(j-1 > lastlower)
                {
                    arr[j] = arr[j-1];
                    j--;
                }
                lastlower = j;
            }
            else
            {
                lastlower = idx;
            }
        }
        idx++
    }
    arr[lastlower] = pivot;
    return lastlower;
}

function quicksort(arr, start = 0, end = arr.length)
{
    if(end - start < 2){
        return;
    }
    pivotidx = partition(arr, start, end);
    quicksort(arr, start, pivotidx);
    quicksort(arr, pivotidx + 1, end);
    return arr;
}
console.log(quicksort([1,7,4,9,5,14,63,35,64,78,54,33,333,66,89,96,65,2,0,100,121,143,176,285,13,19,75,88,53,52,39]));
