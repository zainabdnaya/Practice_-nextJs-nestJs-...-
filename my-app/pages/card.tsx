import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


export default function _card() {

    return (
        <Card
            style={ { } }
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
            />
        </Card>
    )
}