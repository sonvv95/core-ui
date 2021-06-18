import js_beautify from "js-beautify";
import React from "react";
import { test1, test2, TEST_4, Test_5 } from "./objectDemos";

const ObjectTest = (props) => {
  // const [openSideBar, setOpen] = useState(true);

  const Test1 = () => {
    //   Action vs mangr test1 owr day
    return test1?.data?.reduce((value, current, index) => {
      const isContain = !!value.find((v) => v?.chain === current?.chain);
      if (!isContain) {
        return [
          ...value,
          {
            chain: current?.chain,
            store: [current],
          },
        ];
      }
      return value.map((v) => {
        if (v.chain === current.chain) {
          return { ...v, store: [current, ...v.store] };
        }
        return v;
      });
    }, []);
  };

  console.log(Object.entries(test2));

  const Test2 = () => {
    return Object.entries(test2)
      .filter((v) => v?.[1]?.status === "closed")
      ?.map((v) => ({ store: v?.[0], ...v?.[1] }));
  };

  const Test2cach2 = () => {
    return Object.entries(test2).reduce((value, current, index) => {
      // console.log("current", current);
      if (current?.[1].status === "closed") {
        return [...value, { store: current?.[0], ...current?.[1] }];
      }
      return value;
    }, []);
  };

  const Test2cach3 = () => {
    return Object.entries(test2).reduce((value, current, index) => {
      // console.log("current", current);
      if (current?.[1].status === "closed") {
        return { ...value, [current?.[0]]: current?.[1] };
      }
      return value;
    }, {});
  };

  const Test1Cach2 = () => {
    //   Action vs mangr test1 owr day
    return test1?.data?.reduce((value, current, index) => {
      return {
        ...value,
        [current?.chain]: [...(value?.[current?.chain] || []), current],
      };
    }, {});
  };

  const Test1_XapXepNhoDenLon = () => {
    return test1?.data?.sort((item1, item2) => {
      if (item1.id > item2.id) {
        return 1;
      }
      if (item1.id < item2.id) {
        return -1;
      }
      if (item1.id === item2.id) {
        return 0;
      }
      return item1.id;
    });
  };
  const Test1_XapXepLonDenNho = () => {
    return test1?.data?.sort((item1, item2) => item2.id - item1.id);
  };

  // console.log(Object.entries(test1?.data));

  const bubbleSort = (arr) => {
    let size = arr.length;
    for (let i = 0; i < size - 1; i++) {
      // let swapped = Boolean(true);
      for (let j = 0; j < size - i - 1; j++) {
        if (arr[j]?.id > arr[j + 1]?.id) {
          //đổi chỗ
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          // swapped = false;
        }
      }
      // if (swapped === true) break;
    }
    return arr;
  };

  const Test4 = (matrix, number) => {
    const bai4 = (matrix, number) => {
      let coordinate;
      let tmp = [...matrix.map((v) => [...v])];
      matrix.forEach((value, index) => {
        value.forEach((val, idx) => {
          if (matrix[index][idx] === number) {
            coordinate = { row: index, col: idx };
          }
        });
      });

      let sr = coordinate.row ? coordinate.row - 1 : 0;
      let er =
        coordinate.row < matrix.length - 1
          ? coordinate.row + 1
          : matrix.length - 1;
      let sc = coordinate.col ? coordinate.col - 1 : 0;
      let ec =
        coordinate.col < matrix.length - 1
          ? coordinate.col + 1
          : matrix.length - 1;
      for (let i = sr; i <= er; i++) {
        for (let j = sc; j <= ec; j++) {
          if (!(i === coordinate.row && j === coordinate.col)) {
            console.log({ i, j });
            tmp[i][j] = 0;
          }
        }
      }
      return tmp;
    };

    const bai5 = () => {
      return Test_5.map((test) => {
        return test?.teacher?.reduce((v, c) => {
          return [
            ...v,
            c.schedule.reduce((value, current) => {
              return {
                ...value,
                [current?.day]: [...(value?.[current?.day] || []), current],
                // subject: c?.subject,
                // name: test?.profile?.name,
                // class: test?.class,
                // teacher: test?.teacher,
              };
            }, {}),
          ];
        }, []);
      });
    };

    // console.log(Object.entries(bai5));

    // const Test4 = () => {
    //   const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //   const randomIndex = Math.trunc(Math.random() * 9);
    //   console.log(numberList[randomIndex]);

    //   return {
    //     row: 1,
    //     column: 0,
    //     newArray: [
    //       [0, 0, 3],
    //       [4, 0, 6],
    //       [0, 0, 9],
    //     ],
    //   };
    // };

    // []
    // [1, 2, 3, 4]
    //   .filter((v) => !v % 2)
    let sr = coordinate.row ? coordinate.row - 1 : 0;
    let er =
      coordinate.row < matrix.length - 1
        ? coordinate.row + 1
        : matrix.length - 1;
    let sc = coordinate.col ? coordinate.col - 1 : 0;
    let ec =
      coordinate.col < matrix.length - 1
        ? coordinate.col + 1
        : matrix.length - 1;
    for (let i = sr; i <= er; i++) {
      for (let j = sc; j <= ec; j++) {
        if (!(i === coordinate.row && j === coordinate.col)) {
          console.log({ i, j });
          tmp[i][j] = 0;
        }
      }
    }
    return tmp;
  };

  return (
    <div>
      <pre>{js_beautify(JSON.stringify(Test1()))}</pre>
      {/* <pre>{js_beautify(JSON.stringify(bubbleSort(test1.data)))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test1_XapXepLonDenNho()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(bubbleSort()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test1Cach2()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test2cach2()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test4(TEST_4, 7)))}</pre> */}
      <pre>{js_beautify(JSON.stringify(bai5()))}</pre>
      {/* <pre>{js_beautify(JSON.stringify(Test1()))}</pre> */}
      <pre>{js_beautify(JSON.stringify(bai4(TEST_4, 13)))}</pre>
      {/* <pre>{js_beautify(JSON.stringify(Test1_XapXepLonDenNho()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test1Cach2()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test2cach2()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test2cach3()))}</pre> */}
      <pre>{js_beautify(JSON.stringify(Test2()))}</pre>
      {/* <pre>{js_beautify(JSON.stringify(Test1()))}</pre> */}
    </div>
  );
};

export default ObjectTest;
