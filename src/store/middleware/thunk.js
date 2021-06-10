export default store => next => action => 
typeof action === 'function'
 ? action(store.dispatch, store.getStore)
 : next(action)