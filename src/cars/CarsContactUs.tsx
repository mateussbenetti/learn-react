export default function CarsContactUs() {
  return (
    <div className="font-inter p-4 gap-6">
      <div className="flex justify-between">
        <div className="font-bold text-lg">Contact Us</div>
      </div>
      <div className="text-gray-400 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
      <div className="p-2 border-[1px] border-inherit rounded-md">
        <div className="w-full p-4 mt-2 border-[1px] border-inherit rounded-md">
          <input
            id="name"
            className="block w-full outline-none text-sm focus:border-blue-600"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="w-full p-4 mt-2 border-[1px] border-inherit rounded-md">
          <input
            id="email"
            className="block w-full outline-none text-sm focus:border-blue-600"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="w-full p-4 mt-2 border-[1px] border-inherit rounded-md">
          <input
            id="phone"
            className="block w-full outline-none text-sm focus:border-blue-600"
            placeholder="Your Phone"
            required
          />
        </div>
        <div className="w-full p-4 mt-2 border-[1px] h-[130px] border-inherit rounded-md">
          <textarea
            name="message"
            id=""
            placeholder="Your Message"
            className="block w-full outline-none text-sm"
          ></textarea>
        </div>
        <button className="w-full p-4 mt-2 bg-blue-600 text-white rounded-md">
          Send Message
        </button>
      </div>
      <div className="pt-4">
        <div className="flex pt-2">
          <div className="h-[48px] w-[48px] bg-gray-200"></div>
          <div className="px-2">
            <div className="font-bold text-lg">Our Location</div>
            <div className="flex flex-wrap text-gray-400 text-sm">
              99 S.t Jomblo Park Pekanbaru 28292. Indonesia
            </div>
          </div>
        </div>
        <div className="flex pt-2">
          <div className="h-[48px] w-[48px] bg-gray-200"></div>
          <div className="px-2">
            <div className="font-bold text-lg">Phone Number</div>
            <div className="text-gray-400 text-sm">(+62) 81 414 257 9980</div>
          </div>
        </div>
        <div className="flex pt-2">
          <div className="h-[48px] w-[48px] bg-gray-200"></div>
          <div className="px-2">
            <div className="font-bold text-lg">Email Address</div>
            <div className="text-gray-400 text-sm">info@yourdomain.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
