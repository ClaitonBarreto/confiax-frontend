import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore,Store } from 'redux'
import { Provider } from 'react-redux'

import { notificationReducer } from './context/reducers/notification'
import GlobalStyle from './globalStyle'
import Notification from './components/Notification'

import HomePage from './pages/Home'
import Users from './pages/Users'
import CreateUser from './pages/CreateUser'
import ShowUser from './pages/ShowUser'

const store: Store<NotificationState, NotificationActions> & {
  dispatch: DispatchType
} = createStore(notificationReducer)

function App() {

  return (
    <>
      <Provider store={store}>
        <Notification />
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={Users} />
            <Route path="/users/create" component={CreateUser} />
            <Route path="/users/:id" component={ShowUser} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
