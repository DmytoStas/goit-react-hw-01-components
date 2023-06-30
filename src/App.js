import { Global, css } from '@emotion/react';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #f6f6f6;
            padding: 10px 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <Profile {...user} />;
      <Statistics title={'Upload stats'} stats={data} />
    </>
  );
}

export default App;
