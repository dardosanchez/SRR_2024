import React, { useState, useEffect } from "react";
import "../App.css";


const fetchSolicitantes = async () => [
  { id: "1", nombre: "Sanchez Dardo" },
  { id: "2", nombre: "Benjamin Pozzi" },
  { id: "3", nombre: "Ignacio Ramirez" },
  { id: "4", nombre: "Manuel Calvo" },
];

const fetchCatedras = async () => [
  { id: "1", nombre: "Diseño de Sistemas" },
  { id: "2", nombre: "Base de Datos" },
  { id: "3", nombre: "Física II" },
  { id: "4", nombre: "Desarrollo de Software" },
];

const fetchTiposReserva = async () => [
  { id: "1", nombre: "1er Cuatrimestre" },
  { id: "2", nombre: "2do Cuatrimestre" },
  { id: "3", nombre: "Anual" },
  { id: "4", nombre: "Esporadica" },
];

const fetchTiposAula = async () => [
  { id: "1", nombre: "Aula Multimedios" },
  { id: "2", nombre: "Aula Informática" },
  { id: "3", nombre: "Aula sin recursos" },
];

const validarCampos = (formData) => {
  const camposRequeridos = [
    { campo: formData.solicitante, mensaje: "Por favor, selecciona un solicitante." },
    { campo: formData.correo, mensaje: "Por favor, ingresa un correo válido." },
    { campo: formData.catedra, mensaje: "Por favor, selecciona una cátedra." },
    { campo: formData.cantAlumnos, mensaje: "Por favor, ingresa la cantidad de alumnos." },
    { campo: formData.tipoReserva, mensaje: "Por favor, selecciona un tipo de reserva." },
    { campo: formData.tipoAula, mensaje: "Por favor, selecciona un tipo de aula." },
  ];

  const campoInvalido = camposRequeridos.find((campo) => !campo.campo);

  if (campoInvalido) {
    return campoInvalido.mensaje; 
  }

  return null;
};

const Seccion1 = ({ formData, setFormData, setDatosFormulario, siguienteSeccion }) => {
  const [solicitantes, setSolicitantes] = useState([]);
  const [catedras, setCatedras] = useState([]);
  const [tiposReserva, setTiposReserva] = useState([]);
  const [tiposAula, setTiposAula] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const solicitantesData = await fetchSolicitantes();
      const catedrasData = await fetchCatedras();
      const tiposReservaData = await fetchTiposReserva();
      const tiposAulaData = await fetchTiposAula();

      setSolicitantes(solicitantesData);
      setCatedras(catedrasData);
      setTiposReserva(tiposReservaData);
      setTiposAula(tiposAulaData);
    };
    fetchData();
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  
  

  return (
    <div className="col-6 form-container encuadro2 mb-5">
      <div id="seccion1">
        <div className="row mb-2">
          <div className="col-sm-6">
            <label htmlFor="nombreS" className="form-label">Solicitante:</label>
            <select
              id="nombreS"
              className="form-select"
              value={formData.solicitante || ""}
              onChange={(e) => handleChange("solicitante", e.target.value)}
            >
              <option value="">Seleccionar</option>
              {solicitantes.map((s) => (
                <option key={s.id} value={s.nombre}>{s.nombre}</option>
              ))}
            </select>
          </div>
          <div className="col-sm-6">
            <label htmlFor="correoContacto" className="form-label">Correo:</label>
            <input
              type="email"
              className="form-control"
              id="correoContacto"
              value={formData.correo || ""}
              onChange={(e) => handleChange("correo", e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-sm-6">
            <label htmlFor="nombreCatedra" className="form-label">Cátedra:</label>
            <select
              id="nombreCatedra"
              className="form-select"
              value={formData.catedra || ""}
              onChange={(e) => handleChange("catedra", e.target.value)}
            >
              <option value="">Seleccionar</option>
              {catedras.map((c) => (
                <option key={c.id} value={c.nombre}>{c.nombre}</option>
              ))}
            </select>
          </div>
          <div className="col-sm-6">
            <label htmlFor="cantAlumnos" className="form-label">Cantidad de Alumnos:</label>
            <input
              type="number"
              className="form-control"
              id="cantAlumnos"
              min="0"
              value={formData.cantAlumnos || ""}
              onChange={(e) => handleChange("cantAlumnos", e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-sm-6">
            <label htmlFor="tipoReserva" className="form-label">Tipo de Reserva:</label>
            <select
              id="tipoReserva"
              className="form-select"
              value={formData.tipoReserva || ""}
              onChange={(e) => handleChange("tipoReserva", e.target.value)}
            >
              <option value="">Seleccionar</option>
              {tiposReserva.map((r) => (
                <option key={r.id} value={r.nombre}>{r.nombre}</option>
              ))}
            </select>
          </div>
          <div className="col-sm-6">
            <label htmlFor="tipoAula" className="form-label">Tipo de Aula:</label>
            <select
              id="tipoAula"
              className="form-select"
              value={formData.tipoAula || ""}
              onChange={(e) => handleChange("tipoAula", e.target.value)}
            >
              <option value="">Seleccionar</option>
              {tiposAula.map((a) => (
                <option key={a.id} value={a.nombre}>{a.nombre}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-warning w-50"
            onClick={() => {
              const errorMensaje = validarCampos(formData);
              if (errorMensaje) {
                alert(errorMensaje); // Si hay error, muestra el mensaje
              } else {
                siguienteSeccion(); // Si todo está bien, pasa a la siguiente sección
              }
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seccion1;
