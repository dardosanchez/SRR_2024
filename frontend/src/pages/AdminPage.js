import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";

function AdminPage() {

  return (
    <>
      <NavbarAdmin />
      <div className="container text-center mt-5">
        <h1>Bienvenido Administrador</h1>
        <h5>Mensaje de Bienvenida ACA</h5>
      </div>
      <Footer />
    </>
  );
}

export default AdminPage;
