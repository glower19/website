import React, { useEffect, useState } from 'react';
import './style.sass'
import { url } from '../../API/url';
import { Table, Button, message, Popconfirm } from 'antd';
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import { deleteAdFunc } from '../../API/deleteAd';
import Adadd from './Adadd';


const Ad = () => {
    const [selectData, setSelectData] = useState()
    const [isAdd, setAdd] = useState(false)
    const [currentLink, setCurrentLink] = useState()
    const [confirm, setConfirm] = useState(false)
    useEffect(() => {
        fetchGetOneAd()
        console.log(selectData)
    }, [isAdd])
    function fetchGetOneAd() {
        fetch(url + 'getAds')
            .then(response => response.json())
            .then(data => setSelectData(data));
    }
    // onDelete(record)    удаление
    const columns = [
        {
            key: '1',
            title: 'Дата',
            dataIndex: 'date',
        },
        {
            key: '2',
            title: 'Место',
            dataIndex: 'title',
        },
        {
            key: '3',
            title: 'Ссылка',
            dataIndex: 'link',
        },
        {
            key: '4',
            title: 'Управление рекламой',
            render: (record) => {
                return (<div className='icons-container'>
                    <EditOutlined onClick={() => {
                        setCurrentLink(record)
                        setAdd(true)
                        console.log(record)
                    }} />
                    <Popconfirm
                        title="удалить"
                        description="Вы уверены что хотите удалить?"
                        onConfirm={() => onDelete(record)}
                        onCancel={() => console.log('cancel')}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </div>)
            },
        },
    ]
    
    const onDelete = (record) => {
        deleteAdFunc(record.link)
        setSelectData((data) => {
            return data.filter((item) => item.link != record.link)
        })
    }
    return (
        <div className='links-container'>
            {isAdd ?
                <Adadd setCurrentLink={setCurrentLink} itemBD={currentLink} setAdd={setAdd} />
                :
                <div>
                    <div className='flex-60'>
                        <div className='title-links-list'>Добавить рекламу</div>
                        <Button className='font-buttons p13-30' onClick={() => setAdd(true)} type="primary">Добавить новую рекламу</Button>
                    </div>

                    <Table columns={columns} dataSource={selectData} pagination={false} scroll={{ y: 600 }} />
                </div>
            }
        </div>
    );
};

export default Ad;