## The Golden Rule: 

π¦Έ π¦ΈββοΈ `Stop starting and start finishing.` π

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

HTML ELEMENTS:
-Three cup images
  why?: so the user can see if they guessed correctly.
  how: creating an event where the original img is replaced with an img of a ball underneath the cup showing the correct cup.
-Three buttons
  why?: So the user can click which cup they think the ball is under, and when they click on it.
  how: having an addEventListener.
-Three Divs for win, loss, total games played
  why?: To keep track of those items of state
  how: making it so when the buttons are pressed and whether or not its a win or a loss the guesses will increment. 

  EVENTS:
  -button clicks
  -on button clicks one of the three imgs will be replaced with a correct-cup.png.
  -constant change of state on button clicks.


Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
