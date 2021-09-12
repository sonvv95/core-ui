import js_beautify from "js-beautify";
import React from "react";
import { test, test1, test2, test3, test_10 } from "./objectDemos";

const ObjectTest2 = (props) => {
  // const [openSideBar, setOpen] = useState(true);

  const Test1 = () => {
    //   Action vs mang test1 owr day
    return test1.data.reduce((value, current, index) => {
      const isContain = value.find((v) => v.chain === current.chain);
      console.log(isContain);
      if (!isContain) {
        return [
          ...value,
          {
            chain: current.chain,
            store: [current],
          },
        ];
      }
      return value.map((v) => {
        if (v.chain === current.chain) {
          return {
            ...v,
            store: [current, ...v.store],
          };
        }
        return v;
      });
    }, []);
  };

  console.log(Object.entries(test1));

  const Test1Cach2 = () => {
    return test1.data.reduce((value, current, index) => {
      return {
        ...value,
        [current?.chain]: [...(value?.[current.chain] || []), current],
      };
    }, {});
  };

  const Test2 = () => {
    return Object.entries(test2)
      .filter((v) => v?.[1]?.status === "open")
      ?.map((v) => ({ store: v?.[0], ...v?.[1] }));
  };
  // console.log(Object.entries(test2));

  const Test2Cach2 = () => {
    return Object.entries(test2).reduce((value, current, index) => {
      console.log(current?.[1].status);

      if (current?.[1].status === "open") {
        return [...value, { store: current?.[0], ...current[1] }];
      }
      return value;
    }, []);
  };

  const Test3 = () => {
    let newGenerate = [];
    const flatten = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].children?.length > 0) {
          newGenerate.push({ id: arr[i].id, name: arr[i].name });
          flatten(arr[i].children);
        } else {
          newGenerate.push(arr[i]);
        }
      }
    };
    flatten(test3);
    console.log("new", newGenerate);
  };

  const Test4 =()=>{
    const result_test = test.filter(user => user.account.startsWith("1"))
    return result_test;
  }

  

  // []
  // [1, 2, 3, 4]
  // .filter((v) => !v % 2);
  // console.log(b);

  //   [(1, 2, 3, 4)].reduce((value, current, index) => {
  //     if (current % 2) {
  //       return value;
  //     } else {
  //       return [...value, current];
  //     }
  //   }, []);
  return (
    <div>
      <pre>{js_beautify(JSON.stringify(Test1()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test1Cach2()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test2Cach2()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test3()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test4()))}</pre>
      <pre>{js_beautify(JSON.stringify(bai10()))}</pre>
      {/* <pre>{js_beautify(JSON.stringify(Test1()))}</pre>
      <pre>{js_beautify(JSON.stringify(Test1()))}</pre> */}
    </div>
  );
};

export default ObjectTest2;
