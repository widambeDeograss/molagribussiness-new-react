// components/SocialMediaModal.tsx

import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import {BASE_URL} from "../constants/BaseUrl";

const { Option } = Select;

interface SocialMediaModalProps {
    visible: boolean;
    onClose: () => void;
}

const SocialMediaModal: React.FC<SocialMediaModalProps> = ({ visible, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [imageBase64, setImageBase64] = useState<string | null>(null);

    const handleImageChange = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result) {
                setImageBase64(reader.result.toString());
            }
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            await axios.post(BASE_URL + '/api/social-media', {
                ...values,
                image: imageBase64,
            });
            message.success('Social media post created successfully!');
            onClose();
        } catch (error) {
            message.error('Failed to create social media post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Create Social Media Post"
            visible={visible}
            onCancel={onClose}
            footer={null}
        >
            <Form layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please enter the title' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name="url"
                    label="URL"
                    rules={[{ required: true, message: 'Please enter the URL' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="platform"
                    label="Platform"
                    rules={[{ required: true, message: 'Please select the platform' }]}
                >
                    <Select>
                        <Option value="instagram">Instagram</Option>
                        <Option value="twitter">Twitter</Option>
                        <Option value="youtube">YouTube</Option>
                        <Option value="ticktok">TickTok</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="image"
                    label="Image"
                    rules={[{ required: true, message: 'Please upload an image' }]}
                >
                    <Upload
                        beforeUpload={(file) => {
                            handleImageChange(file);
                            return false;
                        }}
                        showUploadList={false}
                    >
                        <Button icon={<UploadOutlined />}>Upload Image</Button>
                    </Upload>
                    {imageBase64 && <img src={imageBase64} alt="Uploaded" style={{ marginTop: 10, maxWidth: '100%' }} />}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} className="bg-green-800">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default SocialMediaModal;
