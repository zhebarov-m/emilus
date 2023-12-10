import React, {useEffect, useState} from 'react';
import {Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import {useParams} from "react-router-dom";
import axios from "axios";

const API_URL = 'https://e089d04403499ee1.mokky.dev/users'

const EditProfile = () => {
    const {userId} = useParams();
    console.log(userId)
    const avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        userName: '',
        dateOfBirth: null,
        phoneNumber: '',
        website: '',
        address: '',
        city: '',
        postcode: '',
    });

    console.log(userData)
    const fetchUserData = async () => {
        try {
            const {data} = await axios.get(`${API_URL}/${userId}`)
            setUserData(prevState => ({
                ...data
            }))
        } catch (error) {
            console.error('Ошибка при получении пользователя', error)
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [userId]);

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const onFinish = (values) => {
        const key = 'updatable';
        message.loading({content: 'Updating...', key});
        setTimeout(() => {
            setUserData((prevState) => ({
                ...prevState,
                name: values.name,
                email: values.email,
                userName: values.userName,
                dateOfBirth: values.dateOfBirth,
                phoneNumber: values.phoneNumber,
                website: values.website,
                address: values.address,
                city: values.city,
                postcode: values.postcode,
            }));
            message.success({content: 'Done!', key, duration: 2});
        }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onUploadAavater = (info) => {
        const key = 'updatable';
        if (info.file.status === 'uploading') {
            message.loading({content: 'Uploading...', key, duration: 1000});
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (imageUrl) =>
                setUserData((prevState) => ({
                    ...prevState,
                    avatarUrl: imageUrl,
                })),
            );
            message.success({content: 'Uploaded!', key, duration: 1.5});
        }
    };

    const onRemoveAvater = () => {
        setUserData((prevState) => ({
            ...prevState,
            avatarUrl: '',
        }));
    };

    const { name, email, role, dateOfBirth, phoneNumber, website, address, city, postcode, img } = userData;

    return (
        <>
            <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                <Avatar size={90} src={img} icon={<UserOutlined/>}/>
                <div className="ml-md-3 mt-md-0 mt-3">
                    <Upload onChange={onUploadAavater} showUploadList={false} action={avatarEndpoint}>
                        <Button type="primary">Change Avatar</Button>
                    </Upload>
                    <Button className="ml-2" onClick={onRemoveAvater}>
                        Remove
                    </Button>
                </div>
            </Flex>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={{
                        name,
                        email,
                        username: role,
                        dateOfBirth,
                        phoneNumber,
                        website,
                        address,
                        city,
                        postcode,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!'
                                        }]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Date of Birth"
                                        name="dateOfBirth"
                                    >
                                        <DatePicker className="w-100"/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Phone Number"
                                        name="phoneNumber"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Website"
                                        name="website"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label="Address"
                                        name="address"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="City"
                                        name="city"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Post code"
                                        name="postcode"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
};

export default EditProfile;

