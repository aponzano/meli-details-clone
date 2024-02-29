import {ProductBreadcrumbs} from "./ProductBreadcrumbs";
import {ProductDetails} from "./ProductDetails";
import {ProductRecommendations} from "./ProductRecommendations";
export const Product = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <ProductBreadcrumbs />

      <ProductDetails />

      <ProductRecommendations />
    </div>
  );
};
