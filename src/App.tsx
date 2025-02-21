import { DialogTodo, FAB, TodoList, ToolBar } from '@components'
import { useTodos } from '@hooks'
import { MainLayout } from '@layouts'

function App() {
	const {
		createNewTodo,
		currentFilter,
		dialogVisible,
		searchTerm,
		setCurrentFilter,
		setDialogVisible,
		setSearchTerm,
		todos,
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
			<DialogTodo
				open={dialogVisible}
				onClose={() => setDialogVisible(false)}
				onAdd={createNewTodo}
			/>

			<FAB
				onPlusClick={() => {
					setDialogVisible(true)
				}}
			/>
		</MainLayout>
	)
}

export default App
