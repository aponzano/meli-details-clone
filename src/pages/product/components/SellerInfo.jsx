export const SellerInfo = () => {
  return (
    <div className="border w-full rounded-lg pt-8 pb-6 px-4 space-y-6" id="vendedor">
      <h2 className="text-lg">Información sobre el vendedor</h2>
      <div>
        <div className="flex mb-5">
          <div className="mr-2.5">🏅</div>
          <div className="flex flex-col">
            <p className="text-green-600 font-semibold">MercadoLíder</p>
            <p className="text-neutral-400 text-sm">¡Es uno de los mejores del sitio!</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1.5 items-center">
          <div className="bg-red-50 h-2" />
          <div className="bg-orange-50 h-2" />
          <div className="bg-amber-50 h-2" />
          <div className="bg-lime-100 h-2" />
          <div className="bg-green-500 h-3" />
        </div>
        <div className="mt-4 flex leading-none items-center text-xs text-center reputation">
          <div className="flex flex-col px-1">
            <strong className="text-2xl leading-tight font-semibold">+100</strong>
            <p className="mt-2">Ventas concretadas</p>
          </div>
          <div className="flex flex-col px-1">
            <div className="text-2xl">✉️</div>
            <p>Brinda buena atención</p>
          </div>
          <div className="flex flex-col px-1">
            <div className="text-2xl">🕘</div>
            <p>Despacha sus productos a tiempo</p>
          </div>
        </div>
      </div>
      <p className="text-blue-500 text-sm cursor-pointer">Ver más publicaciones del vendedor</p>
    </div>
  );
};
