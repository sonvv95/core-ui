const data = [
  {
    id: 1,
    chain: "A",
    storeName: "Cửa hàng 1",
    address: "địa chỉ 1",
    owner: "Tao",
  },
  {
    id: 2,
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
    id: 4,
    chain: "A",
    storeName: "Cửa hàng giày",
    address: "địa chỉ Mỹ đình",
    owner: "Trang",
  },
  {
    id: 5,
    chain: "B",
    storeName: "Cửa hàng ăn",
    address: "Cầu giấy",
    owner: "Đại",
  },
];

const son = data.filter((item) => {
  if (item.chain === "A") {
    return item.chain;
  }
});

console.log(son);
