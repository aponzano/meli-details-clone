export const Shipping = () => {
  return (
    <div className="flex flex-col items-start mb-3" id="shipping">
      <p className="pb-0.5">
        Llega el martes por{" "}
        <span className="inline-flex">
          $ 5.169<span className="text-xs mt-px ml-px self-start">99</span>
        </span>{" "}
        <span className="inline-flex line-through text-neutral-400">
          $ 5.739<span className="text-xs mt-px ml-px self-start">99</span>
        </span>
      </p>
      <p className="mb-0.5 text-sm">Beneficio Mercado Puntos</p>
      <p className="text-blue-500 text-sm cursor-pointer">Más formas de entrega</p>
    </div>
  );
};
