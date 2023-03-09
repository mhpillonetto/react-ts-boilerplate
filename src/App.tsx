import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <Heading title={"Hello Trainer!"} />
      <Section>Example Section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  )
}

export default App;
