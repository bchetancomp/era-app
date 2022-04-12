import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
const { Paragraph } = Typography;

export default function CLM() {

    /**
     * onClick handler function which tried to do everything in one go, which freezes event loop for several seconds,
     * during which page becomes unresponsive for user clicks on buttons, etc.
     */
    function heavyOperation() {
        function checkPrime(number) {
            let isPrime = true;
        	// looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                //console.log(`${number} is a prime number`);
        		return true;
            } else {
                //console.log(`${number} is a not prime number`);
        		return false;
            }

        }
        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }
        let nums = [];
        let primes = [];
        function generateRandomNumbers(n) {
            for(let i =0; i< n; i++){
                nums[i] = getRandomInt(99000);
            }
        }
        generateRandomNumbers(1200000);
        for(let j = 0; j<nums.length; j++){
        	var isPrime = checkPrime(nums[j]);
        	if(isPrime){
        		primes.push(nums[j]);
        	}
        }
        console.log(nums.length);
        console.log(primes.length);
    }

    /**
     * onClick handler function does processing in smaller chunks in a async way, which allows event loop to execute other UI events to run ,
     * hence page becomes responsive for user clicks on buttons, etc.
     */
    function timeSlicedHeavyOperation() {
        function checkPrime(number) {
            let isPrime = true;
            // looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                //console.log(`${number} is a prime number`);
                return true;
            } else {
                //console.log(`${number} is a not prime number`);
                return false;
            }

        }
        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }
        let nums = [];
        let primes = [];
        function generateRandomNumbers(n) {
            for(let i =0; i< n; i++){
                nums[i] = getRandomInt(99000);
            }
        }
        generateRandomNumbers(1200000);
        var startIndex = 0;
        var numsSize = 10000;
        var j;

        /*  chuck of work, processed in different time slices on the event loop */
        function timeSliceOperation(start, size) {
            for(let j = start; j<start+size; j++){
                var isPrime = checkPrime(nums[j]);
                if(isPrime){
                    primes.push(nums[j]);
                }
            }
        }

        var intervalId = setInterval(function slice(){
            timeSliceOperation(startIndex, numsSize);
            startIndex += numsSize;
            if(startIndex > 1200000) {
                clearInterval(intervalId);

                console.log(nums.length);
                console.log(primes.length);
            }
        }, 100);

    }

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );

    const DropdownMenu = () => (
      <Dropdown key="more" overlay={menu} placement="bottomRight">
        <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
      </Dropdown>
    );

    const routes = [
      {
        path: 'index',
        breadcrumbName: 'First-level Menu',
      },
      {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
      },
      {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
      },
    ];

    const IconLink = ({ src, text }) => (
      <a className="example-link">
        <img className="example-link-icon" src={src} alt={text} />
        {text}
      </a>
    );

    const content = (
      <>
        <Paragraph>
          Ant Design interprets the color system into two levels: a system-level color system and a
          product-level color system.
        </Paragraph>
        <Paragraph>
          Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
          easier for designers to have a clear psychological expectation of color when adjusting colors,
          as well as facilitate communication in teams.
        </Paragraph>
        <div>
          <IconLink
            src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
            text="Quick Start"
          />
          <IconLink
            src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
            text=" Product Info"
          />
          <IconLink
            src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
            text="Product Doc"
          />
        </div>
      </>
    );

    const Content = ({ children, extraContent }) => (
      <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
      </Row>
    );

    return (
        <PageHeader
            title="Title"
            className="site-page-header"
            subTitle="This is a subtitle"
            tags={<Tag color="blue">Running</Tag>}
            extra={[
              <Button key="3">Operation</Button>,
              <Button key="2" onClick={timeSlicedHeavyOperation}>Sliced Heavy Op</Button>,
              <Button key="1" type="primary" onClick={heavyOperation}>
                Heavy Op
              </Button>,
              <DropdownMenu key="more" />,
            ]}
            avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
            breadcrumb={{ routes }}
          >
            <Content
              extraContent={
                <img
                  src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                  alt="content"
                  width="100%"
                />
              }
            >
              {content}
            </Content>
          </PageHeader>
    );
}