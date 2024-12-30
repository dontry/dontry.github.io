---
date: '2015-08-24'
layout: post
title: Holy Grail Layout
tags:
 - LAYOUT
 - HTML
---

The Holy Grail Layout is a classic CSS problem with various solutions presented over time. Many people are searching for the best method and several goot templates are presented.

Most CSS solutions for Holy Grail aim to meet a few goals:

 * They should have a fluid center with fixed-width sidebars.
 * The center column(main content) should appear first in the HTML source.
 * All columns should be the same height, regarless of which column is actually the tallest.
 * They should require minimal markup.
 * The footer should "stick"  to the bottom of the page when content is sparse.


And one of the most classic templates is like this:

#### Holy Grails Layout

<p data-height="268" data-theme-id="0" data-slug-hash="pJMRgB" data-default-tab="result" data-user="dontry018" class='codepen'>See the Pen <a href='http://codepen.io/dontry018/pen/pJMRgB/'>Classic Holy Grail</a> by loconomo (<a href='http://codepen.io/dontry018'>@dontry018</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

We can see that how <em>float:left</em> and <em>nagative margin-left</em> are used to let sidebars stick aside. Besides combining <em>padding-bottom: 999px, margin-bottom: -999px</em>, it is able to make the same height for all columns.However, it is not adaptive enough because the main content part need to be set a pair of fixed padding values.

Then the Taobao UED create a more adaptive and advanced version of this classic layout.

#### Wings layout

<p data-height="268" data-theme-id="0" data-slug-hash="BNXQMJ" data-default-tab="result" data-user="dontry018" class='codepen'>See the Pen <a href='http://codepen.io/dontry018/pen/BNXQMJ/'>Wings Layout</a> by loconomo (<a href='http://codepen.io/dontry018'>@dontry018</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>
<br>
<br>
<br>


#### More info for Holy Grail layouts:

 *  [Holy Grail Layout solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)
 *  [A list of solutions](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)
