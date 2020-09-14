/**
 * Redux Action(s)
 * Actions as "request" formatting, or labels for what
 * we'll allow in terms of requests or mutations for
 * our store.
 * Actions define what we'll allow as requests to our
 * reducers (which in turn, speak directly with the store
 * on our behalf.)
 * Action names, by convention, are uppercase (they are
 * considered "CONSTANTS.")
 */

// Think carefully for each action...
// What parameter (or data) do we need to pass it for it to complete...
// its job!?
const addNewToDo = toDoContent => {
    return {
      // This is the NAME of our action.
      // "type" is how our 'reducer' knows what we want to do.
      type: 'ADD_NEW_TO_DO',
      // This is the DATA we are passing through to the reducer...
      // so that IT can to ITS JOB!
      payload: toDoContent
    };
  }