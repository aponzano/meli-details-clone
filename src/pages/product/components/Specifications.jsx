const ItemTabla = ({name, value}) => {
  return (
    <tr className="flex w-full bg-white odd:bg-neutral-200">
      <th className="py-4 pr-6 pl-4 text-left break-words w-1/2 font-semibold">{name}</th>
      <td className="py-4 pr-6 pl-4 text-left break-words w-1/2 whitespace-break-spaces">
        {value}
      </td>
    </tr>
  );
};

export const Specifications = ({attributes}) => {
  return (
    <div className="px-11">
      <h2 className="text-2xl leading-tight">Características del producto</h2>
      <div className="mt-4">
        <div className="grid grid-flow-col auto-cols-auto gap-10 pt-5">
          <div className="">
            <div className="w-full mb-8 inline-block">
              <h3 className="pb-4 font-semibold">Características principales</h3>
              <table className="rounded-md table-fixed overflow-hidden border-separate border w-full border-spacing-0">
                <tbody className="text-xs">
                  <ItemTabla name={"Marca"} value={"Dragon"} />
                  <ItemTabla name={"Fabricante"} value={"Dragon"} />
                  <ItemTabla name={"Colección"} value={"Dragon"} />
                  <ItemTabla name={"Personaje"} value={"Esferas Dragón"} />
                </tbody>
              </table>
            </div>
          </div>
          <div className="">
            <div className="w-full mb-8 inline-block">
              <h3 className="pb-4 font-semibold">Otros</h3>
              <table className="rounded-md table-fixed overflow-hidden border-separate border w-full border-spacing-0">
                <tbody className="text-xs">
                  {attributes
                    .filter((x) => x.attribute_group_name === "Otros")
                    .map((att) => (
                      <ItemTabla key={att.id} name={att.name} value={att.value_name} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
