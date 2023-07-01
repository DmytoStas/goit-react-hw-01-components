import { Global, css } from '@emotion/react';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendList from 'components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          body {
            background-color: #f6f6f6;
            padding: 30px 0;
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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
