// import React from "react";
// import { useState, useEffect } from "react";

// export default function CurrentUser() {
//   const [data, setData] = useState(null);
//   const fetchInfo = async () => {
//     const res = await fetch(
//       "https://errornf.onrender.com/api/v1/users/current-user",
//       {
//         credentials: "include",
//       }
//     );
//     const d = await res.json();
//     setData(d.data);
//   };
//   useEffect(() => {
//     fetchInfo();
//   }, []);
//   return data;
// }

import React, { useEffect } from "react";
import { useState } from "react";

export default function CurrentUser() {
  const fetchInfo = async () => {
    const res = await fetch(
      "https://errornf.onrender.com/api/v1/users/current-user",
      {
        credentials: "include",
      }
    );
    return res;
  };

  return fetchInfo;
}
