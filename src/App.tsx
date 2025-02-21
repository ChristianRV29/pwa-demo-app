import { DialogTodo, FAB, TodoList, ToolBar } from '@components'
import { useTodos } from '@hooks'
import { MainLayout } from '@layouts'
import { CircularProgress, Typography } from '@mui/material'

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
		isLoadingTodos,
		todoError,
	} = useTodos()

	return (
		<MainLayout>
			<img
				src="/todo-image.png"
				alt="Todo app image"
				style={{ height: 100, width: 100 }}
			/>
			<ToolBar
				currentFilter={currentFilter}
				searchTerm={searchTerm}
				setCurrentFilter={setCurrentFilter}
				setSearchTerm={setSearchTerm}
			/>
			{todoError && (
				<Typography variant="body2" sx={{ color: 'error.main' }}>
					{todoError.message}
				</Typography>
			)}
			{isLoadingTodos ? (
				<CircularProgress sx={{ color: 'main.primary', margin: 'auto' }} />
			) : (
				<TodoList onCompleted={toggleCompleted} todos={todos} />
			)}
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
