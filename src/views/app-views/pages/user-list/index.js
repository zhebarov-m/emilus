import React, {useEffect, useState} from 'react';
import {Card, Table, Tag, Tooltip, message, Button, Spin} from 'antd';
import {EyeOutlined, DeleteOutlined, FormOutlined} from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import axios from "axios";
import CustomLoader from "../../../../components/shared-components/Loader";
import {Link} from "react-router-dom";

const API_URL = 'https://e089d04403499ee1.mokky.dev/users'

const Index = () => {
    const [users, setUsers] = useState([]);
    const [userProfileVisible, setUserProfileVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            setLoading(true); // начало загрузки
            const {data} = await axios.get(API_URL);
            setUsers(data);
        } catch (error) {
            console.error('Ошибка при получении списка пользователей', error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        setTimeout(() => {
            fetchUsers()
        }, 500)
    }, []);

    const deleteUser = (userId) => {
        setUsers((prevUsers) => prevUsers.filter(item => item.id !== userId));
        message.success({content: `Deleted user ${userId}`, duration: 2});
    }

    const showUserProfile = (userInfo) => {
        setUserProfileVisible(true);
        setSelectedUser(userInfo);
    };

    const closeUserProfile = () => {
        setUserProfileVisible(false);
        setSelectedUser(null);
    }

    const columns = [
        {
            title: 'User',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Role',
            dataIndex: 'role',
            sorter: {
                compare: (a, b) => a.role.length - b.role.length,
            },
        },
        {
            title: 'Last online',
            dataIndex: 'lastOnline',
            render: date => (
                <span>{moment.unix(date).format("MM/DD/YYYY")} </span>
            ),
            sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: status => (
                <Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>{status}</Tag>
            ),
            sorter: {
                compare: (a, b) => a.status.length - b.status.length,
            },
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="Edit">
                        <Link to={`/app/edit-profile/${elm.id}`}>
                            <Button type="primary" className="mr-2" icon={<FormOutlined/>} onClick={() => {

                            }} size="small"/>
                        </Link>
                    </Tooltip>
                    <Tooltip title="View">
                        <Button type="primary" className="mr-2" icon={<EyeOutlined/>} onClick={() => {
                            showUserProfile(elm)
                        }} size="small"/>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button danger icon={<DeleteOutlined/>} onClick={() => {
                            deleteUser(elm.id)
                        }} size="small"/>
                    </Tooltip>
                </div>
            )
        }
    ];


    if (loading) {
        return <CustomLoader isLoading={loading} message="Загрузка данных..."/>
    }

    return (
        // <Spin spinning={loading} tip="Загрузка данных...">
        <Card bodyStyle={{padding: '0px'}}>
            <Table columns={columns} dataSource={users} rowKey="id"/>
            <UserView data={selectedUser} visible={userProfileVisible} close={closeUserProfile}/>
        </Card>
        // </Spin>
    );
}

export default Index;
