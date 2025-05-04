import React from "react";

export default function Navbar() {
  return (
    <nav >
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 tracking-wide">
        SubPilot
      </div>

      {/* Liens de navigation */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#" >Tableau de bord</a>
        </li>
        <li>
          <a href="#" >Abonnements</a>
        </li>
        <li>
          <a href="#" >Clients</a>
        </li>
        <li>
          <a href="#" >Paiements</a>
        </li>
        <li>
          <a href="#" >Notifications</a>
        </li>
        <li>
          <a href="#" >Paramètres</a>
        </li>
      </ul>

      {/* Bouton profil / déconnexion */}
      <div className="flex items-center space-x-3">
        <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Mon Profil
        </button>
      </div>
    </nav>
  );
}
