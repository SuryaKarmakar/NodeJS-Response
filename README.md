# Sending Response To The Frontend

- **res.writeHead** to set any response headers.

```js
res.writeHead(200, { "Content-Type": "text/html" });
```

- **res.write()** to send the actual content for the response. the content should be either raw html or json data.

```js
res.write("<h1>Welcome to vanilla node server</h1>");
```

or,

```js
res.write(JSON.stringify(data));
```

- **res.end()** to end the response.

```js
res.end();
```

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
