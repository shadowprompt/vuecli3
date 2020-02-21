### provide/inject
New in 2.2.0+

**Type**:
provide: Object | () => Object
inject: Array<string> | { [key: string]: string | Symbol | Object }

> **Note**: the provide and inject bindings are NOT reactive. This is intentional. However, if you pass down an observed object, properties on that object do remain reactive.


work with Vue 2.2.1+.
Using an injected value as the default for a prop
Using an injected value as data entry

> Below that version, **injected values were resolved after the props and the data initialization.**

```javascript
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  }
}
```

#### vm.$attrs
Contains parent-scope attribute bindings (except for `class` and `style`) that are not recognized (and extracted) as props. When a component doesn’t have any declared props, this essentially contains all parent-scope bindings (except for `class` and `style`), and can be passed down to an inner component via v-bind="$attrs" - useful when creating higher-order components.

#### v-if
When used together with `v-if`, `v-for` has a higher priority than `v-if`. See the list rendering guide for details.
#### v-for
**Expects:** Array | Object | number | string

#### on
**Shorthand:** @

**Expects:** Function | Inline Statement | Object

**Argument:** event

**Modifiers:**

* .stop - call event.stopPropagation().
* .prevent - call event.preventDefault().
* .capture - add event listener in capture mode.
* .self - only trigger handler if event was dispatched from this element.
* .{keyCode | keyAlias} - only trigger handler on certain keys.
* .native - listen for a native event on the root element of component.
* .once - trigger handler at most once.
* .left - (2.2.0+) only trigger handler for left button mouse events.
* .right - (2.2.0+) only trigger handler for right button mouse events.
* .middle - (2.2.0+) only trigger handler for middle button mouse events.
* .passive - (2.3.0+) attaches a DOM event with { passive: true }.

When used on a normal element, it listens to **native DOM events** only. When used on a custom element component, it listens to **custom events** emitted on that child component.

When listening to native DOM events, the method receives the native event as the only argument. If using inline statement, the statement has access to the special `$event` property: `v-on:click="handle('ok', $event)"`.

Starting in 2.4.0+, `v-on` also supports binding to an object of event/listener pairs without an argument. Note when using the object syntax, it does not support any modifiers.

<!-- key modifier using keyCode -->
```
<input @keyup.13="onEnter">

<!-- the click event will be triggered at most once -->
<button v-on:click.once="doThis"></button>

<!-- object syntax (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

<!-- inline statement -->
<my-component @my-event="handleThis(123, $event)"></my-component>

<!-- native event on component -->
<my-component @click.native="onClick"></my-component>
```

#### vm.$props
```
<!-- binding an object of attributes -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- DOM attribute binding with prop modifier -->
<div v-bind:text-content.prop="text"></div>

<!-- prop binding. "prop" must be declared in my-component. -->
<my-component :prop="someThing"></my-component>

<!-- pass down parent props in common with a child component -->
<child-component v-bind="$props"></child-component>
```