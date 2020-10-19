import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const[name,setName] = useState("");

  useEffect(() => {
    console.log("updating value")
    document.title = `You click on ${count} times`;
    
  }, [count]);
  return (
    <div>
    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}

export default UseEffect;
