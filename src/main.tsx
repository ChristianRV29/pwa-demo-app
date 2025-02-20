import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppTheme } from '@theme'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppTheme>
			<App />
		</AppTheme>
	</StrictMode>,
)
