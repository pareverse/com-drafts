import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react'
import FontFace from 'components/font-face'
import theme from 'theme'

const App = ({ Component, pageProps, session }) => {
	const manager = createLocalStorageManager('my-key')

	return (
		<>
			<Head>
				<title>Commence</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="commence" />
			</Head>

			<SessionProvider session={session}>
				<SWRConfig value={{ refreshInterval: 3000, fetcher: (url) => axios.get(url).then((res) => res.data) }}>
					<ChakraProvider theme={theme} colorModeManager={manager}>
						<Component {...pageProps} />
					</ChakraProvider>
					<FontFace />
				</SWRConfig>
			</SessionProvider>
		</>
	)
}

export default App
