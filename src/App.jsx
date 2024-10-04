import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Lab_1, Lab_2 } from './pages'
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
					<Route path="/Lab_2" element={<Lab_2 />} />
					<Route path="/" element={<Lab_1 />}></Route>
				</Routes>
			</Router>
		</ChakraProvider>
	)
}

function Header() {
	return (
		<header style={styles.header}>
			<Link to="/" style={styles.button}>
				Hamming
			</Link>
			<Link to="/Lab_2" style={styles.button}>
				RSA
			</Link>
		</header>
	)
}

export default App
