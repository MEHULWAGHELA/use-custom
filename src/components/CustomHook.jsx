import { useState } from "react"

function useA(value) {
    let [first, setfirst] = useState(value)
    function changevalue(a) {
        setfirst(a)
    }
    return [first, changevalue]
}
export default useA
// function useCustom(value) {
//     return value.map((x) => {
//         return {
//             name:x.name,
//             age:x.age
//         }
//     })
// }
// export default useCustom

