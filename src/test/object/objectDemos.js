export const test1 = {
  status: "success",
  data: [
    {
      id: 1,
      chain: "A",
      storeName: "Cửa hàng 1",
      address: "địa chỉ 1",
      owner: "Tao",
    },
    {
      id: 0,
      chain: "A",
      storeName: "Cửa hàng 2",
      address: "địa chỉ 2",
      owner: "Tao 2",
    },
    {
      id: 3,
      chain: "B",
      storeName: "Cửa hàng tạp hóa",
      address: "địa chỉ 3",
      owner: "Tao3",
    },
    {
      id: 2,
      chain: "A",
      storeName: "Cửa hàng giày",
      address: "địa chỉ Mỹ đình",
      owner: "Trang",
    },
    {
      id: 11,
      chain: "B",
      storeName: "Cửa hàng ăn",
      address: "Cầu giấy",
      owner: "Đại",
    },
    {
      id: 9,
      chain: "C",
      storeName: "Cửa hàng ăn",
      address: "Cầu giấy",
      owner: "Đại",
    },
  ],
};
// ghép những cột có dùng chain A , chain B lại với nhau

// const chainB = test1.data.find(function(item){
//   if)
// })
var son = {
  ...test1,
  data: {
    chain: "C",
  },
};
console.log(son);

export const result_test1 = [
  {
    chain: "A",
    store: [{}],
  },
  // {
  //   chain: "B",
  //   store: [{}],
  // },
];

/*------------------*/
export const test2 = {
  store1: {
    name: "CH giày",
    address: "địa chỉ 1",
    status: "open",
  },
  store2: {
    name: "CH Ăn",
    address: "địa chỉ 21",
    status: "closed",
  },
  store3: {
    name: "CH Trang sức",
    address: "địa chỉ 31",
    status: "open",
  },
  store4: {
    name: "CH bún",
    address: "địa chỉ 41",
    status: "closed",
  },
};

export const result_test2 = [
  {
    store: "store1",
    name: "CH giày",
    address: "địa chỉ 1",
    status: "open",
  },
  {
    store: "store3",
    name: "CH Trang sức",
    address: "địa chỉ 31",
    status: "open",
  },
];

export const result_test2_2 = [
  {
    name: "CH Ăn",
    address: "địa chỉ 21",
    status: "closed",
  },
  {
    name: "CH bún",
    address: "địa chỉ 41",
    status: "closed",
  },
];

//reduce ,Object.entities,
// map() những store có cùng status lại
//-----------------
export const test3 = [
  {
    id: 1,
    name: "Đại",
    children: [
      {
        id: 11,
        name: "Trang",
      },
      {
        id: 1,
        name: "Sơn",
      },
      {
        id: 1,
        name: "Dương",
        children: [
          {
            id: 1,
            name: "Hiếu",
          },
          {
            id: 1,
            name: "Đại",
          },
          {
            id: 1,
            name: "Khánh",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Khoa",
    children: [
      {
        id: 11,
        name: "HIếu",
        children: [
          {
            id: 1,
            name: "Sơn",
          },
          {
            id: 1,
            name: "Dương",
            children: [
              {
                id: 1,
                name: "Hiếu",
              },
              {
                id: 1,
                name: "Khánh",
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "Sơn",
      },
      {
        id: 1,
        name: "Dương",
        children: [
          {
            id: 1,
            name: "Hiếu",
          },
          {
            id: 1,
            name: "Khánh",
          },
        ],
      },
    ],
  },
];

const test3_1 = test3[0];

console.log(test3_1);

export const result_test3 = [
  { id: 1, name: "Đại" },
  { id: 2, name: "Dương" },
  { id: 3, name: "Trang" },
  { id: 4, name: "Sơn" },
  //   ...rest,
];
// đệ quy
//Flat  object test 3 về 1 mảng có tất cả các tên

export const result_test4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// viết 1 fuction có đầu vào là 1 số và đầu ra gồm  2 thứ
// VD function bai4(4){... return  {row:1,column:0,newArray:[
//   [0,0,3],
//   [4,0,6],
//   [0,0,9]
// ]}}
