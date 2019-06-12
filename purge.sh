curl -X POST \
  http://purge.jsdelivr.net/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
"/npm/weicomment@latest/dist/js/weicomment.js": [
"/npm/weicomment@latest/dist/index.html",
"/npm/weicomment@latest/dist/css/app.css",
"/npm/weicomment@latest/dist/js/app.js"
]
}'