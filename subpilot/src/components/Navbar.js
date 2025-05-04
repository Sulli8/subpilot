import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 tracking-wide">
        SubPilot
      </div>

      {/* Liens de navigation */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Tableau de bord</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Abonnements</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Clients</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Paiements</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Notifications</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">Paramètres</a>
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
