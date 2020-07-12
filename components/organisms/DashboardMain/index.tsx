import React, { Fragment } from 'react'

const DashboardMain = () => {
  return (
    <Fragment>
      <div className='dashboard-main'>
        <h1>Dashboard Main</h1>
      </div>
      <style jsx>{`
        .dashboard-main {
          dislay: flex;
          justify-content: center;
        }
      `}</style>
    </Fragment>
  )
}

export default DashboardMain
