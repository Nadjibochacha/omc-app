import React from "react";
import Sidebar from "../components/sidebar";
import { Helmet } from "react-helmet-async";

const AdminDachboard = () => {
  return (
    <div>
      <Helmet>
        <title>Administator</title>
      </Helmet>
      <Sidebar />
    </div>
  );
};

export default AdminDachboard;
