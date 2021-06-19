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
          schedule: [
            { day: "T2", time: "13h30" },
            { day: "T2", time: "15h30" },
            { day: "T3", time: "13h30" },
            { day: "T5", time: "13h30" },
          ],
        },
        {
          subject: "Van",
          name: "Huy",
          schedule: [
            { day: "T2", time: "13h30" },
            { day: "T4", time: "15h30" },
          ],
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
      }, {});
    });
  };

  const bai5_2 = () => {
    return Test_5.map((test) => {
      const schedule = test.teacher.reduce((value, current) => {
        return {
          ...value,
          ...current.schedule.reduce((v, c, index) => {
            return {
              ...v,
              [c.day]: [
                ...(value[c.day] || []),
                ...(v[c.day] || []),
                { subject: current.subject, name: current.name, time: c.time },
              ],
            };
          }, {}),
        };
      }, {});
      return { profile: test.profile, class: test.class, ...schedule };
    });
  };

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
                {["T2", "T3", "T4", "T5", "T6"].map((v) => {
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
    </div>
  );
};

export default Schedule;
