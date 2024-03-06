export const Information = ({title, price}) => {
  return (
    <div className="max-w-[352px] flex-grow mr-8 font-light ">
      {/* titulo y calificaciones */}
      <div className="flex flex-col items-start mt-10">
        <div className="w-full">
          <div className="mb-2 mr-10 text-sm text-neutral-500">Nuevo | +500 vendidos</div>
          <h1 className="text-xl mb-2 font-semibold leading-tight">{title}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm inline-block leading-none">4.6</span>
            <span className="text-blue-500 leading-none">★★★★☆</span>
            <span className="text-sm text-neutral-500">(60)</span>
          </div>
        </div>
      </div>
      {/* mas vendido */}
      <div className="mt-2.5">
        <div className="rounded leading-none px-1 py-[3px] font-semibold text-xs bg-orange-500 text-white inline-flex">
          MÁS VENDIDO
        </div>
        <div className="pl-2 font-normal leading-none text-xs inline-flex text-blue-400">
          3º en Muñecos y Figuras de Acción
        </div>
      </div>
      {/* precio */}
      <div className="mt-4">
        <p className="text-4xl">$ {new Intl.NumberFormat("es-ar").format(price)}</p>
        <p className="font-normal text-lg inline">
          en 6 cuotas de{" "}
          <span className="inline-flex">
            $ 5.827<span className="text-xs mt-px ml-px self-start">06</span>
          </span>
        </p>
        <div className="text-blue-400 text-sm font-normal mt-1">Ver los medios de pago</div>
      </div>
      {/* Highlights */}
      <div className="">
        <div className="mt-8">
          <h2 className="font-semibold text-sm leading-tight">
            Lo que tenés que saber de este producto
          </h2>
        </div>
        <div className="">
          <div className="">
            <ul className="mt-4 space-y-2 list-disc ml-4 text-sm font-normal">
              <li className="">Está construida de cristal.</li>
              <li className="">Incluye accesorios.</li>
              <li className="">Figura coleccionable.</li>
            </ul>
            <a
              className="mt-4 text-sm text-blue-400 font-normal hover:text-blue-600 block"
              href="#specifications"
            >
              Ver características
            </a>
          </div>
        </div>
      </div>
      {/* opciones de compra */}
      <div className="mt-8 text-sm font-normal">
        <p className="">Opciones de compra:</p>
        <div className="text-blue-400 mt-2">
          <p>6 productos nuevos desde $ 22.500</p>
          <p>1 producto usado y reacondicionado</p>
        </div>
      </div>
    </div>
  );
};
