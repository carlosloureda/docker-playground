# Hello World

This is the most basic docker project we are going to build.
To run it:

```sh
docker build -t <project_tag> .
doker run -p LOCAL_PORT:CONTAINER_PORT <containerId | project_tag>
```

The app is set to run on PORT 8080 (See index.js) for example:


```sh
docker build -t carlos/hello-world .
doker run -p 8080:8080 carlos/hello-world
```

Now as we set the local PORT to 8080 you should be able to run the app on http://localhost:8080/
