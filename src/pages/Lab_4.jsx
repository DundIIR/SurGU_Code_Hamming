import {
	Box,
	Button,
	Checkbox,
	Code,
	Container,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	HStack,
	Input,
	List,
	ListItem,
	Text,
	Textarea,
	useDisclosure,
	useToast,
	VStack,
} from '@chakra-ui/react'
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const encryptMessageInImage = async (imageFile, message, bitsToReplace = 1) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = event => {
			const img = new Image()
			img.src = event.target.result
			img.onload = () => {
				const canvas = document.createElement('canvas')
				const ctx = canvas.getContext('2d', { willReadFrequently: true })
				canvas.width = img.width
				canvas.height = img.height
				ctx.drawImage(img, 0, 0)
				const imageData = ctx.getImageData(0, 0, img.width, img.height)
				const data = imageData.data

				// // Преобразуем сообщение в бинарный вид, где каждый символ будет кодироваться одним байтом
				// let binaryMessage = message // 1 -> 49 -> 00110001
				// 	.split('')
				// 	.map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
				// 	.join('')
				let binaryMessage = ''
				const encoder = new TextEncoder() // Кодирует в UTF-8
				const encodedMessage = encoder.encode(message)

				// Преобразуем каждый байт в двоичное представление
				for (let byte of encodedMessage) {
					binaryMessage += byte.toString(2).padStart(8, '0')
				}

				const missingBits = binaryMessage.length % +bitsToReplace
				console.log('Не хватает до целого: ' + missingBits)
				if (missingBits !== 0) {
					binaryMessage = binaryMessage.padEnd(binaryMessage.length + (+bitsToReplace - missingBits), '0')
				}
				// Находим длину бинарного сообщения и преобразуем длину в бинарный вид на 4 байта
				const binaryMessageLength = binaryMessage.length.toString(2).padStart(32, '0') // 32 бита для длины

				// Вставляем длину сообщения в первые 11 пикселей
				// Т.к. длину кодируем 32 битами, а в каждый пиксель можно вставить по 3 бита, длина займет 11 пикселей
				console.log('Данные сообщения: ', message, binaryMessage, binaryMessage.length)
				let i = 0
				for (let j = 0; j < 32; i++) {
					let messageBit = binaryMessageLength.slice(j, j + 1)
					if ((i + 1) % 4 !== 0 && data[3 - (i % 4) + i] == 255) {
						// Вставляем биты только в каналы где Alfa = 255, т.к. в другом случае идет искажение данных, из-за влияния прозрачности на каналы RGB
						j++
						const pixelValue = data[i]
						const mask = (1 << bitsToReplace) - 1
						data[i] = (pixelValue & ~mask) | parseInt(messageBit, 2)
						// console.log(`Пиксель-бит ${i}: ${data[i]} где j: ${j}`)
					}
				}

				let messageIndex = 0
				for (let j = 0; i < data.length; i++) {
					if (messageIndex >= binaryMessage.length) break

					// пропускаем пиксели с прозрачностью не 255
					if (data[3 - (i % 4) + i] == 255 && (i + 1) % 4 !== 0) {
						const pixelValue = data[i]

						let messageBit = binaryMessage.slice(messageIndex, messageIndex + +bitsToReplace)
						messageIndex += +bitsToReplace

						// Заменяем младшие биты пикселя на биты сообщения
						// 11111100 - маска
						// 10110001 - pixelValue
						// 10 - messageBit
						// (10110000) | 10
						const mask = 255 << +bitsToReplace // в маске биты равны 0 которые нужно заменить
						const newValue = (pixelValue & mask) | parseInt(messageBit, 2)
						data[i] = newValue
						if (j < 20 || j > binaryMessage.length - 20) {
							console.log(
								`Пиксель-бит ${i} который был ${pixelValue} - ${pixelValue.toString(2)}: `,
								`${data[i]} - ${data[i].toString(2)} добавили ${parseInt(messageBit, 2)} где messageIndex: ${messageIndex}`,
							)
						}
						j += +bitsToReplace
					}
				}

				if (messageIndex < binaryMessage.length) {
					reject('Изображение маленькое для шифрования всего сообщения.')
					return
				}

				// Обновляем данные изображения
				ctx.putImageData(imageData, 0, 0)

				// console.log('Данные пикселей с холста: ', ctx.getImageData(0, 0, img.width, img.height).data)

				canvas.toBlob(resolve, 'image/png')
			}
			img.onerror = () => reject('Ошибка загрузки изображения.')
		}
		reader.onerror = () => reject('Ошибка чтения файла.')
		reader.readAsDataURL(imageFile)
	})
}

const decryptMessageFromImage = async (imageFile, bitsToReplace) => {
	if (!bitsToReplace) {
		bitsToReplace = 1
	}
	return new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.onload = event => {
			const img = new Image()
			img.src = event.target.result
			// console.log('файл успешно открыт')

			img.onload = () => {
				// console.log('изображение получено')

				const canvas = document.createElement('canvas')
				const ctx = canvas.getContext('2d')

				canvas.width = img.width
				canvas.height = img.height

				ctx.drawImage(img, 0, 0)

				const imageData = ctx.getImageData(0, 0, img.width, img.height)
				const data = imageData.data
				// console.log(`Данные изображения: ${imageData.data}`)
				// Извлекаем длину сообщения, которая была закодирована 32 битами
				let binaryMessageLength = ''
				let i = 0
				for (let j = 0; j < 32; i++) {
					if (data[3 - (i % 4) + i] === 255 && (i + 1) % 4 !== 0) {
						// Получаем биты длины сообщения из каналов, где  канал Alfa = 255
						j++
						const pixelValue = data[i]
						const messageBit = pixelValue & 1 // Получаем младший бит
						binaryMessageLength += messageBit
						// console.log(`Пиксель-бит ${i} который был ${pixelValue}: ${messageBit}`)
					}
				}

				const messageLength = parseInt(binaryMessageLength, 2)
				console.log(`Сообщение длиной: ${messageLength}`)

				let binaryMessage = ''
				for (let j = 0; i < data.length; i++) {
					if (binaryMessage.length >= messageLength) break

					// Пропускаем пиксели с прозрачностью не 255
					if (data[3 - (i % 4) + i] === 255 && (i + 1) % 4 !== 0) {
						const pixelValue = data[i]

						// 11110111 -> 1111
						// 00000000 -> 00010000 -> 00001111

						// Извлекаем биты сообщения из пикселей
						let pixelValueBinary = pixelValue.toString(2).padStart(8, '0')
						let mask = (1 << +bitsToReplace) - 1
						let messageBit = pixelValue & mask // Получаем младшие биты пикселя

						binaryMessage += messageBit.toString(2).padStart(+bitsToReplace, '0')

						// if (j < 20 || j > binaryMessage.length - 20) {
						// 	console.log(
						// 		`Пиксель-бит ${i} который ${pixelValue} - ${pixelValueBinary}: забрали ${messageBit
						// 			.toString(2)
						// 			.padStart(+bitsToReplace, '0')}`,
						// 		`маска - ${mask}`,
						// 	)
						// }

						j++
					}
				}

				if (binaryMessage.length < messageLength) {
					reject('Не удалось извлечь все данные из изображения.')
					return
				}

				const missingBits = binaryMessage.length % 8
				console.log('Не хватает до целого: ' + missingBits)
				if (missingBits !== 0) {
					binaryMessage = binaryMessage.slice(0, -missingBits)
				}
				console.log(`Сообщение в бинарном виде: ${binaryMessage} - ${binaryMessage.length}`)

				let message = ''
				for (let i = 0; i < binaryMessage.length; i += 8) {
					const byte = binaryMessage.slice(i, i + 8)
					message += String.fromCharCode(parseInt(byte, 2))
				}

				// Используем TextDecoder для декодирования UTF-8
				const decoder = new TextDecoder('utf-8')
				const decodedMessage = decoder.decode(new Uint8Array(message.split('').map(c => c.charCodeAt(0))))
				console.log('Сообщение: ' + decodedMessage)

				resolve(decodedMessage)
			}

			img.onerror = () => reject('Ошибка загрузки изображения.')
		}

		reader.onerror = () => reject('Ошибка чтения файла.')
		reader.readAsDataURL(imageFile)
	})
}

const Lab_4 = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [inputMessage, setInputMessage] = useState('')
	const [uploadedFile, setUploadedFile] = useState(null)
	const [drawerContent, setDrawerContent] = useState('')
	const [selectedBits, setSelectedBits] = useState([])
	const toast = useToast()

	const handleFileUpload = event => {
		const file = event.target.files[0]
		if (file && file.type.startsWith('image/')) {
			setUploadedFile(file)
			console.log('Файл загружен\n', file)
		} else {
			toast({
				title: 'Ошибка',
				description: 'Пожалуйста, загрузите корректное изображение',
				status: 'error',
				duration: 2000,
				isClosable: true,
			})
		}
	}

	const toggleBitSelection = bit => {
		setSelectedBits(prev => (prev.includes(bit) ? prev.filter(b => b !== bit) : [...prev, bit]))
	}

	const handleEncrypt = async () => {
		if (!uploadedFile || !inputMessage || selectedBits.length === 0) {
			toast({
				title: 'Ошибка',
				description: 'Необходимо загрузить изображение, ввести сообщение и выбрать ключ',
				status: 'error',
				duration: 2000,
				isClosable: true,
			})
			return
		}

		try {
			// Шифруем текст, для всех выбранных вариантов
			const downloadLinks = []

			for (const bit of selectedBits) {
				const encrypted = await encryptMessageInImage(uploadedFile, inputMessage, bit)
				const downloadLink = URL.createObjectURL(encrypted)
				downloadLinks.push({ bit, link: downloadLink })
			}

			downloadLinks.sort((a, b) => a.bit - b.bit)

			const originalImageUrl = URL.createObjectURL(uploadedFile)

			setDrawerContent(
				<>
					<p>Сообщение зашифровано. Измененные изображения готовы.</p>
					<div>
						<p>Оригинальное изображение:</p>
						<img src={originalImageUrl} alt="Original Image" style={{ maxWidth: '100%', marginBottom: '10px' }} />
					</div>

					{downloadLinks.map(({ bit, link }) => (
						<div key={bit}>
							<p>Изображение с {bit} битами заменёнными:</p>
							<a href={link} download={`encrypted_${bit}bit.png`}>
								<img src={link} alt={`Encrypted Image (${bit} bits)`} style={{ maxWidth: '100%', marginBottom: '10px' }} />
							</a>
						</div>
					))}
				</>,
			)

			onOpen()
		} catch (error) {
			toast({
				title: 'Ошибка',
				description: `Произошла ошибка при шифровании: ${error}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}

	const handleDecrypt = async () => {
		if (!uploadedFile || selectedBits.length === 0) {
			toast({
				title: 'Ошибка',
				description: 'Необходимо загрузить изображение и выбрать ключ',
				status: 'error',
				duration: 2000,
				isClosable: true,
			})
			return
		}

		try {
			const decryptedMessages = []
			// Дешифруем сообщение с использованием 1 бита
			for (let bit of selectedBits) {
				const decryptedMessage = await decryptMessageFromImage(uploadedFile, bit)
				decryptedMessages.push({ bit, decryptedMessage })
			}

			setDrawerContent(
				<>
					<List spacing={4}>
						{decryptedMessages.map(({ bit, decryptedMessage }) => (
							<ListItem key={bit}>
								<Box p={4} bg="gray.50" borderRadius="md" boxShadow="md" mb={4}>
									<Text fontSize="md" fontWeight="semibold" color="gray.600" mb={2}>
										Для ключа <strong>{bit}</strong>:
									</Text>
									<Text fontSize="sm" color="gray.500" bg="white" borderRadius="md" p={2} boxShadow="sm" wordBreak="break-word">
										{decryptedMessage}
									</Text>
								</Box>
							</ListItem>
						))}
					</List>
				</>,
			)

			// setDrawerContent(
			// 	<>
			// 		<p>Дешифрованные сообщения:</p>
			// 		<ul>
			// 			{decryptedMessages.map(({ bit, decryptedMessage }) => (
			// 				<li key={bit}>
			// 					<p>
			// 						Для ключа {bit}: {decryptedMessage}
			// 					</p>
			// 				</li>
			// 			))}
			// 		</ul>
			// 	</>,
			// )
			// Показываем дешифрованное сообщение
			// setDrawerContent(`Дешифрованное сообщение: ${decryptedMessage}`)
			onOpen()
		} catch (error) {
			toast({
				title: 'Ошибка',
				description: `Произошла ошибка при дешифровании: ${error}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}

	return (
		<Container maxW="800px" h="100vh" display="flex" alignItems="center" justifyContent="center">
			<VStack spacing={4}>
				<p>Кол-во шифрующих бит</p>
				<HStack>
					{[1, 2, 3, 4, 5, 6, 7, 8].map(bit => (
						<Checkbox key={bit} isChecked={selectedBits.includes(bit)} onChange={() => toggleBitSelection(bit)}>
							{bit}
						</Checkbox>
					))}
				</HStack>

				<Box display="flex" flexDirection="column" alignItems="center">
					{/* Скрытый input */}
					<Input type="file" accept="image/*" onChange={handleFileUpload} id="file-upload" style={{ display: 'none' }} />

					{/* Кастомная кнопка */}
					<label htmlFor="file-upload">
						<Button
							variant="outline"
							as="span"
							width="325px"
							fontWeight="bold"
							colorScheme={uploadedFile ? 'green' : 'teal'} // Меняем цвет кнопки
							leftIcon={uploadedFile ? <CheckCircleIcon /> : <DownloadIcon />} // Меняем иконку
							cursor="pointer"
							_hover={{ bg: uploadedFile ? 'green.400' : 'teal.400' }} // Меняем hover-эффект
						>
							{uploadedFile ? 'Файл загружен' : 'Загрузить изображение'} {/* Меняем текст */}
						</Button>
					</label>
				</Box>
				<Textarea
					placeholder="Введите сообщение для шифрования"
					value={inputMessage}
					onChange={e => setInputMessage(e.target.value)}
					resize="vertical"
					width="325px"
					maxHeight="200px"
					overflow="auto"
				/>
				<Button colorScheme="teal" onClick={handleEncrypt}>
					Зашифровать сообщение
				</Button>
				<Button colorScheme="red" onClick={handleDecrypt}>
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

export default Lab_4
