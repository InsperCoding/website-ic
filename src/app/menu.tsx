
import Link from "next/link";
import { Flowbite, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Averia_Libre, Inter } from "next/font/google";

const averia = Averia_Libre({
    weight: '400',
    subsets: ["latin"]
});

const inter = Inter({
    subsets: ["latin"]
});

const customTheme: CustomFlowbiteTheme['navbar'] = {
    root: {
        'base': 'bg-primary  px-2 py-2.5 sm:px-10'
    },
    brand: {
        'base': 'flex items-center text-white',
    },
    collapse: {
        'base': 'items-center w-full md:block md:w-auto',
        "list": "mt-4 flex flex-col items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    },
    link: {
        'base': `text-white text-center ${averia.className}`,
        'active': {
            'on': 'text-gray-500',
            'off': 'text-white'
        }
    }
};

export default function Component() {
  return (
    <Navbar fluid rounded theme={customTheme}>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHzrxRilqI5GFLs_JsPw4zl5ehzLINbCD3A&s" className="mr-3 h-10r" alt="Flowbite React Logo" />
        <span 
        className={`self-center whitespace-nowrap text-xl font-semibold dark:text-white ${averia.className}`}
        >Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
        <NavbarLink href="#">
            <button className={`btn btn-primary bg-white text-primary p-2 rounded-lg ${inter.className}`}>Login</button>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
