# Code-editor

An online code-editor, where you can write python, cpp, javascript, java, and react code in your browser and see the output in the same window. Except for react, all other languages are executed on the server-side in an isolated environment to ensure security.

I covered interpreter language, compile language and client side technology in this project to demonstrate how might one handle these languages.


## Features

- Write & execute python, cpp, javascript, java, and react code in your browser.
- Create files and folders inside your project.
- Isolated environment to execute code ensuring security and resource management.
- Limit execution time and memory usage.
- Uses monaco editor to give user a look and feel they are already familiar with.
- Uses fingerprint to authenticate users (of-course don't use this in production).
- Uses docker to create isolated environment.

## How to run

Assuming you have docker, yarn, python3, and node installed on your system.

- Clone the repo

```bash
git clone
```

- Install dependencies for server

```bash
cd apiserver
pip install -r requirements.txt
```

- Install dependencies for client

```bash
cd app
yarn install
```

- Setup docker image

```bash
cd apiserver
docker build -t code-editor:latest .
```

- Run the server

```bash
cd apiserver
python3 manage.py runserver
```

- Run the client

```bash
cd app
yarn start
```



## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. I would love to hear your feedback and suggestions. I have also created a lot of issues for this project, feel free to pick one and start working on it.

## Topics

Without going into too much implementation detail, I will try to explain how I handled different aspects of this project.



### Isolated environment

I used docker to create an isolated environment for each execution. I created a docker image with all the dependencies installed. I then used this image to create a container for each execution. I used [py-docker](https://docker-py.readthedocs.io/en/stable/) to interact with docker. You could also configure docker to also host your application.

### Limit execution time and memory usage

To set a limit on system calls and resource usage, I have configured docker to use seccomp profile for system calls and have enforced resource using ulimit. Depending on your use case and the language you are executing, you might want to configure these settings. I will recommend you to start with the least resource & permission and then add more as you need.




## Acknowledgement

- React (https://reactjs.org/)
- Next.js (https://nextjs.org/)
- Python (https://www.python.org/)
- Py-docker (https://docker-py.readthedocs.io/en/stable/)
- Django (https://www.djangoproject.com/)
- Django Rest Framework (https://www.django-rest-framework.org/)
- Docker (https://www.docker.com/)

## Future scope

Apart from the issues I have created, there are a lot of things that can be done to improve this project. Some of them are:

- Add support for environment variables for code execution.
- Making the editor collaborative using websockets & CRDT.
- Add support for more languages.
- Add support for more frameworks.
