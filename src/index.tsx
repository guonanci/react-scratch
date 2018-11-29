import * as React from 'react' // difference in option between TypeScript and Babel on handling CommonJS modules.
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import routes from '@/routes'
import moment from 'moment'
import { Menu, Icon, LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

import '@/styles/common.scss'
import '@/icomoon/style.css'

import store from './store'


moment.locale('zh-cn')

const { SubMenu } = Menu
const MenuItemGroup = Menu.ItemGroup

const App = (
  <Router>
    <Provider store={store}>
      <LocaleProvider locale={zhCN}>
        <div className='flexWrapper'>
          <Menu
            theme='dark'
            style={{ width: 256, height: innerHeight }}
            defaultSelectedKeys={['react-proposal']}
            defaultOpenKeys={['react-hooks']}
            mode='inline'
          >
            <SubMenu key='react' title={<span><span className='icon-react pr1' />React</span>}>
              <MenuItemGroup key='react-proposal' title='Proposal'>
                <Menu.Item key='react-hooks'>
                  <Link to='/react/hooks'>Hooks</Link>
                </Menu.Item>
                <Menu.Item key='react-lifecycle'>
                  <Link to='/react/lifecycle'>Lifecycle</Link>
                </Menu.Item>
                <Menu.Item key='react-async-rendering'>
                  <Link to='/react/asyncRendering'>AsyncRendering</Link>
                </Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup key='react-state-props' title='State & Props'>
                <Menu.Item key='react-lift-state-up'>
                  <Link to='/react/liftStateUp'>Lifting State up</Link>
                </Menu.Item>
                <Menu.Item key='4'>Option 4</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup key='react-hoc' title='HOC'>
                <Menu.Item key='33'>Option 3</Menu.Item>
                <Menu.Item key='44'>Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu key='sub2' title={<span><Icon type='appstore' /><span>TypScript</span></span>}>
              <Menu.Item key='5'>Option 5</Menu.Item>
              <Menu.Item key='6'>Option 6</Menu.Item>
              <SubMenu key='sub3' title='Submenu'>
                <Menu.Item key='7'>Option 7</Menu.Item>
                <Menu.Item key='8'>Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key='sub3' title={<span><Icon type='setting' /><span>Immutable.js</span></span>}>
              <Menu.Item key='9'>Option 9</Menu.Item>
              <Menu.Item key='10'>Option 10</Menu.Item>
              <Menu.Item key='11'>Option 11</Menu.Item>
              <Menu.Item key='12'>Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key='sub4' title={<span><Icon type='setting' /><span>Webpack</span></span>}>
              <Menu.Item key='9'>Option 9</Menu.Item>
              <Menu.Item key='10'>Option 10</Menu.Item>
              <Menu.Item key='11'>Option 11</Menu.Item>
              <Menu.Item key='12'>Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key='sub5' title={<span><Icon type='setting' /><span>Redux</span></span>}>
              <Menu.Item key='9'>Option 9</Menu.Item>
              <Menu.Item key='10'>Option 10</Menu.Item>
              <Menu.Item key='11'>Option 11</Menu.Item>
              <Menu.Item key='12'>Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key='sub6' title={<span><Icon type='setting' /><span>Rxjs</span></span>}>
              <Menu.Item key='9'>Option 9</Menu.Item>
              <Menu.Item key='10'>Option 10</Menu.Item>
              <Menu.Item key='11'>Option 11</Menu.Item>
              <Menu.Item key='12'>Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key='sub7' title={<span><Icon type='setting' /><span>Reselect</span></span>}>
              <Menu.Item key='9'>Option 9</Menu.Item>
              <Menu.Item key='10'>Option 10</Menu.Item>
              <Menu.Item key='11'>Option 11</Menu.Item>
              <Menu.Item key='12'>Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key='sub8' title={<span><Icon type='setting' /><span>So on...</span></span>}>
              <Menu.Item key='9'>Option 9</Menu.Item>
              <Menu.Item key='10'>Option 10</Menu.Item>
              <Menu.Item key='11'>Option 11</Menu.Item>
              <Menu.Item key='12'>Option 12</Menu.Item>
            </SubMenu>
          </Menu>
          <div className='pageContent'>
            {routes.map((route, index) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </div>
        </div>

      </LocaleProvider>
    </Provider>
  </Router>
)

render(App, document.getElementById('app'))