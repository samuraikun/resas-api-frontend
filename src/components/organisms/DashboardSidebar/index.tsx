import React, { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Typography } from 'antd'
const { SubMenu } = Menu
const { Title } = Typography


const DashboardSidebar = () => {
  const menus = [
    {
      category: 'common',
      label: '共通',
      datas: [
        {
          name: 'prefectures',
          label: '都道府県一覧'
        },
        {
          name: 'cities',
          label: '市区町村一覧'
        },
        {
          name: 'broadJobs',
          label: '産業大分類'
        }
      ]
    },
    {
      category: 'population',
      label: '人口マップ',
      datas: [
        {
          name: 'composition',
          label: '人口構成'
        },
        {
          name: 'pyramid',
          label: '人口ピラミッド'
        }
      ]
    }
  ]

  return (
    <Fragment>
      <div className='sidebar'>
        <div className='sidebar__title'>
          <Title level={3} style={{ color: '#ffff'}}>
            <Link href='/'>
              <a>Resas API DataMap</a>
            </Link>
          </Title>
        </div>
        <Menu
          mode="inline"
          theme="dark"
        >
          {menus.map((item) => (
            <SubMenu key={item.category} title={item.label}>
              {item.datas.map((data, index) => (
                <Menu.Item key={index}>
                  <Link href={`/${item.category}/${data.name}`}>
                    <a>{data.label}</a>
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </div>
      <style jsx>{`
        .sidebar {
          min-width: 256px;
          height: 100%;
          background: #001529;
        }

        .sidebar__title {
          padding: 10px 0 0 10px;
        }
      `}</style>
    </Fragment>
  )
}

export default DashboardSidebar
