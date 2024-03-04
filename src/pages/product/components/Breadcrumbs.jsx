export const Breadcrumbs = () => {
  return (
    <div className="mb-3">
      <div className="flex flex-row">
        <div className="h-5 mb-3 mt-4 overflow-hidden w-[900px] breadcrumb">
          <ul className="text-sm">
            <li className="inline font-semibold">También puede interesarte: </li>
            <li className="inline">interés 1</li>
            <li className="inline">interés 2</li>
            <li className="inline">interés 3</li>
            <li className="inline">interés 4</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mt-3 flex-shrink flex-grow-[2]">
          <div className="items-center flex font-normal text-sm leading-none breadcrumb">
            <p className=" after:content-['|'] after:px-3 after:text-neutral-400">
              Volver al listado
            </p>
            <ol className="text-blue-500 ">
              <li className="inline">Juegos y Juguetes</li>
              <li className="inline">Muñecos y Muñecas</li>
              <li className="inline">Muñecos y Figuras de Acción</li>
            </ol>
          </div>
        </div>
        <div className="flex w-[200px] justify-end items-end flex-grow text-sm text-blue-500">
          <p className=" after:content-['|'] after:px-3 after:text-neutral-400">Vender uno igual</p>
          Compartir
        </div>
      </div>
    </div>
  );
};
