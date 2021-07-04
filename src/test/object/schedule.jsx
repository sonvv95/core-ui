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
          schedule: [
            { day: "T2", time: "15h30" },
            { day: "T2", time: "15h30" },
          ],
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
          schedule: [{ day: "T2", time: "15h30" }],
        },
        {
          subject: "Van",
          name: "Huy",
          schedule: [{ day: "T3", time: "16h30" }],
        },
        {
          subject: "Sinh",
          name: "Dat",
          schedule: [{ day: "T6", time: "9h30" }],
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

  const bai5_2 = () => {
    return Test_5.map((test) => {
      const schedule = test.teacher.reduce((value, current) => {
        const tmp = current.schedule.reduce((v, lesson, index) => {
          // console.log("lesson", lesson);
          return {
            ...v,
            [lesson.day]: [
              ...(value[lesson.day] || []),
              ...(index === 0 ? v[lesson.day] || [] : []),
              {
                subject: current.subject,
                name: current.name,
                time: lesson.time,
              },
            ],
          };
        }, {});
        // console.log("tmp", value, tmp);
        return {
          ...value,
          ...tmp,
        };
      }, {});
      // console.log("schedule", schedule);
      return { profile: test.profile, class: test.class, ...schedule };
    });
  };

  const bai5 = () => {
    return Test_5.map((v) => {
      const schedule = v?.teacher.reduce((v, c) => {
        return {
          ...v,
          ...c.schedule.reduce((v2, c2, i) => {
            return {
              ...v2,
              [c2.day]: [
                ...(v[c2.day] || []),
                ...(i === 0 ? v2[c2.day] || [] : []),
                { subject: c.subject, name: c.name, time: c2.time },
              ],
            };
          }, {}),
        };
      }, {});
      return {
        name: v?.profile?.name,
        age: v?.profile.age,
        class: v.class,
        ...schedule,
      };
    });
  };

  const TIME_TABLE = ["T2", "T3", "T4", "T5", "T6", "T7"];
  return (
    <div>
      {/* <pre>{js_beautify(JSON.stringify(Test_5))}</pre> */}
      ----------------------------------------------------------------------------
      {/* <pre>{js_beautify(JSON.stringify(bai5()))}</pre> */}
      <table style={{ width: "100%", background: "grey" }}>
        <thead style={{ width: "100%" }}>
          <th>Tên</th>
          <th>Lớp </th>
          <th>Tuổi</th>
          {TIME_TABLE.map((day) => (
            <th>{day}</th>
          ))}
        </thead>
        <tbody>
          {bai5_2().map((test) => {
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
                {TIME_TABLE.map((v) => {
                  return (
                    <td key={v}>
                      {test[v]?.map((v) => (
                        <p>{`${v.subject}(${v.name})-${v.time}`}</p>
                      )) || "trống tiết"}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <table style={{ width: "100%", background: "grey" }}>
        <thead style={{ width: "100%" }}>
          <th>Tên</th>
          <th>Lớp </th>
          <th>Tuổi</th>
          {TIME_TABLE.map((day) => (
            <th>{day}</th>
          ))}
        </thead>
        <tbody>
          {bai5_2().map((v) => {
            return (
              <tr
                style={{
                  display: "float",
                  textAlign: "center",
                  background: "green",
                }}
              >
                <td>{v.profile.name}</td>
                <td>{v.class}</td>
                <td>{v.profile.age}</td>
                {TIME_TABLE.map((v2) => (
                  <td>
                    {v[v2]?.map((v) => (
                      <div>{`${v.subject}(${v.name}) - ${v.time}`}</div>
                    )) || "Trống tiết"}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
