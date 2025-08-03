import ViewCardComponent from "@/components/cards/ViewCardComponent";
import Link from "next/link";

export default function Home() {
  const id = 1;
  return (
    <main className="w-full h-[70vh] flex flex-col">
      <div className="grid grid-cols-7 w-full flex-1 min-h-full">
        <div className="staticDiv col-span-2 relative h-full p-5">
          <div className="tags flex flex-col gap-1 h-full ">
            <div className="listTags my-auto">
              <ul className="">
                <li className="text-4xl font-bold text-red-500 hover:text-white transition-all duration-300 my-2">
                  <Link href={"/"}>All</Link>
                </li>
                <li className="text-base opacity-50 hover:opacity-100 transition-all duration-300">
                  <Link href={"/"}>Recent</Link>
                </li>
                <li className="text-base opacity-50 hover:opacity-100 transition-all duration-300">
                  <Link href={"/"}>Comedy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="social absolute bottom-0 left-0">
            <ul className="flex gap-2">
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="contentView col-span-5 overflow-y-scroll scrollbar-hide p-2">
          <div className="contentItem grid grid-cols-3 gap-x-6 gap-y-16">
            <ViewCardComponent imageId="1" />
            <ViewCardComponent imageId="2" />
            <ViewCardComponent imageId="1" />
            <ViewCardComponent imageId="2" />
            <ViewCardComponent imageId="1" />
            <ViewCardComponent imageId="2" />
            <ViewCardComponent imageId="1" />
            <ViewCardComponent imageId="2" />
            <ViewCardComponent imageId="1" />
            <ViewCardComponent imageId="2" />
          </div>
        </div>
      </div>
    </main>
  );
}
