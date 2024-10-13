"use client";
import {
  HandPlatter,
  House,
  NotebookTabs,
  PawPrint,
  ShoppingBasket,
} from "lucide-react";
import { Component, ReactNode } from "react";
import {
  Navbar as NavBarRoot,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
export class NavBar extends Component<any, any> {
  render(): JSX.Element {
    return (
      <>
        <NavBarRoot className="bg-sky-200 shadow">
          <NavbarContent className="flex  justify-center  gap-8">
            <NavbarItem>
              <Link
                className="text-white font-black text-3xl flex flex-row items-center gap-2"
                href="/"
              >
                <House />
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                className="text-white font-black text-3xl flex flex-row items-center gap-2"
                href="/pets"
              >
                <PawPrint />
                Pets
              </Link>
            </NavbarItem>
            <NavbarItem className="text-white font-black text-3xl flex flex-row items-center gap-2">
              <ShoppingBasket />
              Produtos
            </NavbarItem>
            <NavbarItem className="text-white font-black text-3xl flex flex-row items-center gap-2">
              <HandPlatter />
              Serviços
            </NavbarItem>
            <NavbarItem className="text-white font-black text-3xl flex flex-row items-center gap-2">
              <NotebookTabs />
              Listagens
            </NavbarItem>
          </NavbarContent>
        </NavBarRoot>
      </>
    );
  }
}
