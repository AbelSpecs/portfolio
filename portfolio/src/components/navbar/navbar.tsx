import  { FC, useState } from 'react';
import styles from './navbar.module.css';
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Image } from "@nextui-org/react";
import logo from '../../assets/ad-low-resolution-logo-white-on-transparent-background.png';
import { links } from '../../text/text';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [active, setActive] = useState('');

  const handleActive = (title: string) => {
    setActive(title);
  }

  return (
    <div className={`dark p-2 text-foreground bg-background flex items-start justify-center fixed bg-transparent ${styles.navContainer}`}>
      <Nav>
        <NavbarBrand>
          <Image
                alt="logo"
                className="object-contain rounded-xl opacity-100"
                src={logo}
                width={50} 
          />
          &nbsp;
          <p className='font-bold'>|</p>
          &nbsp;
          <p className="font-bold text-lg">Abel</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8" justify="center" >
          {
            links.map(({id, title}, index) => {
              return (
                <NavbarItem key={index} >
                  <Link color={`${active === title ? "secondary" : "foreground"}`} 
                        href={`#${id}`} 
                        className="font-bold"
                        onClick={() => handleActive(title)}>
                    {title}
                  </Link>
                </NavbarItem>
              )
            })
          }
        </NavbarContent>
      </Nav>
    </div>
  )
}
  


export default Navbar;
