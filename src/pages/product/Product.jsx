import {Breadcrumbs} from "./components/Breadcrumbs";
import {Details} from "./components/Details";
import {Reviews} from "./components/Reviews";
import {QnA} from "./components/QnA";
import {Ratings} from "./components/Ratings";

export const Product = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Breadcrumbs />
      <div className="card min-w-[800px] mb-6 pb-10">
        <Details />
        <hr className="pb-10" />
        <div className="" id="similar-products">
          <h2>Compará con otros productos similares</h2>
          <hr className="pb-10 mx-11" />
        </div>
        <div className="" id="QnA">
          <QnA />
          <div className="px-11">
            <h2 className="text-2xl items-center h-14 flex">Opiniones del producto</h2>
            <div className="mt-2.5 flex gap-8">
              <Ratings />
              <Reviews />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2>Quienes compraron este producto también compraron</h2>
      </div>
    </div>
  );
};
