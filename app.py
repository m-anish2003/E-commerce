from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/catalog')
def catalog():
    return render_template('catalog.html')

@app.route('/bucket/<bucket_id>')
def bucket_details(bucket_id):
    return render_template('bucket_detail.html', bucket_name=bucket_id.replace('-', ' ').title())

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)