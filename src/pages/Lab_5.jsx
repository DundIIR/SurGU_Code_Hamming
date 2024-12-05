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
	useDisclosure,
	useToast,
	VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const isPrime = num => {
	if (num < 2) return false
	for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
		if (num % i === 0) return false
	}
	return true
}

const findNextPrime = num => {
	while (true) {
		if (isPrime(num) && num % 4 === 3) {
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

const generatePrimesFromTime = () => {
	const currentTime = Date.now()
	const base1 = currentTime % 10000 // Берём последние 5 цифр времени
	const base2 = Math.floor(currentTime / 10000) % 10000 // Берём оставшиеся цифры
	console.log(currentTime, base1, base2)

	const p = findNextPrime(base1)
	const q = findNextPrime(base2)

	const M = p * q

	let x

	do {
		x = Math.floor(Math.random() * M) // Случайное число меньше M
	} while (gcd(x, M) !== 1)

	return { p, q, x }
}

function modExp(base, exp, mod) {
	if (mod <= 0) {
		return NaN
	}

	let result = 1

	for (let i = 0; i < exp; i++) {
		result = (result * base) % mod
	}

	return result
}

const Lab_5 = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [inputValue, setInputValue] = useState('')
	const [drawerContent, setDrawerContent] = useState('')
	const toast = useToast()

	const handleEncrypt = message => {
		const encryptedMessage = generatePrimesFromTime()

		console.log(encryptedMessage)
		setDrawerContent(
			<>
				<p>{encryptedMessage.p}</p>
				<p>{encryptedMessage.q}</p>
				<p>{encryptedMessage.q * encryptedMessage.p}</p>
				<p>{encryptedMessage.x * encryptedMessage.x}</p>
			</>,
		)
		onOpen()
	}

	const handleDecrypt = message => {
		setDrawerContent('decryptedMessage')

		onOpen()
	}

	const handleCopy = () => {
		let contentToCopy = ''
		if (Array.isArray(drawerContent)) {
			contentToCopy = drawerContent.join('')
		} else {
			contentToCopy = drawerContent
		}

		navigator.clipboard
			.writeText(contentToCopy)
			.then(() => {
				toast({
					title: 'Сообщение скопировано',
					status: 'success',
					duration: 1000,
					isClosable: true,
				})
			})
			.catch(err => {
				console.log(err)
				toast({
					title: 'Возникла ошибка',
					status: 'error',
					duration: 1000,
					isClosable: true,
				})
			})
	}

	return (
		<Container maxW="800px" h="100vh" display="flex" alignItems="center" justifyContent="center">
			<VStack spacing={4}>
				<Input
					type="search"
					placeholder="Введите что угодно..."
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<Button colorScheme="teal" onClick={() => handleEncrypt(inputValue)}>
					Зашифровать сообщение
				</Button>
				<Button colorScheme="red" onClick={() => handleDecrypt(inputValue)}>
					Дешифровать сообщение
				</Button>
			</VStack>

			<Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Результат</DrawerHeader>

					<DrawerBody>{drawerContent}</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Закрыть
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Container>
	)
}

export default Lab_5
