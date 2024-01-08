"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    link: "/",
    src: "./home.svg",
  },
  {
    name: "Orders",
    link: "/orders",
    src: "./orders.svg",
  },
  {
    name: "Products",
    link: "/product",
    src: "./product.svg",
  },
  {
    name: "Delivery",
    link: "/delivery",
    src: "./delivery.svg",
  },
  {
    name: "Marketing",
    link: "/marketing",
    src: "./marketing.svg",
  },
  {
    name: "Analytics",
    link: "/analytics",
    src: "./analytics.svg",
  },
  {
    name: "Payments",
    link: "/payments",
    src: "./payments.svg",
  },
  {
    name: "Tools",
    link: "/tools",
    src: "./tools.svg",
  },
  {
    name: "Discounts",
    link: "/discount",
    src: "./discount.svg",
  },
  {
    name: "Audience",
    link: "/audience",
    src: "./audience.svg",
  },
  {
    name: "Appearance",
    link: "/appearance",
    src: "./appearance.svg",
  },
  {
    name: "Plugins",
    link: "/plugins",
    src: "./plugins.svg",
  },
];

function Sidebar() {
const pathname=usePathname();
  return (
    <>
      <div className="bg-sideNavColor w-[224px] m-0 box-border p-4 h-full overflow-auto fixed flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between align-middle p-2">
            <div className="flex gap-3">
              <Image
                src="./logo.svg"
                width={39}
                height={39}
                className="rounded"
              ></Image>
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white">Nishyan</span>
                <a
                  href=""
                  className="font-normal underline text-[13px] text-opaque"
                >
                  Visit store
                </a>
              </div>
            </div>
            <Image
              src="./dropdown.svg"
              width={20}
              height={20}
              className="cursor-pointer"
            ></Image>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              {navItems.map((items) => (
                <li className={`p-2 rounded ${
                    items.link === pathname ? 'bg-opaque2' : 'hover:bg-opaque2'
                  }`}>
                  <Link href={items.link} className="flex align-middle gap-4">
                    <Image src={items.src} width={20} height={20}></Image>
                    <span className="font-medium text-sm text-opaque">
                      {items.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-2 bg-opaque2 rounded flex gap-4">
          <div className="p-2 bg-opaque2 rounded">
            <Image src="wallet.svg" height={24} width={24}></Image>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-opaque">Available credits</span>
            <span className="text-base text-white">222.10</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
