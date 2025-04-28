
# 💎 **Redux Toolkit (RTK) Learning Summary**

---

# ⚡ Redux vs Redux Toolkit Comparison

| 🏛️ Old Redux | 🚀 Redux Toolkit |
|:---|:---|
| You have to configure Redux DevTools Extension explicitly. | Provides automatic support for Redux DevTools Extension. |
| Manually handle and change state **immutably**. | Supports **Immer.js** to handle immutable updates automatically. |
| Configuring a Redux store is complicated. | Store configuration is much easier with built-in middleware support. |
| Need to create reducers and action creators separately → **lots of boilerplate**. | `createSlice()` combines actions and reducers together easily. |
| Handling asynchronous requests and errors was manual and tedious. | `createAsyncThunk()` simplifies handling async requests. |
| Class-based implementation. | Functional implementation with **Hooks** and **TypeScript** support. |

---

# 🔧 1. Setup
Install necessary packages:
```bash
npm install @reduxjs/toolkit react-redux redux-logger
```

---

# 💡 2. Creating Slices
**Slice** = State + Reducers + Actions bundled together. 
Use `createSlice` from `@reduxjs/toolkit`.

## 🎂 Example: Cake Slice
```javascript
const initialState = { numOfCake: 10 };
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: state => { state.numOfCake-- },
    restocked: (state, action) => { state.numOfCake += action.payload }
  }
});
```

## 🍦 Example: Ice Cream Slice
```javascript
const initialState = { numberOfIceCreams: 20 };
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: state => { state.numberOfIceCreams-- },
    restocked: (state, action) => { state.numberOfIceCreams += action.payload }
  }
});
```

> **✨ Key Points:**
> - `state` is mutated directly using **Immer**.
> - `action.payload` carries dynamic values.

---

# 🛠️ 3. Store Setup
Use `configureStore` instead of `createStore`. Combine multiple slices easily.

```javascript
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger),
});
```

> **💡 Notes:**
> - `redux-logger` is added for logging.
> - `getDefaultMiddleware()` allows custom middleware chaining.

---

# 📢 4. Dispatching Actions
Access actions from the slice and dispatch:

```javascript
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(4));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(2));
```

- `unsubscribe()` stops listening to store changes if needed.

---

# 🔺 5. Folder Structure
```
/app
  store.js
/features
  /cake
    cakeSlice.js
  /icecream
    iceCreamSlice.js
index.js
```
- 🌐 Features are modularized.
- 🔄 Store configuration inside `/app/store.js`.
- 📦 `index.js` imports the store and dispatches actions.

---

# 🔥 Quick Reminders
- ✨ `createSlice` auto-generates action creators and types.
- 🔍 `configureStore` sets up Redux DevTools.
- 🎫 Immer allows direct "mutations".
- 🔢 Middleware like `redux-logger` helps in debugging.

