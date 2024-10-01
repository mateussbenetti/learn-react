import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePageFooter() {
  return (
    <div>
      <div className="md:hidden">
        <div className="bg-slate-700 w-full p-4">
          <h1 className="font-bold text-xl text-white">
            Join NextFan community
          </h1>
          <div className="flex gap-4 pt-4">
            <div className="flex bg-slate-500 w-[50px] h-[50px] rounded-md justify-center items-center">
              <FontAwesomeIcon
                className="text-white text-3xl "
                icon={faInstagram}
              />
            </div>
            <div className="flex bg-slate-500 w-[50px] h-[50px] rounded-md items-center justify-center">
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faFacebookF}
              />
            </div>
            <div className="flex bg-slate-500 w-[50px] h-[50px] rounded-md items-center justify-center">
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faTwitter}
              />
            </div>
          </div>
          <h1 className="font-bold text-xl text-white pt-6 ">
            Be aware of all our updates
          </h1>
          <div className="relative w-[330px] py-4">
            <input
              id="search"
              className="block w-full outline-none h-[50px] p-4 text-sm text-white rounded-xl bg-slate-600 "
              placeholder="E-mail"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="flex bg-blue-700 w-[80px] h-[50px] rounded-xl text-white justify-center items-center">
                I’m in!
              </div>
            </div>
          </div>
          <div className="flex text-center gap-6">
            <div className=" text-white pt-3 text-left">
              <h1 className="font-bold">NextFan</h1>
              <a className="block pt-4" href="#">
                About us
              </a>
              <a className="block pt-1" href="#">
                Jobs
              </a>
              <a className="block pt-1" href="#">
                Contact us
              </a>
              <a className="block pt-1" href="#">
                FAQ
              </a>
              <a className="block pt-1" href="#">
                Help center
              </a>
            </div>
            <div className=" text-white pt-3 text-left">
              <h1 className="font-bold">Community</h1>
              <a className="block pt-4" href="#">
                NFT Wizard
              </a>
              <a className="block pt-1" href="#">
                Support
              </a>
              <a className="block pt-1" href="#">
                Blog
              </a>
            </div>
          </div>
          <div className="items-center text-white pt-8">
            <a className="block" href="#">
              Terms and Conditions
            </a>
            <a className="pt-2 block" href="#">
              Privacy policy
            </a>
          </div>
          <div className="items-center gap-6 text-white pt-4">
            <img src="./assets/images/logo-nextfan.png" alt="" />
            <div className="flex pt-5 gap-2">
              <p>© NextFan </p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex h-[400px] bg-slate-700 justify-center">
          <div className="w-full max-w-6xl px-8">
            <div className="flex  justify-between">
              <div className="w-[30%]">
                <h1 className="font-bold text-white pt-10">
                  Join NextFan community
                </h1>
                <div className="flex gap-4 pt-4">
                  <div className="flex bg-slate-500 w-[50px] h-[50px] rounded-md justify-center items-center">
                    <FontAwesomeIcon
                      className="text-white text-3xl "
                      icon={faInstagram}
                    />
                  </div>
                  <div className="flex bg-slate-500 w-[50px] h-[50px] rounded-md items-center justify-center">
                    <FontAwesomeIcon
                      className="text-white text-2xl"
                      icon={faFacebookF}
                    />
                  </div>
                  <div className="flex bg-slate-500 w-[50px] h-[50px] rounded-md items-center justify-center">
                    <FontAwesomeIcon
                      className="text-white text-2xl"
                      icon={faTwitter}
                    />
                  </div>
                </div>
                <h1 className="font-bold text-white pt-6">
                  Be aware of all our updates
                </h1>
                <div className="relative w-[330px] py-4">
                  <input
                    id="search"
                    className="block w-full outline-none h-[50px] p-4 text-sm text-white rounded-xl bg-slate-600 "
                    placeholder="E-mail"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <div className="flex bg-blue-700 w-[80px] h-[50px] rounded-xl text-white justify-center items-center">
                      I’m in!
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex text-center gap-6">
                <div className=" text-white py-10 text-left">
                  <h1 className="font-bold">NextFan</h1>
                  <a className="block pt-4" href="#">
                    About us
                  </a>
                  <a className="block pt-1" href="#">
                    Jobs
                  </a>
                  <a className="block pt-1" href="#">
                    Contact us
                  </a>
                  <a className="block pt-1" href="#">
                    FAQ
                  </a>
                  <a className="block pt-1" href="#">
                    Help center
                  </a>
                </div>
                <div className=" text-white py-10 text-left">
                  <h1 className="font-bold">Community</h1>
                  <a className="block pt-4" href="#">
                    NFT Wizard
                  </a>
                  <a className="block pt-1" href="#">
                    Support
                  </a>
                  <a className="block pt-1" href="#">
                    Blog
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full border-t-2 justify-between bt">
              <div className="flex items-center gap-6 text-white pt-4">
                <img src="./assets/images/logo-nextfan.png" alt="" />
                <p>© NextFan </p>
                <p>All rights reserved.</p>
              </div>
              <div className="flex items-center gap-6 text-white">
                <div>
                  <a href="#">Terms and Conditions</a>
                </div>
                <div>
                  <a href="#">Privacy policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
