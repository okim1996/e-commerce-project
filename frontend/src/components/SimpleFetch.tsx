import { useEffect, useState } from "react";

export default function SimpleFetch() {
  const [text, setText] = useState("default");

  useEffect(() => {
    async function fetchBackend() {
      try {
        const response = await fetch("http://localhost:4000/api/products");
        if (!response.ok) {
          throw new Error(`Error : ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
        return null;
      }
    }
    fetchBackend();
  }, []);
  return (
    <div>
      <p>this is a simple fetch component</p>
      <p>{text}</p>
    </div>
  );
}
