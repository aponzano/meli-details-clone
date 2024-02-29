export const ProductBreadcrumbs = () => {
  return (
    <div className="mb-3" id="ui-pdp-container--top">
      {/* También pude interesarte */}
      <div className="flex flex-row flex-wrap box-border" id="ui-pdp-group-header">
        <div className="flex-shrink flex-grow basis-[0%] w-full box-border">
          <div className="h-5 mb-3 mt-4 overflow-hidden break-words w-[900px] breadcrumb">
            <ul>
              <li className="inline text-sm overflow-hidden text-ellipsis whitespace-pre font-semibold">
                También puede interesarte:{" "}
              </li>
              <li className="inline text-sm overflow-hidden text-ellipsis whitespace-pre">
                interés 1
              </li>
              <li className="inline text-sm overflow-hidden text-ellipsis whitespace-pre ">
                interés 2
              </li>
              <li className="inline text-sm overflow-hidden text-ellipsis whitespace-pre ">
                interés 3
              </li>
              <li className="inline text-sm overflow-hidden text-ellipsis whitespace-pre ">
                interés 4
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* breadcrumbs */}
      <div className="box-border flex flex-row flex-wrap" id="ui-pdp-group-header-breadcrumb">
        <div className="flex-shrink flex-grow-[2] basis-[0%]">
          <div className="mt-3 flex flex-row flex-wrap">
            <div className="items-center flex font-normal text-sm leading-none breadcrumb">
              <p className="float-left relative text-nowrap after:content-['|'] after:mx-3 after:text-neutral-400">
                Volver al listado
              </p>
              <ol className="text-blue-500 ">
                <li className="inline ">Juegos y Juguetes</li>
                <li className="inline">Muñecos y Muñecas</li>
                <li className="inline">Muñecos y Figuras de Acción</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="flex w-[200px] justify-end items-end flex-shrink flex-grow basis-[0%] text-sm text-blue-500">
          Vender uno igual
        </div>
      </div>
    </div>
  );
};
