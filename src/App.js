// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   let [count, setCout] = React.useState(0);
//   return (
//     <div className="App">
//       Hoock
//       <h1>{count}</h1>
//       <button onClick={() => setCout(count + 1)}>+</button>
//       <button onClick={() => setCout(count - 1)}>-</button>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import "./App.css";

// function App() {
//  let [count, setCout] = React.useState("");
//   return (
//     <div className="App">
//       <button onClick={() => setCout("Hello")}>Hello</button>
//       <button onClick={() => setCout("World")}>World</button>
//       <h1>{count}</h1>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  <Todo />;
  let img0 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU";
  let img1 =
    "https://www.askideas.com/media/22/Two-Very-Cute-Golden-Retriever-Puppies.jpg";
  let img2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIW3AiJyJ1Q6usG_c-MEK5Z9jyE6H0VD1k7w&usqp=CAU";
  let img3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNZU_Yi1sVc0zD64DvGdQF8Ejnoxx80cUuYMtbpurmkU0nHeBhsr0kfc0ICqLE-y9XEM&usqp=CAU";

  let img4 =
    "https://www.esquireme.com/cloud/2021/09/09/IMG-Worlds-Of-Adventure-Exterior-Full-park-image.jpg";
  let img5 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Bgdsv8XRQ0P47sZMu5kQxHqjZ0b4vxU_CQ&usqp=CAU";
  let [count, setCout] = React.useState(img1);
  return (
    <div className="App">
      <div>
        <img src={count} />
      </div>
      <img0 onClick={() => setCout(img0)} src={img0} width={100} height={100} />
      <img onClick={() => setCout(img2)} src={img2} width={100} height={100} />
      <img onClick={() => setCout(img4)} src={img4} width={100} height={100} />
      <img onClick={() => setCout(img3)} src={img3} width={100} height={100} />
      <img onClick={() => setCout(img5)} src={img5} width={100} height={100} />
    </div>
  );
}

export default App;
