import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
    <div className="">
        <h3>This page doesn't exit</h3>
        <Link to="/recipes-list">Go to recipes list page</Link>
    </div>
    </>
  )
}

export default NotFoundPage;