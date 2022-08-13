from ast import Try
import logging
import requests
import json
from botocore.exceptions import ClientError

def handler(event, context):
  print('grabbing all nhl games for tonight')

  try:
    print('event: {}'.format(json.dumps(event)))
    url = 'https://statsapi.web.nhl.com/api/v1/schedule'
    response = requests.request('GET', url)
    response_data = response.json()
    print("🚀🚀🚀🚀 ~ file: get_all_nhl_games.py ~ line 15 ~ response_data", response_data)
    return response_data

  except ClientError as e:
    logging.error(e)
    return 'ALL games API placed on IR'