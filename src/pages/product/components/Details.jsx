import {Sidebar} from "./Sidebar";

export const Details = () => {
  return (
    <div className="card min-w-[800px] mb-6">
      <div className="flex flex-row pb-10" id="producto">
        <div className="flex-grow-[3] pb-10" id="izquierda" />

        <Sidebar />
      </div>
      <div className="" id="similar-products" />
      <div className="" id="QnA" />
    </div>
  );
};
