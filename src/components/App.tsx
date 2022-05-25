import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

interface Props {
  children: any;
}

const App: React.FC<Props> = (Props) => {
  return (
    <Provider {...Props.children} store={store}>
      <div>
        <h1>Search For a Package </h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
