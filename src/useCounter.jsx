// ======================================== [Bài tập] Xây dựng Component Counter ==============================================


// The case 1:

// import React from 'react';
// import { useCounter } from './useCounter';

// const Counter =()=> {
//   const [count1, count2, add1, add2] = useCounter();
//   return (
//     <div>
//       <p>Count: <span style={{color:'red'}}>{count1}</span></p>
//       <button onClick={add1}>Add1: </button>
//       <p>Count: <span style={{color: "blue"}}>{count2}</span></p>
//       <button onClick={add2}>Add2: </button>
//     </div>
//   )
// }
// export default Counter;

// ==========================================[Bài tập] Xây dựng Component Counter ===============================================
// The Case 2:

// import React, {useState} from "react";

// const useIncrement=(initializeValue, incrementValue)=> {
//     const [count, setCount] = useState(initializeValue);
//     const increment=()=>{
//         setCount(count=>count + incrementValue)
//     }
//     return [count, increment]
// }
// const Count=({incrementValue, incrementText})=> {
//     const [count, increment] = useIncrement(0, incrementValue)
//     return (
//         <div>
//             <p>{incrementText}: {count}</p>
//             <button onClick={increment}>{incrementText}</button>
//         </div>
//     )
// }
// const Counter =()=> {
//     return (
//         <div>
//             <Count incrementText="Add1" incrementValue={1}/>
//             <Count incrementText="Add2 " incrementValue={2}/>
//         </div>
//     )
// }

// export default Counter;


// ==========================================[Bài tập] Xây dựng Component Counter ===============================================
// The Case 3:

import React, {useState} from "react";

const useCounter=(initializeValue, incrementValue)=> {
    const[count, setCount] = useState(initializeValue);
    const increment=()=> {
        setCount(count => count + incrementValue)
    }
    return [count, increment]
}

const Add=({text, incrementValue})=> {
    const [count, increment] =useCounter(0, incrementValue)
    return(
        <div>
            <h1>{text}: {count}</h1>
            <button onClick={increment}>{text}</button>
        </div>
    )

}
const Counter =()=> {
    return (
        <div>
            <Add text="Add1" incrementValue={1}/>
            <Add text="Add2" incrementValue={2}/>
        </div>
    )
}
export default Counter;














