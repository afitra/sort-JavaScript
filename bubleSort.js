// console.log(data);
function Descending(data) {

    var temp = null
    for (var i = 0; i < data.length - 1; i++) {
        for (var j = i + 1; j < data.length; j++) {
            if (data[i] < data[j]) {
                temp = data[i]
                data[i] = data[j]
                data[j] = temp
            }
        }
    }
    return data
}

function Ascending(data) {

    var temp = null
    for (var i = 0; i < data.length - 1; i++) {
        for (var j = i + 1; j < data.length; j++) {
            if (data[i] > data[j]) {
                temp = data[i]
                data[i] = data[j]
                data[j] = temp
            }
        }
    }
    return data
}

const dummy = [100, 300, 200, 700, 4, 3, 400, 100, 500, 600, 2, 4, 1]
console.log(Ascending(dummy));
console.log(Descending(dummy));
