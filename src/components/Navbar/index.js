import React from 'react';
import logo from '../../logo.svg';
import {
	Nav, 
	NavLink, 
	Bars, 
	NavMenu,
	NavBtn, 
	NavBtnLink
} from './NavbarElements';

const NavBar = () => {
  return (
	<div>
		<Nav>
			<NavLink to="/">
					{
						/* TO DO: Insert Logo on NavBar 
						<img scr = {logo} alt="" width="100" heigth="50" /> */
					}
					<div>Logo</div>
			</NavLink>
			<Bars />
			<NavMenu>
				<NavLink to="/about" activeStyle>
					About
				</NavLink>
				<NavLink to="/templates" activeStyle>
					Templates
				</NavLink>
				<NavLink to="/contact" activeStyle>
					Contact
				</NavLink>
			</NavMenu>

			<NavBtn>
				<NavBtnLink to='/getstarted'>Get Started</NavBtnLink>
			</NavBtn>

		</Nav>
	</div>
  )
}

export default NavBar;