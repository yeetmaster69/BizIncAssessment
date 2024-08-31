function arrayChanger(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            //Item is Even
            arr[i] = arr[i] * 2
        } else {
            //Item is Odd, do nothing
        }
    }
    console.log(arr)
}

let testArray1 = [1, 2, 3, 4, 9, 10, 10, 12, 6]

arrayChanger(testArray1)