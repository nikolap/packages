/**
 * @fileoverview Closure Compiler externs for Facebook React.js 0.12.0.
 * @see http://reactjs.org
 * @externs
 */

/**
 * @type {Object}
 * @const
 */
var React = {};

/**
 * @type {string}
 */
React.version;

/**
 * @param {boolean} shouldUseTouch
 */
React.initializeTouchEvents = function(shouldUseTouch) {};

React.createClass = function(specification) {};
React.createFactory = function(reactClass) {};

/**
 * @param {*} componentClass
 * @return {boolean}
 * @deprecated
 */
React.isValidClass = function(componentClass) {};

/**
 * @param {?Object} object
 * @return {boolean} True if `object` is a valid component.
 */
React.isValidElement = function(object) {};

/**
 * @param {React.ReactComponent} container
 * @param {Element} mountPoint
 * @param {Function=} callback
 * @return {React.ReactComponent}
 * @deprecated
 */
React.renderComponent = function(container, mountPoint, callback) {};

/**
 * @param {React.ReactComponent} container
 * @param {Element} mountPoint
 * @param {Function=} callback
 * @return {React.ReactComponent}
 */
React.render = function(container, mountPoint, callback) {};


/**
 * @param {Element} container
 */
React.unmountComponentAtNode = function(container) {};

/**
 * @param {React.ReactComponent} component
 * @return {string}
 * @deprecated
 */
React.renderComponentToString = function(component) {};

/**
 * @param {React.ReactComponent} component
 * @return {string}
 */
React.renderToString = function(component) {};

/**
 * @param {React.ReactComponent} component
 * @return {string}
 * @deprecated
 */
React.renderComponentToStaticMarkup = function(component) {};

/**
 * @param {React.ReactComponent} component
 * @return {string}
 */
React.renderToStaticMarkup = function(component) {};

/**
 * Constructs a component instance of `constructor` with `initialProps` and
 * renders it into the supplied `container`.
 *
 * @param {Function} constructor React component constructor.
 * @param {Object} props Initial props of the component instance.
 * @param {Element} container DOM element to render into.
 * @return {React.ReactComponent} Component instance rendered in `container`.
 */
React.constructAndRenderComponent = function(constructor, props, container) {};

/**
 * Constructs a component instance of `constructor` with `initialProps` and
 * renders it into a container node identified by supplied `id`.
 *
 * @param {Function} componentConstructor React component constructor
 * @param {Object} props Initial props of the component instance.
 * @param {string} id ID of the DOM element to render into.
 * @return {React.ReactComponent} Component instance rendered in the container node.
 */
React.constructAndRenderComponentByID = function(componentConstructor, props,
  id) {};

/**
 * @interface
 */
React.ReactComponent = function() {};

/**
 * @type {Object}
 */
React.ReactComponent.prototype.props;

/**
 * @type {Object}
 */
React.ReactComponent.prototype.state;

/**
 * @type {Object}
 */
React.ReactComponent.prototype.refs;

/**
 * @type {Object}
 */
React.ReactComponent.prototype.context;

/**
 * @type {Object}
 * @protected
 */
React.ReactComponent.prototype.propTypes;

/**
 * @type {Object}
 * @protected
 */
React.ReactComponent.prototype.contextTypes;

/**
 * @type {Object}
 */
React.ReactComponent.prototype.mixins;

/**
 * @param {Object} nextProps
 * @param {Function=} callback
 */
React.ReactComponent.prototype.setProps = function(nextProps, callback) {};

/**
 * @return {Object}
 */
React.ReactComponent.prototype.getInitialState = function() {};

/**
 * @return {Object}
 */
React.ReactComponent.prototype.getDefaultProps = function() {};

/**
 * @return {Object}
 */
React.ReactComponent.prototype.getChildContext = function() {};

/**
 * @return {Element}
 */
React.ReactComponent.prototype.getDOMNode = function() {};

/**
 * @param {Object} nextProps
 * @param {Function=} callback
 */
React.ReactComponent.prototype.replaceProps = function(nextProps, callback) {};

/**
 * @param {React.ReactComponent} targetComponent
 * @return {React.ReactComponent}
 */
React.ReactComponent.prototype.transferPropsTo = function(targetComponent) {};

/**
 * @param {Function=} callback
 */
React.ReactComponent.prototype.forceUpdate = function(callback) {};

/**
 * @return {boolean}
 */
React.ReactComponent.prototype.isMounted = function() {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
React.ReactComponent.prototype.setState = function(nextState, callback) {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
React.ReactComponent.prototype.replaceState = function(nextState, callback) {};

/**
 * @protected
 */
React.ReactComponent.prototype.componentWillMount = function() {};

/**
 * @param {Element} element
 * @protected
 */
React.ReactComponent.prototype.componentDidMount = function(element) {};

/**
 * @param {Object} nextProps
 * @protected
 */
React.ReactComponent.prototype.componentWillReceiveProps = function(
  nextProps) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @return {boolean}
 * @protected
 */
React.ReactComponent.prototype.shouldComponentUpdate = function(
  nextProps, nextState) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @protected
 */
React.ReactComponent.prototype.componentWillUpdate = function(
  nextProps, nextState) {};

/**
 * @param {Object} prevProps
 * @param {Object} prevState
 * @param {Element} rootNode
 * @protected
 */
React.ReactComponent.prototype.componentDidUpdate = function(
  prevProps, prevState, rootNode) {};

/**
 * @protected
 */
React.ReactComponent.prototype.componentWillUnmount = function() {};

/**
 * @return {React.ReactComponent}
 * @protected
 */
React.ReactComponent.prototype.render = function() {};

/**
 * Interface to preserve React attributes for advanced compilation.
 * @interface
 */
React.ReactAtrribute = function() {};

/**
 * @type {Object}
 */
React.ReactAtrribute.dangerouslySetInnerHTML;

/**
 * @type {string}
 */
React.ReactAtrribute.__html;

/**
 * @type {string}
 */
React.ReactAtrribute.key;

/**
 * @type {string}
 */
React.ReactAtrribute.ref;

// Attributes not defined in default Closure Compiler DOM externs.
// http://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes
// It happens because React favors camelCasing over allinlowercase.
// How to update list:
//   1) Open http://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes
//   2) Github Search in google/closure-compiler for attribute.

/**
 * @type {boolean}
 */
React.ReactAtrribute.allowFullScreen;

/**
 * @type {boolean}
 */
React.ReactAtrribute.autoComplete;

/**
 * @type {boolean}
 */
React.ReactAtrribute.autoFocus;

/**
 * @type {boolean}
 */
React.ReactAtrribute.autoPlay;

/**
 * @type {boolean}
 */
React.ReactAtrribute.noValidate;

/**
 * @type {boolean}
 */
React.ReactAtrribute.spellCheck;


// http://facebook.github.io/react/docs/events.html

/**
 * @type {Function}
 */
React.ReactAtrribute.onCopy;

/**
 * @type {Function}
 */
React.ReactAtrribute.onCut;

/**
 * @type {Function}
 */
React.ReactAtrribute.onPaste;

/**
 * @type {Function}
 */
React.ReactAtrribute.onKeyDown;

/**
 * @type {Function}
 */
React.ReactAtrribute.onKeyPress;

/**
 * @type {Function}
 */
React.ReactAtrribute.onKeyUp;

/**
 * @type {Function}
 */
React.ReactAtrribute.onFocus;

/**
 * @type {Function}
 */
React.ReactAtrribute.onBlur;

/**
 * @type {Function}
 */
React.ReactAtrribute.onChange;

/**
 * @type {Function}
 */
React.ReactAtrribute.onInput;

/**
 * @type {Function}
 */
React.ReactAtrribute.onSubmit;

/**
 * @type {Function}
 */
React.ReactAtrribute.onClick;

/**
 * @type {Function}
 */
React.ReactAtrribute.onDoubleClick;

/**
 * @type {Function}
 */
React.ReactAtrribute.onDrag;

/**
 * @type {Function}
 */
React.ReactAtrribute.onDragEnd;

/**
 * @type {Function}
 */
React.ReactAtrribute.onDragEnter;

/**
 * @type {Function}
 */
React.ReactAtrribute.onDragExit;

/**
 * @type {Function}
 */
React.ReactAtrribute.onDragLeave;

/**
 * @type {Function}
 */
React.ReactAtrribute.onDragOver;

/**
 * @type {Function}
 */
React.ReactAtrribute.onDragStart;

/**
 * @type {Function}
 */
React.ReactAtrribute.onDrop;

/**
 * @type {Function}
 */
React.ReactAtrribute.onMouseDown;

/**
 * @type {Function}
 */
React.ReactAtrribute.onMouseEnter;

/**
 * @type {Function}
 */
React.ReactAtrribute.onMouseLeave;

/**
 * @type {Function}
 */
React.ReactAtrribute.onMouseMove;

/**
 * @type {Function}
 */
React.ReactAtrribute.onMouseUp;

/**
 * @type {Function}
 */
React.ReactAtrribute.onTouchCancel;

/**
 * @type {Function}
 */
React.ReactAtrribute.onTouchEnd;

/**
 * @type {Function}
 */
React.ReactAtrribute.onTouchMove;

/**
 * @type {Function}
 */
React.ReactAtrribute.onTouchStart;

/**
 * @type {Function}
 */
React.ReactAtrribute.onScroll;

/**
 * @type {Function}
 */
React.ReactAtrribute.onWheel;

/**
 * @interface
 */
React.SyntheticEvent = function() {};

/**
 * @return {boolean}
 */
React.SyntheticEvent.prototype.persist = function() {};

/**
 * @type {Function}
 */
React.SyntheticEvent.prototype.persist;

/**
 * @type {Function}
 */
React.SyntheticEvent.prototype.preventDefault;

/**
 * @type {Function}
 */
React.SyntheticEvent.prototype.stopPropagation;

/**
 * @type {Object}
 * @const
 */
React.DOM = {};

/**
 * @typedef {
 *   boolean|number|string|React.ReactComponent|
 *   Array.<boolean>|Array.<number>|Array.<string>|Array.<React.ReactComponent>
 * }
 */
React.ChildrenArgument;

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.a = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.abbr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.address = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.area = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.article = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.aside = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.audio = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.b = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.base = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.bdi = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.bdo = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.big = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.blockquote = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.body = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.br = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.button = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.canvas = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.caption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.circle = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.cite = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.code = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.col = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.colgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.data = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.datalist = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.defs = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.del = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.details = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dfn = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.div = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dl = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ellipse = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.em = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.embed = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.fieldset = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.figcaption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.figure = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.footer = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.form = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.g = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h1 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h2 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h3 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h4 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h5 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h6 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.head = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.header = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.hr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.html = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.i = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.iframe = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.img = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.input = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ins = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.kbd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.keygen = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.label = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.legend = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.li = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.line = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.linearGradient = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.link = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.main = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.map = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.mark = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.mask = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.menu = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.menuitem = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.meta = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.meter = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.nav = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.noscript = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.object = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ol = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.optgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.option = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.output = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.p = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.param = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.path = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.pattern = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.polygon = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.polyline = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.pre = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.progress = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.q = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.radialGradient = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.rect = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.rp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.rt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ruby = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.s = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.samp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.script = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.section = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.select = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.small = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.source = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.span = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.stop = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.strong = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.style = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.sub = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.svg = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.table = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tbody = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.td = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.text = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.textarea = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tfoot = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.th = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.thead = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.time = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.title = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.track = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tspan = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.u = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ul = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.var = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.video = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.wbr = function(props, children) {};

/**
 * @typedef {function(boolean, boolean, Object, string, string, string): boolean} React.ChainableTypeChecker
 */
React.ChainableTypeChecker;

/**
 * @type {React.ChainableTypeChecker}
 */
React.ChainableTypeChecker.weak;

/**
 * @type {React.ChainableTypeChecker}
 */
React.ChainableTypeChecker.weak.isRequired;

/**
 * @type {React.ChainableTypeChecker}
 */
React.ChainableTypeChecker.isRequired;

/**
 * @type {React.ChainableTypeChecker}
 */
React.ChainableTypeChecker.isRequired.weak;

/**
 * @type {Object}
 */
React.PropTypes = {
  /** @type {React.ChainableTypeChecker} */
  any: function() {},
  /** @type {React.ChainableTypeChecker} */
  array: function() {},
  /**
   * @param {React.ChainableTypeChecker} typeChecker
   * @return {React.ChainableTypeChecker}
   */
  arrayOf: function(typeChecker) {},
  /** @type {React.ChainableTypeChecker} */
  bool: function() {},
  /** @type {React.ChainableTypeChecker} */
  component: function() {},
  /** @type {React.ChainableTypeChecker} */
  func: function() {},
  /** @type {React.ChainableTypeChecker} */
  node: function() {},
  /** @type {React.ChainableTypeChecker} */
  number: function() {},
  /** @type {React.ChainableTypeChecker} */
  object: function() {},
  /**
   * @param {React.ChainableTypeChecker} typeChecker
   * @return {React.ChainableTypeChecker}
   */
  objectOf: function(typeChecker) {},
  /** @type {React.ChainableTypeChecker} */
  string: function() {},
  /**
   * @param {Array.<*>} expectedValues
   * @return {React.ChainableTypeChecker}
   */
  oneOf: function(expectedValues) {},
  /**
   * @param {Array.<React.ChainableTypeChecker>} typeCheckers
   * @return {React.ChainableTypeChecker}
   */
  oneOfType: function(typeCheckers) {},
  /**
   * @param {function (new:Object, ...*): ?} expectedClass
   * @return {React.ChainableTypeChecker}
   */
  instanceOf: function(expectedClass) {},
  /** @type {React.ChainableTypeChecker} */
  renderable: function() {},
  /** @type {React.ChainableTypeChecker} */
  /**
   * @param {Object.<React.ChainableTypeChecker>} shapeTypes
   * @return {React.ChainableTypeChecker}
   */
  shape: function(shapeTypes) {}
};

/**
 * @type {Object}
 */
React.Children;

/**
 * @param {Object} children Children tree container.
 * @param {function(*, number)} mapFunction
 * @param {*=} mapContext Context for mapFunction.
 * @return {Object|undefined} Object containing the ordered map of results.
 */
React.Children.map;

/**
 * @param {Object} children Children tree container.
 * @param {function(*, number)} mapFunction
 * @param {*=} mapContext Context for mapFunction.
 */
React.Children.forEach;

/**
 * @param {Object} children Children tree container.
 * @return {Object|undefined}
 */
React.Children.only;

/**
 * @type {Object}
 */
React.addons;

/**
 * @param {Object|string} objectOrClassName
 * @param {...string} classNames
 * @return {string}
 */
React.addons.classSet;

/**
 * @type {React.ReactComponent}
 */
React.addons.CSSTransitionGroup;

/**
 * @type {React.ReactComponent}
 */
React.addons.TransitionGroup;

/**
 * @type {Object}
 */
React.addons.Perf;

React.addons.Perf.start = function() {};

React.addons.Perf.stop = function() {};

/**
 * @return {Array.<React.addons.Perf.Measurement>}
 */
React.addons.Perf.getLastMeasurements = function() {};

/**
 * @param {React.addons.Perf.Measurement=} measurements
 */
React.addons.Perf.printExclusive = function(measurements) {};

/**
 * @param {React.addons.Perf.Measurement=} measurements
 */
React.addons.Perf.printInclusive = function(measurements) {};

/**
 * @param {React.addons.Perf.Measurement=} measurements
 */
React.addons.Perf.printWasted = function(measurements) {};

/**
 * @typedef {{
 *     exclusive: !Object.<string, number>,
 *     inclusive: !Object.<string, number>,
 *     render: !Object.<string, number>,
 *     counts: !Object.<string, number>,
 *     writes: !Object.<string, {type: string, time: number, args: Array}>,
 *     displayNames: !Object.<string, {current: string, owner: string}>,
 *     totalTime: number
 * }}
 */
React.addons.Perf.Measurement;

/**
 * Only usable with non-minified version of React-with-addons
 */
React.addons.TestUtils = {}
React.addons.TestUtils.renderIntoDocument = function () {};
React.addons.TestUtils.isComponentOfType = function () {};
React.addons.TestUtils.isDOMComponent = function () {};
React.addons.TestUtils.isCompositeComponent = function () {};
React.addons.TestUtils.isCompositeComponentWithType = function () {};
React.addons.TestUtils.isTextComponent = function () {};
React.addons.TestUtils.findAllInRenderedTree = function () {};
React.addons.TestUtils.scryRenderedDOMComponentsWithClass = function () {};
React.addons.TestUtils.findRenderedDOMComponentWithClass = function () {};
React.addons.TestUtils.scryRenderedDOMComponentsWithTag = function () {};
React.addons.TestUtils.findRenderedDOMComponentWithTag = function () {};
React.addons.TestUtils.scryRenderedComponentsWithType = function () {};
React.addons.TestUtils.findRenderedComponentWithType = function () {};
React.addons.TestUtils.mockComponent = function () {};
React.addons.TestUtils.simulateNativeEventOnNode = function () {};
React.addons.TestUtils.simulateNativeEventOnDOMComponent = function () {};
React.addons.TestUtils.nativeTouchData = function () {};
React.addons.TestUtils.Simulate = {};
React.addons.TestUtils.Simulate.blur = function () {};
React.addons.TestUtils.Simulate.click = function () {};
React.addons.TestUtils.Simulate.contextMenu = function () {};
React.addons.TestUtils.Simulate.copy = function () {};
React.addons.TestUtils.Simulate.cut = function () {};
React.addons.TestUtils.Simulate.doubleClick = function () {};
React.addons.TestUtils.Simulate.drag = function () {};
React.addons.TestUtils.Simulate.dragEnd = function () {};
React.addons.TestUtils.Simulate.dragEnter = function () {};
React.addons.TestUtils.Simulate.dragExit = function () {};
React.addons.TestUtils.Simulate.dragLeave = function () {};
React.addons.TestUtils.Simulate.dragOver = function () {};
React.addons.TestUtils.Simulate.dragStart = function () {};
React.addons.TestUtils.Simulate.drop = function () {};
React.addons.TestUtils.Simulate.focus = function () {};
React.addons.TestUtils.Simulate.input = function () {};
React.addons.TestUtils.Simulate.keyDown = function () {};
React.addons.TestUtils.Simulate.keyPress = function () {};
React.addons.TestUtils.Simulate.keyUp = function () {};
React.addons.TestUtils.Simulate.load = function () {};
React.addons.TestUtils.Simulate.error = function () {};
React.addons.TestUtils.Simulate.mouseDown = function () {};
React.addons.TestUtils.Simulate.mouseMove = function () {};
React.addons.TestUtils.Simulate.mouseOut = function () {};
React.addons.TestUtils.Simulate.mouseOver = function () {};
React.addons.TestUtils.Simulate.mouseUp = function () {};
React.addons.TestUtils.Simulate.paste = function () {};
React.addons.TestUtils.Simulate.reset = function () {};
React.addons.TestUtils.Simulate.scroll = function () {};
React.addons.TestUtils.Simulate.submit = function () {};
React.addons.TestUtils.Simulate.touchCancel = function () {};
React.addons.TestUtils.Simulate.touchEnd = function () {};
React.addons.TestUtils.Simulate.touchMove = function () {};
React.addons.TestUtils.Simulate.touchStart = function () {};
React.addons.TestUtils.Simulate.wheel = function () {};
React.addons.TestUtils.Simulate.mouseEnter = function () {};
React.addons.TestUtils.Simulate.mouseLeave = function () {};
React.addons.TestUtils.Simulate.change = function () {};
React.addons.TestUtils.Simulate.compositionEnd = function () {};
React.addons.TestUtils.Simulate.compositionStart = function () {};
React.addons.TestUtils.Simulate.compositionUpdate = function () {};
React.addons.TestUtils.Simulate.select = function () {};
React.addons.TestUtils.SimulateNative = {};
React.addons.TestUtils.SimulateNative.blur = function () {};
React.addons.TestUtils.SimulateNative.change = function () {};
React.addons.TestUtils.SimulateNative.click = function () {};
React.addons.TestUtils.SimulateNative.compositionEnd = function () {};
React.addons.TestUtils.SimulateNative.compositionStart = function () {};
React.addons.TestUtils.SimulateNative.compositionUpdate = function () {};
React.addons.TestUtils.SimulateNative.contextMenu = function () {};
React.addons.TestUtils.SimulateNative.copy = function () {};
React.addons.TestUtils.SimulateNative.cut = function () {};
React.addons.TestUtils.SimulateNative.doubleClick = function () {};
React.addons.TestUtils.SimulateNative.drag = function () {};
React.addons.TestUtils.SimulateNative.dragEnd = function () {};
React.addons.TestUtils.SimulateNative.dragEnter = function () {};
React.addons.TestUtils.SimulateNative.dragExit = function () {};
React.addons.TestUtils.SimulateNative.dragLeave = function () {};
React.addons.TestUtils.SimulateNative.dragOver = function () {};
React.addons.TestUtils.SimulateNative.dragStart = function () {};
React.addons.TestUtils.SimulateNative.drop = function () {};
React.addons.TestUtils.SimulateNative.error = function () {};
React.addons.TestUtils.SimulateNative.focus = function () {};
React.addons.TestUtils.SimulateNative.input = function () {};
React.addons.TestUtils.SimulateNative.keyDown = function () {};
React.addons.TestUtils.SimulateNative.keyPress = function () {};
React.addons.TestUtils.SimulateNative.keyUp = function () {};
React.addons.TestUtils.SimulateNative.load = function () {};
React.addons.TestUtils.SimulateNative.mouseDown = function () {};
React.addons.TestUtils.SimulateNative.mouseMove = function () {};
React.addons.TestUtils.SimulateNative.mouseOut = function () {};
React.addons.TestUtils.SimulateNative.mouseOver = function () {};
React.addons.TestUtils.SimulateNative.mouseUp = function () {};
React.addons.TestUtils.SimulateNative.paste = function () {};
React.addons.TestUtils.SimulateNative.reset = function () {};
React.addons.TestUtils.SimulateNative.scroll = function () {};
React.addons.TestUtils.SimulateNative.selectionChange = function () {};
React.addons.TestUtils.SimulateNative.submit = function () {};
React.addons.TestUtils.SimulateNative.touchCancel = function () {};
React.addons.TestUtils.SimulateNative.touchEnd = function () {};
React.addons.TestUtils.SimulateNative.touchMove = function () {};
React.addons.TestUtils.SimulateNative.touchStart = function () {};
React.addons.TestUtils.SimulateNative.wheel = function () {};
