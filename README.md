# Send Response

## Send html response :

```js
res.writeHead(200, { "Content-Type": "text/html" });
res.write("<h1>Welcome to vanilla node server</h1>");
res.end();
```

## Send json response :

```js
res.writeHead(200, { "Content-Type": "application/json" });
res.write(JSON.stringify(data));
res.end();
```
