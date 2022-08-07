// At the core of the BOM is the window object, which represents an instance of the browser. The window object serves a dual purpose in browsers, acting as the JavaScript interface to the browser window and the ECMAScript Global object. This means that every object, variable, and function defined in a web page uses window as its Global object and has access to methods like parseInt().

// When frames are used, each frame has its own window object and its own copies of all native constructors and functions. Each frame is stored in the frames collection, indexed both by position and by name.
// To reference other frames, including parent frames, there are several window pointers.
// The top object always points to the outermost frame, which represents the entire browser
// window.
// The parent object represents the containing frame, and self points back to window.

// The location object allows programmatic access to the browser’s navigation system. By setting properties, it’s possible to change the browser’s URL piece by piece or altogether.
// The replace() method allows for navigating to a new URL and replacing the currently displayed page in the browser’s history.
// The navigator object provides information about the browser. The type of information provided depends largely on the browser being used, though some common properties, such as userAgent, are available in all browsers.

// Two other objects available in the BOM perform very limited functions. The screen object provides information about the client display. This information is typically used in metrics gathering for web sites. The history object offers a limited peek into the browser’s history stack, allowing developers to determine how many sites are in the history stack and giving them the ability to go back or forward to any page in the history.

// *********************
// The Location Object

// Query String Arguments
// Most of the information in location is easily accessible from these properties. The one part of
// the URL that isn’t provided is an easy-to-use query string. Though location.search returns everything from the question mark until the end of the URL, there is no immediate access to query- string arguments on a one-by-one basis. The following function parses the query string and returns an object with entries for each argument:

function getQueryStringArgs() {
  // get query string without the initial ?
  // eslint-disable-next-line no-restricted-globals
  const qs = location.search.length > 0 ? location.search.substring(1) : ''

  // object to hold data
  const args = {}

  // get individual items
  const items = qs.length ? qs.split('&') : []
  let item = null
  let name = null
  let value = null

  // used in for loop
  let i = 0
  const len = items.length

  // assign each item onto the args object
  for (i = 0; i < len; i += 1) {
    item = items[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])

    if (name.length) {
      args[name] = value
    }
  }

  return args
}
