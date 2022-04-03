import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default function CPQ() {
    return (
        <Card title="Card Title">
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              Content
            </Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
    );
}