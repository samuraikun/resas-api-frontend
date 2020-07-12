import React, { FC, Fragment } from 'react'
import DashboardSidebar from 'components/organisms/DashboardSidebar/index'

const DashboardLayout: FC = ({ children }) => (
  <Fragment>
    <div className='dashboard-layout'>
      <div className='dashboard-layout__sidebar'>
        <DashboardSidebar />
      </div>
      <div className='dashboard-layout__main'>{children}</div>
    </div>
    <style jsx>{`
      .dashboard-layout {
        display: grid;
        grid-template:
          " sidebar main " auto
          /  auto  1fr;

        height: 100vh;
      }

      .dashboard-layout__sidebar {
        grid-area: sidebar;
      }

      .dashboard-layout__main {
        grid-area: main;
      }
    `}</style>
  </Fragment>
)

export default DashboardLayout
