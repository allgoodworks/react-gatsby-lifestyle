import React, { useState } from 'react'
import GlobalStyle from './GlobalStyle'

import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ 
	children,
	lang,
	location,
	contentTheme
}) => {
	
	const [menuOpen, setMenuOpen] = useState(false)
	const showFooter = location.pathname.includes('contact') || location.pathname.includes('404') ? false : true

  	return (
		<>
			<GlobalStyle
				shouldDisableScroll={menuOpen ? true : false}
			/>
			<Header
				lang={lang}
				contentTheme={contentTheme}
				menuOpen={menuOpen}
				setMenuOpen={() => setMenuOpen(!menuOpen)}
			/>
			<Menu 
				lang={lang}
				contentTheme={contentTheme}
				menuOpen={menuOpen}
				setMenuOpen={() => setMenuOpen(!menuOpen)}
			/>
			<main>
				{children}
			</main>
			{showFooter && (
				<Footer
					lang={lang}
					contentTheme={contentTheme}
				/>
			)}
		</>
	)
}

export default Layout
