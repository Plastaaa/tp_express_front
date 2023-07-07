import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Editer() {
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id")

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    genreLitt: '',
  });

  var urlToCall = `http://localhost:8081/auteur/`+id+``;

  useEffect(() => {
    axios.get(urlToCall)
    .then(res => {
      setFormData(res.data);
      console.log(res.data)
    }).catch(error => {
      console.error("Erreur lors de la récupération des datas: ", error);
    })
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var url = "http://localhost:8081/auteur/"+id+"?nom=" + formData.nom + "&prenom=" + formData.prenom + "&age=" + formData.age + "&genreLitt=" + formData.genreLitt

    axios.put(url, formData)
      .then(res => {
        console.log(res.data);
        // handle successful responses here
      })
      .catch(error => {
        console.error("Erreur lors de la mise à jour des datas: ", error);
        // handle errors here
      });
  }

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  }

  return (
    <div className='bg-gray-200 h-screen'>
      <div className="App max-w-md mx-auto pt-10">
        <div className='rounded-xl bg-white p-8 border'>
        <h1 className="text-4xl font-extrabold leading-none text-center pb-8 tracking-tight text-gray-900 dark:text-white">Editer auteur</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center">
              <label className="w-32">Nom:</label>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="px-2 py-1 border bg-gray-100 border-gray-300 rounded-md w-full" />
            </div>
            <div className="flex items-center">
              <label className="w-32">Prénom:</label>
              <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="px-2 py-1 border bg-gray-100 border-gray-300 rounded-md w-full" />
            </div>
            <div className="flex items-center">
              <label className="w-32">Age:</label>
              <input type="text" name="age" value={formData.age} onChange={handleChange} className="px-2 py-1 border bg-gray-100 border-gray-300 rounded-md w-full" />
            </div>
            <div className="flex items-center">
              <label className="w-32">Genre littéraire:</label>
              <input type="text" name="genreLitt" value={formData.genreLitt} onChange={handleChange} className="px-2 py-1 border bg-gray-100 border-gray-300 rounded-md w-full" />
            </div>
            <button onClick={handleGoBack} className="px-4 py-2 w-32 bg-gray-500 text-white rounded-l-md hover:bg-gray-600">Retour</button>
            <button type="submit" className="px-4 py-2 w-32 bg-red-500 text-white rounded-r-md hover:bg-red-600">Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editer;
