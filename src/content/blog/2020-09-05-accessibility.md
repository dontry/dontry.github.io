---
date: '2020-09-05'
title: 'Accessibility Overview'
tags: 
  - ACCESSIBILITY
---
## Shortcut
- Restrict single-character shortcuts. Make shortcuts consistent with convention.

## Focus

- change the default color of the outline

- change the default color of the element

- remove the box and underline text

### Focus order

- Elements must receive focus in an order that preserves meaning and operability (left to right, top to bottom)

- Not jumping around between sections

- No keyboard trap. Focus can be moved away using the keyboard or 

### tabindex

- `-1` indicates the element can't tab to with keyboard, but can set focus programmatically.

- `0` indicates tab to element, focus order determined by the HTML.

- `1+` indicates focus order is the value of the attribute regardless the place of html element.

- Don't fix focus order issues by setting tabindex to positive numbers.

- Use html structure to control focus order

- Set tabindex on elements that would not usually receive keyboard focus

### Bypass blocks

- Clear page structure by using html5 structural elements like `<main>`

- Skip link

 ```css

 .skip-link {
	  display: inline-block;
	  position: absolute;
	  top: 0;
	  left: -100000px;
 }

 .skip-link:focus {
	  left: 0;
 }

  
 ```

## Forms

### Clear labels

- user input must have labels

- labels must be linked to the form control

 ```html

  <label for="name">Your name</label>

  <input id="name" type="text">

 ```

- aria labelling. If label is not seen visually, we can use `aria-label` or `aria-labelledby`.

 ```html

 <input id="txtSearch" aria-label="Search" aria-labelledby="butnSearch" type="text" />

 <button id="btnSearch">Search</button>

 ```

- label placement

- input attribute:  types, readonly, disabled

 - disabled value is not submitted to server, readonly value is submitted to server.

  
### [Input purposes](w3.org/TR/WCAG21/#input-purposes)

- browsers offer to autocomplete info, improves suggestion accuracy

- use autocomplete attribute for input purpose

 ```html

 <input type="text" autocomplete="username" />

 ```

### Required fields

- `required` attribute present an in-broweser validation, whereas `aria-required` doesn't but will be read by screen reader

 ```html

  <input type="text" required>

  <input type="text" aria-required="true">

 ```

### Presenting error messages

- covers all form error messages

- identify the input control with the error.

- `aria-invalid, aria-describedby="error1"`

 ```html

  <input id="name" type="text" aria-invalid="true" aria-required="true" aria-describedby="error1">

  <span id="error1"> This field is required.</span>

 ```

- add validation summary. when user submits the form, it immediately jumps to the validation summary if error occurs. It can be achieved by 

 - setting keyboard focus to the validation summary

 - making the validation summary a live region. It does not change focus. But validation error will be read aloud.

 ```html

  <div id="validation-summary" role="alert"></div>

 ```

- `aria-live`: The `[aria-live=POLITENESS_SETTING]` is used to set the priority with which screen reader should treat updates to live regions.
