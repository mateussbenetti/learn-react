import CarsCard from "./CarsCard";
import CarsHeader from "./CarsHeader";
import CarsTopBrands from "./CarsTopBrands";
import CarsTopCategories from "./CarsTopCategories";

export default function CarsHome() {
  return (
    <div>
      <CarsHeader />
      <CarsCard />
      <CarsTopBrands />
      <CarsTopCategories />
    </div>
  );
}
