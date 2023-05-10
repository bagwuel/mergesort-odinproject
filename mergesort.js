function mergesort(arr){
if (arr.length < 2)
	return (arr)
let left = mergesort(arr.slice(0, Math.floor(arr.length / 2)))
let right = mergesort(arr.slice(Math.floor(arr.length / 2)))
let sorted = []
let i = 0
let j = 0
while (i < left.length && j < right.length){
if (left[i] <= right[j]){
	sorted.push(left[i])
	i++
}else{
	sorted.push(right[j])
	j++
}
}
if (j < right.length)
	sorted = [...sorted, ...right.slice(j)]
if (i < left.length)
	sorted = [...sorted, ...left.slice(i)]
return (sorted)
}

let arr = [7, 5, 3, 9, 0, 2, 5, 3, 6, 1, 7, -4, 34, -7, -123]
console.log(mergesort(arr))
