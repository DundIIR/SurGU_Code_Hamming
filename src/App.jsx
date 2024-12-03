import './app.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { Lab_1, Lab_2, Lab_3, Lab_4 } from './pages'
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
			<Router>
				<Header />
				<Routes>
					<Route path="/SurGU_Code_Hamming/Lab_4" element={<Lab_4 />} />
					<Route path="/SurGU_Code_Hamming/Lab_3" element={<Lab_3 />} />
					<Route path="/SurGU_Code_Hamming/Lab_2" element={<Lab_2 />} />
					<Route path="/SurGU_Code_Hamming/" element={<Lab_1 />}></Route>
				</Routes>
			</Router>
		</ChakraProvider>
	)
}

function Header() {
	return (
		<header style={styles.header}>
			<NavLink to="/SurGU_Code_Hamming/" style={styles.button} className={({ isActive }) => (isActive ? 'active' : '')}>
				Hamming
			</NavLink>
			<NavLink to="/SurGU_Code_Hamming/Lab_2" style={styles.button} className={({ isActive }) => (isActive ? 'active' : '')}>
				RSA
			</NavLink>
			<NavLink to="/SurGU_Code_Hamming/Lab_3" style={styles.button} className={({ isActive }) => (isActive ? 'active' : '')}>
				Hafman
			</NavLink>
			<NavLink to="/SurGU_Code_Hamming/Lab_4" style={styles.button} className={({ isActive }) => (isActive ? 'active' : '')}>
				LSB
			</NavLink>
		</header>
	)
}

export default App
