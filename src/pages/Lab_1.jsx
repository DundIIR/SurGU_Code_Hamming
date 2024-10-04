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
import { useState } from 'react'

function Lab_1() {
	const [inputValue, setInputValue] = useState('')
	const [isBinary, setIsBinary] = useState(false)
	const [isError, setIsError] = useState('')
	const [drawerContent, setDrawerContent] = useState([''])
	const { isOpen, onOpen, onClose } = useDisclosure()

	const handleSwitchChange = () => {
		setIsBinary(!isBinary)
	}

	const convertToBinary = text => {
		return text
			.split('')
			.map(char => char.charCodeAt(0).toString(2).padStart(16, '0'))
			.join('')
	}

	const encryptionStr = str => {
		let binaryArray = str.split('')

		let controlBitsPositions = []
		for (let i = 0; i < binaryArray.length; i++) {
			if (((i + 1) & i) === 0) {
				controlBitsPositions.push(i)
				binaryArray.splice(i, 0, '0')
			}
		}

		controlBitsPositions.forEach(position => {
			let check = 0
			for (let i = position; i < binaryArray.length; i += 2 * (position + 1)) {
				for (let j = i; j < i + position + 1 && j < binaryArray.length; j++) {
					check += +binaryArray[j]
				}
			}
			binaryArray[position] = check % 2 == 0 ? 0 : 1
		})

		let binaryString = binaryArray.join('')

		// if (!isBinary) {
		// 	let padding = '0011111111'
		// 	padding = ((binaryString.length + padding.length) % 16) * '0' + padding
		// 	binaryString = binaryString + padding
		// }
		return binaryString
	}

	const decryptionStr = binaryStr => {
		if (!isBinary) {
			binaryStr = binaryStr.split('0011111111')[0]
		}
		let binaryArray = binaryStr.split('')

		let controlBitsPositions = []
		for (let i = 0; i < binaryArray.length; i++) {
			if (((i + 1) & i) === 0) {
				controlBitsPositions.push(i)
			}
		}

		let errorPosition = 0

		controlBitsPositions.forEach(position => {
			let check = 0
			for (let i = position; i < binaryArray.length; i += 2 * (position + 1)) {
				for (let j = i; j < i + position + 1 && j < binaryArray.length; j++) {
					check += +binaryArray[j]
				}
			}

			if (check % 2 != 0) {
				errorPosition += position + 1
			}
		})

		if (errorPosition > 0) {
			setIsError(`Ошибка в позиции: ${errorPosition}`)

			binaryArray[errorPosition - 1] = binaryArray[errorPosition - 1] === '0' ? '1' : '0'
		}

		let originalValue = binaryArray.filter((bit, i) => !controlBitsPositions.includes(i))

		return originalValue.join('')
	}

	const convertToText = binary => {
		return binary
			.match(/.{1,16}/g)
			.map(byte => String.fromCharCode(parseInt(byte, 2)))
			.join('')
	}

	const handleButtonClick = decryption => {
		setIsError('')
		setDrawerContent([''])

		let binaryValue = inputValue
		if (!isBinary) {
			binaryValue = convertToBinary(inputValue)
			console.log('Бинарное представление строки: ', binaryValue)
		}

		let intermediateValue = ''
		if (decryption) {
			intermediateValue = decryptionStr(binaryValue)
			console.log('Расшифрованная последовательность: ', intermediateValue)
		} else {
			intermediateValue = encryptionStr(binaryValue)
			console.log('Добавлены контрольные биты: ', intermediateValue)
		}

		const finalResult = convertToText(intermediateValue)
		console.log('Закодированное сообщение: ', finalResult)

		setDrawerContent([`${binaryValue}`, `Промежуточное значение: ${intermediateValue}`, `Результат: ${finalResult}`])
		onOpen()
		// setInputValue('')
	}

	return (
		<Container maxW="800px" h="100vh" display="flex" alignItems="center" justifyContent="center">
			<VStack spacing={4}>
				<Box display="flex">
					<FormLabel htmlFor="binaryCheck">Двоичный код:</FormLabel>
					<Switch id="binaryCheck" isChecked={isBinary} onChange={handleSwitchChange} />
				</Box>

				<Input placeholder="Введите что угодно..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
				<Button onClick={() => handleButtonClick(false)} colorScheme="teal">
					Зашифровать сообщение
				</Button>
				<Button onClick={() => handleButtonClick(true)} colorScheme="red">
					Расшифровать сообщение
				</Button>
			</VStack>

			<Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Результат</DrawerHeader>

					<DrawerBody>
						<p size={'xl'}>Бинарное представление: {drawerContent[0]}</p>
						<p>{drawerContent[1]}</p>
						<p>{drawerContent[2]}</p>
						{isError ? <p>{isError}</p> : null}
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Close
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Container>
	)
}

export default Lab_1
