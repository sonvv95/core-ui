import js_beautify from "js-beautify";
import React from "react";
import { test1, test2 } from "./objectDemos";

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

  // console.log(Object.entries(test2));

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

  // []
  // [1, 2, 3, 4]
  //   .filter((v) => !v % 2)

  //   [(1, 2, 3, 4)].reduce((value, current, index) => {
  //     if (current % 2) {
  //       return value;
  //     } else {
  //       return [...value, current];
  //     }
  //   }, []);

  return (
    <div>
      {/* <pre>{js_beautify(JSON.stringify(Test1()))}</pre> */}
      <pre>{js_beautify(JSON.stringify(Test1_XapXepNhoDenLon()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test1_XapXepLonDenNho()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test1Cach2()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test2cach2()))}</pre>
      {/* <pre>{js_beautify(JSON.stringify(Test2cach3()))}</pre> */}
      {/* <pre>{js_beautify(JSON.stringify(Test1()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test1()))}</pre> */}
    </div>
  );
};

export default ObjectTest;