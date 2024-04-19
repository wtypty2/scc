// 

'use client'
 
// import { useState } from 'react'
 
// export default function Counter() {
//   const [count, setCount] = useState(0)
 
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   )
// }

import { usePathname } from 'next/navigation';

export default function MyComponent() {
  const pathname = usePathname();

  return (
    <div>
      <p>当前页面路径：{pathname}</p>
    </div>
  );
}
