export default function HomePageFooter() {
  return (
    <div className="flex h-[400px] bg-slate-700 justify-center">
      <div className="w-[70%]">
        <div className="flex  justify-between">
          <div className="w-[30%]">esquerda</div>
          <div className="w-[30%] flex text-center ">
            <div className="w-[50%] text-white py-10">
              <div>
                <h1 className="font-bold">NextFan</h1>
              </div>
              <div className="pt-4">
                <a href="#">About us</a>
              </div>
              <div className="pt-1">
                <a href="#">Jobs</a>
              </div>
              <div className="pt-1">
                <a href="#">Contact us</a>
              </div>
              <div className="pt-1">
                <a href="#">FAQ</a>
              </div>
              <div className="pt-1">
                <a href="#">Help center</a>
              </div>
            </div>
            <div className="w-[50%] text-white py-10 ">
              <div>
                <h1 className="font-bold">Community</h1>
              </div>
              <div className="pt-4">
                <a href="#">NFT Wizard</a>
              </div>
              <div className="pt-1">
                <a href="#">Support</a>
              </div>
              <div className="pt-1">
                <a href="#">Blog</a>
              </div>
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
  );
}
