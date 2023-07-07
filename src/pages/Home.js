import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`http://localhost:8081/auteur`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des datas: ', error);
      });
  };

  const deleteAuthor = (id) => {
    axios.delete(`http://localhost:8081/auteur/${id}`)
      .then(() => {
        fetchData()
        renderTable()
      })
      .catch((error) => {
        fetchData()
        renderTable()
      });
    
  };

  const navigate = useNavigate();

  const goAdd = () => {
    navigate("/ajouter");
  }

  var renderTable = () => {
    return(
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">id</th>
            <th scope="col" className="px-6 py-3">Nom</th>
            <th scope="col" className="px-6 py-3">Prénom</th>
            <th scope="col" className="px-6 py-3">Age</th>
            <th scope="col" className="px-6 py-3">Genre littéraire</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr key={element.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {element.id}
              </th>
              <td className="px-6 py-4">{element.nom}</td>
              <td className="px-6 py-4">{element.prenom}</td>
              <td className="px-6 py-4">{element.age}</td>
              <td className="px-6 py-4">{element.genreLitt}</td>
              <td className="px-6 py-4">
                <a href={`/voir?id=${element.id}`} className="pr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Voir</a>
                <a href={`/editer?id=${element.id}`} className="px-2 font-medium text-gray-600 dark:text-blue-500 hover:underline">Éditer</a>
                <button onClick={() => deleteAuthor(element.id)} className="px-2 font-medium text-red-600 dark:text-blue-500 hover:underline">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className='bg-gray-200 h-screen'>
      <h1 className="text-4xl font-extrabold leading-none text-center pt-10 tracking-tight text-gray-900 dark:text-white">Liste des auteurs</h1>
      <div className="App max-w-4xl mx-auto">
        <div className="flex justify-end">
          <button onClick={goAdd} className="px-4 py-2 bg-gray-500 text-white rounded-t-md hover:bg-gray-600">Ajouter</button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg sm:rounded-tl-lg">
          {renderTable()}
        </div>
      </div>
    </div>
  );
}

export default Home;
