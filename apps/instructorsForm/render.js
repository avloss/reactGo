import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import Helmet from 'react-helmet';

import { InstructorsForm } from './containers'
import configureStore from './store'


export default function render(req, res){
  const store = configureStore()
  const componentHTML = createApp(store)
  const headAssets = Helmet.rewind();
  const pageHTML = buildPage({componentHTML, headAssets})
  res.send(pageHTML)
}

const createApp = (store, props = {}) => renderToString(
  <Provider store={store}>
    <InstructorsForm {...props} />
  </Provider>
);


const buildPage = ({ componentHTML, initialState={}, headAssets }) => {
  return `
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="http://redux-form.com/6.6.3/bundle.css">
    <link rel="stylesheet" type="text/css" href="https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css">
     ${headAssets.title.toString()}
     ${headAssets.meta.toString()}
     ${headAssets.link.toString()}
  </head>
  <body>
    <div id="app">Loading..</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    <script type="text/javascript" charset="utf-8" src="/assets/instructorsFormApp.js"></script>
  </body>
</html>`;
};


/*
 <head>
 ${headAssets.title.toString()}
 ${headAssets.meta.toString()}
 ${headAssets.link.toString()}
 ${createTrackingScript()}
 </head>
 <body>
 <div id="app">${componentHTML}</div>
 <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
 ${createAppScript()}
 </body>
 */

if (require.main === module) {
  const store = configureStore()
  const app_html = createApp(store)
  const page_html = buildPage(app_html)
  console.log(page_html)
}