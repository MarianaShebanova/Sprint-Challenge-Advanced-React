- [ ] Why would you use class component over function components (removing hooks from the question)?

if you need lifecycle hooks you should probably use a class component.
If you need a state in your component you will either need to create a class component or you lift the state up to the parent component and pass it down the functional component via props

- [ ] Name three lifecycle methods and their purposes.

mounting, updating, unmounting

- [ ] What is the purpose of a custom hook?

Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

- [ ] Why is it important to test our apps?

Surfaces bugs faster.
Reduces the risk of regressions.
Allows us to trust the code.
Makes us think about the edge cases.
Acts as a safety net when making changes or refactoring.
Acts as documentation for the code.
Encourages us to write more testable (better!) code.