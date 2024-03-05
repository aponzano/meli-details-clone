import {Breadcrumbs} from "./components/Breadcrumbs";
import {Details} from "./components/Details";
import {Recommendations} from "./components/Recommendations";
export const Product = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Breadcrumbs />
      <div className="card min-w-[800px] mb-6">
        <Details />
        <div className="" id="similar-products" />
        <div className="" id="QnA" />
      </div>
      <Recommendations />
    </div>
  );
};
