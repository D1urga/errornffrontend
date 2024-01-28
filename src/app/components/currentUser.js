import React from "react";
import { useState, useEffect } from "react";

function CurrentUser() {
  const [data, setData] = useState(null);
  const fetchInfo = async () => {
    const res = await fetch(
      "https://errornf.onrender.com/api/v1/users/current-user",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    return setData(d.data);
  };
  useEffect(() => {
    fetchInfo();
  }, [data]);
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
export { CurrentUser };
