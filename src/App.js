import { Provider } from 'react-redux';
import store from './lib/store';

import InboxScreen from './components/InboxScreen/InboxScreen';
import './index.css';

function App() {
  setTimeout(() => console.log(store.getState()), 5000);
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
