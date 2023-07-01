import { LaptopOutlined, MessageOutlined, ShoppingCartOutlined, DollarOutlined } from '@ant-design/icons';
import { FaTelegramPlane, FaFlag } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { MdPhotoCamera, } from 'react-icons/md'
import {
    IconCart,
    IconCis,
    IconPhoto,
    IconTelegram,
    IconTrade,
    IconWorld,
    IconChat,
    IconWallet
} from '../../../components/Icons';
export const data = [
    {
        path: '#category1',
        title: 'Маркетплейсы',
        img: <IconWallet style={{
            width: 45
        }}  />,
    },
    {
        path: '#category2',
        title: 'Форумы',
        img: <IconChat  />,
    },
    {
        path: '#category3',
        title: 'Магазины',
        img: <IconCart  />,
    },
    {
        path: '#category4',
        title: 'Обменники',
        img: <IconTrade  />,
    },
    {
        path: '#category5',
        title: 'Telegram',
        img: <IconTelegram />,
    },
    {
        path: '#category6',
        title: 'СНГ',
        img: <IconCis />,
    },
    {
        path: '#category7',
        title: 'Фотохостинги',
        img: <IconPhoto />,
    },
    {
        path: '#category8',
        title: 'WorldWide',
        img: <IconWorld />,
    },
]