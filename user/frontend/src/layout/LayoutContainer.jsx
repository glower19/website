import React, { createContext, createRef, useState } from 'react';
import { Layout, Menu, Button, Input, Dropdown } from 'antd';
import './style.sass'
import './mobile.sass'

import {
  MenuOutlined
} from '@ant-design/icons';
import krest from '../../src/assets/krest.png'
import {
  Laptop,
  SiderChat,
  SiderCart,
  World,
  Bitcoin,
  Cis,
  Tg,
  Photo,
  Conversation,
  Main,
  SiderIcon
} from '../components/SiderIcons';
import { ThingsProvider } from '../context/context';
import { url } from '../API/url';
import Mobilemenu from './Mobilemenu';
const { Content, Sider } = Layout;
const LayoutContainer = ({ children }) => {
  const refScroll = createRef()
  const [selectCategory, setSelectCategory] = useState('category1')
  const SetSelectContext = createContext(setSelectCategory);
  const [collapsed, setCollapsed] = useState(true);
  const [isConversation, setIsConversation] = useState(false)
  const [contact, setContact] = useState()
  const [description, setDescription] = useState()

  function getItem(icon, label, key,) {
    return {
      icon,
      key,
      label,
    };
  }
  const items = [
    getItem(<a href='#category0'><Main /></a>, 'Главный экран', 'category0'),
    getItem(<a href='#category1'><Laptop /></a>, 'Маркетплейсы', 'category1'),
    getItem(<a href='#category2'><SiderChat /></a>, 'Форумы', 'category2'),
    getItem(<a href='#category3'><SiderCart /></a>, 'Магазины', 'category3'),
    getItem(<a href='#category4'><Bitcoin /></a>, 'Обменники', 'category4'),
    getItem(<a href='#category5'><Tg /></a>, 'Telegram', 'category5'),
    getItem(<a href='#category6'><Cis /></a>, 'Страны СНГ', 'category6'),
    getItem(<a href='#category7'><Photo /></a>, 'Фотохостинги', 'category7'),
    getItem(<a href='#category8'><World /></a>, 'WorldWide', 'category8'),
    getItem(<div className='feedbackIcon' style={{
      backgroundColor: "rgb(181, 77, 2)",
      borderRadius: 16
    }} onClick={() => setIsConversation(true)}><Conversation /></div>, <div className='bold' onClick={() => setIsConversation(true)}>Задать вопрос</div>, 'category9'), // href to telegram 


  ];
  function handleConversation(contact, message) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contact, message })
    };
    fetch(url + 'setFeedback', requestOptions)
      .then(response => response.json())
      .then(data => {
        setIsConversation(false)
      });
  }
  return (
    <>
      {isConversation && <>
        <div className='blur'></div>
        <div className='info-popup'>
          <div style={{ width: '100%', display: 'flex', justifyContent: "flex-end" }}
            onClick={() => setIsConversation(false)}>
            <img style={{
              width: 20
            }} src={krest} alt="" />
          </div>
          <div className='popup-header'>
            <div className='info-popup-title'>Задайте свой вопрос</div>
            <div className='info-popup-description'>и мы свяжемся с вами <br />
              в ближайшее время</div>
          </div>
          <div className='popup-main'>
            <div className='popup-contact-title'>Контакт для связи</div>
            <Input className='popup-input' onChange={(e) => setContact(e.target.value)} placeholder="@nickname" />
            <div className='popup-contact-title'>Задайте ваш вопрос</div>
            <textarea className='big-input popup-input' onChange={(e) => setDescription(e.target.value)} placeholder="" />
            <div className='send-button' onClick={() => handleConversation(contact, description)} >Отправить</div>
          </div>
        </div>
      </>}
      {!collapsed && <div className='blur'></div>}
      <div className='background'>
        <div className='elipse1'></div>
        <div className='elipse2'></div>
        <div className='elipse3'></div>

      </div>

      <Layout className='layout'>
        <Mobilemenu selectCategory={selectCategory} items={items} />
        <Sider className='layout-sider-item' width={320} collapsible trigger={null} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className='trigger' onClick={() => setCollapsed(collapsed => !collapsed)}>
            {collapsed ?
              <><SiderIcon /></>
              :
              <div className='trigger-icon'><SiderIcon /> <div className='trans'>Название</div></div>}
          </div>
          <Menu
            theme="dark"
            items={items}
            selectable={false}
            selectedKeys={[selectCategory]} />


        </Sider>
        <Layout className='main'>
          <div className='main-container'>
            <ThingsProvider value={setSelectCategory}>
              {children}
            </ThingsProvider>
          </div>
        </Layout>
      </Layout >
    </>
  );
};

export default LayoutContainer;