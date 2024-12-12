import { RepeatIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Center,
	ChakraProvider,
	Code,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	FormLabel,
	Input,
	Switch,
	Text,
	useDisclosure,
	useToast,
	VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const numberSimple = num => {
	if (num < 2) return false
	for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
		if (num % i === 0) return false
	}
	return true
}

const findNextNumberSimple = num => {
	while (true) {
		if (numberSimple(num) && num % 4 === 3) {
			return num
		}
		num++
	}
}

const gcd = (a, b) => {
	while (b !== 0) {
		let temp = b
		b = a % b
		a = temp
	}
	return a
}

const generateInitialParameters = () => {
	const currentTime = Date.now()
	const base1 = currentTime % 10000 // Берём последние 5 цифр времени
	const base2 = Math.floor(currentTime / 10000) % 10000 // Берём оставшиеся цифры

	const p = findNextNumberSimple(base1)
	const q = findNextNumberSimple(base2)

	const M = p * q

	let x = Date.now() % 10000

	let tempGcd
	do {
		x = (x + 1) % M
		tempGcd = gcd(x, M)
	} while (tempGcd !== 1)

	return { M, x }
}

// const generateNumber = keyLength => {
// 	let { M, x } = generateInitialParameters()

// 	const bits = []

// 	x = ((x % M) * x) % M

// }

const Lab_5 = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [inputValue, setInputValue] = useState('')
	const [drawerContent, setDrawerContent] = useState('')
	const [initialParameters, setInitialParameters] = useState({})
	const [showKey, setShowKey] = useState(false)
	const toast = useToast()

	useEffect(() => {
		setInitialParameters(generateInitialParameters())
	}, [])

	return (
		<Container maxW="800px" h="100vh" display="flex" alignItems="center" justifyContent="center">
			<VStack spacing={4}>
				<Text>1920</Text>
				<Button w={'100%'} colorScheme="teal">
					Получить число
				</Button>
				<Flex gap={2} alignItems="center">
					<Input type="search" placeholder="Минимум" />
					<Input type="search" placeholder="Максимум" />
				</Flex>
			</VStack>
		</Container>
	)
}

export default Lab_5
