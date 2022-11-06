import React from 'react'
import { Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import style from '../style/HeaderApp.module.css'

const { Header } = Layout;

const HeaderApp = () => {
    return (
        <div>
            <Header className={style.header}>
                <div>brand logo</div>
                <div className={style.headerRight}>
                    <div>
                        <a><UserOutlined /></a>
                    </div>
                </div>
            </Header>
        </div>
    )
}

export default HeaderApp