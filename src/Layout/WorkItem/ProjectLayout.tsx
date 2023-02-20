import React from 'react'
import { Navigate, Outlet, useOutletContext, useParams } from 'react-router-dom'
const WorkItemLayout = () => {
  return (
    <>
      <div>WorkItemLayout</div>
      <Outlet />
    </>
  )
}

export default WorkItemLayout