# Full Stack Open – Part 1: Anecdotes App

This project is part of the **Full Stack Open** course by the University of Helsinki.  
It is an exercise from **Part 1**, focusing on mastering the basics of React, component rendering, event handling, and state management.

The application displays random programming anecdotes and allows users to vote for their favourite one. It also highlights the anecdote with the highest votes.

---

## 🚀 Features

- Display a randomly selected anecdote  
- Vote on the currently displayed anecdote  
- Track votes using React state  
- Show the anecdote with the highest number of votes  
- Reusable button component  

---

## 🧠 What I Learned

Through this exercise, I understood several **core React concepts**:

### ✔ React State (`useState`)
- Learned how to store values that change over time.
- Used `useState` to manage:
  - The currently displayed anecdote index (`selected`)
  - Votes of each anecdote (`vote` array)

### ✔ Arrays & Copying State
- Learned that React state must not be changed directly.
- Used the spread operator `[...]` to copy an array before updating it.
- Understood how each index of the `vote` array corresponds to an anecdote.

### ✔ Event Handling
- Connected buttons with functions for:
  - Showing a random anecdote  
  - Voting for the current anecdote  

### ✔ Rendering Logic
- Understood how React re-renders the component when state updates.
- Learned to compute:
  - The anecdote with the highest votes  
  - The index of the max vote using `Math.max()` and `indexOf()`  

### ✔ Component Reusability
- Created a reusable `Button` component for cleaner code.

---

## 📌 How the App Works

1. A list of anecdotes is stored in a simple JavaScript array.  
2. A random anecdote is shown by generating a random index.  
3. Votes are stored in an array where each index matches a specific anecdote.  
4. When a user votes:
   - A copy of the vote array is created  
   - The vote count of the current anecdote is incremented  
   - The updated array is saved back to state  
5. The app also calculates and displays the anecdote with the highest votes.
