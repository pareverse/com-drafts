import * as C from '@chakra-ui/react'

const Home = () => {
	const { toggleColorMode } = C.useColorMode()

	return (
		<>
			<C.Heading>Hello World</C.Heading>
			<C.Button onClick={toggleColorMode}>Toggle Theme</C.Button>
		</>
	)
}

export default Home
