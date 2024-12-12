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
	console.log('Время: ' + currentTime)

	const p = findNextNumberSimple(base1)
	const q = findNextNumberSimple(base2)

	const M = p * q

	let x = Date.now() % 10000

	let tempGcd
	do {
		x = (x + 1) % M
		tempGcd = gcd(x, M)
	} while (tempGcd !== 1)

	console.log(`p: ${p}, q: ${q}, M: ${M}, x0: ${x}`)

	return { p, q, M, x }
}

const generateBBSkey = keyLength => {
	let { M, x } = generateInitialParameters()

	const bits = []
	for (let i = 0; i < keyLength; i++) {
		x = ((x % M) * x) % M
		console.log(`Число ${i + 1}: ${x}`)
		const bit = x % 2
		bits.push(bit)
	}
	return bits.join('')
}

const encryptDecryptMessage = (message, key) => {
	let encryptedMessageBinary = ''
	console.log('Ключ: ', key)

	let binaryMessage = message
		.split('')
		.map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
		.join('')

	console.log('Бинарное сообщение: ', binaryMessage)

	for (let i = 0, j = 0; i < binaryMessage.length; i++, j++) {
		if (j === key.length) {
			j = 0
		}
		encryptedMessageBinary += binaryMessage[i] ^ key[j]
	}

	console.log('После преобразования: ', encryptedMessageBinary)

	let encryptedMessage = ''
	for (let i = 0; i < encryptedMessageBinary.length; i += 8) {
		const byte = encryptedMessageBinary.slice(i, i + 8)
		encryptedMessage += String.fromCharCode(parseInt(byte, 2))
	}

	return encryptedMessage
}

const Lab_5 = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [inputValue, setInputValue] = useState('')
	const [drawerContent, setDrawerContent] = useState('')
	const [key, setKey] = useState('')
	const [showKey, setShowKey] = useState(false)
	const toast = useToast()

	const handleUpdatingKeys = () => {
		setKey(generateBBSkey(256))
	}

	useEffect(() => {
		setKey(generateBBSkey(256))
	}, [])

	const handleMessage = (message, isEncrypt = true) => {
		const resultMessage = encryptDecryptMessage(message, key)
		setDrawerContent(
			<p onClick={() => handleCopy(resultMessage)} cursor="pointer">
				{isEncrypt ? 'Зашифрованное' : 'Дешифрованное'} сообщение:
				<Code width={'md'}>{resultMessage}</Code>
			</p>,
		)
		onOpen()
	}

	const handleCopy = contentToCopy => {
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
				<Flex gap={2} alignItems="center">
					<Button variant="outline" borderColor="teal" onClick={handleUpdatingKeys}>
						<RepeatIcon color="teal" />
					</Button>
					<Input
						type={showKey ? 'text' : 'password'}
						placeholder="Введите ключ шифрования"
						value={key}
						onChange={e => setKey(e.target.value)}
					/>
					<Switch
						isChecked={showKey}
						onChange={() => setShowKey(!showKey)} // Переключение состояния для показа ключа
						size="md"
					/>
				</Flex>

				<Input
					type="search"
					placeholder="Введите что угодно..."
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<Button colorScheme="teal" onClick={() => handleMessage(inputValue, true)}>
					Зашифровать сообщение
				</Button>
				<Button colorScheme="red" onClick={() => handleMessage(inputValue, false)}>
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
