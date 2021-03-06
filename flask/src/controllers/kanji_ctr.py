from __main__ import app
from flask import request, jsonify
from models.kanji import find, find_one
from decorators.verify_query_params import verify_query_params
from decorators.build_query import build_query


@app.route('/api/kanji', methods=['GET'])
@build_query([('strokes', 'number')])
@verify_query_params('kanji-search')
def search(**kwargs):
    return jsonify(find(kwargs['query']))


@app.route('/api/kanji/<ideogram>', methods=['GET'])
def search_one(ideogram):
    return find_one({
        'ideogram': ideogram
    })
