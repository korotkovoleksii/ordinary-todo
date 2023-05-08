import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [title] = useState("Ordinary ToDo");
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <> Ordinary todo</>;
};

export default App;
