import React from 'react';
import Layout from '@theme/Layout';

const axios = require('axios');

axios.get('https://raw.githubusercontent.com/jackwright-version1/StaticSiteGenerator/master/RREADME.md')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}