#Style Guide

A base for creating style guides  
  
###Add/edit logos & icons:
Add the images to the images directory, then mark them up as usual in the HTML.
```html
    <img src="images/logo.png" />
```

###Add/edit colours:
Create one block of the following HTML for each colour, then the swatch and the click to copy will be taken care of for you.
```html
    <div class="colour">
        <div class="name">Charcoal</div>
        <div class="hex">#333</div>
        <div class="description">Main text colour</div>
    </div>
```

###Define styles:
Edit the styles.css and create your own styles for the typography, forms, buttons etc.  
  
[View it in action here](http://yettipowered.github.io/style-guide/)