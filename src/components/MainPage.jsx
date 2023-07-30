import React from 'react'
import useA from './CustomHook'

/* if we want to make custom hook we make name  */
export const MainPage = () => {
    let [a, seta] = useA(50)
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={() => seta(a + 1)}>Click</button>
        </div>
    )
}
// export const MainPage = () => {
//     let arr = [
//         {
//             name: "mehul",
//             age: 26,
//             address: 'http'
//         },
//         {
//             name: "pratik",
//             age: 26,
//             address: 'http'
//         },
//         {
//             name: "mehul",
//             age: 26,
//             address: 'http'
//         },
//         {
//             name: "mehul",
//             age: 26,
//             form: 'http',
//             address: 'http'
//         }
//     ]
//     let a = useCustom(arr)
//     return (
//         <div>
//             <h1>{console.log(a)}</h1>
//             {/* <button onClick={() => seta(a + 1)}>Click</button> */}
//         </div>

//     )
// }
