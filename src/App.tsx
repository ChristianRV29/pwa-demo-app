import { TodoList, ToolBar } from '@components'
import { useTodos } from '@hooks'
import { MainLayout } from '@layouts'

function App() {
	const {
		todos,
		searchTerm,
		currentFilter,
		setCurrentFilter,
		setSearchTerm,
		toggleCompleted,
	} = useTodos()

	return (
		<MainLayout>
			<ToolBar
				currentFilter={currentFilter}
				searchTerm={searchTerm}
				setCurrentFilter={setCurrentFilter}
				setSearchTerm={setSearchTerm}
			/>
			<TodoList onCompleted={toggleCompleted} todos={todos} />
		</MainLayout>
	)
}

export default App
