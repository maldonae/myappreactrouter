import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles/1">Article 1</Link>
        <Link to="/articles/2">Article 2</Link>
        <Link to="/articles/3">Article 3</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
