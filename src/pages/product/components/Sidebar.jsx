import {Actions} from "./Actions";
import {SellerInfo} from "./SellerInfo";
import {Shipping} from "./Shipping";

const Stock = () => {
  return <div className="font-semibold mt-6 mb-2">Stock disponible</div>;
};
const Quantity = () => {
  return (
    <div className="mb-3 h-12 leading-[48px] cursor-pointer">
      Cantidad:
      <select>
        <option>1 unidad</option>
        <option>2 unidades</option>
        <option>3 unidades</option>
        <option>4 unidades</option>
        <option>5 unidades</option>
        <option>6 unidades</option>
      </select>
      <span className="text-sm text-neutral-400"> (36 disponibles)</span>
    </div>
  );
};
const Seller = () => {
  return (
    <div className="flex flex-col text-sm align-middle my-5">
      <p className="">
        Vendido por <span className="text-blue-500 cursor-pointer">ART_BOTT</span>
      </p>
      <p>
        MercadoLíder{" "}
        <span className="font-semibold before:content-['|'] before:px-1 before:text-neutral-400">
          +100 ventas
        </span>
      </p>
      <small className="text-neutral-400">Hace No Factura</small>
    </div>
  );
};
const Benefits = () => {
  return (
    <div className="space-y-4 mt-6">
      <div className="flex flex-row">
        <div className="">↩️</div>
        <div className="text-sm">
          <span className="text-blue-500 cursor-pointer">Devolución gratis. </span>
          <span className="text-neutral-400">Tenés 30 días desde que lo recibís.</span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="">🛡️</div>
        <div className="text-sm">
          <span className="text-blue-500 cursor-pointer">Compra protegida</span>
          <span className="text-neutral-400">
            , recibí el producto que esperabas o te devolvemos tu dinero.
          </span>
        </div>
      </div>
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="flex-grow max-w-[325px] min-w-[325px] pr-4 mt-4">
      <div className="mb-6 top-4 sticky space-y-6">
        <div className="flex flex-row flex-wrap">
          <div className="border w-full rounded-lg py-6 px-4">
            <Shipping />

            <Stock />

            <Quantity />

            <Actions />

            <Seller />

            <Benefits />
          </div>
        </div>

        <SellerInfo />
      </div>
    </div>
  );
};
