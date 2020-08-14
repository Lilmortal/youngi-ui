# Modal

Used to display a modal.

If you give a `onClose` prop, it displays a close button on the top right corner.
`onEscapePress` is called when the `Esc` button is pressed.
`onOutsideAction` is called when user click outside the modal.

```jsx
const onClose = () => setImageModalState(true);

<Modal
  open
  onClose={onClose}
  onEscapePress={onClose}
  onOutsideAction={onClose}
/>;
```
