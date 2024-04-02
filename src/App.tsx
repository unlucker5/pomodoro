
import './App.css';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { MainPage } from './shared/MainPage';
import { Todo } from './shared/Todo';
import { Timer } from './shared/Timer';
import { StatisticsPage } from './shared/StatisticsPage';
import { StatisticsGrid } from './shared/StatisticsGrid';
import { StatisticsHeader } from './shared/StatisticsHeader';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Content>
          <Routes>
            <Route path='/' element={    
            <MainPage>
            <Todo/>
            <Timer/>
            </MainPage>}>
          </Route>
          <Route path="/statistics" element = {
            <StatisticsPage>
            <StatisticsHeader/>
            <StatisticsGrid/>
          </StatisticsPage>
          }>
          </Route>
          </Routes>
        </Content>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
