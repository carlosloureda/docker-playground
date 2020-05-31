# Count Visits

We want to build a webpage that counts the number of visits, we are going to do this with more advanced features, we will use Redis.

Better is to have the Redis in a different container (as if we scale up the servers we scale app Node containers but we want to have an unique Redis instance)

This project is used to demonstrate the use of `docker-compose`

## Explanation

If you try to run the project as the hello-workd app you will see an error:


```sh
docker build -t carlos/count-visits .
docker run -p 8081:8081 carlos/count-visits
```

ERROR:

```
Error: Redis connection to redis-server:6379 failed - getaddrinfo ENOTFOUND redis-server
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:64:26)
```

We could try to run a redis container:

```sh
docker run redis
```

But we see the same problem, this is due to both containers not being connected,here is w where `docker-compose` comes into play.

## How to run

```sh
docker-compose up # the equivalent to: docker run myimage
docker-compose up --build # the equivalent to: docker build && docker run myimage
```
As in the `docker-compose.yml` file we set the PORT to 4001 you should see your app running on http://localhost:4001/

Every time you refresh the page you should see the visits counter

To stop a container:

```sh
# stop containers
docker-compose down
```