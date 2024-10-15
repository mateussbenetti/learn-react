import HomePageProjectBody from "./HomePageProjectBody";
import HomePageProjectAddFlow from "./HomePageProjectAddFlow";
import HomePageProjectHeader from "./HomePageProjectHeader";
import HomePageProjectAddLinkFlow from "./HomePageProjectAddLinkFlow";
import HomePageProjectAddVideoFlow from "./HomePageProjectAddVideoFlow";
import HomePageProjectAddVideoUploadFlow from "./HomePageProjectAddVideoUploadFlow";

export default function HomePage() {
  const primaryColor = "black";
  const secondaryColor = "white";
  const backgroundColor = "black";

  return (
    <div>
      <style>
        {`
        .primary-text-color {
          color: ${primaryColor};
        }
        .secondary-text-color {
          color: ${secondaryColor};
        }
        .primary-bg-color {
          background-color: ${primaryColor};
        }
        .secondary-bg-color {
          background-color: ${secondaryColor};
        }
        .background-color {
          background-color: ${backgroundColor};
        }
        `}
      </style>
      <HomePageProjectHeader />
      {/* <HomePageProjectBody /> */}
      {/* <HomePageProjectAddFlow /> */}
      {/* <HomePageProjectAddLinkFlow /> */}
      {/* <HomePageProjectAddVideoFlow /> */}
      <HomePageProjectAddVideoUploadFlow />
    </div>
  );
}
