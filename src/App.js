import OutterContainer from './Containers'
import GlobalStyle from './styles/index'
import { ContextProvider } from './context'


function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <ContextProvider>
      <div className="App">
        <OutterContainer />
        <GlobalStyle />
      </div>
    </ContextProvider>
  );
}

export default App;
