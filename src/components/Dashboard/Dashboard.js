import { Outlet } from "react-router-dom";

import Card from "../ui/Card/Card";

const Dashboard = () => {

  return (
    <>
      <Card>
        <div className="card-header">
          <Outlet />
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
