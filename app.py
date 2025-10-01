from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/prod1")
def prod1():
    return render_template("prod1.html")

@app.route("/prod2")
def prod2():
    return render_template("prod2.html")

@app.route("/prod3")
def prod3():
    return render_template("prod3.html")

@app.route("/prod4")
def prod4():
    return render_template("prod4.html")

@app.route("/prod5")
def prod5():
    return render_template("prod5.html")

@app.route("/tos")
def tos():
    return render_template("tos.html")

@app.route("/cart")
def cart():
    return render_template("cart.html")

@app.route("/confirmation.html")
def confirmation():
    return render_template("confirmation.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/checkout")
def checkout():
    return render_template("checkout.html")



if __name__ == "__main__":
    app.run(debug=True)