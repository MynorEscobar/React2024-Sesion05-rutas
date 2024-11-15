import React, { useState, useEffect } from "react";

const AlmacenarLista = () => {
  const [inputValue, setInputValue] = useState(""); // Estado para la caja de texto
  const [list, setList] = useState([]); // Estado para la lista

  // Cargar la lista desde el localStorage al montar el componente
  useEffect(() => {
    const savedList = localStorage.getItem("myList");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  // Guardar la lista en el localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(list));
  }, [list]);

  // Manejar el cambio de la caja de texto
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setList([...list, inputValue.trim()]); // Agregar el nuevo elemento a la lista
      setInputValue(""); // Limpiar la caja de texto
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Lista con localStorage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Escribe algo"
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Agregar
        </button>
      </form>
      <ul style={{ marginTop: "20px" }}>
        {list.map((item, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlmacenarLista;