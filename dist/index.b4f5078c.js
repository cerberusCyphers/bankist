// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})(
  {
    '5EjNN': [
      function (require, module, exports) {
        var HMR_HOST = null;
        var HMR_PORT = 1234;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = 'd751713988987e9331980363e24189ce';
        module.bundle.HMR_BUNDLE_ID = 'd231a23f43d60e28ed500b93b4f5078c';
        // @flow
        /*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
        /*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
        var OVERLAY_ID = '__parcel__error__overlay__';
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData = undefined;
        }
        module.bundle.Module = Module;
        var checkedAssets /*: {|[string]: boolean|}*/,
          acceptedAssets /*: {|[string]: boolean|}*/,
          /*: {|[string]: boolean|}*/
          assetsToAccept;
        function getHostname() {
          return (
            HMR_HOST ||
            (location.protocol.indexOf('http') === 0
              ? location.hostname
              : 'localhost')
          );
        }
        function getPort() {
          return HMR_PORT || location.port;
        }
        // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== 'undefined'
        ) {
          var hostname = getHostname();
          var port = getPort();
          var protocol =
            HMR_SECURE ||
            (location.protocol == 'https:' &&
              !/localhost|127.0.0.1|0.0.0.0/.test(hostname))
              ? 'wss'
              : 'ws';
          var ws = new WebSocket(
            protocol + '://' + hostname + (port ? ':' + port : '') + '/'
          );
          // $FlowFixMe
          ws.onmessage = function (event /*: {data: string, ...}*/) {
            checkedAssets = {
              /*: {|[string]: boolean|}*/
            };
            acceptedAssets = {
              /*: {|[string]: boolean|}*/
            };
            assetsToAccept = [];
            var data = /*: HMRMessage*/ JSON.parse(event.data);
            if (data.type === 'update') {
              // Remove error overlay if there is one
              removeErrorOverlay();
              let assets = data.assets.filter(
                asset => asset.envHash === HMR_ENV_HASH
              );
              // Handle HMR Update
              var handled = false;
              assets.forEach(asset => {
                var didAccept =
                  asset.type === 'css' ||
                  (asset.type === 'js' &&
                    hmrAcceptCheck(
                      module.bundle.root,
                      asset.id,
                      asset.depsByBundle
                    ));
                if (didAccept) {
                  handled = true;
                }
              });
              if (handled) {
                console.clear();
                assets.forEach(function (asset) {
                  hmrApply(module.bundle.root, asset);
                });
                for (var i = 0; i < assetsToAccept.length; i++) {
                  var id = assetsToAccept[i][1];
                  if (!acceptedAssets[id]) {
                    hmrAcceptRun(assetsToAccept[i][0], id);
                  }
                }
              } else {
                window.location.reload();
              }
            }
            if (data.type === 'error') {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi) {
                let stack = ansiDiagnostic.codeframe
                  ? ansiDiagnostic.codeframe
                  : ansiDiagnostic.stack;
                console.error(
                  '🚨 [parcel]: ' +
                    ansiDiagnostic.message +
                    '\n' +
                    stack +
                    '\n\n' +
                    ansiDiagnostic.hints.join('\n')
                );
              }
              // Render the fancy html overlay
              removeErrorOverlay();
              var overlay = createErrorOverlay(data.diagnostics.html);
              // $FlowFixMe
              document.body.appendChild(overlay);
            }
          };
          ws.onerror = function (e) {
            console.error(e.message);
          };
          ws.onclose = function (e) {
            if (undefined !== 'test') {
              console.warn('[parcel] 🚨 Connection to the HMR server was lost');
            }
          };
        }
        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);
          if (overlay) {
            overlay.remove();
            console.log('[parcel] ✨ Error resolved');
          }
        }
        function createErrorOverlay(diagnostics) {
          var overlay = document.createElement('div');
          overlay.id = OVERLAY_ID;
          let errorHTML =
            '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
          for (let diagnostic of diagnostics) {
            let stack = diagnostic.codeframe
              ? diagnostic.codeframe
              : diagnostic.stack;
            errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
          }
          errorHTML += '</div>';
          overlay.innerHTML = errorHTML;
          return overlay;
        }
        function getParents(bundle, id) {
          /*: Array<[ParcelRequire, string]>*/
          var modules = bundle.modules;
          if (!modules) {
            return [];
          }
          var parents = [];
          var k, d, dep;
          for (k in modules) {
            for (d in modules[k][1]) {
              dep = modules[k][1][d];
              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              ) {
                parents.push([bundle, k]);
              }
            }
          }
          if (bundle.parent) {
            parents = parents.concat(getParents(bundle.parent, id));
          }
          return parents;
        }
        function updateLink(link) {
          var newLink = link.cloneNode();
          newLink.onload = function () {
            if (link.parentNode !== null) {
              // $FlowFixMe
              link.parentNode.removeChild(link);
            }
          };
          newLink.setAttribute(
            'href', // $FlowFixMe
            link.getAttribute('href').split('?')[0] + '?' + Date.now()
          );
          // $FlowFixMe
          link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
          if (cssTimeout) {
            return;
          }
          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]');
            for (var i = 0; i < links.length; i++) {
              // $FlowFixMe[incompatible-type]
              var href = /*: string*/ links[i].getAttribute('href');
              var hostname = getHostname();
              var servedFromHMRServer =
                hostname === 'localhost'
                  ? new RegExp(
                      '^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' +
                        getPort()
                    ).test(href)
                  : href.indexOf(hostname + ':' + getPort());
              var absolute =
                /^https?:\/\//i.test(href) &&
                href.indexOf(window.location.origin) !== 0 &&
                !servedFromHMRServer;
              if (!absolute) {
                updateLink(links[i]);
              }
            }
            cssTimeout = null;
          }, 50);
        }
        function hmrApply(bundle /*: ParcelRequire*/, asset) {
          /*:  HMRAsset*/
          var modules = bundle.modules;
          if (!modules) {
            return;
          }
          if (asset.type === 'css') {
            reloadCSS();
            return;
          }
          let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
          if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [fn, deps];
          } else if (bundle.parent) {
            hmrApply(bundle.parent, asset);
          }
        }
        function hmrAcceptCheck(
          bundle /*: ParcelRequire*/,
          id /*: ParcelRequire*/,
          /*: string*/
          depsByBundle
        ) {
          /*: ?{ [string]: { [string]: string } }*/
          var modules = bundle.modules;
          if (!modules) {
            return;
          }
          if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
            // If we reached the root bundle without finding where the asset should go,
            // there's nothing to do. Mark as "accepted" so we don't reload the page.
            if (!bundle.parent) {
              return true;
            }
            return hmrAcceptCheck(bundle.parent, id, depsByBundle);
          }
          if (checkedAssets[id]) {
            return;
          }
          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToAccept.push([bundle, id]);
          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            return true;
          }
          return getParents(module.bundle.root, id).some(function (v) {
            return hmrAcceptCheck(v[0], v[1], null);
          });
        }
        function hmrAcceptRun(bundle /*: ParcelRequire*/, id) {
          /*: string*/
          var cached = bundle.cache[id];
          bundle.hotData = {};
          if (cached && cached.hot) {
            cached.hot.data = bundle.hotData;
          }
          if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData);
            });
          }
          delete bundle.cache[id];
          bundle(id);
          cached = bundle.cache[id];
          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            cached.hot._acceptCallbacks.forEach(function (cb) {
              var assetsToAlsoAccept = cb(function () {
                return getParents(module.bundle.root, id);
              });
              if (assetsToAlsoAccept && assetsToAccept.length) {
                assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
              }
            });
          }
          acceptedAssets[id] = true;
        }
      },
      {},
    ],
    '4ThtM': [
      function (require, module, exports) {
        'use strict';

        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const btnCloseModal = document.querySelector('.btn--close-modal');
        const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
        const btnScrollTo = document.querySelector('.btn--scroll-to');
        const section1 = document.querySelector('#section--1');
        const nav = document.querySelector('.nav');

        ///////////////////////////////////////
        // Modal window

        const openModal = function (e) {
          e.preventDefault();
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
        };

        const closeModal = function () {
          modal.classList.add('hidden');
          overlay.classList.add('hidden');
        };

        btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

        btnCloseModal.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
          }
        });

        ////////////////////////////////////////////////////////////////
        // Button Scrolling
        btnScrollTo.addEventListener('click', function (e) {
          const s1coords = section1.getBoundingClientRect();
          console.log(s1coords);

          console.log(e.target.getBoundingClientRect());

          console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

          console.log(
            'height/width viewport',
            document.documentElement.clientHeight,
            document.documentElement.clientWidth
          );

          // Scrolling
          // window.scrollTo(
          //   s1coords.left.window + pageXOffset,
          //   s1coords.top + window.pageYOffset
          // );

          // window.scrollTo({
          //   left: s1coords.left.window + pageXOffset,
          //   top: s1coords.top + window.pageYOffset,
          //   behavior: 'smooth',
          // });

          section1.scrollIntoView({ behavior: 'smooth' });
        });

        // Page Navigation
        // 1. Add event listener to common parent element
        // 2. Determine what element originated the event

        document
          .querySelector('.nav__links')
          .addEventListener('click', function (e) {
            e.preventDefault();

            // Matching strategy
            if (e.target.classList.contains('nav__link')) {
              const id = e.target.getAttribute('href');
              document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
            }
          });

        // Tabbed component
        const tabs = document.querySelectorAll('.operations__tab');
        const tabsContainer = document.querySelector(
          '.operations__tab-container'
        );
        const tabsContent = document.querySelectorAll('.operations__content');

        tabsContainer.addEventListener('click', function (e) {
          const clicked = e.target.closest('.operations__tab');

          // Guard clause
          if (!clicked) return;

          // Remove active classes
          tabs.forEach(t => t.classList.remove('operations__tab--active'));
          tabsContent.forEach(c =>
            c.classList.remove('operations__content--active')
          );

          // Activate tab
          clicked.classList.add('operations__tab--active');

          // Active content area
          document
            .querySelector(`.operations__content--${clicked.dataset.tab}`)
            .classList.add('operations__content--active');
        });

        // Menu fade animation
        const handleHover = function (e, opacity) {
          if (e.target.classList.contains('nav__link')) {
            const link = e.target;
            const siblings = link
              .closest('.nav')
              .querySelectorAll('.nav__link');
            const logo = link.closest('.nav').querySelector('img');
            siblings.forEach(el => {
              if (el !== link) el.style.opacity = this;
            });
            logo.style.opacity = this;
          }
        };

        // Passing an "argument" into handle
        nav.addEventListener('mouseover', handleHover.bind(0.5));
        nav.addEventListener('mouseout', handleHover.bind(1));

        // Sticky naivgation
        /*
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

        // Sticky navigation: Intersection Observer API
        /*
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/

        const headerNav = document.querySelector('.header');
        const navHeight = nav.getBoundingClientRect().height;

        const stickyNav = function (entries) {
          const [entry] = entries;
          if (!entry.isIntersecting) nav.classList.add('sticky');
          else nav.classList.remove('sticky');
        };

        const headerObserver = new IntersectionObserver(stickyNav, {
          root: null,
          threshold: 0,
          rootMargin: `-${navHeight}px`,
        });

        headerObserver.observe(headerNav);

        // Reveal Sections

        const allSections = document.querySelectorAll('.section');

        const revealSection = function (entries, observer) {
          const [entry] = entries;

          if (!entry.isIntersecting) return;

          entry.target.classList.remove('section--hidden');
          observer.unobserve(entry.target);
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
          root: null,
          threshold: 0.15,
        });

        allSections.forEach(function (section) {
          sectionObserver.observe(section);
          section.classList.add('section--hidden');
        });

        // Lazy Loading Images

        const imgTargets = document.querySelectorAll('img[data-src]');

        const loadImg = function (entries, observer) {
          const [entry] = entries;

          if (!entry.isIntersecting) return;

          // Replace src with data-src
          entry.target.src = entry.target.dataset.src;

          entry.target.addEventListener('load', function () {
            entry.target.classList.remove('lazy-img');
          });

          observer.unobserve(entry.target);
        };

        const imgObserver = new IntersectionObserver(loadImg, {
          root: null,
          threshold: 0,
          rootMargin: '-200px',
        });
        imgTargets.forEach(img => imgObserver.observe(img));

        // Slider
        const slider = function () {
          const slides = document.querySelectorAll('.slide');
          const btnLeft = document.querySelector('.slider__btn--left');
          const btnRight = document.querySelector('.slider__btn--right');
          const dotContainer = document.querySelector('.dots');

          let curSlide = 0;
          const maxSlide = slides.length;

          // Functions
          const createDots = function () {
            slides.forEach(function (_, i) {
              dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
              );
            });
          };

          const activateDot = function (slide) {
            document
              .querySelectorAll('.dots__dot')
              .forEach(dot => dot.classList.remove('dots__dot--active'));

            document
              .querySelector(`.dots__dot[data-slide="${slide}"]`)
              .classList.add('dots__dot--active');
          };

          const goToSlide = function (slide) {
            slides.forEach(
              (s, i) =>
                (s.style.transform = `translateX(${100 * (i - slide)}%)`)
            );
          };

          // Next Slide

          const nextSlide = function () {
            if (curSlide === maxSlide - 1) {
              curSlide = 0;
            } else {
              curSlide++;
            }
            goToSlide(curSlide);
            activateDot(curSlide);
          };

          const prevSlide = function () {
            if (curSlide === 0) {
              curSlide = maxSlide - 1;
            } else {
              curSlide--;
            }
            goToSlide(curSlide);
            activateDot(curSlide);
          };

          const init = function () {
            goToSlide(0);
            createDots();
            activateDot(0);
          };

          init();

          // Event Handlers
          btnRight.addEventListener('click', nextSlide);
          btnLeft.addEventListener('click', prevSlide);

          document.addEventListener('keydown', function (e) {
            // 2 ways of writing this
            if (e.key === 'ArrowLeft') prevSlide();
            e.key === 'ArrowRight' && nextSlide();
          });

          dotContainer.addEventListener('click', function (e) {
            if (e.target.classList.contains('dots__dot')) {
              const { slide } = e.target.dataset;
              goToSlide(slide);
              activateDot(slide);
            }
          });
        };
        slider();
        ////////////////////////////////////////////////
        ////////////////////////////////////////////////
        /*
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');

// console.log(allSection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

//* Creating and Inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // cannot be in 2 places at once.  append overrides since comes second.
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//* Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//* Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
*/
        /*
console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//* Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//! Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//* Data Attributes
console.log(logo.dataset.versionNumber);

//* Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

//! Don't use
logo.className = 'jonas';


const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// };

//* Bubbling and Capturing
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);

  // Stop propogation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target);
  } // , true = will catch event during capture phase
);
*/
        /*
const h1 = document.querySelector('h1');

// Going Downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'orange';
h1.lastElementChild.style.color = 'purple';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
        /*
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// Only use for necessary reasons , such as incomplete forms.
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
*/
      },
      {},
    ],
  },
  ['5EjNN', '4ThtM'],
  '4ThtM',
  'parcelRequire0221'
);

//# sourceMappingURL=index.b4f5078c.js.map
