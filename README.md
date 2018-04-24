# Starwars

make a .env file with the following information in the root directory.

```
# firebase keys/ connection info

FB_APIKEY = '<your-api-key>'
FB_AUTHDOMAIN = '<your-auth-domain>'
FB_DB_URL = '<your-database-url>'
FB_STORAGE = '<your-storage-bucket>'
FB_PROJECT_ID = '<your-project-id>'
FB_SENDER_ID = '<your-sender-id>'

```

then run `node seeder.js` in the folder's root directory to seed your database with the json data found in `lib/database/seeder.json`. The default structure of firebase is to use objects of objects so using arrays is not recommended.