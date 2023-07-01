import {
    UserOutlined,
    LinkOutlined,
    NotificationFilled,
    MessageOutlined
} from '@ant-design/icons';
export const items = [
    {
        label: 'Общая информация',
        icon: <div className='icon'><UserOutlined style={{ color: 'white' }} /></div>,
        key: '/',
    },
    {
        label: 'Ссылки',
        icon: <div className='icon'><LinkOutlined style={{ color: 'white' }} /></div>,
        key: '/links',
    },
    {
        label: 'Реклама',
        icon: <div className='icon'><NotificationFilled style={{ color: 'white' }} /></div>,
        key: '/ad',
    },
    {
        label: 'Обратная связь',
        icon: <div className='icon'><MessageOutlined style={{ color: 'white' }} /></div>,
        key: '/feedback'
    }
]