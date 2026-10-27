# The Daily Edit

The Daily Edit is a minimalist digital newspaper website built with Python Flask, HTML, CSS, and a small amount of vanilla JavaScript.

It includes:

- A black-and-white editorial newspaper design
- A centered Blackletter-style masthead
- Featured news story and highlight cards
- Category filters: World, India, Technology, Business, Sports, and Entertainment
- Keyword search
- More Headlines section
- External links to sample original articles
- Responsive mobile layout

All news articles and external links are sample/demo data. They are not real news reports.

## Project structure

```text
the-daily-edit/
│
├── app.py
├── news_data.py
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
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
python -m venv venv
```

4. Activate the virtual environment:

On Windows:

```bash
venv\Scripts\activate
```

On macOS or Linux:

```bash
source venv/bin/activate
```

5. Install dependencies:

```bash
pip install -r requirements.txt
```

## Run the website

```bash
python app.py
```

Then open this URL in your browser:

```text
http://127.0.0.1:5000/
```

## How it works

- `news_data.py` stores 18 sample articles in Python lists and dictionaries.
- `app.py` reads optional `category` and `q` search parameters from the URL.
- Flask filters the article list and sends it to `templates/index.html`.
- `index.html` displays the featured article, highlight cards, and more headlines.
- `static/css/style.css` creates the black, white, and grayscale newspaper design.
- `static/js/script.js` adds simple interface effects and a `/` keyboard shortcut for search.

## Example URLs

```text
http://127.0.0.1:5000/
http://127.0.0.1:5000/?category=Technology
http://127.0.0.1:5000/?category=Sports
http://127.0.0.1:5000/?q=students
http://127.0.0.1:5000/?category=India&q=startup
```

## Presentation explanation

For a minor-project presentation, explain that Flask receives the user’s category or search request, filters the Python article data, and renders the filtered results through a Jinja template. The CSS handles the visual newspaper layout, while JavaScript only adds lightweight browser-side interactions.