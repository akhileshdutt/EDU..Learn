// import { useEffect, useState } from "react";
// import axios from "axios";
// import React from "react";

// function Test() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/users/ping")
//       .then((res) => setMessage(res.data.message))
//       .catch((err) => {
//         console.error("❌ Axios Error:", err);
//         setMessage("❌ Could not connect to backend");
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontSize: "20px" }}>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Test1;


// import React from "react";
// import axios from "axios"

// const Test1 = () => {
//   return (
//     <div>
//       <p>This is the Test1 component</p>
//     </div>
//   );
// };

// export default Test1;



import React, {  useEffect, useState } from "react";
import axios from "axios";

const Test1 = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get("http://localhost:5000/api/users/ping")
      .then(res => setMsg(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <p>This is the Test1 component</p>
      <p>Backend says: {msg}</p>
    </div>
  );
};

export default Test1;
