import React, { useEffect, useState } from 'react';
import './style.sass'
import { Table, Button, Popconfirm } from 'antd';
import { url } from '../../API/url';


const Feedback = () => {
    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        fetch(url + 'getFeedback')
            .then(res => res.json())
            .then(data => {
                setFeedback(data)
            })
    }, [])
    function onDelete(record) {
        deleteFeedback(record.contact)
        setFeedback((data) => {
            return data.filter((item) => item._id != record._id)
        })
    }
    function deleteFeedback(contact) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contact })
        };
        fetch(url + 'deleteFeedback', requestOptions)
            .then(response => response.json())
    }
    const columns = [
        {
            key: '1',
            title: 'Дата',
            dataIndex: 'date'
        },
        {
            key: '2',
            title: 'Контакт',
            dataIndex: 'contact'
        },
        {
            key: '3',
            title: 'Сообщение',
            dataIndex: 'message'
        },
        {
            key: '4',
            title: 'Удаление',
            render: (record) => {
                return (<div className='buttons-container'>
                    <Popconfirm
                        title="удалить"
                        description="Вы уверены что хотите удалить?"
                        onConfirm={() => onDelete(record)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </div>)
            },
        },
    ]
    return (
        <div>
            <Table columns={columns} dataSource={feedback} pagination={false} scroll={{ y: 600 }} />
        </div>
    );
};

export default Feedback;