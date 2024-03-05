export const Actions = () => {
  return (
    <div className="font-semibold">
      <button className="bg-blue-500 text-white rounded-md w-full h-12 hover:bg-blue-600">
        Comprar ahora
      </button>
      <button className="bg-blue-100 text-blue-500 rounded-md w-full h-12 mt-2 hover:bg-blue-200">
        Agregar al carrito
      </button>
      <div className="border rounded-md py-2.5 px-4 shadow-sm flex flex-row mt-6">
        <div className="mr-4 text-xl">🛻</div>
        <div className="text-sm">
          Armá un carrito de productos del mismo vendedor y ahorrá en el envío.
        </div>
      </div>
    </div>
  );
};
