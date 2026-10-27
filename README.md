
# The Daily Edit

The Daily Edit is a digital newspaper website built with Python Flask, HTML, CSS, and vanilla JavaScript.

## Features

- Editorial newspaper design with a centered Blackletter-style masthead
- Featured news story and highlight cards
- Category filters for World, India, Technology, Business, Sports, and Entertainment
- Keyword search
- More Headlines section
- Responsive mobile layout
- External links to sample articles

**Note:** The news articles and external links are sample/demo data, not real news reports.

## Project Structure

```text
the-daily-edit/
├── app.py
├── news_data.py
├── requirements.txt
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## Installation

1. Install Python 3.10 or newer.
2. Open a terminal in the project folder.
3. Create a virtual environment:

   ```bash
   py -m venv venv
   ```

4. Activate the virtual environment on Windows:

   ```cmd
   venv\Scripts\activate
   ```

5. Install the dependencies:

   ```bash
   python -m pip install -r requirements.txt
   ```

## Run the Website

Start the Flask application:

```bash
python app.py
```

Open the following URL in your browser:

http://127.0.0.1:5000/

Keep the terminal open while using the website. Press `Ctrl+C` in the terminal to stop the server.

## Example URLs

- Homepage: `http://127.0.0.1:5000/`
- Technology: `http://127.0.0.1:5000/?category=Technology`
- Sports: `http://127.0.0.1:5000/?category=Sports`
- Search: `http://127.0.0.1:5000/?q=students`
- Category and search: `http://127.0.0.1:5000/?category=India&q=startup`

## How It Works

- `news_data.py` stores the sample news articles.
- `app.py` handles requests and filters articles by category or search query.
- `templates/index.html` displays the articles using Flask and Jinja templates.
- `static/css/style.css` controls the website's visual design and layout.
- `static/js/script.js` provides lightweight browser-side interactions.

## Presentation Explanation

Flask receives the user's category or search request, filters the Python article data, and renders the results through a Jinja template. CSS creates the newspaper layout, while JavaScript adds lightweight browser-side interactions.
