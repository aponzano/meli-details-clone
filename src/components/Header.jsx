import {Link} from "react-router-dom";

import mercadoLogo from "../assets/evil-logo.png";
export const Header = () => {
  return (
    <header className="bg-yellow-300 flex h-[100px] justify-center">
      <div className="grid grid-cols-[162px_minmax(340px,_580px)_minmax(350px,_390px)] grid-rows-[40px_28px] pt-2 pb-3 px-2.5 gap-x-6 gap-y-3">
        {/* Logo ML */}
        <div className="h-10 justify-start content-center flex flex-row">
          <Link to="/">
            <img
              alt="Mercado Libre Argentina - Donde comprar y vender de todo"
              className="h-10"
              src={mercadoLogo}
            />
          </Link>
        </div>
        {/* Search Bar */}
        <div className="bg-blue-300">
          <label className="sr-only" htmlFor="searchBar">
            Ingresá lo que quieras encontrar
          </label>
          <input
            className="block w-full rounded-sm py-2 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 shadow-sm"
            id="searchBar"
            name="searchBar"
            placeholder="Buscar productos, marcas y más..."
            type="text"
          />
        </div>
        {/* Blank Space */}
        <div />
        {/* Enviar A  */}
        <div className="flex justify-start">
          <div className="size-6">⚫</div>
          <div className="flex flex-col">
            <span className="text-xs w-fit whitespace-nowrap text-ellipsis max-w-[140px] leading-3 ">
              Enviar a Juan
            </span>
            <span className="text-sm leading-4">Calle Falsa 113</span>
          </div>
        </div>
        {/* Menu */}
        <div className="text-sm overflow-hidden h-9 items-end flex flex-row p-1 -m-1">
          <div>
            <ul className="flex flex-wrap gap-4">
              <li>Categorías</li>
              <li>Ofertas</li>
              <li>Historial</li>
              <li>Supermercado</li>
              <li className="hidden xl:block">Moda</li>
              <li className="hidden xl:block">Mercado Play</li>
              <li className="hidden lg:block">Vender</li>
              <li className="hidden xl:block">Ayuda</li>
            </ul>
          </div>
        </div>
        {/* Account */}
        <div className="flex justify-between text-sm items-end">
          <div className="">😎 Nombre</div>
          <div className="">Mis compras</div>
          <div className="">Favoritos</div>
          <div className="">🔔</div>
          <div className="">🛒</div>
        </div>
      </div>
    </header>
  );
};
