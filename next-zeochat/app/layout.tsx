import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zeochat | Worldwide Live Experiences',
  description: 'Zeochat connects prospective students with verified, enrolled students to learn, earn and share valuable campus knowledge via exciting live chats.',
  keywords: 'live chat, live streaming experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="publisher" href="https://www.zeochat.com/" />
        <meta name="ROBOTS" content="ALL" />
        <meta name="ROBOTS" content="NOYDIR" />
        <meta name="ROBOTS" content="NOODP" />
        <meta name="author" content="Zeochat" />
        <meta name="Copyright" content="Copyright (c) 2019-2025, Zeochat" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="canonical" href="#" />
        <link rel="icon" sizes="16x16 32x32 48x48 64x64 128x128" type="image/svg+xml" href="/images/favicon.svg" />
        <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900|Muli:300,400,500,700,900" rel="stylesheet" />
        
        {/* CSS Files */}
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/icomoon.css" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/flexslider.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/fonts/flaticon/font/flaticon.css" />
        <link rel="stylesheet" href="/css/style14ea.css?2192" />
        <link href="/assets/external/widget.css" rel="stylesheet" />
        
        {/* Global Config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.sitekey = '6LdLJrMrAAAAAIy7oqWsZ0Ww_LpNd_iKDAOAsTNe';
              window.apiurl = 'https://zeochat.com/api/v1/';
              window.prefix = 'yA0JuFD6n6zkC1';
              
              // Polyfill for legacy cookie functions
              window.getCookie = function(name) {
                const matches = document.cookie.match(
                  new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\\[\\]\\\\\\/+^])/g, '\\\\$1') + '=([^;]*)')
                );
                return matches ? decodeURIComponent(matches[1]) : '';
              };
              
              window.setCookie = function(name, value, days) {
                var d = new Date();
                d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
                var expires = 'expires=' + d.toUTCString();
                document.cookie = name + '=' + encodeURIComponent(value) + '; ' + expires + '; path=/';
              };
            `,
          }}
        />
      </head>
      <body id="homepage">
        <noscript>
          <style>
            {`
              .zeochat-loader {display:none;}
              body {overflow: hidden;}
              .enable-js {text-align: center;padding:21px 0;font-size:30px;}
            `}
          </style>
          <div className="enable-js">
            Please enable javascript to access Zeochat.
          </div>
        </noscript>
        
        <div className="zeochat-loader"></div>
        <div className="loader"></div>

        {children}

        {/* Load scripts in order using a single script loader */}
        <Script
          id="load-scripts-sequentially"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Wait for DOM to be ready
                function waitForDOM(callback) {
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', callback);
                  } else {
                    callback();
                  }
                }

                waitForDOM(function() {
                  // Add additional delay to ensure content is loaded
                  setTimeout(function() {
                    const scriptsToLoad = [
                      '/js/modernizr-2.6.2.min.js',
                      '/js/js.cookie.min.js',
                      '/js/jquery.min.js',
                      '/js/jquery.easing.1.3.js',
                      '/js/jquery-ui.js',
                      '/js/bootstrap.min.js',
                      '/js/jquery.countTo.js',
                      '/js/jquery.waypoints.min.js',
                      '/js/jquery.flexslider-min.js',
                      '/js/jquery.form.js',
                      '/js/jquery.validate.min.js',
                      '/js/owl.carousel.min.js',
                      '/js/connectb71e.js',
                      '/js/footeremailValidationb71e.js',
                      '/js/main202c.js'
                    ];

                    function loadScript(src, callback) {
                      const script = document.createElement('script');
                      script.src = src;
                      script.async = false;
                      script.onload = callback;
                      script.onerror = function() {
                        console.error('Failed to load script:', src);
                        callback();
                      };
                      document.body.appendChild(script);
                    }

                    function loadAllScripts(index) {
                      if (index < scriptsToLoad.length) {
                        loadScript(scriptsToLoad[index], function() {
                          loadAllScripts(index + 1);
                        });
                      } else {
                        console.log('All scripts loaded successfully');
                      }
                    }

                    loadAllScripts(0);
                  }, 1000); // 1000ms delay to ensure content is loaded
                });
              })();
            `,
          }}
        />

        {/* External Scripts */}
        <Script type="module" src="https://cdn.jsdelivr.net/npm/@mux/mux-player" strategy="lazyOnload" />
        <Script src="https://www.google.com/recaptcha/api.js" async defer />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YP9S5W4C76" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-10856005025" />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YP9S5W4C76');
              gtag('config', 'AW-10856005025');
              gtag('event', 'conversion', {'send_to': 'AW-10856005025/zkS4CMiW2qIDEKH7xbgo'});
            `,
          }}
        />
      </body>
    </html>
  )
}
