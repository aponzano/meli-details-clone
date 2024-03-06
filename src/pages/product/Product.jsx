import {Breadcrumbs} from "./components/Breadcrumbs";
import {Details} from "./components/Details";
import {Recommendations} from "./components/Recommendations";
export const Product = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Breadcrumbs />
      <div className="card min-w-[800px] mb-6">
        <Details />
        <hr className="pb-10" />
        <div className="" id="similar-products">
          <h2>Compará con otros productos similares</h2>
        </div>
        <div className="" id="QnA">
          <h2>Preguntas y respuestas</h2>
        </div>
      </div>
      <Recommendations />
    </div>
  );
};
