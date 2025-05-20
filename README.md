
# 🎬 Movie Search App

A modern, responsive React app to search, explore, and manage your favorite movies. Integrated with the TMDb API, this app allows you to search for any movie, view detailed information, and discover which OTT platform it's available on. You can also maintain a watchlist — all in a clean, interactive interface.

## 🔗 Live Demo

👉 [View Project on GitHub Pages](https://movie-search-app-alpha-tawny.vercel.app/)

---

## 📌 Features

- 🔍 **Search movies** by title using the TMDb API
- 📖 **View detailed movie info** including overview, release date, and rating
- 📺 **Check OTT availability** with logos like Netflix, Prime Video, etc.
- ⭐ **Add movies to your Watchlist** using localStorage
- 💻 **Responsive design** with Tailwind CSS
- 🧭 Simple and intuitive UI

---

## 📁 Project Structure

```
Movie-Search-App/
├── public/
├── src/
│   ├── assets/                # Images and icons
│   ├── components/            # Reusable components like MovieCard, MovieModal
│   ├── App.js                 # Main component
│   ├── index.js               # Entry point
│   └── styles.css             # Tailwind or global styles
├── .env                       # TMDb API key
├── package.json
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Reddybangaram123/Movie-Search-App.git
cd Movie-Search-App
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

Create a `.env` file in the root directory and paste your TMDb API key:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
```

> Get your TMDb API key from [https://developer.themoviedb.org/](https://developer.themoviedb.org/)

### 4. Start the Application

```bash
npm start
```

The app will run on `http://localhost:3000`.

---

## 🖼️ UI Screenshots

| Search Movies | View Movie Details | OTT Availability |
|---------------|---------------------|------------------|
| ![Search](./screenshots/search.png) | ![Details](./screenshots/details.png) | ![OTT](./screenshots/ott.png) |

---

## 🚀 Technologies Used

- **React.js** — Functional components and hooks
- **Tailwind CSS** — For styling
- **Axios** — For API requests
- **TMDb API** — Movie and OTT provider data
- **LocalStorage** — For storing the watchlist

---

## ❗ Troubleshooting

If OTT availability shows `Not available in your region`, it means the TMDb API did not return OTT data for that country. Ensure your region is correctly set in the API request or use a VPN to test other regions.

---

## 📦 Deployment

This app is deployed using **GitHub Pages**. To deploy:

```bash
npm run build
npm run deploy
```

> Ensure `"homepage"` is correctly set in `package.json` for GitHub Pages.

---

## 🙌 Credits

- Movie data powered by [TMDb API](https://www.themoviedb.org/)
- Provider logos via TMDb
- Netflix logo used under fair use for educational purposes

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## 👨‍💻 Developed By

**Kummitha Gopal Reddy**

GitHub: [@Reddybangaram123](https://github.com/Reddybangaram123)
