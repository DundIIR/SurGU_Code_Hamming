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

// решето Эратосфена
const sieveOfEratosthenes = max => {
	const arrTemp = new Array(max + 1).fill(true)
	arrTemp[0] = arrTemp[1] = false

	for (let i = 2; i * i <= max; i++) {
		if (arrTemp[i]) {
			for (let j = i * i; j <= max; j += i) {
				arrTemp[j] = false
			}
		}
	}

	const arrSimple = []
	for (let i = 2; i <= max; i++) {
		if (arrTemp[i]) arrSimple.push(i)
	}
	return arrSimple
}

// генерация случайного простого числа
const generateRandomPrime = arrSimple => {
	const i = Math.floor(Math.random() * (arrSimple.length - 5)) + 5
	return arrSimple[i]
}

// НОД
const NOD = (x, y) => {
	// if (y == 0) return x
	// return NOD(y, x % y)

	let temp = 0
	while (y != 0) {
		if (y > x) return NOD(y, x)
		temp = y
		y = x % y
		x = temp
	}

	return x
}

const generateKeys = arrSimple => {
	// 1)
	const p = generateRandomPrime(arrSimple)
	const q = generateRandomPrime(arrSimple)

	// 2)
	const n = p * q

	// 3)
	const phi = (p - 1) * (q - 1)

	// 4)
	let iE = 2
	while (NOD(arrSimple[iE], phi) !== 1) {
		iE++
	}
	const e = arrSimple[iE]

	// 5) (d * E) % phi = 1
	let i = 1
	while ((1 + i * phi) % e !== 0) {
		i++
	}
	const d = (1 + i * phi) / e

	console.log({
		publicKey: { e, n },
		privateKey: { d, n },
	})
	return {
		publicKey: { e, n },
		privateKey: { d, n },
	}
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

const Lab_2 = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [inputValue, setInputValue] = useState('')
	const [arrSimpleNumber, setArrSimpleNumber] = useState([])
	const [drawerContent, setDrawerContent] = useState('')
	const [{ publicKey, privateKey }, setKeys] = useState({
		publicKey: { e: 3, n: 55 },
		privateKey: { d: 27, n: 55 },
	})
	const toast = useToast()

	// const { publicKey, privateKey } = generateKeys(arrSimpleNumber)

	useEffect(() => {
		const max = 100
		const arrSN = sieveOfEratosthenes(max)
		setArrSimpleNumber(arrSN)
		console.log(`Простые числа до ${max} сгенерированы`)
	}, [])

	const handleUpdatingKeys = () => {
		setKeys(generateKeys(arrSimpleNumber))
	}

	const handleEncrypt = message => {
		const { e, n } = publicKey
		const encryptedMessage = []
		console.log('Начало')
		for (let symbol of message) {
			let codeSymbol = symbol.charCodeAt(0).toString()
			console.log('Код символа: ', symbol, codeSymbol)
			for (let char of codeSymbol) {
				console.log('Цифра: ', char)

				const m = (Math.pow(char, e) % n).toString().padStart(8, '0')

				encryptedMessage.push(m)
			}
			encryptedMessage.push('11110011')
		}

		setDrawerContent(encryptedMessage)
		console.log(encryptedMessage)
		onOpen()
	}

	const handleDecrypt = message => {
		const { d, n } = privateKey
		let decryptedMessage = ''
		const chars = message.split('11110011').slice(0, -1)
		console.log('массив символов: ', chars)
		// 00000013, ,00000008, ,00000001,00000000,00000015,
		for (let char of chars) {
			const charsCodes = char.match(/.{1,8}/g) || []
			console.log('массив кодов символов: ', charsCodes)
			let symbol = ''
			for (let charCode of charsCodes) {
				const m = modExp(parseInt(charCode, 10), d, n)
				// console.log('Возводим в степень: ', Math.pow(c, d), ' и ', m)
				symbol += m
			}

			decryptedMessage += String.fromCharCode(symbol)
		}

		setDrawerContent(decryptedMessage)

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
		<Container
			maxW='800px'
			h='100vh'
			display='flex'
			alignItems='center'
			justifyContent='center'
		>
			<VStack spacing={4}>
				<Flex gap={2} alignItems='center'>
					<Button
						variant='outline'
						borderColor='teal'
						onClick={handleUpdatingKeys}
					>
						<RepeatIcon color='teal' />
					</Button>
					<Box>
						<p>Открытый ключ: {`{ e: ${publicKey.e}, n: ${publicKey.n}}`}</p>
						<p>Закрытый ключ: {`{ d: ${privateKey.d}, n: ${privateKey.n}}`}</p>
					</Box>
				</Flex>

				<Input
					type='search'
					placeholder='Введите что угодно...'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<Button colorScheme='teal' onClick={() => handleEncrypt(inputValue)}>
					Зашифровать сообщение
				</Button>
				<Button colorScheme='red' onClick={() => handleDecrypt(inputValue)}>
					Расшифровать сообщение
				</Button>
			</VStack>

			<Drawer isOpen={isOpen} placement='right' onClose={onClose} size={'md'}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Результат</DrawerHeader>

					<DrawerBody>
						<p onClick={handleCopy} style={{ cursor: 'pointer' }}>
							Зашифрованное сообщение: <Code width={'md'}>{drawerContent}</Code>
						</p>
					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose}>
							Закрыть
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Container>
	)
}

export default Lab_2
