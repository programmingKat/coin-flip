# Coin Flip

A heads-or-tails guessing game where a Node.js server flips the coin, built for anyone who wants to see how a browser and a plain HTTP server talk to each other.

## Goal

I built this to practice Node's core `http` and `fs` modules without Express. The server reads and serves the HTML, CSS, and JavaScript files itself, and exposes a small `/api/coinFlip` endpoint. When you pick heads or tails, the browser sends your guess to the server, which flips the coin and responds with JSON saying whether you won.

## Tech Stack

- **Front end:** HTML, CSS, JavaScript (Fetch API)
- **Back end:** Node.js (`http`, `fs`, `url`, and `querystring` modules)
- **Hosting:** [GitHub Pages / Netlify / Vercel / Render]

## How to Use

1. Open the [live app](https://coin-flip-52pk.onrender.com/).
2. Click **Heads** or **Tails** to make your guess.
3. The server flips the coin and returns the result and whether you won. For now, the result is logged to the browser console (open DevTools to see it).

## Run Locally

**Requirements:** Node.js

1. Clone the repository and move into the app folder.

   ```bash
   git clone https://github.com/programmingKat/coin-flip.git
   cd coin-flip/app
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. No `.env` file is needed. The server runs on port 8000.

4. Start the server.

   ```bash
   node server.js
   ```

5. Open `http://localhost:8000` in your browser.

##Screenshots 
<img width="338" height="186" alt="image" src="https://github.com/user-attachments/assets/7be5b22e-3d76-4e5e-8d77-478abba6e45f" />

## Future Improvements

- Show the result on the page by changing the coin's color and adding an H or T, instead of logging it to the console
- Add a 404 response for unknown routes (a figlet version is started but commented out)
- Keep a running count of wins and losses
