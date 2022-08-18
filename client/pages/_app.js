import '../styles/globals.scss'

import { Provider } from 'react-redux'
import {store, wrapper} from '../redux/store'
import { ToastContainer } from "react-toastify";
function App({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <ToastContainer
          position="top-right" 
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(App) 
