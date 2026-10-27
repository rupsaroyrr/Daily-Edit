
from flask import Flask, render_template, request

from news_data import ARTICLES, CATEGORIES

app = Flask(__name__)


@app.route("/")
def home():
    search_query = request.args.get("q", "").strip()
    selected_category = request.args.get("category", "All")

    articles = ARTICLES

    if selected_category != "All":
        articles = [
            article for article in articles
            if article["category"] == selected_category
        ]

    if search_query:
        query = search_query.lower()
        articles = [
            article for article in articles
            if query in article["title"].lower()
            or query in article["summary"].lower()
            or query in article["category"].lower()
        ]

    featured_article = articles[0] if articles else None
    highlight_articles = articles[1:4] if len(articles) > 1 else []
    more_articles = articles[4:] if len(articles) > 4 else []

    return render_template(
        "index.html",
        articles=articles,
        categories=CATEGORIES,
        featured_article=featured_article,
        highlight_articles=highlight_articles,
        more_articles=more_articles,
        selected_category=selected_category,
        search_query=search_query,
        result_count=len(articles)
    )


if __name__ == "__main__":
    app.run(debug=True)
