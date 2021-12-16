import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <section>
          <span>In App component</span>
        </section>
        <Outlet />
      </div>
    </>
  );
}

export default App;
