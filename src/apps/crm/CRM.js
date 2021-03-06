import { Card } from 'antd'

export default function CRM() {
    return (
        <Card title="Card title">
            <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
              Inner Card content
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type="inner"
              title="Inner Card title"
              extra={<a href="#">More</a>}
            >
              Inner Card content
            </Card>
          </Card>
    );
}