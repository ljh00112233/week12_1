// import React from "react";
// import './sass/materialize.scss'
// import "./App.scss";
// import Button from "./04/Button";
// import Input from "./04/InputWithStyle"

// function App() {
//   return (
//     <div>
//       <nav>
//         <div className="nav-wrapper">
//           <div>
//             리액트 시작
//           </div>
//         </div>
//       </nav>
//       <Input label="나이" name="age" errorMessage="나이를 입력하세요"/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import styled from 'styled-components';
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;
function App(){
  return <Circle />;
}
export default App;