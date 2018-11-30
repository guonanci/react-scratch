import * as React from 'react' // difference in option between TypeScript and Babel on handling CommonJS modules.
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import routes from '@/routes'
import imgRxJS from '@/assets/RxJS.png'
import imgTypeScript from '@/assets/TypeScript.png'
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
                <Menu.Item key='4'>Diff</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup key='react-hoc' title='HOC'>
                <Menu.Item key='33'>Demo</Menu.Item>
                <Menu.Item key='44'>Classify</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu
              key='sub2'
              title={<span><img className='sidebarImg mr1' src={imgTypeScript} alt='' />TypeScript</span>}
            >
              <Menu.Item key='5'>Option 5</Menu.Item>
              <Menu.Item key='6'>Option 6</Menu.Item>
              <SubMenu key='sub3' title='Submenu'>
                <Menu.Item key='7'>Option 7</Menu.Item>
                <Menu.Item key='8'>Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key='sub3' title={<span><Icon type='facebook' /><span>Immutable.js</span></span>}>
              <Menu.Item key='9'>
                <Link to='/immutable/todos'>Todos</Link>
              </Menu.Item>
              <Menu.Item key='10'>Option 10</Menu.Item>
              <Menu.Item key='11'>Option 11</Menu.Item>
              <Menu.Item key='12'>Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key='sub4' title={<span><span className='icon-webpack pr1' />Webpack</span>}>
              <Menu.Item key='13'>Option 13</Menu.Item>
              <Menu.Item key='14'>Option 14</Menu.Item>
              <Menu.Item key='15'>Option 15</Menu.Item>
              <Menu.Item key='15'>Option 15</Menu.Item>
            </SubMenu>
            <SubMenu key='sub5' title={<span><span className='icon-redux pr1' />Redux</span>}>
              <Menu.Item key='16'>Option 16</Menu.Item>
              <Menu.Item key='17'>Option 17</Menu.Item>
              <Menu.Item key='18'>Option 18</Menu.Item>
              <Menu.Item key='19'>Option 19</Menu.Item>
            </SubMenu>
            <SubMenu key='sub6' title={<span><img className='sidebarImg mr1' src={imgRxJS} alt='' />Rxjs</span>}>
              <Menu.Item key='20'>Option 20</Menu.Item>
              <Menu.Item key='21'>Option 21</Menu.Item>
              <Menu.Item key='22'>Option 22</Menu.Item>
              <Menu.Item key='23'>Option 23</Menu.Item>
            </SubMenu>
            <SubMenu key='sub7' title={<span><Icon type='github' /><span>Reselect</span></span>}>
              <Menu.Item key='24'>Option 24</Menu.Item>
              <Menu.Item key='25'>Option 25</Menu.Item>
              <Menu.Item key='26'>Option 26</Menu.Item>
              <Menu.Item key='27'>Option 27</Menu.Item>
            </SubMenu>
            <SubMenu key='sub8' title={<span><Icon type='menu-unfold' /><span>So on...</span></span>}>
              <Menu.Item key='28'>Option 28</Menu.Item>
              <Menu.Item key='29'>Option 29</Menu.Item>
              <Menu.Item key='30'>Option 30</Menu.Item>
              <Menu.Item key='31'>Option 31</Menu.Item>
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