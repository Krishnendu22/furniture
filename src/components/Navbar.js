import * as React from "react";

function Navbar() {
  return (
    <div className="flex flex-col items-start bg-white">
      <div className="flex justify-center items-center px-16 py-3 w-full text-sm leading-5 text-white whitespace-nowrap bg-violet-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between pr-20 w-full max-w-[1656px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-2 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3120ded4be33da09bd883d9d5f08c76f83fc7bd5d9a50a4338f66b641bc42ac3?"
              className="w-3 aspect-[0.75]"
            />
            <div className="grow my-auto">Your location</div>
          </div>
          <div className="flex gap-5 justify-between text-right">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99e1fca3d1bc453f187c73a49e4f10e6ddcf743ddb92efcdb8a7963926b15cad?"
              className="w-4 aspect-square"
            />
            <div className="my-auto">123-456-7890</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b3aab58f21c0e67b4d2df028700d9ef0b0aaabf93d8ea8dee59f10de60eed36?"
              className="my-auto w-4 aspect-[1.45]"
            />
            <div className="grow">support@abc.com</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-none max-md:max-w-full">
        <div className="flex justify-center items-center px-16 py-4 text-base font-medium bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between pr-20 w-full max-w-[1656px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-0 my-auto text-zinc-800 max-md:flex-wrap max-md:max-w-full">
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                Home{" "}
              </div>
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                About
              </div>
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                Listings
              </div>
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                Services
              </div>
              <div className="hover:bg-violet-800 grow justify-center px-4 py-3.5 bg-opacity-30 rounded-[30px]">
                Blogs
              </div>
            </div>
            <div className="flex gap-2 justify-between text-xl font-semibold whitespace-nowrap text-stone-900">
              <img
                loading="lazy"
                srcSet="..."
                className="bg-violet-900 rounded-full aspect-square w-[50px] h-[50px]"
              />
              <div className="grow self-end mt-5">Property Pick</div>
            </div>
            <div className="flex gap-2.5 justify-between items-center whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c82544d06eb1e37c7a71993d19b5fc2e2955bf266df0c02517659066ffc53c?"
                className="self-stretch my-auto aspect-square w-[18px]"
              />
              <div className="flex-auto self-stretch my-auto text-zinc-800">
                Login/Register
              </div>
              <div className="flex flex-col flex-1 justify-center self-stretch px-7 py-4 text-center text-white bg-violet-900 rounded-[50px] max-md:px-5">
                <div className="flex gap-2.5 justify-between">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ed095acf1b1e6b90d395aec53b9f21d3b9f68c71ab90f185d657ef5b8805bed?"
                    className="w-5 aspect-square"
                  />
                  <div className="grow">Add Listing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

