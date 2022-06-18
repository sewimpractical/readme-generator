import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background: var(--bg-dark);
	height: 9vh;
	display: flex;
	justify-content: space-between;
	padding: 2em;
	z-index: 10;
`

export const NavLink = styled(Link)`
	color: var(--white);
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 2vh 10vh;
	height: 100%;
	cursor: pointer;
	font-size: calc(8px + 2vmin);

	&.active {
		color: var(--contrast);
	}
`

export const Bars = styled(FaBars)`
	display: none;
	color: var(--white);

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 50px;
	background: var(--contrast);
	padding: 1vh 7vh;
	color: var(--black);
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	font-size: calc(9px + 2vmin);

	&:hover {
		transition: all 0.2s ease-in-out;
		background: var(--bg-light);
		color: var(--white);
	}
`;
