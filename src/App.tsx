import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import ProjectLayout from './Layout/Project/ProjectLayout'
import WorkItemLayout from './Layout/WorkItem/ProjectLayout'
import { CreateProject, EditProject, ProjectDetails, ProjectList } from './features/project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={<h1>Dashboard</h1>} />
        <Route path='/project' element={<ProjectLayout />}>
          <Route index element={<ProjectList />} />
          <Route path=':id' element={<ProjectDetails />}/>
          <Route path='create' element={<CreateProject />}/>
          <Route path=':id/edit' element={<EditProject />} />
        </Route>
        <Route path='/ticket' element={<WorkItemLayout />}>
          <Route index element={<h4>Ticket List</h4>} />
          <Route path=':id' element={<h4>Show Ticket Details</h4>} />
          <Route path='create' element={<h4>Create Ticket</h4>}/>
          <Route path=':id/edit' element={<h4>Edit Ticket</h4>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Container>
  )
}

export default App
