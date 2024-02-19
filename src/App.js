// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={UserList} />
    //     <Route path="/user/:username" component={UserDetails} />
    //   </Switch>
    // </Router>
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<UserList/>} />
          <Route path="/user/:username" element={<UserDetail/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
