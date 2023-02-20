import React from 'react'
import { Navigate, Outlet, useOutletContext, useParams } from 'react-router-dom'
const ProjectLayout = () => {
  return (
    <>
    <div>ProjectLayout</div>
    <Outlet />
    </>
  )
}

export default ProjectLayout