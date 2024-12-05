import Header from "../../Components/Header/header";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [userData, setUserData] = useState({
    NombreUsuario: "",
    Bio: "",
    EXP: 0,
  });
  const [bio, setBio] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
  .get("http://localhost:5000/profile", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then((response) => {
    console.log("Datos del perfil:", response.data);
    setUserData(response.data);
    setBio(response.data.Bio);
  })
  .catch((error) => {
    console.error("Error fetching profile data", error.response || error);
  });

  }, []);

  const handleBioChange = () => {
    axios
      .put(
        "http://localhost:5000/profile/update",
        { bio },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setUserData((prev) => ({ ...prev, Bio: bio }));
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating bio", error);
      });
  };

  const level = Math.floor(Math.sqrt(userData.EXP / 100));

  return (
    <>
    <Header />
      <div>
        <h1>Perfil de {userData.NombreUsuario} Nv.{level}</h1>
        {!editMode ? (
          <>
            <p>
              <strong>Bio:</strong> {userData.Bio || "Aún no tienes una bio."}
            </p>
            <button onClick={() => setEditMode(true)}>Editar Bio</button>
          </>
        ) : (
          <>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            <button onClick={handleBioChange}>Guardar</button>
            <button onClick={() => setEditMode(false)}>Cancelar</button>
          </>
        )}
      </div>
    </>
  );
}
export default Profile;