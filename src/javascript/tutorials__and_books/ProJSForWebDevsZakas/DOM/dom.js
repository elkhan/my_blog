// The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. The DOM represents a document as a hierarchical tree of nodes, allowing developers to add, remove, and modify individual parts of the page. Evolving out of early Dynamic HTML (DHTML) innovations from Netscape and Microsoft, the DOM is now a truly cross-platform, language-independent way of representing and manipulating pages for markup.

// ***********************
// The Node Type

// DOM Level 1 describes an interface called Node that is to be implemented by all node types in
// the DOM. The Node interface is implemented in JavaScript as the Node type, which is accessible in all browsers except Internet Explorer. All node types inherit from Node in JavaScript, so all node types share the same basic properties and methods.
// Every node has a nodeType property that indicates the type of node that it is. Node types are represented by one of the following 12 numeric constants on the Node type:
Node.ELEMENT_NODE (1)
Node.ATTRIBUTE_NODE (2)
Node.TEXT_NODE (3)
Node.CDATA_SECTION_NODE (4)
Node.ENTITY_REFERENCE_NODE (5)
Node.ENTITY_NODE (6)
Node.PROCESSING_INSTRUCTION_NODE (7)
Node.COMMENT_NODE (8)
Node.DOCUMENT_NODE (9)
Node.DOCUMENT_TYPE_NODE (10)
Node.DOCUMENT_FRAGMENT_NODE (11)
Node.NOTATION_NODE (12)

if (someNode.nodeType == Node.ELEMENT_NODE) { // won't work in IE < 9
  console.log("Node is an element.");
}
// For cross-browser compatibility, it’s best to compare the nodeType property against a numeric value, as in the following:
if (someNode.nodeType == 1) { // works in all browsers
  console.log("Node is an element.");
}
// Not all node types are supported in web browsers. Developers most often work with element and text nodes.

// The nodeName and nodeValue Properties
// Two properties, nodeName and nodeValue, give specific information about the node. The values of these properties are completely dependent on the node type. It’s always best to test the node type before using one of these values, as the following code shows:
if (someNode.nodeType == 1) {
  value = someNode.nodeName; // will be the element's tag name
} // In this example, the node type is checked to see if the node is an element. If so, the nodeName value is assigned to a variable. For elements, nodeName is always equal to the element’s tag name, and nodeValue is always null.

// Node relationships
// All nodes in a document have relationships to other nodes. These relationships are described in terms of traditional family relationships as if the document tree were a family tree. In HTML, the <body> element is considered a child of the <html> element; likewise the <html> element is considered the parent of the <body> element. The <head> element is considered a sibling of the <body> element, because they both share the same immediate parent, the <html> element.

// Each node has a childNodes property containing a NodeList. A NodeList is an array-like object used to store an ordered list of nodes that are accessible by position. Keep in mind that a NodeList is not an instance of Array even though its values can be accessed using bracket notation and the length property is present. NodeList objects are unique in that they are actually queries being run against the DOM structure, so changes will be reflected in NodeList objects automatically. It is often said that a NodeList is a living, breathing object rather than a snapshot of what happened at the time it was first accessed.

var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNodes.item(1);
var count = someNode.childNodes.length;

// It’s possible to convert NodeList objects into arrays using Array.prototype.slice()
//won’t work in IE8 and earlier
var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes, 0);

// To convert a NodeList to an array in Internet Explorer, you must manually iterate over the members. The following function works in all browsers:
function convertToArray(nodes){
  var array = null;
  try {
    array = Array.prototype.slice.call(nodes, 0); //non-IE and IE9+
  } catch (ex) {
      array = [];
      for (var i=0, len=nodes.length; i < len; i += 1){
        array.push(nodes[i]);
      }
    }
  return array;
}

// Each node within a childNodes list is considered to be a sibling of the other nodes in the same list. It’s possible to navigate from one node in the list to another by using the previousSibling and nextSibling properties. The first node in the list has null for the value of its previousSibling property, and the last node in the list has null for the value of its nextSibling property, as shown in the following example:
if (someNode.nextSibling === null){
  console.log("Last node in the parent’s childNodes list.");
} else if (someNode.previousSibling === null){
  console.log("First node in the parent’s childNodes list.");
} // Note that if there’s only one child node, both nextSibling and previousSibling will be null.

// Another relationship exists between a parent node and its first and last child nodes. The firstChild and lastChild properties point to the first and last node in the childNodes list, respectively. The value of someNode.firstChild is always equal to someNode.childNodes[0], and the value of someNode.lastChild is always equal to someNode.childNodes[someNode.childNodes.length-1].
// If there is only one child node, firstChild and lastChild point to the same node; if there are no children, then firstChild and lastChild are both null.

// Another convenience method is hasChildNodes(), which returns true if the node has one or more child nodes and is more efficient than querying the length of the childNodes list.

// The ownerDocument property is a pointer to the document node that represents the entire document.


// Manipulating Nodes
// Because all relationship pointers are read-only, several methods are available to manipulate nodes. The most often-used method is appendChild(), which adds a node to the end of the childNodes list. Doing so updates all of the relationship pointers in the newly added node, the parent node, and the previous last child in the childNodes list. When complete, appendChild() returns the newly added node.
var returnedNode = someNode.appendChild(newNode);
console.log(returnedNode == newNode); // true
console.log(someNode.lastChild == newNode); // true

// If the node passed into appendChild() is already part of the document, it is removed from its previous location and placed at the new location. Even though the DOM tree is connected by a series of pointers, no DOM node may exist in more than one location in a document. So if you call appendChild()and pass in the first child of a parent, as the following example shows, it will end up as the last child:
// assume multiple children for someNode
var returnedNode = someNode.appendChild(someNode.firstChild);
console.log(returnedNode == someNode.firstChild); // false
console.log(returnedNode == someNode.lastChild); // true

// When a node needs to be placed in a specific location within the childNodes list, instead of just at the end, the insertBefore() method may be used. The insertBefore() method accepts two arguments: the node to insert and a reference node. The node to insert becomes the previous sibling of the reference node and is ultimately returned by the method. If the reference node is null, then insertBefore() acts the same as appendChild(), as this example shows:

// insert as last child
returnedNode = someNode.insertBefore(newNode, null);
console.log(newNode == someNode.lastChild); // true

// insert as the new first child
returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
console.log(returnedNode == newNode); // true
console.log(newNode == someNode.firstChild); // true

// insert before last child
returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
console.log(newNode == someNode.childNodes[someNode.childNodes.length - 2]); // true

// Both appendChild() and insertBefore() insert nodes without removing any. The replaceChild() method accepts two arguments: the node to insert and the node to replace. The node to replace is returned by the function and is removed from the document tree completely while the inserted node takes its place.
// replace first child
var returnedNode = someNode.replaceChild(newNode, someNode.firstChild);

// replace last child
returnedNode = someNode.replaceChild(newNode, someNode.lastChild)

// When a node is inserted using replaceChild(), all of its relationship pointers are duplicated from the node it is replacing. Even though the replaced node is technically still owned by the same document, it no longer has a specific location in the document.


// To remove a node without replacing it, you can use the removeChild() method. This method accepts a single argument, which is the node to remove. The removed node is then returned as the function value, as this example shows:
// remove first child
var formerFirstChild = someNode.removeChild(someNode.firstChild);

// remove last child
var formerLastChild = someNode.removeChild(someNode.lastChild);
// As with replaceChild(), a node removed via removeChild() is still owned by the document but doesn’t have a specific location in the document.

// All four of these methods work on the immediate children of a specific node, meaning that to use them you must know the immediate parent node (which is accessible via the previously mentioned parentNode property). Not all node types can have child nodes, and these methods will throw errors if you attempt to use them on nodes that don’t support children.

// Other Methods
// The cloneNode() method accepts a single Boolean argument indicating whether to do a deep copy. When the argument is true, a deep copy is used, cloning the node and its entire subtree; when false, only the initial node is cloned. The cloned node that is returned is owned by the document but has no parent node assigned. As such, the cloned node is an orphan and doesn’t exist in the document until added via appendChild(), insertBefore(), or replaceChild().
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
var deepList = myList.cloneNode(true);
console.log(deepList.childNodes.length); // 3 (IE < 9) or 7 (others)

var shallowList = myList.cloneNode(false);
console.log(shallowList.childNodes.length); // 0

// The last remaining method is normalize(). Its sole job is to deal with text nodes in a document subtree. Because of parser implementations or DOM manipulations, it’s possible to end up with text nodes that contain no text or text nodes that are siblings. When normalize() is called on a node, that node’s descendants are searched for both of these circumstances. If an empty text node is found, it is removed; if text nodes are immediate siblings, they are joined into a single text node.

// ***********************
// The Document Type

// JavaScript represents document nodes via the Document type. In browsers, the document object is an instance of HTMLDocument (which inherits from Document) and represents the entire HTML page. The document object is a property of window and so is accessible globally. A Document node has the following characteristics:

// nodeType is 9.
// nodeName is “#document”.
// nodeValue is null.
// parentNode is null.
// ownerDocument is null.
// Child nodes may be a DocumentType (maximum of one), Element (maximum of one), ProcessingInstruction, or Comment.

// The Document type can represent HTML pages or other XML-based documents, though the most common use is through an instance of HTMLDocument through the document object. The document object can be used to get information about the page and to manipulate both its appearance and the underlying structure.

<html>
  <body>
  </body>
</html>

var html = document.documentElement; // get reference to <html>
console.log(html == document.childNodes[0]); // true
console.log(html == document.firstChild); // true

var body = document.body; // get reference to <body>

var doctype = document.doctype; // get reference to <!DOCTYPE>

// Comments
// <!-- first comment -->
<html>
  <body>
  </body>
</html>
// <!-- second comment -->
// This page seems to have three child nodes: a comment, the <html> element, and another comment. Logically, you would expect document.childNodes to have three items corresponding to what appears in the code. In practice, however, browsers handle comments outside of the <html> element in the following very different ways:

// Internet Explorer 8 and earlier, Safari 3.1 and later, Opera, and Chrome create a comment node for the first comment but not for the second. The first comment becomes the first node in document.childNodes.
// Internet Explorer 9 and later create a comment node for the first comment as part of document.childNodes. They also create a comment node for the second comment as part of document.body.childNodes.
// Firefox and Safari prior to version 3.1 ignore both comments.

// For the most part, the appendChild(), removeChild(), and replaceChild() methods aren’t used on document, since the document type (if present) is read-only and there can be only one element child node (which is already present).


// Document Information

// The document object, as an instance of HTMLDocument, has several additional properties that standard Document objects do not have. These properties provide information about the web page that is loaded. The first such property is title, which contains the text in the <title> element and is displayed in the title bar or tab of the browser window.
// get the document title
var originalTitle = document.title;

// set the document title
document.title = "New page title";

// The next three properties are all related to the request for the web page: URL, domain, and referrer. The URL property contains the complete URL of the page (the URL in the address bar), the domain property contains just the domain name of the page, and the referrer property gives the URL of the page that linked to this page.

// get the complete URL
var url = document.URL;

// get the domain
var domain = document.domain;

// get the referrer
var referrer = document.referrer;


// Locating elements
// Perhaps the most common DOM activity is to retrieve references to a specific element or sets of elements to perform certain operations. This capability is provided via a number of methods on the document object. The Document type provides two methods to this end: getElementById('id') and getElementsByTagName('tagName').

// If there is more than one element with the same ID in a page, getElementById() returns the element that appears first in the document.
// *Internet Explorer 7 and earlier add an interesting quirk to this, also returning form elements (<input>, <textarea>, <button>, and <select>) that have a name attribute matching the given ID. If one of these form elements has a name attribute equal to the specified ID, and it appears before an element with the given ID in the document, Internet Explorer returns the form element.

// In HTML documents, getElementsByTagName('tagName') method returns an HTMLCollection object, which is very similar to a NodeList in that it is considered a “live” collection. For example, the following code retrieves all <img> elements in the page and returns an HTMLCollection:
var images = document.getElementsByTagName('img');
// This code stores an HTMLCollection object in the images variable. As with NodeList objects, items in HTMLCollection objects can be accessed using bracket notation or the item() method. The number of elements in the object can be retrieved via the length property, as this example demonstrates:
console.log(images.length); // output the number of images
console.log(images[0].src); // output the src attribute of the first image
console.log(images.item(0).src); // output the src attribute of the first image
// The HTMLCollection object has an additional method, namedItem(), that lets you reference an item in the collection via its name attribute. For example, suppose you had the following <img> element in a page:
<img src="myimage.gif" name="myImage"/>
var myImage = images.namedItem('myImage');
var myImage = images['myImage']; // For HTMLCollection objects, bracket notation can be used with either numeric or string indices. Behind the scenes, a numeric index calls item() and a string index calls namedItem().

// To retrieve all elements in the document, pass in “*” to getElementsByTagName().
var allElements = document.getElementsByTagName(“*”)

// A third method, which is defined on the HTMLDocument type only, is getElementsByName(). As its name suggests, this method returns all elements that have a given name attribute. The getElementsByName() method is most often used with radio buttons, all of which must have the same name to ensure the correct value gets sent to the server, as the following example shows:
<fieldset>
  <legend>Which color do you prefer?</legend>
  <ul>
    <li><input type="radio" value="red" name="color" id="colorRed"/><label for="colorRed">Red</label></li>
    <li><input type="radio" value="green" name="color" id="colorGreen"/><label for="colorGreen">Green</label></li>
    <li><input type="radio" value="blue" name="color" id="colorBlue"/><label for="colorBlue">Blue</label></li>
  </ul>
</fieldset>
// In this code, the radio buttons all have a name attribute of “color” even though their IDs are different. The IDs allow the <label> elements to be applied to the radio buttons, and the name attribute ensures that only one of the three values will be sent to the server. These radio buttons can all then be retrieved using the following line of code:
var radios = document.getElementsByName("color"); // As with getElementsByTagName(), the getElementsByName() method returns an HTMLCollection. In this context, however, the namedItem() method always retrieves the first item (since all items have the same name).


// Special Collections
// The document object has several special collections. Each of these collections is an HTMLCollection object and provides faster access to common parts of the document, as described here:
document.anchors — Contains all <a> elements with a name attribute in the document.
document.forms — Contains all <form> elements in the document. The same as document .getElementsByTagName(“form”).
document.images — Contains all <img> elements in the document. The same as document .getElementsByTagName(“img”).
document.links — Contains all <a> elements with an href attribute in the document.


// Document Writing is the ability to write to the output stream of a web page. This capability comes in the form of four methods: write(), writeln(), open(), and close(). The write() and writeln() methods each accept a string argument to write to the output stream. write() simply adds the text as is, whereas writeln() appends a new-line character (\n) to the end of the string. These two methods can be used as a page is being loaded to dynamically add content to the page, as shown in the following example:
// <html>
// <head>
//   <title>document.write() Example</title>
// </head>
// <body>
//   <p>The current date and time is:
//   <script type=”text/javascript”>
//     document.write(“<strong>” + (new Date()).toString() + “</strong>”);
//   </script>
//   </p>
// </body>
// </html>

// The write() and writeln() methods are often used to dynamically include external resources such as JavaScript files:
// <html lang="en">
// <head>
//   <title>document.write() Example</title>
// </head>
// <body>
//   <script type="text/javascript">
//     document.write("<script type=\"text/javascript\" src=\"file.js\">" + "<\/script>");
//   </script>
// </body>
// </html>

// If document.write() is called after the page has been completely loaded, the content overwrites the entire page, as shown in the following example:

// <html>
// <head>
//   <title>Some title</title>
// </head>
// <body>
//   <p>This won't be shown because it will be overwritten</p>
//   <script type="text/javascript">
//     window.onload = function() {
//         document.write("Hello World!");
//     };
//   </script>
// </body>
// </html>


// **********************
// The Element Type
// The Element type represents an XML or HTML element, providing access to information such as its tag name, children, and attributes. An Element node has the following characteristics:

// nodeType is 1.
// nodeName is the element’s tag name.
// nodeValue is null.
// parentNode may be a Document or Element.
// Child nodes may be Element, Text, Comment, ProcessingInstruction, CDATASection, or EntityReference.

// An element’s tag name is accessed via the nodeName property or by using the tagName property; both properties return the same value (the latter is typically used for clarity):
<div id="myDiv"></div>
var div = document.getElementById("myDiv");
console.log(div.tagName); // "DIV" - When used with HTML, the tag name is always represented in all uppercase; when used with XML (including XHTML), the tag name always matches the case of the source code.
// if (element.tagName.toLowerCase() == “div”){ } // Preferred - works in all documents
console.log(div.tagName == div.nodeName); // true


// HTML Elements
// All HTML elements are represented by the HTMLElement type, either directly or through subtyping. The HTMLElement inherits directly from Element and adds several properties. Each property represents one of the following standard attributes that are available on every HTML element:

// id — A unique identifier for the element in the document.
// title — Additional information about the element, typically represented as a tooltip.
// lang — The language code for the contents of the element (rarely used).
// dir — The direction of the language, “ltr” (left-to-right) or “rtl” (right-to-left); also rarely used.
// className — The equivalent of the class attribute, which is used to specify CSS classes on an element. The property could not be named class because class is an ECMAScript reserved word (see Chapter 1 for information about reserved words).
<div id=”myDiv” class=”bd” title=”Body text” lang=”en” dir=”ltr”></div>

var div = document.getElementById("myDiv");
console.log(div.id); // "myDiv"
console.log(div.className); // "bd"
console.log(div.title); // "Body text"
console.log(div.lang); // "en"
console.log(div.dir); // "ltr"
// It’s also possible to use the following code to change each of the attributes by assigning new values to the properties:
div.id = "someOtherId";
div.className = "ft";
div.title = "Some other text";
div.lang = "fr";
div.dir = "rtl";

// All HTML elements are represented by an instance of HTMLElement or a more specific subtype. The following table lists each HTML element and its associated type:
A HTMLAnchorElement
INPUT HTMLInputElement
ABBR HTMLElement
INS HTMLModElement
ACRONYM HTMLElement
ADDRESS HTMLElement
KBD HTMLElement
LABEL HTMLLabelElement
AREA HTMLAreaElement
LEGEND HTMLLegendElement
B HTMLElement
LI HTMLLIElement
BASE HTMLBaseElement
LINK HTMLLinkElement
MAP HTMLMapElement
BDO HTMLElement
BIG HTMLElement
META HTMLMetaElement
BLOCKQUOTE HTMLQuoteElement
NOFRAMES HTMLElement
BODY HTMLBodyElement
NOSCRIPT HTMLElement
BR HTMLBRElement
OBJECT HTMLObjectElement
BUTTON HTMLButtonElement
OL HTMLOListElement
CAPTION HTMLTableCaptionElement
OPTGROUP HTMLOptGroupElement
OPTION HTMLOptionElement
CITE HTMLElement
P HTMLParagraphElement
CODE HTMLElement
PARAM HTMLParamElement
COL HTMLTableColElement
PRE HTMLPreElement
COLGROUP HTMLTableColElement
Q HTMLQuoteElement
DD HTMLElement
DEL HTMLModElement
SAMP HTMLElement
DFN HTMLElement
SCRIPT HTMLScriptElement
SELECT HTMLSelectElement
DIV HTMLDivElement
SMALL HTMLElement
DL HTMLDListElement
SPAN HTMLElement
DT HTMLElement
EM HTMLElement
STRONG HTMLElement
FIELDSET HTMLFieldSetElement
STYLE HTMLStyleElement
SUB HTMLElement
FORM HTMLFormElement
SUP HTMLElement
FRAME HTMLFrameElement
TABLE HTMLTableElement
FRAMESET HTMLFrameSetElement
TBODY HTMLTableSectionElement
H1 HTMLHeadingElement
TD HTMLTableCellElement
H2 HTMLHeadingElement
TEXTAREA HTMLTextAreaElement
H3 HTMLHeadingElement
TFOOT HTMLTableSectionElement
H4 HTMLHeadingElement
TH HTMLTableCellElement
H5 HTMLHeadingElement
THEAD HTMLTableSectionElement
H6 HTMLHeadingElement
TITLE HTMLTitleElement
HEAD HTMLHeadElement
TR HTMLTableRowElement
HR HTMLHRElement
TT HTMLElement
HTML HTMLHtmlElement
I HTMLElement
UL HTMLUListElement
IFRAME HTMLIFrameElement
VAR HTMLElement
IMG HTMLImageElement
// Each of these types has attributes and methods associated with it. Many of these types are discussed throughout this book. Zakas Professional JS for Web Developers. Chapter 10. page 371.

// Getting Attributes
// Each element may have zero or more attributes, which are typically used to give extra information about the particular element or its contents. The three primary DOM methods for working with attributes are getAttribute(), setAttribute(), and removeAttribute(). These methods are intended to work on any attribute, including those defined as properties on the HTMLElement type.
var div = document.getElementById("myDiv");
console.log(div.getAttribute("id")); // "myDiv"
console.log(div.getAttribute("class")); // "bd" vs div.className when object property
console.log(div.getAttribute("title")); // "Body text"
console.log(div.getAttribute("lang")); // "en"
console.log(div.getAttribute("dir")); // "ltr"

// The getAttribute() method can also retrieve the value of custom attributes that aren’t part of the formal HTML language.
<div id="myDiv" data-my_special_attribute="hello!"></div> // Custom attributes must be prepended with data-
var value = div.getAttribute("data-my_special_attribute");

// All attributes on an element are also accessible as properties of the DOM element object itself. There are, of course, the five properties defined on HTMLElement that map directly to corresponding attributes, but all recognized (noncustom) attributes get added to the object as properties:

<div id="myDiv" align="left" my_special_attribute="hello"></div>
console.log(div.id); // "myDiv"
console.log(div.my_special_attribute); // undegined (except in IE)
console.log(div.align); // "left"

// Two types of attributes have property names that don’t map directly to the same value returned by getAttribute().
// The first attribute is style, which is used to specify stylistic information about the element using CSS. When accessed via getAttribute(), the style attribute contains CSS text while accessing it via a property that returns an object.

// The second category of attribute that behaves differently is event-handler attributes such as onclick. When used on an element, the onclick attribute contains JavaScript code, and that code string is returned when using getAttribute(). When the onclick property is accessed, however, it returns a JavaScript function (or null if the attribute isn’t specified). This is because onclick and other event-handling properties are provided such that functions can be assigned to them.

// Because of these differences, developers tend to forego getAttribute() when programming the DOM in JavaScript and instead use the object properties exclusively. The getAttribute() method is used primarily to retrieve the value of a custom attribute.


// Setting attributes
// The sibling method to getAttribute() is setAttribute(), which accepts two arguments: the name of the attribute to set and the value to set it to. If the attribute already exists, setAttribute() replaces its value with the one specified; if the attribute doesn’t exist, setAttribute() creates it and sets its value.
div.setAttribute("id", "someOtherId");
div.setAttribute("class", "ft");
div.setAttribute("title", "Some other text");
div.setAttribute("lang", "fr");
div.setAttribute("dir", "rtl");
// Because all attributes are properties, assigning directly to the property can set the attribute values, as shown here:
div.id = "someOtherId";
div.align = "left";

// However:
div.mycolor = "red"; // custom attribute
console.log(div.getAttribute("mycolor")); // null (except IE)
// This example adds a custom property named mycolor and sets its value to “red”. In most browsers, this property does not automatically become an attribute on the element, so calling getAttribute() to retrieve an attribute with the same name returns null.

// The last method is removeAttribute(), which removes the attribute from the element altogether. This does more than just clear the attribute’s value; it completely removes the attribute from the element, as shown here:
div.removeAttribute("class");


// The attributes Property
// The Element type is the only DOM node type that uses the attributes property. The attributes property contains a NamedNodeMap, which is a “live” collection similar to a NodeList. Every attribute on an element is represented by an Attr node, each of which is stored in the NamedNodeMap object. A NamedNodeMap object has the following methods:

// getNamedItem(name) — Returns the node whose nodeName property is equal to name.
// removeNamedItem(name) — Removes the node whose nodeName property is equal to name
// from the list.
// setNamedItem(node) — Adds the node to the list, indexing it by its nodeName property.
// item(pos) — Returns the node in the numerical position pos.
