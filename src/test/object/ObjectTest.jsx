import js_beautify from "js-beautify";
import React from "react";
import { test1, test2, test_10, Test_5 } from "./objectDemos";

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
  };
  // const bai5 = () => {
  //   return Test_5.map((test) => {
  //     const schedule = test.teacher.reduce((value, current) => {
  //       return {
  //         ...value,
  //         ...current.schedule.reduce((v, c, index) => {
  //           return {
  //             ...v,
  //             [c.day]: [
  //               ...(value[c.day] || []),
  //               ...(v[c.day] || []),
  //               { subject: current.subject, name: current.name, time: c.time },
  //             ],
  //           };
  //         }, {}),
  //       };
  //     }, {});
  //     return { profile: test.profile, class: test.class, ...schedule };
  //   });
  // };

  const bai5 = () => {
    return Test_5.map((test) => {
      const schedule = test.teacher.reduce((v, c) => {
        return {
          ...v,
          ...c.schedule.reduce((v2, c2) => {
            return {
              ...v2,
              [c2.day]: [
                ...(v[c2.day] || []),
                ...(v2[c2.day] || []),
                { subject: c.subject, name: c.name, time: c2.time },
              ],
            };
          }, {}),
        };
      }, {});
      return { profile: test.profile, class: test.class, ...schedule };
    });
  };

  const bai_5_1 = () => {
    return Test_5.map((v) => {
      const schedule = v.teacher.reduce((v2, c2) => {
        return {
          ...v2,
          ...c2.schedule.reduce((v3, c3) => {
            return {
              ...v3,
              [c3.day]: [
                {
                  subject: c2.subject,
                  name: c2.name,
                  time: c3.time,
                },
              ],
            };
          }, {}),
        };
      }, {});
      console.log("schedule: ", schedule);
      return {
        profile: v.profile,
        class: v.class,
        schedule: schedule,
      };
    });
  };

  const bcd = () => {
    return Object.entries(test2)
      ?.filter((v) => v?.[1]?.status === "open")
      ?.map((v) => ({ store: v?.[0], ...v?.[1] }));
  };
  console.log(Object.entries(test2));

  return (
    <div>
      {/* <pre>{js_beautify(JSON.stringify(Test1()))}</pre> */}
      <pre>{js_beautify(JSON.stringify(bubbleSort(test1.data)))}</pre>
      {/* <pre>{js_beautify(JSON.stringify(Test1_XapXepLonDenNho()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(bubbleSort()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test1Cach2()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test2cach2()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test4(TEST_4, 7)))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test1()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test1_XapXepLonDenNho()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test1Cach2()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test2cach2()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test2cach3()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test2()))}</pre> */}
      <pre>{js_beautify(JSON.stringify(bai5()))}</pre>
      {/* <pre>{js_beautify(JSON.stringify(Test_5))}</pre> */}
      ----------------------------------------------------------------------------
      <pre>{js_beautify(JSON.stringify(bai10()))}</pre>
      <pre>{js_beautify(JSON.stringify(bcd()))}</pre>
      <pre>{js_beautify(JSON.stringify(bai_5_1()))}</pre>
    </div>
  );
};

export default ObjectTest;
