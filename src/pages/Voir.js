import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Voir() {
  const [data, setData] = useState([]);

  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id")

  var urlToCall = `http://localhost:8081/auteur/`+id+``;

  useEffect(() => {
    axios.get(urlToCall)
    .then(res => {
      // Check if the response data is an array, if not, convert it into an array
      const data = Array.isArray(res.data) ? res.data : [res.data];
      setData(data);
      console.log(data)
    }).catch(error => {
      console.error("Erreur lors de la récupération des datas: ", error);
    })
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  }

  return (
    <div className='bg-gray-200 h-screen'>
      {data.map((element, index) => (
      <div className="App max-w-md mx-auto pt-10">
        <div className='rounded-xl bg-white p-8 border'>
        <h1 className="text-4xl font-extrabold leading-none text-center pb-8 tracking-tight text-gray-900 dark:text-white">Informations relatives à {element.nom}</h1>
          <form className="space-y-4">
            <div className="flex items-center">
              <label className="w-32">Nom:</label>
              <input type="text" name="nom" value={element.nom} disabled className="px-2 py-1 border bg-gray-100 border-gray-300 rounded-md w-full" />
            </div>
            <div className="flex items-center">
              <label className="w-32">Prénom:</label>
              <input type="text" name="prenom" value={element.prenom} disabled className="px-2 py-1 border bg-gray-100 border-gray-300 rounded-md w-full" />
            </div>
            <div className="flex items-center">
              <label className="w-32">Age:</label>
              <input type="text" name="age" value={element.age} disabled className="px-2 py-1 border bg-gray-100 border-gray-300 rounded-md w-full" />
            </div>
            <div className="flex items-center">
              <label className="w-32">Genre littéraire:</label>
              <input type="text" name="genreLitt" value={element.genreLitt} disabled className="px-2 py-1 border bg-gray-100 border-gray-300 rounded-md w-full" />
            </div>
            <button onClick={handleGoBack} className="px-4 py-2 w-32 bg-gray-500 text-white rounded-md hover:bg-gray-600">Retour</button>
          </form>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Voir;
