var persons = [
  {
    name: "Trung",
    class: "nodemy1",
    dateJoin: "05-02-2020",
    age: 20,
  },
  {
    name: "Phong",
    class: "nodemy1",
    dateJoin: "06-01-2020",
    age: 19,
  },
  {
    name: "Nam",
    class: "nodemy2",
    dateJoin: "25-01-2020",
    age: 20,
  },
  {
    name: "Tien",
    class: "nodemy2",
    dateJoin: "30-02-2020",
    age: 22,
  },
];

// tìm tuổi tăng dần
var tuoiTangDan = persons.sort(function (item1, item2) {
  if (item1.age > item2.age) {
    return 1;
  }
  if (item1.age < item2.age) {
    return -1;
  }
  if (item1.age === item2.age) {
    return 0;
  }
});

console.log(tuoiTangDan);

//tìm ngày tăng dần
function convertDateString(dateString) {
  //30-01-2020
  var arrDate = dateString.split("-"); //[30,01,2020]
  var date = arrDate[2] + "-" + arrDate[1] + "-" + arrDate[0]; //30-01-2020
  return new Date(date);
}

var time = persons.sort((item1, item2) => {
  var date1 = convertDateString(item1.dateJoin);
  var date2 = convertDateString(item2.dateJoin);

  if (date1 > date2) {
    return 1;
  }
  if (date1 < date2) {
    return -1;
  }
  if (date1 === date2) {
    return 0;
  }
});
console.log(time);

// tìm ngày tham gia trước tháng 2

var beforeT2 = persons.filter(function (item) {
  var date = convertDateString(item.dateJoin);
  var newDate = date.getMonth();
  // console.log(newDate);
  return newDate < 1;
});
console.log(beforeT2);

// trả về mản mới có tên viet hoa

var tenHoa = persons.map(function (item) {
  item.name = item.name.toLocaleUpperCase();
  return item;
});
console.log(tenHoa);

var Doan = {
  name: "Đoàn",
  age: 22,
  salary: 1000,
};

var Trung = {
  ...Doan,
  name: "Trung",
  clone: true,
};

console.log(Trung);

function bubbleSort(array) {
  var size = array.length;
  // run loops two times: one for walking throught the array
  // and the other for comparison
  for (var i = 0; i < size - 1; i++) {
    // swapped keeps track of swapping
    var swapped = Boolean(true);
    for (var j = 0; j < size - i - 1; j++) {
      // To sort in descending order, change > to < in this line.
      if (array[j] > array[j + 1]) {
        // swap if greater is at the rear position
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = false;
      }
    }
    // If there is not swapping in the last swap, then the array is already sorted.
    if (swapped === true) break;
  }
}
var arr = [3, 5, -2, 14, -9, 30];
bubbleSort(arr);
console.log(arr);
