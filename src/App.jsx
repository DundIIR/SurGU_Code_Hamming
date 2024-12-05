import './app.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import { Lab_1, Lab_2, Lab_3, Lab_4, Lab_5 } from './pages'
import { ChakraProvider, position } from '@chakra-ui/react'

const styles = {
	header: {
		position: 'absolute',
		top: '0',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px',
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#333',
		textDecoration: 'none',
		margin: '0 10px',
		padding: '5px 15px',
		borderRadius: '8px',
		border: '1px solid #BBB',
	},
}

function App() {
	return (
		<ChakraProvider>
			<Header />
			<Routes>
				<Route path="/Lab_5" element={<Lab_5 />} />
				<Route path="/Lab_4" element={<Lab_4 />} />
				<Route path="/Lab_3" element={<Lab_3 />} />
				<Route path="/Lab_2" element={<Lab_2 />} />
				<Route path="/" element={<Lab_1 />}></Route>
			</Routes>
		</ChakraProvider>
	)
}

function Header() {
	return (
		<header style={styles.header}>
			<NavLink to="/" style={styles.button} className={({ isActive }) => (isActive ? 'active' : '')}>
				Hamming
			</NavLink>
			<NavLink to="/Lab_2" style={styles.button} className={({ isActive }) => (isActive ? 'active' : '')}>
				RSA
			</NavLink>
			<NavLink to="/Lab_3" style={styles.button} className={({ isActive }) => (isActive ? 'active' : '')}>
				Hafman
			</NavLink>
			<NavLink to="/Lab_4" style={styles.button} className={({ isActive }) => (isActive ? 'active' : '')}>
				LSB
			</NavLink>
			<NavLink to="/Lab_5" style={styles.button} className={({ isActive }) => (isActive ? 'active' : '')}>
				PRNG
			</NavLink>
		</header>
	)
}

export default App
