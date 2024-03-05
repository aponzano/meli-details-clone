import {productData} from "../mock";

import {Sidebar} from "./Sidebar";
import {Specifications} from "./Specifications";

export const Details = () => {
  return (
    <>
      <div className="flex flex-row pb-10">
        <div className="flex-grow-[3] pb-10">
          <div className="" id="carousel">
            <h3>Carousel</h3>
          </div>
          <hr className="my-10 mx-5" />

          <div className="" id="recommendations">
            <h3>Productos del vendedor</h3>
          </div>
          <hr className="my-10 mx-5" />

          <Specifications attributes={productData.attributes} />
          <hr className="my-10 mx-5" />

          <div className="px-11">
            <h2 className="text-2xl pb-6 leading-tight">Descripción</h2>
            <p className="text-xl break-words text-neutral-500 leading-snug">
              Con esferas dragon de dragon de la línea dragon esferas de Dragon las horas de
              diversión están aseguradas. Podrás jugar con ellos siguiendo sus historias o
              coleccionarlos el tiempo que quieras.
              <br />
              <br />
              Materiales nobles
              <br />
              Las figuras de acción están hechas de cristal lo que asegura que sean amables y suaves
              al tacto, diferenciando las distintas texturas y relieves del cuerpo de los
              personajes.
              <br />
              <br />
              Ideal para coleccionistas
              <br />
              Una de las actividades que podrás hacer con este tipo de figuras es coleccionarlas y
              guardarlas en un lugar especial. A medida que conozcas más y más, tu colección irá
              creciendo y será más variada.
              <br />
              <br />
              Aviso legal
              <br />• La edad mínima recomendada para utilizarla es 3 años.
            </p>
          </div>
        </div>

        <Sidebar />
      </div>
    </>
  );
};
