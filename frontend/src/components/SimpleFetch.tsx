import { useState } from "react";
export default function SimpleFetch() {
  const [backend, getBackend] = useState("default");
  async function getBackend() {
    console.log("you clicked on backend button");
    try {
      const response = await fetch("http://localhost:4000");
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(`Data fetched from backend ${data}`);
      return data;
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
      return null;
    }
  }
  return (
    <div>
      <p>this is a simple fetch component</p>
      {/* <button onClick={getBackend}>backend</button> */}
    </div>
  );
}
