import React from "react";

const Schedule = () => {
  const Test_5 = [
    {
      id: 1,
      profile: { name: "dai", age: 25 },
      country: "VN",
      class: "5A1",
      teacher: [
        {
          subject: "Toan",
          name: "Trang",
          schedule: [{ day: "T2", time: "13h30" }],
        },
        {
          subject: "Van",
          name: "Huy",
          schedule: [{ day: "T4", time: "15h30" }],
        },
        {
          subject: "Su",
          name: "Dat",
          schedule: [{ day: "T6", time: "12h30" }],
        },
        {
          subject: "Sinh",
          name: "Dat",
          schedule: [{ day: "T3", time: "16h30" }],
        },
      ],
    },
    {
      id: 2,
      profile: { name: "Huy", age: 25 },
      country: "VN",
      class: "5A1",
      teacher: [
        {
          subject: "Toan",
          name: "Trang",
          schedule: [{ day: "T3", time: "12h30" }],
        },
        {
          subject: "Van",
          name: "Huy",
          schedule: [{ day: "T2", time: "9h30" }],
        },
        {
          subject: "Sinh",
          name: "Dat",
          schedule: [{ day: "T5", time: "17h30" }],
        },
      ],
    },
  ];
  const calendar = [
    { day: "T2" },
    { day: "T3" },
    { day: "T4" },
    { day: "T5" },
    { day: "T6" },
  ];
  // const bai5 = () => {
  //   return Test_5.map((test) => {
  //     return test?.teacher?.reduce((v, c) => {
  //       return [
  //         ...v,
  //         c.schedule.reduce((value, current) => {
  //           return {
  //             ...value,
  //             [current?.day]: [...(value?.[current?.day] || []), current],
  //             subject: c.subject,
  //           };
  //         }, {}),
  //       ];
  //     }, []);
  //   });
  // };
  const bai5 = () => {
    return Test_5.map((test) => {
      return test?.teacher?.reduce((v, c) => {
        return [
          ...v,
          c.schedule.reduce((value, current) => {
            return {
              ...value,
              [current?.day]: [...(value?.[current?.day] || []), current],
              subject: c?.subject,
              name: test?.profile?.name,
              class: test?.class,
              teacher: test?.teacher,
            };
          }, {}),
        ];
      }, []);
    });
  };

  const abc = bai5();
  console.log(abc[0]);

  const ngay = calendar.map((day) => day.day);
  // console.log(ngay);

  // console.log(Test_5);
  // const profileName = (Test_5) => {

  return (
    <div>
      <table style={{ width: "100%", background: "grey" }}>
        <thead style={{ width: "100%" }}>
          <th>Tên</th>
          <th>Lớp </th>
          <th>Tuổi</th>
          {calendar.map((day) => (
            <th>{day.day}</th>
          ))}
        </thead>
        <tbody>
          {Test_5.map((test) => {
            return (
              <tr
                style={{
                  display: "float",
                  textAlign: "center",
                  background: "green",
                }}
              >
                <td>{test?.profile?.name}</td>
                <td>{test?.class}</td>
                <td>{test?.profile?.age}</td>
                <td>
                  {(test?.teacher).map((list) => {
                    return (
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T2")
                            .map((v) => v.time)}
                        </div>
                        <div
                          style={{
                            flex: 0.05,
                            textAlign: "center",
                          }}
                        >
                          {list.schedule
                            .filter((v) => v.day === "T2")
                            .map((v) => {
                              return <div>-</div>;
                            })}
                        </div>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T2")
                            .map((v) => {
                              return {
                                ...v,
                                subject: list.subject,
                              };
                            })
                            .map((v) => v.subject)}
                        </div>
                      </div>
                    );
                  })}
                </td>
                <td>
                  {(test?.teacher).map((list) => {
                    return (
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T3")
                            .map((v) => v.time)}
                        </div>
                        <div
                          style={{
                            flex: 0.05,
                            textAlign: "center",
                          }}
                        >
                          {list.schedule
                            .filter((v) => v.day === "T3")
                            .map((v) => {
                              return <div>-</div>;
                            })}
                        </div>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T3")
                            .map((v) => {
                              return {
                                ...v,
                                subject: list.subject,
                              };
                            })
                            .map((v) => v.subject)}
                        </div>
                      </div>
                    );
                  })}
                </td>
                <td>
                  {(test?.teacher).map((list) => {
                    return (
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T4")
                            .map((v) => v.time)}
                        </div>
                        <div
                          style={{
                            flex: 0.05,

                            textAlign: "center",
                          }}
                        >
                          {list.schedule
                            .filter((v) => v.day === "T4")
                            .map((v) => {
                              return <div> - </div>;
                            })}
                        </div>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T4")
                            .map((v) => {
                              return {
                                ...v,
                                subject: list.subject,
                              };
                            })
                            .map((v) => v.subject)}
                        </div>
                      </div>
                    );
                  })}
                </td>
                <td>
                  {(test?.teacher).map((list) => {
                    return (
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T5")
                            .map((v) => v.time)}
                        </div>
                        <div
                          style={{
                            flex: 0.05,

                            textAlign: "center",
                          }}
                        >
                          {list.schedule
                            .filter((v) => v.day === "T5")
                            .map((v) => {
                              return <div>-</div>;
                            })}
                        </div>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T5")
                            .map((v) => {
                              return {
                                ...v,
                                subject: list.subject,
                              };
                            })
                            .map((v) => v.subject)}
                        </div>
                      </div>
                    );
                  })}
                </td>
                <td>
                  {(test?.teacher).map((list) => {
                    return (
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T6")
                            .map((v) => v.time)}
                        </div>
                        <div
                          style={{
                            flex: 0.05,

                            textAlign: "center",
                          }}
                        >
                          {list.schedule
                            .filter((v) => v.day === "T6")
                            .map((v) => {
                              return <div>-</div>;
                            })}
                        </div>
                        <div style={{ flex: 1 }}>
                          {list.schedule
                            .filter((v) => v.day === "T6")
                            .map((v) => {
                              return {
                                ...v,
                                subject: list.subject,
                              };
                            })
                            .map((v) => v.subject)}
                        </div>
                      </div>
                    );
                  })}
                </td>
              </tr>
              // <td>{test?.profile?.name}</td>
            );
          })}
        </tbody>
      </table>
      <table style={{ width: "100%", background: "grey" }}>
        <thead style={{ width: "100%" }}>
          <th>Tên</th>
          <th>Lớp </th>
          <th>Tuổi</th>
          {calendar.map((day) => (
            <th>{day.day}</th>
          ))}
        </thead>
        <tbody>
          {Test_5.map((test) => {
            return (
              <tr
                style={{
                  display: "float",
                  textAlign: "center",
                  background: "green",
                }}
              >
                {abc[0]?.map((v) => {
                  return <td>{v.name}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
