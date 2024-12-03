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

// Алгоритм: https://www.youtube.com/watch?v=cIT9Pqs9U4g
// Проходим по строке, записывая частота появления символов в массив
// Преобразуем массив, где каждый элемент становится узлом дерева из символов
// Создаем дерево: сортируем массив по возрастанию, берем первые два узла,
//                 соединяем их в новый узел, без символа, указывая у него частоту как сумму двух взятых узлов. Записываем его в массив.
// 								 Делаем так пока размер массива не станет равным 1, что означает что в нем остался только верхний узел дерева
//

class Node {
	constructor(char, freq) {
		this.char = char
		this.freq = freq
		this.left = null // Ссылка на левый дочерний узел (изначально null)
		this.right = null // Ссылка на правый дочерний узел (изначально null)
	}
}

const createFreqTable = message => {
	const freqMap = new Map()

	for (const char of message) {
		freqMap.set(char, (freqMap.get(char) || 0) + 1)
	}

	return Array.from(freqMap, ([char, freq]) => new Node(char, freq))
}

const createTree = nodes => {
	while (nodes.length > 1) {
		nodes.sort((a, b) => a.freq - b.freq)

		const left = nodes.shift()
		const right = nodes.shift()

		const newNode = new Node(null, left.freq + right.freq)

		newNode.left = left
		newNode.right = right

		nodes.push(newNode)
	}

	return nodes[0]
}

const createCodesTable = (node, code = '', codeMap = {}) => {
	if (!node) return

	if (node.char) {
		codeMap[node.char] = code
	} else {
		createCodesTable(node.left, code + '0', codeMap)
		createCodesTable(node.right, code + '1', codeMap)
	}

	return codeMap
}

const Lab_3 = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [inputValue, setInputValue] = useState('')
	const [codesMap, setCodesMap] = useState({})
	const [drawerContent, setDrawerContent] = useState('')

	const toast = useToast()

	const handleEncrypt = message => {
		const freqTable = createFreqTable(message.toLowerCase())
		console.log(freqTable)
		const huffmanTree = createTree(freqTable)
		console.log(huffmanTree)
		const huffmanCodes = createCodesTable(huffmanTree)
		console.log(huffmanCodes)

		const encodedMessage = message
			.toLowerCase()
			.split('')
			.map(char => huffmanCodes[char])
			.join('')

		setDrawerContent(encodedMessage)
		setCodesMap(huffmanCodes)
		onOpen()
	}

	const handleDecrypt = (message, codeMap) => {
		const reverseCodeMap = Object.fromEntries(Object.entries(codeMap).map(([char, code]) => [code, char]))

		let result = ''
		let curCode = ''

		for (const bit of message) {
			curCode += bit

			if (curCode in reverseCodeMap) {
				result += reverseCodeMap[curCode]
				curCode = ''
			}
		}
		setDrawerContent(result)
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
				<Button colorScheme="red" onClick={() => handleDecrypt(inputValue, codesMap)}>
					Расшифровать сообщение
				</Button>
			</VStack>

			<Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Результат</DrawerHeader>

					<DrawerBody>
						<Box mb={2}>
							<p onClick={handleCopy} cursor="pointer">
								Начальное сообщение: <Code width={'md'}>{inputValue}</Code>
							</p>
						</Box>

						<Box mb={2}>
							<p onClick={handleCopy} style={{ cursor: 'pointer' }}>
								Зашифрованное сообщение: <Code width={'md'}>{drawerContent}</Code>
							</p>
						</Box>

						<Box mt={4}>
							<p>Кодировка символов:</p>
							<Box>
								{Object.entries(codesMap).map(([char, code], index) => (
									<p key={index}>
										<b>{char}</b>: {code}
									</p>
								))}
							</Box>
						</Box>
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

export default Lab_3
