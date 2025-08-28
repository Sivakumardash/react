import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/* 

1. What is the Context API here?

Context API is like a shared storage for your app.

It helps to store data (like logged-in user info) in one central place.

Any component (Login, Profile, etc.) can read or update that data without passing props manually.

2. Where does it all start?

Your starting point is usually App.jsx.

In App.jsx, you wrap everything with UserContextProvider.

Example:

<UserContextProvider>
  <Login />
  <Profile />
</UserContextProvider>


This means:

UserContextProvider is the "box" that holds your user data.

All components inside it can use that data.

3. Inside UserContextProvider

Here is where you create the shared data.

Example:

const [user, setUser] = useState(null);


Initially, user = null → means nobody is logged in.

After login, it might become:

user = { username: "Siva", email: "siva@example.com" }


Then you "provide" this data to your app:

<UserContext.Provider value={{ user, setUser }}>
  {children}
</UserContext.Provider>


This is how Login and Profile get access to it.

4. What happens in Login.jsx?

It has two text boxes: username & password.

When you type something, React stores it in local state using useState.

Example:

const [username, setusername] = useState('');
const [password, setpassword] = useState('');


Now when you press Login button, this happens:

React takes your typed username/password.

It verifies them (you may check with a fixed value or an API call).

If correct → setUser({ username }) is called.

This is the key!
setUser() updates the global user in Context.

5. After Login — How does Profile.jsx get the data?

In Profile.jsx, you write:

const { user } = useContext(UserContext);


This means:

You are reading the user value stored in Context.

If login was successful, user now has your username.

Profile page can show:
"Welcome, Siva!"

6. Full Data Flow in Simple Words

Let’s imagine it like a journey:

App starts → Context is empty (user = null).

You type in Login → Data goes to local state in Login.jsx.

You click Login → Data is sent to Context using setUser().

Context updates → Now whole app knows you are logged in.

Profile reads from Context → Shows your details.

If you logout → setUser(null) → Everything resets.

7. Why Context API is useful here?

Without Context:

You would have to pass username from Login → App → Profile using props.

It becomes messy as your app grows.

With Context:

Login sets the data once.

Profile (or any other component) can read it directly — no extra props needed.

8. A Simple Real-Life Analogy

Think of Context API like a school notice board:

UserContextProvider = the notice board (central place).

Login.jsx = teacher writing your name on the board when you log in.

Profile.jsx = student reading the board to see who is logged in.

No need to tell each student separately — they all can see the same notice board.

*/

