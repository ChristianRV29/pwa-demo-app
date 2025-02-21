import { TodoItem, TodoList, ToolBar } from '@components'
import { MainLayout } from '@layouts'
import { Box } from '@mui/material'

export const Dashboard = () => {
	return (
		<MainLayout>
			<ToolBar />
			<TodoList
				onCompleted={(id, completed) => console.log(id, completed)}
				todos={Array.from({ length: 10 }, (_, idx) => ({
					completed: false,
					id: idx,
					title: `Todo ${idx}`,
					userId: 1,
				}))}
			/>
		</MainLayout>
	)
}
