/* tslint:disable */

/* -------------------------------------------------- */

/*      Start of Webpack Hot Extension Middleware     */

/* ================================================== */

/*  This will be converted into a lodash templ., any  */

/*  external argument must be provided using it       */

/* -------------------------------------------------- */
(function (window) {
  var injectionContext = {
    browser: null
  };
  (function () {
    ""||(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("webextension-polyfill", ["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.browser = mod.exports;
  }
})(this, function (module) {
  /* webextension-polyfill - v0.5.0 - Thu Sep 26 2019 22:22:26 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({ resolve, reject }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);

                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;

                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({ resolve, reject }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });

              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });

      // Keep track if the deprecation warning has been logged at least once.
      let loggedSendResponseDeprecationWarning = false;

      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;

          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }
              didCallSendResponse = true;
              resolve(response);
            };
          });

          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });

      const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, { resolve, reject });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 })
        }
      };
      const settingMetadata = {
        clear: { minArgs: 1, maxArgs: 1 },
        get: { minArgs: 1, maxArgs: 1 },
        set: { minArgs: 1, maxArgs: 1 }
      };
      apiMetadata.privacy = {
        network: {
          networkPredictionEnabled: settingMetadata,
          webRTCIPHandlingPolicy: settingMetadata
        },
        services: {
          passwordSavingEnabled: settingMetadata
        },
        websites: {
          hyperlinkAuditingEnabled: settingMetadata,
          referrersEnabled: settingMetadata
        }
      };

      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    }

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map
"";
  }).bind(injectionContext)();
  var browser = injectionContext.browser;
  var signals = JSON.parse('{"SIGN_CHANGE":"SIGN_CHANGE","SIGN_RELOAD":"SIGN_RELOAD","SIGN_RELOADED":"SIGN_RELOADED","SIGN_LOG":"SIGN_LOG","SIGN_CONNECT":"SIGN_CONNECT"}');
  var config = JSON.parse('{"RECONNECT_INTERVAL":2000,"SOCKET_ERR_CODE_REF":"https://tools.ietf.org/html/rfc6455#section-7.4.1"}');
  var reloadPage = "true" === "true";
  var wsHost = "ws://localhost:9090";
  var SIGN_CHANGE = signals.SIGN_CHANGE,
      SIGN_RELOAD = signals.SIGN_RELOAD,
      SIGN_RELOADED = signals.SIGN_RELOADED,
      SIGN_LOG = signals.SIGN_LOG,
      SIGN_CONNECT = signals.SIGN_CONNECT;
  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,
      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;
  var extension = browser.extension,
      runtime = browser.runtime,
      tabs = browser.tabs;
  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //

  var formatter = function formatter(msg) {
    return "[ WER: ".concat(msg, " ]");
  };

  var logger = function logger(msg) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
    return console[level](formatter(msg));
  };

  var timeFormatter = function timeFormatter(date) {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }; // ========================== Called only on content scripts ============================== //


  function contentScriptWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref) {
      var type = _ref.type,
          payload = _ref.payload;

      switch (type) {
        case SIGN_RELOAD:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================== Called only on background scripts ============================= //


  function backgroundWorker(socket) {
    runtime.onMessage.addListener(function (action, sender) {
      if (action.type === SIGN_CONNECT) {
        return Promise.resolve(formatter("Connected to Extension Hot Reloader"));
      }

      return true;
    });
    socket.addEventListener("message", function (_ref2) {
      var data = _ref2.data;

      var _JSON$parse = JSON.parse(data),
          type = _JSON$parse.type,
          payload = _JSON$parse.payload;

      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {
        tabs.query({
          status: "complete"
        }).then(function (loadedTabs) {
          loadedTabs.forEach(function (tab) {
            return tab.id && tabs.sendMessage(tab.id, {
              type: SIGN_RELOAD
            });
          });
          socket.send(JSON.stringify({
            type: SIGN_RELOADED,
            payload: formatter("".concat(timeFormatter(new Date()), " - ").concat(manifest.name, " successfully reloaded"))
          }));
          runtime.reload();
        });
      } else {
        runtime.sendMessage({
          type: type,
          payload: payload
        });
      }
    });
    socket.addEventListener("close", function (_ref3) {
      var code = _ref3.code;
      logger("Socket connection closed. Code ".concat(code, ". See more in ").concat(SOCKET_ERR_CODE_REF), "warn");
      var intId = setInterval(function () {
        logger("Attempting to reconnect (tip: Check if Webpack is running)");
        var ws = new WebSocket(wsHost);

        ws.onerror = function () {
          return logger("Error trying to re-connect. Reattempting in ".concat(RECONNECT_INTERVAL / 1000, "s"), "warn");
        };

        ws.addEventListener("open", function () {
          clearInterval(intId);
          logger("Reconnected. Reloading plugin");
          runtime.reload();
        });
      }, RECONNECT_INTERVAL);
    });
  } // ======================== Called only on extension pages that are not the background ============================= //


  function extensionPageWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref4) {
      var type = _ref4.type,
          payload = _ref4.payload;

      switch (type) {
        case SIGN_CHANGE:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================= Bootstraps the middleware =========================== //


  runtime.reload ? extension.getBackgroundPage() === window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();
})(window);
/* ----------------------------------------------- */

/* End of Webpack Hot Extension Middleware  */

/* ----------------------------------------------- *//******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/overlay.ts":
/*!***********************************!*\
  !*** ./src/components/overlay.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var chrome = "\n<svg width=\"19\" height=\"18\" viewBox=\"0 0 19 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18.3032 5.62549H9.5003C7.53289 5.62366 5.9364 7.13313 5.93443 8.997C5.93384 9.57592 6.09043 10.1453 6.38919 10.6503L1.98773 3.49557C5.19358 -0.435247 11.156 -1.15971 15.3052 1.8774C16.6377 2.85277 17.6725 4.14636 18.3032 5.62549Z\" fill=\"#F44336\"/>\n<path d=\"M19 9.00034C18.9956 13.969 14.745 17.9958 9.50037 17.9999C9.10317 18.0013 8.70638 17.9763 8.31293 17.925L12.5877 10.6878C13.5675 9.07192 12.9835 7.00971 11.2815 6.07547C10.7427 5.77993 10.1309 5.62465 9.50828 5.62549H18.3033C18.7656 6.69665 19.0023 7.84312 19 9.00034Z\" fill=\"#FFC107\"/>\n<path d=\"M12.5877 10.6878L8.31294 17.925H8.30504C3.10298 17.3023 -0.581294 12.8024 0.0759579 7.87412C0.288696 6.27898 0.94888 4.76701 1.98782 3.49561L6.38928 10.6503L6.41303 10.6878C7.39456 12.3032 9.57249 12.8588 11.2776 11.929C11.8223 11.632 12.2743 11.2038 12.5877 10.6878Z\" fill=\"#4CAF50\"/>\n<path d=\"M12.5876 10.6877C11.6061 12.303 9.42818 12.8587 7.72308 11.9289C7.17845 11.6319 6.72644 11.2036 6.41291 10.6877L6.38917 10.6502C5.4273 9.02423 6.03891 6.96743 7.75517 6.05619C8.28826 5.77316 8.88922 5.62481 9.50028 5.62537H9.50818C10.1308 5.62453 10.7426 5.7798 11.2814 6.07535C12.9834 7.00962 13.5674 9.07183 12.5876 10.6877Z\" fill=\"#F44336\"/>\n<path d=\"M12.5876 10.6877C11.6061 12.303 9.42818 12.8587 7.72308 11.9289C7.17845 11.6319 6.72644 11.2036 6.41291 10.6877L6.38917 10.6502C5.4273 9.02423 6.03891 6.96743 7.75517 6.05619C8.28826 5.77316 8.88922 5.62481 9.50028 5.62537H9.50818C10.1308 5.62453 10.7426 5.7798 11.2814 6.07535C12.9834 7.00962 13.5674 9.07183 12.5876 10.6877Z\" fill=\"#2196F3\"/>\n<path d=\"M9.48688 12.7503C8.79676 12.7502 8.1188 12.5779 7.52125 12.2508C6.91874 11.9206 6.41834 11.4463 6.07019 10.8754C4.97719 9.08184 5.62583 6.78849 7.51899 5.75301C8.12136 5.42354 8.80477 5.25026 9.50035 5.25061C11.6864 5.24899 13.4599 6.92657 13.4616 8.99753C13.4621 9.65675 13.2792 10.3044 12.9313 10.8754C12.2179 12.0372 10.9057 12.7515 9.48688 12.7503ZM9.50744 6.00057C8.37146 5.99484 7.31976 6.56761 6.75335 7.50051C5.87894 8.93693 6.39923 10.773 7.91545 11.6013C9.43167 12.4297 11.3697 11.9368 12.2441 10.5004C13.1185 9.06559 12.5996 7.23091 11.0851 6.40249C10.6056 6.14024 10.0619 6.00166 9.50822 6.0006H9.50744V6.00057Z\" fill=\"#FAFAFA\"/>\n</svg>\n";
exports.edge = "\n<svg width=\"23\" height=\"22\" viewBox=\"0 0 23 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<rect width=\"23\" height=\"22\" fill=\"url(#pattern0)\"/>\n<defs>\n<pattern id=\"pattern0\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n<use xlink:href=\"#image0\" transform=\"translate(0 -0.0227273) scale(0.000714286)\"/>\n</pattern>\n<image id=\"image0\" width=\"1400\" height=\"1400\" xlink:href=\"data:image/jpeg;base64,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/U0mch01QAK6Awzw5E40+0k+4Mo2WYbgd1IotFJYNFKfGPEmmHVMn0rME2EL1H85Z9NThQHT8epB0TsQ1lj0WnfAbgZaFGTkKmciIImG4bnlSTVg8hlOKTh0Wgegb/AtDyA6ejjovYqKicAcpaxiDO3AkAzDqiNsv6KBwOyIZl6oBMgUdYpOClRxfMjGOiD90xHcr9pIHHVAYf4T3J0cXG0LjunwjcAYqe7kj8fhwIQDMBEk1E/9I/8AZ+Ur/hfhNQo+xTQFNxgamUIRuDhTUSHI6JmAv8RBLCAwK8eGeF9j/dF+WUN5sFL9k+68Q4+FKduSki3C5+hzUwOyT/cy8omHlTn6GiO7AKA9nPkvtL7KVzWJAAGAYf46TUdFNnuhK79Kv+BROXPRr/j0ScObV/wKLOBHapMdkAKD/wA0P//aAAwDAQACAAMAAAAQ888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888884xx3S/f5QrUT4150888888888888888888888888888888888888888888888888888888888888888888888xk9KACS08++tLz8s8+98g+8888888888888888888888888888888888888888888888888888888888888882qf/vJRmIACS08++tx/wD/ALzz8sHTPzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzHcvPf33+8lHYgAJLz7z0vf3zz74kET8HrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzPD7/wA8NT399/vJRuAAS28++vR98+++taP4dq588888888888888888888888888888888888888888888888888wBAAy2//wDDU9/ffzQdqAAtvPvrUffvvuzozoXoe9fPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIQQAAhwAEtv/AHw3v/3+8nC4AJLz761H37p+p+bkBsShHzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz5ysMMEEBMMABLb/xxv8A99/JRKACS8++vd9ojWjeG8PyF41888888888888888888888888888888888888888886O/99PDDBBADKAA2/wDPG/8A338lEwALbz77/wDUXq9i6fgehahr0888888888888888888888888888888888888889s/8A/wD/ANtLDDBACCAA2/8APE//AH+8HYgAL77z2nhdUB0St6FsX/bBnzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzt//AP8A/wD/AP8A/TwwwQAggANv/KV//f6wfgAFvPvvRuuXp+BZHxOxMj+vvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPU/fff/wD/AP8A/wD0sMMAAMABD/8A8J/99/B2oAC++8pXsp6fCbfgadidhchb888888888888888888888888888888886O9Nt99//wD/AP8A9/DDBACDAA+/85X/APfyVagAtvPKe1A5OXJYVhe1Z+BOYdvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPiPffVfff/8A/wD/AP8A8MMEAIMABb/yhf8A9/pB+AAW88Gp+HUg7WVo7Gp4G3fyl288888888888888888888888888888Sd99l999//wD/AP8A/wDwwwQAgwAFv/KF/wD3+lX4ABbyhYWpRdaupNaFx8DnsaznbzzzzzzzzzzzzzzzzzzzzzzzzzzzybCEk2333/8A/wD/AP8A97DDBACCAA+/8tX/APf6VegAFvKlF6VqVFaGWRq6XlwPJe8MPPPPPPPPPPPPPPPPPPPPPPPPPPPL/fffff8A/wD/AP8A/wD97POJACDAAG//APIf/ffwVIAAnvKlnK+qfl06q/FRqa3h+3uIPvPPPPPPPPPPPPPPPPPPPPPPPPLP/wD/AP8A/wD/AP8A+clw2aRLLKpNICv/APyFf/3/ALB+gAC++p22Dor/AFAbK3nVN5KOXpHccvPPPPPPPPPPPPPPPPPPPPPPPKXP/wD/AP8A/wD3Rp3qWClH0kE8qSM0Q4Ar/wB9/hFwACW8+rdWBmppUVUBor8VWXko5Gc8388888888888888888888888F999998RK5qrt8ItB/xBBDAA/rDjLr9/hF+AAG8+8t3cPUo/WXWrop/Z+VUXH6MMQ8888888888888888888888rDDTzypNnsrq50UA9B1tBDDCQf7UrskMTF+gAC+889+V+1rqXURWrqo/rwVabcUjJl18888888888888888888884BBBGMh7UFaqNUUp/j1tNBLD8+h8Do7mPjqACe88+rUDkTrsVUBdrruprIVm9UUVzZ1888888888888888888886ADDLQ6Vj8VGXVUj7XrS8osXf8IX6Xor6ptlF+88+7l61CJ10XWqoon+kr0XWFUUdfl788888888888888888888uAAeGdi4XgLeaFYi/DuGe889/5Gfi5VzqpuGbZ89jN9qZouXWLrqr0VWUXUZafLq1Pfc/88888888888888888883/APNHpWoOwJaqaOK3wrghnLP24Tr1Y2ldlVSiBfoX/PCL1kmSKZFl3FX2G6LbJpWJjHJtPPPPPPPPPPPPPPPPPPLzy/MA3YjI+HxpYJsV/wBb0DSz7MX4d6ar2ommZZm/T/byxUGivRdFxu4iujdZVli3cwo7pTzzzzzzzzzzzzzzzzzzbjOCQ+E4B+Dt59n20PO/a8jTy5I48hk6UbRpi7Znb77zmqvZdo4uyGexdxGq6fZqU/m13Pzzzzzzzzzzzzzzzzzxr95iEf2Izti8PX1n20NP9r8hD67b5qDl7/zz06PJz/8AhB0xYtpkXXcTYrslTaLlwORzDPs888888888888888888VBGM97hKpXv3vD19Z9tLT/b/IQ8uwn98888888s5KUKCABlm2XMQrtv0fQJt0YN2Max1lZ38888888888888888pLyykPP4mvD3v3vD19Z99DT/AG/iEO7/ADzzzzzzzzzxje0M31ZuimuvVNmiebBmzJo83LLCQz/zzzzzzzzzzzzzzzyx7vPGOoxTy8Pe/u8PH1nX0tP9vF7Hzzzzzzzzzzzzx4v3/wAspk3UbtmVSbakRKuyNbxyywo+8888888888888888rbn9dyg0sQ8vDzvb/LR9N19LT5OVc888888888888882+++8TapmVaZt23bs1TOwMbxxzxlX8888888888888888SLMMcWuA0sQ8vDT/AG/y0fedfS8/7vPPPPPPPPPPPPPPLn/PO51GyL5M26pdWDJ24DnM8c883PPPPPPPPPPPPPPPPIMMDFrtrgNLEPPy072/y0fbcUX5tfPPPPPPPPPPPPPPPOM5X75N2GTt0WCZdCJz8DmM8c8ZPPPPPPPPPPPPPPPPPIuMI0vrtrgNLGPPy0/2/wAtP3N+bFzzzzzzzzzzzzzzzzwb3/z5+TZsiWfJo+ZgUvEzjLFPnDzzzzzzzzzzzzzzzzxPNMAALK5K4hDxjz8tP9vctNZsSfzzzzzzzzzzzzzzzzzn7zOFOi3dZg2RBuZrVmYzLDPHFXzzzzzzzzzzzzzzzzxfv4gAAJL7r4hDxjT8tP8Abzikknb88888888888888888zhDBDASJNm3bujNxYvZ3Naww8he88888888888888888oQw+IAACS+a+IQ8Y0/LD3vInnlm38888888888888888oDACACE4dslYMxbuYlb1OQywy0888888888888888888E8A8+IAACS+a+IQ8I0/LD2balmk28888888888888888oACEO9/9QI1YsnbkanJnN6wy0d888888888888888888q88Y88sAACW+a+IQ8o0/qN0bm5vR888888888888888pEO8/9/8Ac2DZWDp2dErM4zztOrfPPPPPPPPPPPPPPPPPPPUPPGOPrAAAtviviANKNJG68G0iT/PPPPPPPPPPPPPP/v8A3/3Ow7z92RofVC7IU/GYw5D/AM888888888888888888rAQ88Y4+uAACC2O2OA0sMERqklaV88888888888884m/52sO8/8Af+MtFG7+BmMT8ZDifvPPPPPPPPPPPPPPPPPPPP4gEPPHGPrgAAgtjtrgNsu7HejZFEPPPPPPPPPPPPKpDnvP/f8ADIA5zLF+diZ+cnHU77zzzzzzzzzzzzzzzzzzzzzxcgBDzxxDa4AAILa7a5rycqxdJxSzTzzzzzzzzzzz/wD9/wC8MhDnMoQwQ0JnJnZXcRHPPPPPPPPPPPPPPPPPPPPPPPPvSAEPPLJPLgAAgtrtp0WJkKaPFPGvPPPPPPPPPPP2chDnOsIQwQwRjPvjtmp2/XPPPPPPPPPPPPPPPPPPPPPPPPPvPCQENPLNPPiAAgrrnSZFS9FPFPLtvPPPPPPPPPPLudoQwQwQDjPvvvvvrmrL/PPPPPPPPPPPPPPPPPPPPPPPPPPsPvCQANPLNPPiAAAsmK1Cf3nPFPPmvPPPPPPPPPPPPLzAzjHPvvvvvvvtKvfPPPPPPPPPPPPPPPPPPPPPPPPPPPPBk/vCQANPLMPPiAAAitkqVevPFPPvjvPPPPPPPPPPPPPPPHrjrXjLvXb3PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLy/8Azw0ADTzzjT4gACJaKxGrTxTz76t7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyzVtvzy0ADTzwjT4gABYLwGpTxTz76tNDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyv5vvzy0ABTzwhz4gFYLgGpTxTz76sMHfzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzx/5vvTy0ABDzxjz4J4KlWrzxTz76sMEFHDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxv/wCvD28tAAQ88Y8Y6Whdm08U8++rDBBAT8y88888888888888888888888882388888888888888888888888888/U/+vD38tAAQ88YwrcVrWU8U8++rDBBAA8s0w8888888888888888888847oSo888888888888888888888888888Z+//vX/APLSAEPPGbYHxqSPFPPvqwwQQAPPPrxGs/PPPPPPPPPPPPPPOZEOYQr/ADzzzzzzzzzzzzzzzzzzzzzzzzzzyHf/APu3389IAQ888Xi4Fm0U8++rDBBAA88+8X/s+I4x9308w798x1s++HsVt+8888888888888888888888888888vB3/8A7t0/PSQENPS3Ja20FPPvqwwQQAPPPvF//wD6kEFEKI281U133z75cIt7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzy8Hf/8AujT88JAA0XlaWNiU8++rDBBAA88+8X//APqQwQwgv/8A1X333z76iaXzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzw0LP8A/wDi0/vCQAAOxJZmXvPvqwwQQAPPPvF//wD6kMEMIL//ANV9998+iaO/8888888888888888888888888888888886LT/wD/AItP7wkAD6colnbz76sMEEADzz7xf/8A+pDBDCC//wDVffffOmV3/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLA0//AP4t/wA8tAUyYbOl+++rDBBAA88+8X//APqQwQwgv/8A1X333wQX7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwtP/8A+bf88tACXElmF2+rDBBAA88+8X//APqQwQwgv/8A1X33+aL7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsFP8A/wDn79PLQLZ5JcpdqwwQQAPPPvF//wD6kMEMIL//ANV99usf88888888888888888888888888888888888888888tJT/wD/AN+fTy1EqeS0IgkMEEADzz7xf/8A+pDBDCC//wDVdemf/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPyQ9//wC8Pby1oWfFtlqQEEADzz7xf/8A+pDBDCC//wDRYTfPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLPCt/wD+4Pfy1k9plqWfswwjzz7xf/8A+pDBDCC+7NoO8888888888888888888888888888888888888888888888888fO0/wD7h/8Az0lB8XFpSEfP7z7xf/8A+pDBDGKtcc88888888888888888888888888888888888888888888888888888cx9/un/8APSQSc3IT+lOYh33vvOIRT9jObX/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/ALu4NPz0gBOD4ZyE0/8AiDDT3sMbNMc888888888888888888888888888888888888888888888888888888888888/eKyb88JAA1vv11iOOe++kTVM8888888888888888888888888888888888888888888888888888888888888888888v+D2GGF0wkNtB9fPse8888888888888888888888888888888888888888888888888888888888888888888888888888P8AbPrXPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/EACwRAAECAwUIAwEBAQAAAAAAAAEAESExQBAwQVFxUGGB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\"/>\n</defs>\n</svg>\n";
exports.firefox = "\n\n<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   height=\"23\"\n   width=\"25\"\n   id=\"svg1008\"\n   version=\"1.1\"\n   viewBox=\"0 0 87.418564 81.96698\">\n  <metadata\n     id=\"metadata1012\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id=\"defs978\">\n    <linearGradient\n       gradientTransform=\"translate(3.7,-0.0040855)\"\n       gradientUnits=\"userSpaceOnUse\"\n       y2=\"74.468002\"\n       x2=\"6.447\"\n       y1=\"12.393\"\n       x1=\"70.786003\"\n       id=\"a\">\n      <stop\n         id=\"stop834\"\n         stop-color=\"#fff44f\"\n         offset=\".048\" />\n      <stop\n         id=\"stop836\"\n         stop-color=\"#ffe847\"\n         offset=\".111\" />\n      <stop\n         id=\"stop838\"\n         stop-color=\"#ffc830\"\n         offset=\".225\" />\n      <stop\n         id=\"stop840\"\n         stop-color=\"#ff980e\"\n         offset=\".368\" />\n      <stop\n         id=\"stop842\"\n         stop-color=\"#ff8b16\"\n         offset=\".401\" />\n      <stop\n         id=\"stop844\"\n         stop-color=\"#ff672a\"\n         offset=\".462\" />\n      <stop\n         id=\"stop846\"\n         stop-color=\"#ff3647\"\n         offset=\".534\" />\n      <stop\n         id=\"stop848\"\n         stop-color=\"#e31587\"\n         offset=\".705\" />\n    </linearGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"translate(7978.7,8523.9959)\"\n       r=\"80.796997\"\n       cy=\"-8515.1211\"\n       cx=\"-7907.187\"\n       id=\"b\">\n      <stop\n         id=\"stop851\"\n         stop-color=\"#ffbd4f\"\n         offset=\".129\" />\n      <stop\n         id=\"stop853\"\n         stop-color=\"#ffac31\"\n         offset=\".186\" />\n      <stop\n         id=\"stop855\"\n         stop-color=\"#ff9d17\"\n         offset=\".247\" />\n      <stop\n         id=\"stop857\"\n         stop-color=\"#ff980e\"\n         offset=\".283\" />\n      <stop\n         id=\"stop859\"\n         stop-color=\"#ff563b\"\n         offset=\".403\" />\n      <stop\n         id=\"stop861\"\n         stop-color=\"#ff3750\"\n         offset=\".467\" />\n      <stop\n         id=\"stop863\"\n         stop-color=\"#f5156c\"\n         offset=\".71\" />\n      <stop\n         id=\"stop865\"\n         stop-color=\"#eb0878\"\n         offset=\".782\" />\n      <stop\n         id=\"stop867\"\n         stop-color=\"#e50080\"\n         offset=\".86\" />\n    </radialGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"translate(7978.7,8523.9959)\"\n       r=\"80.796997\"\n       cy=\"-8482.0889\"\n       cx=\"-7936.7109\"\n       id=\"c\">\n      <stop\n         id=\"stop870\"\n         stop-color=\"#960e18\"\n         offset=\".3\" />\n      <stop\n         id=\"stop872\"\n         stop-opacity=\".74\"\n         stop-color=\"#b11927\"\n         offset=\".351\" />\n      <stop\n         id=\"stop874\"\n         stop-opacity=\".343\"\n         stop-color=\"#db293d\"\n         offset=\".435\" />\n      <stop\n         id=\"stop876\"\n         stop-opacity=\".094\"\n         stop-color=\"#f5334b\"\n         offset=\".497\" />\n      <stop\n         id=\"stop878\"\n         stop-opacity=\"0\"\n         stop-color=\"#ff3750\"\n         offset=\".53\" />\n    </radialGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"translate(7978.7,8523.9959)\"\n       r=\"58.534\"\n       cy=\"-8533.457\"\n       cx=\"-7926.9702\"\n       id=\"d\">\n      <stop\n         id=\"stop881\"\n         stop-color=\"#fff44f\"\n         offset=\".132\" />\n      <stop\n         id=\"stop883\"\n         stop-color=\"#ffdc3e\"\n         offset=\".252\" />\n      <stop\n         id=\"stop885\"\n         stop-color=\"#ff9d12\"\n         offset=\".506\" />\n      <stop\n         id=\"stop887\"\n         stop-color=\"#ff980e\"\n         offset=\".526\" />\n    </radialGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"translate(7978.7,8523.9959)\"\n       r=\"38.471001\"\n       cy=\"-8460.9844\"\n       cx=\"-7945.6479\"\n       id=\"e\">\n      <stop\n         id=\"stop890\"\n         stop-color=\"#3a8ee6\"\n         offset=\".353\" />\n      <stop\n         id=\"stop892\"\n         stop-color=\"#5c79f0\"\n         offset=\".472\" />\n      <stop\n         id=\"stop894\"\n         stop-color=\"#9059ff\"\n         offset=\".669\" />\n      <stop\n         id=\"stop896\"\n         stop-color=\"#c139e6\"\n         offset=\"1\" />\n    </radialGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"matrix(0.972,-0.235,0.275,1.138,10095.002,7833.7939)\"\n       r=\"20.396999\"\n       cy=\"-8491.5459\"\n       cx=\"-7935.6201\"\n       id=\"f\">\n      <stop\n         id=\"stop899\"\n         stop-opacity=\"0\"\n         stop-color=\"#9059ff\"\n         offset=\".206\" />\n      <stop\n         id=\"stop901\"\n         stop-opacity=\".064\"\n         stop-color=\"#8c4ff3\"\n         offset=\".278\" />\n      <stop\n         id=\"stop903\"\n         stop-opacity=\".45\"\n         stop-color=\"#7716a8\"\n         offset=\".747\" />\n      <stop\n         id=\"stop905\"\n         stop-opacity=\".6\"\n         stop-color=\"#6e008b\"\n         offset=\".975\" />\n    </radialGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"translate(7978.7,8523.9959)\"\n       r=\"27.676001\"\n       cy=\"-8518.4268\"\n       cx=\"-7937.731\"\n       id=\"g\">\n      <stop\n         id=\"stop908\"\n         stop-color=\"#ffe226\"\n         offset=\"0\" />\n      <stop\n         id=\"stop910\"\n         stop-color=\"#ffdb27\"\n         offset=\".121\" />\n      <stop\n         id=\"stop912\"\n         stop-color=\"#ffc82a\"\n         offset=\".295\" />\n      <stop\n         id=\"stop914\"\n         stop-color=\"#ffa930\"\n         offset=\".502\" />\n      <stop\n         id=\"stop916\"\n         stop-color=\"#ff7e37\"\n         offset=\".732\" />\n      <stop\n         id=\"stop918\"\n         stop-color=\"#ff7139\"\n         offset=\".792\" />\n    </radialGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"translate(7978.7,8523.9959)\"\n       r=\"118.081\"\n       cy=\"-8535.9814\"\n       cx=\"-7915.9771\"\n       id=\"h\">\n      <stop\n         id=\"stop921\"\n         stop-color=\"#fff44f\"\n         offset=\".113\" />\n      <stop\n         id=\"stop923\"\n         stop-color=\"#ff980e\"\n         offset=\".456\" />\n      <stop\n         id=\"stop925\"\n         stop-color=\"#ff5634\"\n         offset=\".622\" />\n      <stop\n         id=\"stop927\"\n         stop-color=\"#ff3647\"\n         offset=\".716\" />\n      <stop\n         id=\"stop929\"\n         stop-color=\"#e31587\"\n         offset=\".904\" />\n    </radialGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"matrix(0.105,0.995,-0.653,0.069,-4680.304,8470.1869)\"\n       r=\"86.499001\"\n       cy=\"-8522.8594\"\n       cx=\"-7927.165\"\n       id=\"i\">\n      <stop\n         id=\"stop932\"\n         stop-color=\"#fff44f\"\n         offset=\"0\" />\n      <stop\n         id=\"stop934\"\n         stop-color=\"#ffe847\"\n         offset=\".06\" />\n      <stop\n         id=\"stop936\"\n         stop-color=\"#ffc830\"\n         offset=\".168\" />\n      <stop\n         id=\"stop938\"\n         stop-color=\"#ff980e\"\n         offset=\".304\" />\n      <stop\n         id=\"stop940\"\n         stop-color=\"#ff8b16\"\n         offset=\".356\" />\n      <stop\n         id=\"stop942\"\n         stop-color=\"#ff672a\"\n         offset=\".455\" />\n      <stop\n         id=\"stop944\"\n         stop-color=\"#ff3647\"\n         offset=\".57\" />\n      <stop\n         id=\"stop946\"\n         stop-color=\"#e31587\"\n         offset=\".737\" />\n    </radialGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"translate(7978.7,8523.9959)\"\n       r=\"73.720001\"\n       cy=\"-8508.1758\"\n       cx=\"-7938.3828\"\n       id=\"j\">\n      <stop\n         id=\"stop949\"\n         stop-color=\"#fff44f\"\n         offset=\".137\" />\n      <stop\n         id=\"stop951\"\n         stop-color=\"#ff980e\"\n         offset=\".48\" />\n      <stop\n         id=\"stop953\"\n         stop-color=\"#ff5634\"\n         offset=\".592\" />\n      <stop\n         id=\"stop955\"\n         stop-color=\"#ff3647\"\n         offset=\".655\" />\n      <stop\n         id=\"stop957\"\n         stop-color=\"#e31587\"\n         offset=\".904\" />\n    </radialGradient>\n    <radialGradient\n       gradientUnits=\"userSpaceOnUse\"\n       gradientTransform=\"translate(7978.7,8523.9959)\"\n       r=\"80.685997\"\n       cy=\"-8503.8613\"\n       cx=\"-7918.9229\"\n       id=\"k\">\n      <stop\n         id=\"stop960\"\n         stop-color=\"#fff44f\"\n         offset=\".094\" />\n      <stop\n         id=\"stop962\"\n         stop-color=\"#ffe141\"\n         offset=\".231\" />\n      <stop\n         id=\"stop964\"\n         stop-color=\"#ffaf1e\"\n         offset=\".509\" />\n      <stop\n         id=\"stop966\"\n         stop-color=\"#ff980e\"\n         offset=\".626\" />\n    </radialGradient>\n    <linearGradient\n       gradientTransform=\"translate(3.7,-0.0040855)\"\n       gradientUnits=\"userSpaceOnUse\"\n       y2=\"66.806\"\n       x2=\"15.267\"\n       y1=\"12.061\"\n       x1=\"70.013\"\n       id=\"l\">\n      <stop\n         id=\"stop969\"\n         stop-opacity=\".8\"\n         stop-color=\"#fff44f\"\n         offset=\".167\" />\n      <stop\n         id=\"stop971\"\n         stop-opacity=\".634\"\n         stop-color=\"#fff44f\"\n         offset=\".266\" />\n      <stop\n         id=\"stop973\"\n         stop-opacity=\".217\"\n         stop-color=\"#fff44f\"\n         offset=\".489\" />\n      <stop\n         id=\"stop975\"\n         stop-opacity=\"0\"\n         stop-color=\"#fff44f\"\n         offset=\".6\" />\n    </linearGradient>\n  </defs>\n  <path\n     style=\"fill:url(#a)\"\n     id=\"path980\"\n     d=\"m 79.616,26.826915 c -1.684,-4.052 -5.1,-8.427 -7.775,-9.81 a 40.266,40.266 0 0 1 3.925,11.764 l 0.007,0.065 c -4.382,-10.925 -11.813,-15.33 -17.882,-24.9220005 -0.307,-0.485 -0.614,-0.971 -0.913,-1.484 -0.171,-0.293 -0.308,-0.557 -0.427,-0.8 a 7.053,7.053 0 0 1 -0.578,-1.535 0.1,0.1 0 0 0 -0.088,-0.1 0.138,0.138 0 0 0 -0.073,0 c -0.005,0 -0.013,0.009 -0.019,0.011 -0.006,0.002 -0.019,0.011 -0.028,0.015 l 0.015,-0.026 c -9.735,5.7 -13.038,16.2520005 -13.342,21.5300005 a 19.387,19.387 0 0 0 -10.666,4.111 11.587,11.587 0 0 0 -1,-0.758 17.968,17.968 0 0 1 -0.109,-9.473 28.705,28.705 0 0 0 -9.329,7.21 h -0.018 c -1.536,-1.947 -1.428,-8.367 -1.34,-9.708 a 6.928,6.928 0 0 0 -1.294,0.687 28.225,28.225 0 0 0 -3.788,3.245 33.845,33.845 0 0 0 -3.623,4.347 v 0.006 -0.007 a 32.733,32.733 0 0 0 -5.2,11.743 l -0.052,0.256 c -0.073,0.341 -0.336,2.049 -0.381,2.42 0,0.029 -0.006,0.056 -0.009,0.085 A 36.937,36.937 0 0 0 5,41.041915 v 0.2 a 38.759,38.759 0 0 0 76.954,6.554 c 0.065,-0.5 0.118,-0.995 0.176,-1.5 a 39.857,39.857 0 0 0 -2.514,-19.469 z m -44.67,30.338 c 0.181,0.087 0.351,0.181 0.537,0.264 l 0.027,0.017 q -0.282,-0.135 -0.564,-0.281 z m 8.878,-23.376 z m 31.952,-4.934 v -0.037 l 0.007,0.041 z\" />\n  <path\n     style=\"fill:url(#b)\"\n     id=\"path982\"\n     d=\"m 79.616,26.826915 c -1.684,-4.052 -5.1,-8.427 -7.775,-9.81 a 40.266,40.266 0 0 1 3.925,11.764 v 0.037 l 0.007,0.041 a 35.1,35.1 0 0 1 -1.206,26.158 c -4.442,9.531 -15.194,19.3 -32.024,18.825 -18.185,-0.515 -34.2,-14.009 -37.194,-31.683 -0.545,-2.787 0,-4.2 0.274,-6.465 A 28.876,28.876 0 0 0 5,41.041915 v 0.2 a 38.759,38.759 0 0 0 76.954,6.554 c 0.065,-0.5 0.118,-0.995 0.176,-1.5 a 39.857,39.857 0 0 0 -2.514,-19.469 z\" />\n  <path\n     style=\"fill:url(#c)\"\n     id=\"path984\"\n     d=\"m 79.616,26.826915 c -1.684,-4.052 -5.1,-8.427 -7.775,-9.81 a 40.266,40.266 0 0 1 3.925,11.764 v 0.037 l 0.007,0.041 a 35.1,35.1 0 0 1 -1.206,26.158 c -4.442,9.531 -15.194,19.3 -32.024,18.825 -18.185,-0.515 -34.2,-14.009 -37.194,-31.683 -0.545,-2.787 0,-4.2 0.274,-6.465 A 28.876,28.876 0 0 0 5,41.041915 v 0.2 a 38.759,38.759 0 0 0 76.954,6.554 c 0.065,-0.5 0.118,-0.995 0.176,-1.5 a 39.857,39.857 0 0 0 -2.514,-19.469 z\" />\n  <path\n     style=\"fill:url(#d)\"\n     id=\"path986\"\n     d=\"m 60.782,31.382915 c 0.084,0.059 0.162,0.118 0.241,0.177 a 21.1,21.1 0 0 0 -3.6,-4.695 C 45.377,14.816915 54.266,0.7419145 55.765,0.0269145 l 0.015,-0.022 c -9.735,5.7 -13.038,16.2520005 -13.342,21.5300005 0.452,-0.031 0.9,-0.069 1.362,-0.069 a 19.56,19.56 0 0 1 16.982,9.917 z\" />\n  <path\n     style=\"fill:url(#e)\"\n     id=\"path988\"\n     d=\"m 43.825,33.788915 c -0.064,0.964 -3.47,4.289 -4.661,4.289 -11.021,0 -12.81,6.667 -12.81,6.667 0.488,5.614 4.4,10.238 9.129,12.684 0.216,0.112 0.435,0.213 0.654,0.312 q 0.569,0.252 1.138,0.466 a 17.235,17.235 0 0 0 5.043,0.973 c 19.317,0.906 23.059,-23.1 9.119,-30.066 a 13.38,13.38 0 0 1 9.345,2.269 19.56,19.56 0 0 0 -16.982,-9.917 c -0.46,0 -0.91,0.038 -1.362,0.069 a 19.387,19.387 0 0 0 -10.666,4.111 c 0.591,0.5 1.258,1.168 2.663,2.553 2.63,2.591 9.375,5.275 9.39,5.59 z\" />\n  <path\n     style=\"fill:url(#f)\"\n     id=\"path990\"\n     d=\"m 43.825,33.788915 c -0.064,0.964 -3.47,4.289 -4.661,4.289 -11.021,0 -12.81,6.667 -12.81,6.667 0.488,5.614 4.4,10.238 9.129,12.684 0.216,0.112 0.435,0.213 0.654,0.312 q 0.569,0.252 1.138,0.466 a 17.235,17.235 0 0 0 5.043,0.973 c 19.317,0.906 23.059,-23.1 9.119,-30.066 a 13.38,13.38 0 0 1 9.345,2.269 19.56,19.56 0 0 0 -16.982,-9.917 c -0.46,0 -0.91,0.038 -1.362,0.069 a 19.387,19.387 0 0 0 -10.666,4.111 c 0.591,0.5 1.258,1.168 2.663,2.553 2.63,2.591 9.375,5.275 9.39,5.59 z\" />\n  <path\n     style=\"fill:url(#g)\"\n     id=\"path992\"\n     d=\"m 29.965,24.356915 c 0.314,0.2 0.573,0.374 0.8,0.531 a 17.968,17.968 0 0 1 -0.109,-9.473 28.705,28.705 0 0 0 -9.329,7.21 c 0.189,-0.005 5.811,-0.106 8.638,1.732 z\" />\n  <path\n     style=\"fill:url(#h)\"\n     id=\"path994\"\n     d=\"m 5.354,42.158915 c 2.991,17.674 19.009,31.168 37.194,31.683 16.83,0.476 27.582,-9.294 32.024,-18.825 a 35.1,35.1 0 0 0 1.206,-26.158 v -0.037 c 0,-0.029 -0.006,-0.046 0,-0.037 l 0.007,0.065 c 1.375,8.977 -3.191,17.674 -10.329,23.555 l -0.022,0.05 c -13.908,11.327 -27.218,6.834 -29.912,5 q -0.282,-0.135 -0.564,-0.281 c -8.109,-3.876 -11.459,-11.264 -10.741,-17.6 a 9.953,9.953 0 0 1 -9.181,-5.775 14.618,14.618 0 0 1 14.249,-0.572 19.3,19.3 0 0 0 14.552,0.572 c -0.015,-0.315 -6.76,-3 -9.39,-5.59 -1.405,-1.385 -2.072,-2.052 -2.663,-2.553 a 11.587,11.587 0 0 0 -1,-0.758 c -0.23,-0.157 -0.489,-0.327 -0.8,-0.531 -2.827,-1.838 -8.449,-1.737 -8.635,-1.732 h -0.018 c -1.536,-1.947 -1.428,-8.367 -1.34,-9.708 a 6.928,6.928 0 0 0 -1.294,0.687 28.225,28.225 0 0 0 -3.788,3.245 33.845,33.845 0 0 0 -3.638,4.337 v 0.006 -0.007 a 32.733,32.733 0 0 0 -5.2,11.743 c -0.019,0.079 -1.396,6.099 -0.717,9.221 z\" />\n  <path\n     style=\"fill:url(#i)\"\n     id=\"path996\"\n     d=\"m 57.425,26.864915 a 21.1,21.1 0 0 1 3.6,4.7 c 0.213,0.161 0.412,0.321 0.581,0.476 8.787,8.1 4.183,19.55 3.84,20.365 7.138,-5.881 11.7,-14.578 10.329,-23.555 -4.384,-10.93 -11.815,-15.335 -17.884,-24.9270005 -0.307,-0.485 -0.614,-0.971 -0.913,-1.484 -0.171,-0.293 -0.308,-0.557 -0.427,-0.8 a 7.053,7.053 0 0 1 -0.578,-1.535 0.1,0.1 0 0 0 -0.088,-0.1 0.138,0.138 0 0 0 -0.073,0 c -0.005,0 -0.013,0.009 -0.019,0.011 -0.006,0.002 -0.019,0.011 -0.028,0.015 -1.499,0.711 -10.388,14.7860005 1.66,26.8340005 z\" />\n  <path\n     style=\"fill:url(#j)\"\n     id=\"path998\"\n     d=\"m 61.6,32.035915 c -0.169,-0.155 -0.368,-0.315 -0.581,-0.476 -0.079,-0.059 -0.157,-0.118 -0.241,-0.177 a 13.38,13.38 0 0 0 -9.345,-2.269 c 13.94,6.97 10.2,30.972 -9.119,30.066 a 17.235,17.235 0 0 1 -5.043,-0.973 q -0.569,-0.213 -1.138,-0.466 c -0.219,-0.1 -0.438,-0.2 -0.654,-0.312 l 0.027,0.017 c 2.694,1.839 16,6.332 29.912,-5 l 0.022,-0.05 c 0.347,-0.81 4.951,-12.263 -3.84,-20.36 z\" />\n  <path\n     style=\"fill:url(#k)\"\n     id=\"path1000\"\n     d=\"m 26.354,44.744915 c 0,0 1.789,-6.667 12.81,-6.667 1.191,0 4.6,-3.325 4.661,-4.289 a 19.3,19.3 0 0 1 -14.552,-0.572 14.618,14.618 0 0 0 -14.249,0.572 9.953,9.953 0 0 0 9.181,5.775 c -0.718,6.337 2.632,13.725 10.741,17.6 0.181,0.087 0.351,0.181 0.537,0.264 -4.733,-2.445 -8.641,-7.069 -9.129,-12.683 z\" />\n  <path\n     style=\"fill:url(#l)\"\n     id=\"path1002\"\n     d=\"m 79.616,26.826915 c -1.684,-4.052 -5.1,-8.427 -7.775,-9.81 a 40.266,40.266 0 0 1 3.925,11.764 l 0.007,0.065 c -4.382,-10.925 -11.813,-15.33 -17.882,-24.9220005 -0.307,-0.485 -0.614,-0.971 -0.913,-1.484 -0.171,-0.293 -0.308,-0.557 -0.427,-0.8 a 7.053,7.053 0 0 1 -0.578,-1.535 0.1,0.1 0 0 0 -0.088,-0.1 0.138,0.138 0 0 0 -0.073,0 c -0.005,0 -0.013,0.009 -0.019,0.011 -0.006,0.002 -0.019,0.011 -0.028,0.015 l 0.015,-0.026 c -9.735,5.7 -13.038,16.2520005 -13.342,21.5300005 0.452,-0.031 0.9,-0.069 1.362,-0.069 a 19.56,19.56 0 0 1 16.982,9.917 13.38,13.38 0 0 0 -9.345,-2.269 c 13.94,6.97 10.2,30.972 -9.119,30.066 a 17.235,17.235 0 0 1 -5.043,-0.973 q -0.569,-0.213 -1.138,-0.466 c -0.219,-0.1 -0.438,-0.2 -0.654,-0.312 l 0.027,0.017 q -0.282,-0.135 -0.564,-0.281 c 0.181,0.087 0.351,0.181 0.537,0.264 -4.733,-2.446 -8.641,-7.07 -9.129,-12.684 0,0 1.789,-6.667 12.81,-6.667 1.191,0 4.6,-3.325 4.661,-4.289 -0.015,-0.315 -6.76,-3 -9.39,-5.59 -1.405,-1.385 -2.072,-2.052 -2.663,-2.553 a 11.587,11.587 0 0 0 -1,-0.758 17.968,17.968 0 0 1 -0.109,-9.473 28.705,28.705 0 0 0 -9.329,7.21 h -0.018 c -1.536,-1.947 -1.428,-8.367 -1.34,-9.708 a 6.928,6.928 0 0 0 -1.294,0.687 28.225,28.225 0 0 0 -3.788,3.245 33.845,33.845 0 0 0 -3.623,4.347 v 0.006 -0.007 a 32.733,32.733 0 0 0 -5.2,11.743 l -0.052,0.256 c -0.073,0.341 -0.4,2.073 -0.447,2.445 0,0.028 0,-0.029 0,0 A 45.094,45.094 0 0 0 5,41.041915 v 0.2 a 38.759,38.759 0 0 0 76.954,6.554 c 0.065,-0.5 0.118,-0.995 0.176,-1.5 a 39.857,39.857 0 0 0 -2.514,-19.469 z m -3.845,1.991 0.007,0.041 z\" />\n</svg>\n\n";
var safari = "\n\n<svg width=\"19\" height=\"18\" viewBox=\"0 0 19 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.5 18C14.7467 18 19 13.9706 19 9C19 4.02944 14.7467 0 9.5 0C4.25329 0 0 4.02944 0 9C0 13.9706 4.25329 18 9.5 18Z\" fill=\"#1DA2F8\"/>\n<path d=\"M9.50001 1.33211C9.43603 1.33211 9.38416 1.28296 9.38416 1.22235V0.720109C9.38416 0.6595 9.43603 0.610352 9.50001 0.610352C9.56399 0.610352 9.61586 0.6595 9.61586 0.720109V1.22235C9.61586 1.28296 9.56399 1.33211 9.50001 1.33211Z\" fill=\"#F2F2F2\"/>\n<path d=\"M9.50001 17.3897C9.43603 17.3897 9.38416 17.3406 9.38416 17.28V16.7777C9.38416 16.7171 9.43603 16.668 9.50001 16.668C9.56399 16.668 9.61586 16.7171 9.61586 16.7777V17.28C9.61586 17.3406 9.56399 17.3897 9.50001 17.3897Z\" fill=\"#F2F2F2\"/>\n<path d=\"M8.0743 1.45034C8.01908 1.45034 7.97021 1.41286 7.9603 1.3596L7.86823 0.864985C7.85713 0.80529 7.89922 0.748337 7.96219 0.73786C8.02539 0.727454 8.08536 0.767216 8.09642 0.826911L8.18849 1.32152C8.19958 1.38122 8.1575 1.43817 8.09452 1.44865C8.0877 1.44974 8.08098 1.45034 8.0743 1.45034Z\" fill=\"#F2F2F2\"/>\n<path d=\"M11.0177 17.264C10.9624 17.264 10.9136 17.2265 10.9037 17.1732L10.8116 16.6786C10.8005 16.6189 10.8426 16.562 10.9055 16.5515C10.9687 16.5409 11.0287 16.5808 11.0398 16.6405L11.1318 17.1351C11.1429 17.1948 11.1009 17.2518 11.0379 17.2622C11.0311 17.2634 11.0243 17.264 11.0177 17.264Z\" fill=\"#F2F2F2\"/>\n<path d=\"M6.6922 1.80111C6.64489 1.80111 6.60047 1.77341 6.58336 1.72887L6.40201 1.25693C6.38019 1.19994 6.41117 1.13697 6.47129 1.11623C6.53122 1.0956 6.59791 1.12485 6.61973 1.18183L6.80104 1.65377C6.82294 1.71076 6.79191 1.77372 6.7318 1.79447C6.71873 1.79897 6.70537 1.80111 6.6922 1.80111Z\" fill=\"#F2F2F2\"/>\n<path d=\"M12.4893 16.8904C12.442 16.8904 12.3976 16.8627 12.3805 16.8181L12.1992 16.3462C12.1773 16.2892 12.2083 16.2262 12.2684 16.2055C12.3283 16.1848 12.395 16.2141 12.4168 16.2711L12.5982 16.743C12.62 16.8 12.589 16.863 12.5289 16.8837C12.5158 16.8882 12.5025 16.8904 12.4893 16.8904Z\" fill=\"#F2F2F2\"/>\n<path d=\"M5.39521 2.37417C5.35517 2.37417 5.31625 2.35448 5.29476 2.31925L5.02969 1.8843C4.99774 1.83181 5.01666 1.7647 5.0721 1.73439C5.12743 1.70395 5.19835 1.72205 5.23037 1.77454L5.49545 2.20949C5.5274 2.26198 5.50847 2.3291 5.45303 2.3594C5.43485 2.36942 5.41488 2.37417 5.39521 2.37417Z\" fill=\"#F2F2F2\"/>\n<path d=\"M13.8702 16.2804C13.8301 16.2804 13.7912 16.2607 13.7697 16.2255L13.5047 15.7905C13.4727 15.7381 13.4916 15.6709 13.5471 15.6406C13.6024 15.6102 13.6733 15.6283 13.7054 15.6808L13.9704 16.1157C14.0024 16.1682 13.9834 16.2353 13.928 16.2656C13.9098 16.2757 13.8899 16.2804 13.8702 16.2804Z\" fill=\"#F2F2F2\"/>\n<path d=\"M4.22293 3.15171C4.1899 3.15171 4.15702 3.13839 4.13412 3.11251L3.79335 2.7278C3.7522 2.68136 3.75862 2.61213 3.80767 2.57315C3.85662 2.53423 3.92973 2.54024 3.97088 2.58668L4.31166 2.9714C4.35281 3.01784 4.34639 3.08706 4.29733 3.12605C4.27566 3.14331 4.24924 3.15171 4.22293 3.15171Z\" fill=\"#F2F2F2\"/>\n<path d=\"M15.118 15.4526C15.085 15.4526 15.0521 15.4393 15.0292 15.4134L14.6885 15.0287C14.6473 14.9822 14.6538 14.913 14.7028 14.874C14.7518 14.8352 14.8249 14.8411 14.866 14.8876L15.2067 15.2723C15.2479 15.3187 15.2415 15.3879 15.1924 15.4269C15.1708 15.4442 15.1443 15.4526 15.118 15.4526Z\" fill=\"#F2F2F2\"/>\n<path d=\"M3.21096 4.11036C3.18469 4.11036 3.15823 4.10196 3.1366 4.08469L2.73051 3.76185C2.68145 3.72286 2.67507 3.65368 2.71619 3.6072C2.75734 3.56072 2.83045 3.55475 2.87939 3.59367L3.28548 3.91651C3.33454 3.95549 3.34092 4.02468 3.2998 4.07116C3.27687 4.097 3.24399 4.11036 3.21096 4.11036Z\" fill=\"#F2F2F2\"/>\n<path d=\"M16.1952 14.432C16.1689 14.432 16.1425 14.4236 16.1208 14.4064L15.7147 14.0835C15.6657 14.0445 15.6593 13.9753 15.7004 13.9289C15.7416 13.8824 15.8146 13.8764 15.8637 13.9153L16.2697 14.2382C16.3187 14.2772 16.3251 14.3463 16.284 14.3928C16.2611 14.4187 16.2282 14.432 16.1952 14.432Z\" fill=\"#F2F2F2\"/>\n<path d=\"M2.39006 5.22092C2.37043 5.22092 2.3505 5.21617 2.33225 5.20619L1.87313 4.95507C1.81769 4.92476 1.79876 4.85765 1.83071 4.80516C1.86274 4.7527 1.93339 4.7346 1.98898 4.76501L2.4481 5.01613C2.50354 5.04644 2.52247 5.11355 2.49052 5.16604C2.46907 5.20123 2.43014 5.22092 2.39006 5.22092Z\" fill=\"#F2F2F2\"/>\n<path d=\"M17.0689 13.2498C17.0492 13.2498 17.0293 13.245 17.011 13.235L16.552 12.9839C16.4965 12.9536 16.4776 12.8865 16.5095 12.834C16.5415 12.7815 16.6124 12.7634 16.6678 12.7939L17.1269 13.045C17.1823 13.0753 17.2013 13.1424 17.1693 13.1949C17.1478 13.2301 17.1089 13.2498 17.0689 13.2498Z\" fill=\"#F2F2F2\"/>\n<path d=\"M1.78545 6.44968C1.77227 6.44968 1.75891 6.44753 1.74585 6.44303L1.24766 6.27126C1.1875 6.25052 1.15652 6.18755 1.17841 6.13056C1.20023 6.07358 1.26688 6.04433 1.32685 6.06496L1.82504 6.23674C1.8852 6.25748 1.91618 6.32044 1.89429 6.37743C1.87718 6.42197 1.83276 6.44968 1.78545 6.44968Z\" fill=\"#F2F2F2\"/>\n<path d=\"M17.7129 11.9417C17.6997 11.9417 17.6864 11.9396 17.6732 11.9351L17.1751 11.7633C17.115 11.7426 17.084 11.6796 17.1059 11.6226C17.1277 11.5656 17.1942 11.5364 17.2544 11.557L17.7526 11.7288C17.8127 11.7495 17.8436 11.8125 17.8217 11.8695C17.8046 11.9141 17.7601 11.9417 17.7129 11.9417Z\" fill=\"#F2F2F2\"/>\n<path d=\"M1.41515 7.75926C1.40847 7.75926 1.40172 7.7587 1.39493 7.75758L0.872837 7.67035C0.809825 7.65981 0.76778 7.60289 0.778876 7.54323C0.789971 7.48357 0.849792 7.44374 0.9131 7.45418L1.43519 7.5414C1.4982 7.55195 1.54025 7.60886 1.52915 7.66852C1.51924 7.72179 1.47037 7.75926 1.41515 7.75926Z\" fill=\"#F2F2F2\"/>\n<path d=\"M18.1073 10.5477C18.1006 10.5477 18.0938 10.5472 18.087 10.546L17.565 10.4588C17.502 10.4483 17.4599 10.3913 17.471 10.3317C17.4821 10.272 17.5419 10.2322 17.6052 10.2426L18.1273 10.3299C18.1903 10.3404 18.2324 10.3973 18.2213 10.457C18.2114 10.5102 18.1625 10.5477 18.1073 10.5477Z\" fill=\"#F2F2F2\"/>\n<path d=\"M1.29025 9.10977H0.760143C0.696166 9.10977 0.644287 9.06062 0.644287 9.00002C0.644287 8.93941 0.696166 8.89026 0.760143 8.89026H1.29025C1.35423 8.89026 1.40611 8.93941 1.40611 9.00002C1.40611 9.06062 1.35423 9.10977 1.29025 9.10977Z\" fill=\"#F2F2F2\"/>\n<path d=\"M18.24 9.10977H17.7098C17.6459 9.10977 17.594 9.06062 17.594 9.00002C17.594 8.93941 17.6459 8.89026 17.7098 8.89026H18.24C18.304 8.89026 18.3559 8.93941 18.3559 9.00002C18.3559 9.06062 18.304 9.10977 18.24 9.10977Z\" fill=\"#F2F2F2\"/>\n<path d=\"M0.892876 10.5476C0.837657 10.5476 0.788784 10.5101 0.778876 10.4569C0.76778 10.3972 0.809825 10.3402 0.872837 10.3297L1.39493 10.2425C1.45816 10.2321 1.51809 10.2718 1.52915 10.3316C1.54025 10.3912 1.4982 10.4482 1.43519 10.4587L0.9131 10.5459C0.906272 10.547 0.899518 10.5476 0.892876 10.5476Z\" fill=\"#F2F2F2\"/>\n<path d=\"M17.585 7.75926C17.5298 7.75926 17.4809 7.72179 17.471 7.66853C17.4599 7.60887 17.502 7.55188 17.565 7.5414L18.0871 7.45418C18.1502 7.44374 18.2102 7.4835 18.2213 7.54323C18.2324 7.60289 18.1903 7.65988 18.1273 7.67036L17.6053 7.75758C17.5984 7.7587 17.5917 7.75926 17.585 7.75926Z\" fill=\"#F2F2F2\"/>\n<path d=\"M1.28713 11.9417C1.23981 11.9417 1.19539 11.914 1.17829 11.8695C1.15639 11.8125 1.18741 11.7495 1.24753 11.7288L1.74572 11.557C1.80566 11.5364 1.87234 11.5657 1.89416 11.6226C1.91606 11.6796 1.88503 11.7426 1.82492 11.7633L1.32672 11.9351C1.3137 11.9396 1.30034 11.9417 1.28713 11.9417Z\" fill=\"#F2F2F2\"/>\n<path d=\"M17.2147 6.44967C17.1674 6.44967 17.123 6.42197 17.1059 6.37743C17.084 6.32044 17.115 6.25747 17.1751 6.23673L17.6732 6.06496C17.7335 6.04432 17.7999 6.07361 17.8217 6.13056C17.8436 6.18755 17.8126 6.25051 17.7526 6.27126L17.2544 6.44303C17.2412 6.44753 17.2279 6.44967 17.2147 6.44967Z\" fill=\"#F2F2F2\"/>\n<path d=\"M1.93117 13.2498C1.89113 13.2498 1.8522 13.2301 1.83071 13.1949C1.79876 13.1424 1.81769 13.0753 1.87313 13.045L2.33225 12.7938C2.38772 12.7634 2.45845 12.7815 2.49052 12.834C2.52247 12.8865 2.50354 12.9536 2.4481 12.9839L1.98898 13.235C1.97073 13.245 1.95083 13.2498 1.93117 13.2498Z\" fill=\"#F2F2F2\"/>\n<path d=\"M16.6101 5.22095C16.5701 5.22095 16.5312 5.20127 16.5097 5.16604C16.4777 5.11355 16.4966 5.04644 16.5521 5.01613L17.0112 4.76501C17.0665 4.7346 17.1374 4.7527 17.1694 4.80516C17.2014 4.85765 17.1825 4.92476 17.127 4.95506L16.6679 5.20619C16.6497 5.21621 16.6297 5.22095 16.6101 5.22095Z\" fill=\"#F2F2F2\"/>\n<path d=\"M2.805 14.432C2.77198 14.432 2.7391 14.4187 2.7162 14.3928C2.67505 14.3464 2.68147 14.2771 2.73053 14.2381L3.13661 13.9153C3.18556 13.8764 3.25867 13.8824 3.29982 13.9288C3.34097 13.9753 3.33455 14.0445 3.2855 14.0835L2.87941 14.4063C2.85774 14.4236 2.83131 14.432 2.805 14.432Z\" fill=\"#F2F2F2\"/>\n<path d=\"M15.7891 4.11035C15.7561 4.11035 15.7232 4.09702 15.7003 4.07115C15.6592 4.0247 15.6656 3.95552 15.7146 3.91649L16.1207 3.59365C16.1697 3.55474 16.2428 3.56075 16.2839 3.60719C16.3251 3.65363 16.3187 3.72282 16.2696 3.76184L15.8636 4.08468C15.8418 4.10191 15.8154 4.11035 15.7891 4.11035Z\" fill=\"#F2F2F2\"/>\n<path d=\"M3.88203 15.4525C3.85575 15.4525 3.82929 15.4441 3.80766 15.4268C3.7586 15.3878 3.75222 15.3187 3.79333 15.2722L4.13411 14.8875C4.1753 14.841 4.24841 14.835 4.29732 14.8739C4.34637 14.9129 4.35276 14.9821 4.31164 15.0286L3.97086 15.4133C3.94793 15.4392 3.91505 15.4525 3.88203 15.4525Z\" fill=\"#F2F2F2\"/>\n<path d=\"M14.7772 3.15171C14.7509 3.15171 14.7244 3.14331 14.7028 3.12605C14.6537 3.08706 14.6474 3.01787 14.6885 2.9714L15.0292 2.58668C15.0704 2.54024 15.1435 2.53423 15.1924 2.57315C15.2415 2.61213 15.2479 2.68136 15.2067 2.7278L14.866 3.11251C14.8431 3.13839 14.8102 3.15171 14.7772 3.15171Z\" fill=\"#F2F2F2\"/>\n<path d=\"M5.12992 16.2804C5.11029 16.2804 5.09036 16.2756 5.0721 16.2657C5.01666 16.2353 4.99774 16.1682 5.02969 16.1157L5.29476 15.6808C5.32678 15.6283 5.39744 15.6102 5.45303 15.6406C5.50847 15.6709 5.5274 15.7381 5.49545 15.7905L5.23037 16.2255C5.20889 16.2607 5.16996 16.2804 5.12992 16.2804Z\" fill=\"#F2F2F2\"/>\n<path d=\"M13.6049 2.37415C13.5853 2.37415 13.5653 2.3694 13.5471 2.35942C13.4916 2.32911 13.4727 2.262 13.5047 2.20951L13.7697 1.77456C13.8018 1.72207 13.8724 1.70393 13.928 1.73441C13.9834 1.76471 14.0024 1.83183 13.9704 1.88431L13.7054 2.31927C13.6839 2.35446 13.6449 2.37415 13.6049 2.37415Z\" fill=\"#F2F2F2\"/>\n<path d=\"M6.5109 16.8904C6.49773 16.8904 6.48437 16.8882 6.47131 16.8837C6.41115 16.863 6.38017 16.8 6.40203 16.7431L6.58338 16.2711C6.60527 16.2141 6.67177 16.1848 6.73182 16.2055C6.79197 16.2263 6.82296 16.2892 6.80106 16.3462L6.61975 16.8181C6.60264 16.8627 6.55818 16.8904 6.5109 16.8904Z\" fill=\"#F2F2F2\"/>\n<path d=\"M12.308 1.80112C12.2948 1.80112 12.2815 1.79897 12.2684 1.79447C12.2083 1.77373 12.1773 1.71076 12.1992 1.65378L12.3805 1.18184C12.4023 1.12481 12.4689 1.0956 12.5289 1.11624C12.5891 1.13698 12.6201 1.19994 12.5982 1.25693L12.4168 1.72887C12.3998 1.77345 12.3553 1.80112 12.308 1.80112Z\" fill=\"#F2F2F2\"/>\n<path d=\"M7.98254 17.2639C7.97586 17.2639 7.9691 17.2634 7.96231 17.2622C7.89934 17.2517 7.85726 17.1948 7.86835 17.1351L7.96042 16.6405C7.97152 16.5808 8.03134 16.541 8.09464 16.5515C8.15762 16.562 8.1997 16.6189 8.18861 16.6786L8.09654 17.1732C8.08659 17.2264 8.03776 17.2639 7.98254 17.2639Z\" fill=\"#F2F2F2\"/>\n<path d=\"M10.9258 1.45032C10.9191 1.45032 10.9123 1.44976 10.9056 1.44863C10.8426 1.43808 10.8005 1.3812 10.8116 1.32151L10.9037 0.826892C10.9148 0.767232 10.9746 0.727505 11.0379 0.737841C11.1009 0.748388 11.1429 0.805271 11.1318 0.864966L11.0398 1.35958C11.0298 1.41281 10.981 1.45032 10.9258 1.45032Z\" fill=\"#F2F2F2\"/>\n<path d=\"M8.85931 2.17343C8.79986 2.17343 8.74928 2.13036 8.74405 2.07327L8.62288 0.761203C8.61732 0.700805 8.66445 0.647578 8.7282 0.642305C8.79203 0.636785 8.84814 0.681715 8.85367 0.742078L8.97483 2.05414C8.98039 2.11454 8.93327 2.16777 8.86951 2.17304C8.8661 2.17329 8.86265 2.17343 8.85931 2.17343Z\" fill=\"#F2F2F2\"/>\n<path d=\"M10.2617 17.3582C10.2022 17.3582 10.1516 17.3152 10.1464 17.2581L10.0252 15.946C10.0197 15.8856 10.0668 15.8324 10.1305 15.8271C10.1947 15.8216 10.2504 15.8665 10.256 15.9269L10.3772 17.239C10.3827 17.2994 10.3356 17.3526 10.2719 17.3579C10.2684 17.3581 10.265 17.3582 10.2617 17.3582Z\" fill=\"#F2F2F2\"/>\n<path d=\"M7.59771 2.38428C7.54653 2.38428 7.49974 2.35194 7.4859 2.30293L7.12605 1.03073C7.1095 0.972161 7.14612 0.912009 7.20795 0.896329C7.26973 0.880333 7.3333 0.915384 7.34982 0.973919L7.70966 2.24612C7.72622 2.30469 7.68959 2.36484 7.62776 2.38052C7.61774 2.38309 7.60761 2.38428 7.59771 2.38428Z\" fill=\"#F2F2F2\"/>\n<path d=\"M11.7621 17.1076C11.7109 17.1076 11.6641 17.0753 11.6503 17.0263L11.2905 15.7541C11.2739 15.6955 11.3106 15.6354 11.3724 15.6197C11.4344 15.6038 11.4977 15.6387 11.5142 15.6973L11.8741 16.9695C11.8906 17.028 11.854 17.0882 11.7922 17.1039C11.782 17.1064 11.772 17.1076 11.7621 17.1076Z\" fill=\"#F2F2F2\"/>\n<path d=\"M6.39404 2.79932C6.35039 2.79932 6.30861 2.77584 6.28898 2.73593L5.70143 1.54224C5.67441 1.48732 5.69946 1.422 5.75742 1.39641C5.81535 1.37082 5.88441 1.39455 5.91139 1.4495L6.49894 2.64319C6.52596 2.69811 6.50091 2.76343 6.44295 2.78902C6.42714 2.79602 6.41044 2.79932 6.39404 2.79932Z\" fill=\"#F2F2F2\"/>\n<path d=\"M13.1938 16.6139C13.1502 16.6139 13.1084 16.5904 13.0887 16.5505L12.5012 15.3568C12.4742 15.3019 12.4993 15.2366 12.5572 15.211C12.6152 15.1854 12.6842 15.2092 12.7112 15.2641L13.2987 16.4578C13.3257 16.5127 13.3007 16.578 13.2427 16.6036C13.2269 16.6106 13.2102 16.6139 13.1938 16.6139Z\" fill=\"#F2F2F2\"/>\n<path d=\"M5.28462 3.40622C5.2481 3.40622 5.21214 3.38991 5.18958 3.35943L4.39214 2.28052C4.35551 2.23084 4.3682 2.16243 4.4206 2.12766C4.47322 2.09282 4.54533 2.10502 4.58199 2.15463L5.37943 3.23354C5.41606 3.28321 5.40337 3.35163 5.35097 3.3864C5.33071 3.39979 5.30751 3.40622 5.28462 3.40622Z\" fill=\"#F2F2F2\"/>\n<path d=\"M14.5132 15.8923C14.4767 15.8923 14.4407 15.876 14.4182 15.8455L13.6208 14.7666C13.5841 14.7169 13.5968 14.6485 13.6492 14.6137C13.7019 14.5789 13.774 14.5911 13.8106 14.6407L14.608 15.7196C14.6446 15.7693 14.6319 15.8377 14.5795 15.8725C14.5593 15.8859 14.5361 15.8923 14.5132 15.8923Z\" fill=\"#F2F2F2\"/>\n<path d=\"M4.30299 4.18637C4.27338 4.18637 4.24369 4.17565 4.22109 4.15424L3.23803 3.22288C3.19279 3.18006 3.19279 3.11052 3.23803 3.06766C3.28327 3.02481 3.35659 3.02481 3.40187 3.06766L4.38493 3.99899C4.43017 4.04181 4.43017 4.11135 4.38493 4.1542C4.36229 4.17561 4.33268 4.18637 4.30299 4.18637Z\" fill=\"#F2F2F2\"/>\n<path d=\"M15.6801 14.9645C15.6505 14.9645 15.6208 14.9538 15.5982 14.9324L14.6151 14.0011C14.5699 13.9583 14.5699 13.8887 14.6151 13.8459C14.6603 13.803 14.7337 13.803 14.7789 13.8459L15.762 14.7772C15.8072 14.82 15.8072 14.8895 15.762 14.9324C15.7394 14.9538 15.7097 14.9645 15.6801 14.9645Z\" fill=\"#F2F2F2\"/>\n<path d=\"M3.4794 5.1161C3.45647 5.1161 3.43331 5.10967 3.41305 5.09624L2.27424 4.3408C2.22184 4.30606 2.20915 4.23762 2.24578 4.18794C2.28255 4.13826 2.35465 4.12621 2.40716 4.16097L3.54598 4.91638C3.59838 4.95111 3.61107 5.01956 3.57444 5.06924C3.55188 5.09975 3.51592 5.1161 3.4794 5.1161Z\" fill=\"#F2F2F2\"/>\n<path d=\"M16.6592 13.859C16.6363 13.859 16.6132 13.8525 16.5929 13.8391L15.454 13.0837C15.4017 13.049 15.389 12.9805 15.4256 12.9308C15.4624 12.8812 15.5344 12.8691 15.587 12.9039L16.7258 13.6593C16.7782 13.694 16.7909 13.7625 16.7543 13.8122C16.7317 13.8426 16.6958 13.859 16.6592 13.859Z\" fill=\"#F2F2F2\"/>\n<path d=\"M2.83893 6.16712C2.82253 6.16712 2.8059 6.16381 2.79006 6.15678L1.53008 5.60019C1.47204 5.57459 1.44699 5.50927 1.47401 5.45436C1.50102 5.39944 1.57001 5.37571 1.62794 5.40127L2.88795 5.95787C2.94599 5.98346 2.97104 6.04878 2.94402 6.10369C2.92435 6.14363 2.88257 6.16712 2.83893 6.16712Z\" fill=\"#F2F2F2\"/>\n<path d=\"M17.4211 12.6091C17.4047 12.6091 17.388 12.6058 17.3722 12.5988L16.1122 12.0422C16.0542 12.0166 16.0291 11.9513 16.0562 11.8964C16.0832 11.8415 16.1522 11.8177 16.2101 11.8433L17.4701 12.3999C17.5281 12.4255 17.5532 12.4908 17.5261 12.5457C17.5065 12.5857 17.4647 12.6091 17.4211 12.6091Z\" fill=\"#F2F2F2\"/>\n<path d=\"M2.40088 7.30781C2.39101 7.30781 2.38092 7.30661 2.37082 7.30401L1.02791 6.96313C0.966047 6.94745 0.92942 6.88726 0.946008 6.82873C0.962521 6.77019 1.02594 6.73528 1.08788 6.75114L2.43079 7.09202C2.49265 7.10769 2.52928 7.16788 2.51269 7.22642C2.49881 7.27543 2.45198 7.30781 2.40088 7.30781Z\" fill=\"#F2F2F2\"/>\n<path d=\"M17.9421 11.2528C17.9323 11.2528 17.9222 11.2516 17.9121 11.249L16.5692 10.9081C16.5073 10.8924 16.4707 10.8322 16.4873 10.7737C16.5038 10.7151 16.5672 10.6803 16.6291 10.6961L17.972 11.037C18.0339 11.0527 18.0705 11.1128 18.054 11.1714C18.0401 11.2205 17.9933 11.2528 17.9421 11.2528Z\" fill=\"#F2F2F2\"/>\n<path d=\"M2.17842 8.50294C2.175 8.50294 2.17163 8.5028 2.16817 8.50249L0.783216 8.3877C0.719499 8.38243 0.67237 8.32924 0.677937 8.2688C0.683466 8.2084 0.739835 8.16358 0.803441 8.16903L2.1884 8.28381C2.25212 8.28909 2.29924 8.34228 2.29368 8.40271C2.28848 8.45988 2.2379 8.50294 2.17842 8.50294Z\" fill=\"#F2F2F2\"/>\n<path d=\"M18.2069 9.83141C18.2036 9.83141 18.2001 9.83127 18.1967 9.83095L16.8117 9.71617C16.7479 9.7109 16.7008 9.65771 16.7064 9.59727C16.712 9.53691 16.7677 9.49219 16.8319 9.4975L18.2168 9.61228C18.2806 9.61756 18.3278 9.67075 18.3222 9.73118C18.3169 9.78838 18.2663 9.83141 18.2069 9.83141Z\" fill=\"#F2F2F2\"/>\n<path d=\"M0.793198 9.83146C0.733749 9.83146 0.683169 9.78839 0.677937 9.7313C0.67237 9.6709 0.719499 9.61767 0.783216 9.6124L2.16817 9.49761C2.23293 9.49234 2.28815 9.53706 2.29368 9.59739C2.29925 9.65779 2.25212 9.71101 2.1884 9.71629L0.803441 9.83107C0.799989 9.83132 0.796538 9.83146 0.793198 9.83146Z\" fill=\"#F2F2F2\"/>\n<path d=\"M16.8218 8.50291C16.7623 8.50291 16.7117 8.45984 16.7065 8.40275C16.7009 8.34235 16.7481 8.28912 16.8118 8.28385L18.1968 8.16906C18.2609 8.16337 18.3167 8.20851 18.3223 8.26884C18.3278 8.32924 18.2807 8.38246 18.217 8.38774L16.832 8.50252C16.8285 8.50277 16.8251 8.50291 16.8218 8.50291Z\" fill=\"#F2F2F2\"/>\n<path d=\"M1.05793 11.2528C1.00675 11.2528 0.959956 11.2205 0.946115 11.1714C0.929564 11.1129 0.966191 11.0527 1.02801 11.037L2.37093 10.6961C2.43257 10.6802 2.49621 10.7152 2.5128 10.7737C2.52935 10.8323 2.49272 10.8924 2.4309 10.9081L1.08798 11.249C1.07796 11.2516 1.0678 11.2528 1.05793 11.2528Z\" fill=\"#F2F2F2\"/>\n<path d=\"M16.5993 7.30777C16.5481 7.30777 16.5013 7.27542 16.4875 7.22642C16.4709 7.16785 16.5076 7.10769 16.5694 7.09201L17.9123 6.75114C17.9741 6.73528 18.0376 6.77019 18.0542 6.82873C18.0707 6.8873 18.0341 6.94745 17.9723 6.96313L16.6294 7.30401C16.6193 7.30654 16.6092 7.30777 16.5993 7.30777Z\" fill=\"#F2F2F2\"/>\n<path d=\"M1.57894 12.6091C1.5353 12.6091 1.49352 12.5857 1.47389 12.5457C1.44687 12.4908 1.47192 12.4255 1.52996 12.3999L2.78997 11.8433C2.84767 11.8177 2.91685 11.8415 2.9439 11.8964C2.97095 11.9513 2.94587 12.0166 2.88783 12.0422L1.62782 12.5988C1.61204 12.6058 1.59534 12.6091 1.57894 12.6091Z\" fill=\"#F2F2F2\"/>\n<path d=\"M16.1612 6.1672C16.1176 6.1672 16.0758 6.14372 16.0562 6.10381C16.0291 6.0489 16.0542 5.98358 16.1122 5.95799L17.3721 5.40139C17.4301 5.37584 17.4991 5.39957 17.5261 5.45448C17.5531 5.50939 17.5281 5.57471 17.4701 5.60031L16.2101 6.1569C16.1943 6.1639 16.1777 6.1672 16.1612 6.1672Z\" fill=\"#F2F2F2\"/>\n<path d=\"M2.34081 13.859C2.3043 13.859 2.26834 13.8427 2.24578 13.8122C2.20915 13.7625 2.22184 13.6941 2.27424 13.6593L3.41305 12.9039C3.46567 12.8691 3.53778 12.8813 3.57444 12.9309C3.61107 12.9805 3.59838 13.049 3.54598 13.0837L2.40716 13.8391C2.38694 13.8525 2.36375 13.859 2.34081 13.859Z\" fill=\"#F2F2F2\"/>\n<path d=\"M15.5206 5.11616C15.4841 5.11616 15.4481 5.09985 15.4256 5.06937C15.389 5.01969 15.4016 4.95128 15.454 4.91651L16.5929 4.16111C16.6455 4.12627 16.7175 4.13847 16.7543 4.18807C16.7909 4.23775 16.7782 4.30616 16.7258 4.34093L15.587 5.09633C15.5667 5.10969 15.5436 5.11616 15.5206 5.11616Z\" fill=\"#F2F2F2\"/>\n<path d=\"M3.32005 14.9645C3.29044 14.9645 3.26075 14.9538 3.23815 14.9324C3.19291 14.8896 3.19291 14.82 3.23815 14.7772L4.22122 13.8459C4.26645 13.803 4.33978 13.803 4.38505 13.8459C4.43029 13.8887 4.43029 13.9582 4.38505 14.0011L3.40199 14.9324C3.37935 14.9538 3.34966 14.9645 3.32005 14.9645Z\" fill=\"#F2F2F2\"/>\n<path d=\"M14.6971 4.18634C14.6675 4.18634 14.6378 4.17561 14.6152 4.1542C14.57 4.11138 14.57 4.04184 14.6152 3.99899L15.5983 3.06766C15.6435 3.02481 15.7169 3.02481 15.7621 3.06766C15.8074 3.11048 15.8074 3.18002 15.7621 3.22288L14.7791 4.1542C14.7564 4.17558 14.7267 4.18634 14.6971 4.18634Z\" fill=\"#F2F2F2\"/>\n<path d=\"M4.48695 15.8923C4.46402 15.8923 4.44086 15.8859 4.4206 15.8724C4.3682 15.8377 4.35551 15.7693 4.39214 15.7196L5.18958 14.6407C5.22636 14.5911 5.29846 14.5789 5.35097 14.6137C5.40337 14.6484 5.41606 14.7169 5.37943 14.7666L4.58199 15.8455C4.55939 15.876 4.5235 15.8923 4.48695 15.8923Z\" fill=\"#F2F2F2\"/>\n<path d=\"M13.7156 3.40613C13.6927 3.40613 13.6695 3.39969 13.6492 3.38626C13.5968 3.35153 13.5841 3.28308 13.6208 3.2334L14.4182 2.15449C14.4549 2.10482 14.5271 2.09276 14.5796 2.12753C14.632 2.16226 14.6447 2.23071 14.608 2.28039L13.8107 3.3593C13.7881 3.38981 13.7521 3.40613 13.7156 3.40613Z\" fill=\"#F2F2F2\"/>\n<path d=\"M5.80639 16.614C5.78999 16.614 5.77332 16.6107 5.75744 16.6037C5.69948 16.5781 5.67439 16.5128 5.70144 16.4579L6.28899 15.2642C6.31597 15.2093 6.38503 15.1855 6.44296 15.2111C6.50093 15.2367 6.52601 15.302 6.49896 15.3569L5.91141 16.5506C5.89181 16.5906 5.85003 16.614 5.80639 16.614Z\" fill=\"#F2F2F2\"/>\n<path d=\"M12.6061 2.79923C12.5897 2.79923 12.573 2.79593 12.5571 2.7889C12.4992 2.7633 12.4741 2.69798 12.5011 2.64307L13.0886 1.44937C13.1156 1.39442 13.1847 1.37069 13.2426 1.39629C13.3006 1.42188 13.3257 1.4872 13.2986 1.54212L12.7111 2.73581C12.6914 2.77578 12.6496 2.79923 12.6061 2.79923Z\" fill=\"#F2F2F2\"/>\n<path d=\"M7.23814 17.1075C7.22827 17.1075 7.21814 17.1063 7.20808 17.1037C7.14622 17.0881 7.1096 17.0279 7.12618 16.9693L7.48603 15.6971C7.50258 15.6387 7.56619 15.6037 7.6279 15.6195C7.68976 15.6352 7.72639 15.6954 7.7098 15.7539L7.34995 17.0261C7.33611 17.0752 7.28928 17.1075 7.23814 17.1075Z\" fill=\"#F2F2F2\"/>\n<path d=\"M11.4024 2.38418C11.3926 2.38418 11.3825 2.38299 11.3724 2.38039C11.3105 2.36471 11.2739 2.30452 11.2905 2.24598L11.6503 0.973785C11.6669 0.915249 11.7301 0.880234 11.7922 0.896195C11.854 0.911874 11.8907 0.972062 11.8741 1.0306L11.5143 2.3028C11.5004 2.3518 11.4536 2.38418 11.4024 2.38418Z\" fill=\"#F2F2F2\"/>\n<path d=\"M8.73841 17.3582C8.73507 17.3582 8.73162 17.358 8.7282 17.3577C8.66445 17.3525 8.61728 17.2992 8.62289 17.2388L8.74405 15.9268C8.74958 15.8664 8.80576 15.8215 8.86952 15.827C8.93327 15.8323 8.98044 15.8855 8.97483 15.9459L8.85367 17.258C8.8484 17.3151 8.79786 17.3582 8.73841 17.3582Z\" fill=\"#F2F2F2\"/>\n<path d=\"M10.1408 2.17338C10.1374 2.17338 10.134 2.17324 10.1305 2.17293C10.0668 2.16765 10.0196 2.11446 10.0252 2.05403L10.1464 0.741961C10.1519 0.681598 10.2075 0.636633 10.2719 0.642188C10.3356 0.647461 10.3828 0.700653 10.3772 0.761086L10.256 2.07315C10.2508 2.13035 10.2002 2.17338 10.1408 2.17338Z\" fill=\"#F2F2F2\"/>\n<path d=\"M10.6478 10.0874L15.767 3.06299L8.35236 7.91276L3.23315 14.9372L10.6478 10.0874Z\" fill=\"#F2F2F2\"/>\n<path d=\"M10.6478 10.0874L15.767 3.06299L3.23315 14.9372L10.6478 10.0874Z\" fill=\"#CCCCCC\"/>\n<path d=\"M10.6477 10.0874L15.7669 3.06299L8.35229 7.91276L10.6477 10.0874Z\" fill=\"#FF525D\"/>\n<path d=\"M10.6477 10.0874L15.7669 3.06299L9.5 9.00007L10.6477 10.0874Z\" fill=\"#EF4152\"/>\n</svg>\n\n";
exports.overlay = "\n        <div class=\"overlay\">\n        \n        <div class=\"overalay-container\">\n        \n            <div class=\"overlay-wizard\">\n            \n                <div class=\"wizard-browser-selection\">\n                \n                    <div class=\"browser-type-button browser-selected\">\n                         All\n                    </div>\n                    <div class=\"browser-type-button\">\n                         " + chrome + "\n                    </div>\n                    <div class=\"browser-type-button\">\n                         " + safari + "\n                    </div>\n                     <div class=\"browser-type-button\">\n                         " + exports.firefox + "\n                    </div>\n                    <div class=\"browser-type-button\">\n                         " + exports.edge + "\n                    </div>\n                    \n                </div>\n                \n                 <div class=\"overlay-wizard-device-selection\">\n                    <div class=\"device-type-button device-selected\">\n                         Desktop\n                    </div>\n                    <div class=\"device-type-button\">\n                         Mobile\n                    </div>\n                \n                </div>\n            \n                <div class=\"overlay-wizard-button\">\n                    Start\n                </div>\n            </div>\n            \n            <div class=\"overlay-step\">\n            \n                <h2>\n                Steps to use\n                </h2>\n                \n                <p>\n                    1.) Press Play button.\n                    <br/>\n    \n                    2.) Click on right dot to select interactions\n                                        <br/>\n                    3.) When complete save the interaction.\n                                        <br/>\n                    \n                    4.) On completion, replay it it or export it.\n                </p>\n            \n            </div>\n        \n        \n        </div>\n        \n        \n     </div>\n     \n     <style>\n     .overlay{\n        width: 100%; height: 100%; position: fixed; top:0; left: 0; z-index: 100000; background: rgba(27, 27, 29, 0.94);\n            display: flex;\n            justify-content: center;\n            color: #fff;\n            font-family: 'Panton';\n     }\n     .overalay-container{\n         max-width: 95%;\n        display: flex;\n        justify-content: left;\n        flex-direction: column;\n        padding: 70px 0;\n     }\n     \n     .overlay-wizard{\n        width: 100%;\n         box-sizing: border-box;\n        min-height: 45px;\n        left: 352px;\n        top: 161px;\n        background: #FFFFFF;\n        border: 2px solid #DBDBDB;\n        border-radius: 15px;\n        margin-bottom: 50px;;\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n         flex-wrap: wrap;\n        padding: 0 20px;\n     }\n     \n     .overlay-wizard-button{\n        width: 81px;\n        height: 33px;\n        \n        background: #5AD7FF;\n        border: 2px solid #1EAFDD;\n        box-sizing: border-box;\n        border-radius: 4px;\n        display: flex;\n        align-items: center;\n         justify-content: center; \n         margin: 15px 0px;\n         cursor: pointer;\n     }\n     \n       .device-type-button{\n        width: 81px;\n        height: 33px;\n        box-sizing: border-box;\n        border-radius: 4px;\n        display: flex;\n        align-items: center;\n         justify-content: center; \n         color: #1a1a1a;\n         margin: 15px 0px;\n         cursor: pointer;\n     }\n     \n     .device-selected{\n     background: #F8F8F8;\n     border: 1px solid #DDDDDD;\n     }\n     \n     .overlay-wizard-device-selection{\n        display: flex;\n     }\n     \n      .wizard-browser-selection{\n        display: flex;\n     }\n     \n      .browser-type-button{\n        padding: 0 20px;\n        height: 33px;\n        box-sizing: border-box;\n        border-radius: 4px;\n        display: flex;\n        align-items: center;\n         justify-content: center; \n         color: #1a1a1a;\n         margin: 15px 0px;\n         cursor: pointer;\n     }\n          .browser-selected{\nborder: 1px solid #DDDDDD;\n     }\n     \n     .overlay h2{\n         font-size: 24px;\n     }\n     \n     .overlay p{\n         font-size: 18px;\n        line-height: 2.76;\n     }\n    </style>\n\n";

/***/ }),

/***/ "./src/content.ts":
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var overlay_1 = __webpack_require__(/*! ./components/overlay */ "./src/components/overlay.ts");

var domUtils_1 = __webpack_require__(/*! ./utils/domUtils */ "./src/utils/domUtils.ts");

function loadContentScript() {
  if (window.scriptLoaded) {
    console.log("Already loaded, returning early");
    return;
  }

  window.scriptLoaded = true;
  console.log(overlay_1.overlay);
  domUtils_1.loadContentInBody(overlay_1.overlay);
}

loadContentScript();

/***/ }),

/***/ "./src/utils/domUtils.ts":
/*!*******************************!*\
  !*** ./src/utils/domUtils.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function loadContentInBody(content) {
  document.body.innerHTML += content;
}

exports.loadContentInBody = loadContentInBody;

/***/ })

/******/ });
//# sourceMappingURL=content-script.js.map