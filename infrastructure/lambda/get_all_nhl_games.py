import logging
import requests
import json
from botocore.exceptions import ClientError

def handler(event, context):
  logging.info('grabbing all nhl games for tonight')

  try:
    logging.info('event: {}'.format(json.dumps(event)))
    url = 'https://statsapi.web.nhl.com/api/v1/schedule'
    response = requests.request('GET', url)
    response_data = response.json()
    logging.info("🚀🚀🚀🚀 ~ file: get_all_nhl_games.py ~ line 15 ~ response_data -> %s", response_data)

    return response_data

  except ClientError as e:
    logging.error(e)

    return 'ALL games API placed on IR'