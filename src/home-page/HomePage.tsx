import HomePageFooter from "./HomePageFooter";
import HomePageHeader from "./HomePageHeader";

export default function HomePage() {
  return (
    <div>
      <HomePageHeader />
      <div className="h-[50px] bg-white"></div>
      <HomePageFooter />
    </div>
  );
}
