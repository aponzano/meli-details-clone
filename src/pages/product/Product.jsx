import {Breadcrumbs} from "./components/Breadcrumbs";
import {Details} from "./components/Details";
import {Recommendations} from "./components/Recommendations";
export const Product = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Breadcrumbs />

      <Details />

      <Recommendations />
    </div>
  );
};
