import { extendTheme } from '@chakra-ui/react'
import components from './components'
import foundations from './foundations'

const theme = extendTheme({
	styles: {
		global: ({ colorMode }) => ({
			body: {
				color: colorMode === 'dark' ? 'white' : 'gray.700'
			}
		})
	},
	components,
	...foundations,
	config: {
		initialColorMode: 'light',
		cssVarPrefix: 'css'
	}
})

export default theme
