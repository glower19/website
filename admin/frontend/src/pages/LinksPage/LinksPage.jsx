import React, { useEffect, useState } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import "./style.sass"
import LinkAdd from './LinkAdd';
import { deleteLinkFunc } from '../../API/deleteLink';
import { url } from '../../API/url';
const LinksPage = () => {
    const [isAdd, setAdd] = useState(false)
    const [currentLink, setCurrentLink] = useState()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(url + 'getLinks')
            .then(response => response.json())
            .then(data => setData(data));

    }, [isAdd])
    const columns = [
        {
            key: '1',
            title: 'Категория',
            dataIndex: 'category',
        },
        {
            key: '2',
            title: 'Название',
            dataIndex: 'title',
        },
        {
            key: '3',
            title: 'Управление ссылками',
            render: (record) => {
                return (<div className='buttons-container'>
                    <Button className='font-buttons table-buttons' onClick={() => {
                        setCurrentLink(record)
                        setAdd(true)
                    }} type="primary">Редактировать</Button>
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
        deleteLinkFunc(record.title)
        setData((data) => {
            return data.filter((item) => item.title != record.title)
        })
    }
    return (
        <div className='links-container'>
            {isAdd ?
                <LinkAdd setCurrentLink={setCurrentLink} itemBD={currentLink} setAdd={setAdd} />
                :
                <div>
                    <div className='flex-60'>
                        <div className='title-links-list'>Список ссылок</div>
                        <Button className='font-buttons p13-30' onClick={() => setAdd(true)} type="primary">Добавить новую ссылку</Button>
                    </div>

                    <Table columns={columns} dataSource={data} pagination={false} scroll={{ y: 600 }} />
                </div>
            }
        </div>
    );
};

export default LinksPage;