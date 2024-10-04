import {
	Box,
	Button,
	Center,
	ChakraProvider,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	FormLabel,
	Input,
	Switch,
	useDisclosure,
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

	return {
		publicKey: { e, n },
		privateKey: { d, n },
	}
}

function modExp(base, exp, mod) {
	if (mod <= 0) {
		console.error('Ошибка: модуль не должен быть меньше или равен 0.')
		return NaN
	}
	let result = 1
	base = base % mod

	while (exp > 0) {
		if (exp % 2 === 1) {
			result = (result * base) % mod
		}
		exp = Math.floor(exp / 2)
		base = (base * base) % mod
	}

	return result
}

const Lab_2 = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [inputValue, setInputValue] = useState('')
	const [arrSimpleNumber, setArrSimpleNumber] = useState([])
	const [drawerContent, setDrawerContent] = useState('')

	// const { publicKey, privateKey } = generateKeys(arrSimpleNumber)
	const { publicKey, privateKey } = { publicKey: { e: 3, n: 55 }, privateKey: { d: 27, n: 55 } }

	useEffect(() => {
		const max = 1000000
		const arrSN = sieveOfEratosthenes(max)
		setArrSimpleNumber(arrSN)
		console.log(`Простые числа до ${max} сгенерированы`)
	}, [])

	const handleEncrypt = message => {
		const { e, n } = publicKey
		const encryptedMessage = []
		console.log('Начало')
		for (let char of message) {
			let codeChar = char.charCodeAt(0).toString()
			console.log('Код символа: ', char, codeChar)
			for (let c of codeChar) {
				console.log('Цифра: ', c)

				const m = modExp(c, e, n)
				const paddedCipher = m.toString().padStart(8, '0')
				encryptedMessage.push(paddedCipher)
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
		for (let char of chars) {
			const charsCodes = char.match(/.{1,8}/g) || []
			console.log('массив кодов символов: ', charsCodes)
			let symbol = ''
			for (let charCode of charsCodes) {
				const c = parseInt(charCode, 10)
				const m = modExp(c, d, n)
				console.log('Возводим в степень: ', Math.pow(c, d), ' и ', m)
				symbol += m
			}

			decryptedMessage += String.fromCharCode(symbol)
		}

		setDrawerContent(decryptedMessage)

		onOpen()
	}

	// const handleEncrypt = message => {
	// 	const { e, n } = publicKey
	// 	const encryptedMessage = []
	// 	console.log('ключ шифр: ', e, ' ', n)
	// 	for (let char of message) {
	// 		console.log('Код символа: ', char.charCodeAt(0))
	// 		const c = modExp(char.charCodeAt(0), e, n)
	// 		if (isNaN(c)) {
	// 			console.error('Ошибка при шифровании, c = NaN для символа: ', char)
	// 			return // Прерываем выполнение, если c является NaN
	// 		}
	// 		// console.log('Возводим в степень: ', modExp(char.charCodeAt(0), e), ' и ', modExp(char.charCodeAt(0), e) % n)
	// 		const paddedCipher = c.toString().padStart(8, '0')
	// 		encryptedMessage.push(paddedCipher)
	// 	}

	// 	setDrawerContent(encryptedMessage)
	// 	console.log(encryptedMessage)
	// 	onOpen()
	// }

	// const handleDecrypt = message => {
	// 	const { d, n } = privateKey
	// 	let decryptedMessage = ''
	// 	const chunks = message.match(/.{1,8}/g) || []
	// 	console.log('ключ дешифр: ', d, ' ', n)
	// 	for (let chunk of chunks) {
	// 		const c = parseInt(chunk, 10)
	// 		if (isNaN(c)) {
	// 			console.error('Ошибка при дешифровании, c = NaN для чанка: ', chunk)
	// 			return // Прерываем выполнение, если c является NaN
	// 		}
	// 		console.log('  ', chunk)
	// 		const m = modExp(c, d, n)
	// 		if (isNaN(m)) {
	// 			console.error('Ошибка при дешифровании, m = NaN для c: ', c)
	// 			return // Прерываем выполнение, если m является NaN
	// 		}
	// 		// console.log('Возводим в степень: ', modExp(c, d), ' и ', modExp(c, d) % n)
	// 		console.log('код символа', m)
	// 		decryptedMessage += String.fromCharCode(m)
	// 	}

	// 	setDrawerContent(decryptedMessage)
	// 	console.log(decryptedMessage)
	// 	onOpen()
	// }

	return (
		<Container maxW="800px" h="100vh" display="flex" alignItems="center" justifyContent="center">
			<VStack spacing={4}>
				<Input placeholder="Введите что угодно..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
				<Button colorScheme="teal" onClick={() => handleEncrypt(inputValue)}>
					Зашифровать сообщение
				</Button>
				<Button colorScheme="red" onClick={() => handleDecrypt(inputValue)}>
					Расшифровать сообщение
				</Button>
			</VStack>

			<Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Результат</DrawerHeader>

					<DrawerBody>
						<p>Зашифрованное сообщение: {drawerContent}</p>
					</DrawerBody>

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

export default Lab_2
