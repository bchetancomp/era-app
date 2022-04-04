import { useNavigate } from 'react-router-dom';
import {Card} from 'antd';

const {Meta} = Card;

export default function AppsListPage() {
    const navigate = useNavigate();

    function onAppClick(card) {
        console.log('onAppClick');
        navigate(this.link);
    }
    const apps = [{
                    name: 'Visit Count',
                    id: 'vc',
                    description: 'App analytics page',
                    author: '',
                    image: 'https://images.unsplash.com/photo-1478432780021-b8d273730d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    disabled: false,
                    link: '/visitcount'
                },{
                name: 'CRM',
                id: 'crm',
                description: 'Customer Relationship Management',
                author: '',
                image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                disabled: false,
                link: '/crm'
            }, {
                name: 'ERP',
                id: 'erp',
                description: 'Enterprise Resource Planning',
                author: '',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                disabled: false,
                link: '/erp'
            }, {
                name: 'SIEM',
                id: 'siem',
                description: 'Security information and event management',
                author: '',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                disabled: false,
                link: '/siem'
            }, {
                name: 'CPQ',
                id: 'cpq',
                description: 'Configure, Price, Quote',
                author: '',
                image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                disabled: false,
                link: '/cpq'
            }, {
                name: 'ITSM',
                id: 'itsm',
                description: 'IT Service Management',
                author: '',
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                disabled: false,
                link: '/itsm'
            }, {
                name: 'CLM',
                id: 'clm',
                description: 'Contract lifecycle management',
                author: '',
                image: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
                disabled: false,
                link: '/clm'
            }, {
                name: 'ITS',
                id: 'its',
                description: 'IT Security',
                author: '',
                image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                disabled: false,
                link: '/its'
            }];

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        { apps.map((app)=> {
           return (<Card
                  key={app.id}
                  hoverable
                  style={{ width: 200, margin: '20px' }}
                  cover={<img alt={app.description} src={app.image} />}
                  onClick={  onAppClick.bind(app)}
                >
                  <Meta title={app.name} description={app.description} />
            </Card>);
        }) }
        </div>
    );
}