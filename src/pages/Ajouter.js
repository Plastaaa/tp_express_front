import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function Ajouter() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    genreLitt: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.age)
    var url = "http://localhost:8081/auteur?nom=" + formData.nom + "&prenom=" + formData.prenom + "&age=" + formData.age + "&genreLitt=" + formData.genreLitt
    axios
      .post(url, formData)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de l'auteur : ", error);
      })
  };

  return (
    <div className='bg-gray-200 h-screen'>
        <h1 className="text-4xl font-extrabold leading-none text-center pt-10 tracking-tight text-gray-900 dark:text-white">Ajouter un auteur</h1>
        <div className="App max-w-md mx-auto pt-10">
            <div className='bg-white p-4 rounded-xl border'>
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
                    <button type="submit" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Ajouter</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Ajouter;
