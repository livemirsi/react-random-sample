// @flow
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import { withWorker } from 'enhancers/withWorker';
import { withSample } from 'enhancers/withSample';
import { compose } from 'utils/compose';

const EnhanceApp = compose(withWorker, withSample)(App);

const root = document.getElementById('my-app');

if (root !== null) {

	ReactDOM.render(<EnhanceApp />, root);

}

