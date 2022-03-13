import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
                heap.load("1207938959");
                `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              window.smartlook||(function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
                })(document);
                smartlook('init', 'cb28b5ce2a151e3e939477198989f631266f57df');
                `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              window['_fs_debug'] = false;
              window['_fs_host'] = 'fullstory.com';
              window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
              window['_fs_org'] = '18YXPM';
              window['_fs_namespace'] = 'FS';
              (function(m,n,e,t,l,o,g,y){
                  if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                  g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
                  o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
                  y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                  g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
                  g.anonymize=function(){g.identify(!!0)};
                  g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
                  g.log = function(a,b){g("log",[a,b])};
                  g.consent=function(a){g("consent",!arguments.length||a)};
                  g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                  g.clearUserCookie=function(){};
                  g.setVars=function(n, p){g('setVars',[n,p]);};
                  g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
                  if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
                  g._v="1.3.0";
              })(window,document,window['_fs_namespace'],'script','user');
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
