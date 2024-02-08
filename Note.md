# Implementation note app

## Events
I used `$emit` to call the events.
This option was chosen because it allows you to use the component in different cases and make different callbacks.

An example of such usage is [Note.vue](./src/components/MyNote.vue) component. The `deleteNote` function is passed to this component, which is used in $emit when the button is clicked.
