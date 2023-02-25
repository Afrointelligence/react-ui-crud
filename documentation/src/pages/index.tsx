import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div className="">
          <div className="flex">
              <div className="pt-32 max-w-4xl pl-2 sm:pl-6 lg:pl-56">
                  <div className="mb-8 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-600">
                      Move quickly
                  </div>
                  <div className="mb-8 pr-12 font-extrabold text-7xl">
                      while remaining flexible
                  </div>
                  <div className="w-96 pr-12 pb-12">
                      Fully accessible UI form and list components, designed to integrate beautifully with Tailwind CSS.
                  </div>
                  <div className="flex space-x-4 items-center pr-48">
                      <Link
                          className="bg-blue-700 text-white py-3 px-4 rounded-lg"
                          to="/docs/intro">
                          Get started
                      </Link>
                      <div className="grow bg-gray-100 border border-gray-300 px-4 py-3 text-gray-800 rounded-lg text-md">
                          <code>npm i react-ui-crud</code>
                      </div>
                  </div>
              </div>
              <div className="grow bg-gray-100 p-8">
                  <iframe src="https://codesandbox.io/embed/email-login-n1zyx9?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                      // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                          style={{width: '100%', height: 500, border: 0, borderRadius: 4, overflow: "hidden"}}
                          title="email-login"
                          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  ></iframe>
              </div>
          </div>
      </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
