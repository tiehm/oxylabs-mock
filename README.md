# Oxylabs API Mock

I also created a mock for [rcproxies](https://github.com/tiehm/rcproxies-mock).

Original API can be found [here](https://residential-api.oxylabs.io/v1/docs). While I am trying to copy their API as much as possible, I left out methods I do not need at this moment.

This is a mock API for the oxylabs API. I made this as I, obviously, needed a mock for it which responds with real data. This is a very simple API which uses a JSON file in ``data/data.json`` to get the saved users etc. 

I might add database support in the future, although I do not see a reason for it as JSON only becomes problematic with concurrent read and writes which shouldn't happen on not much requested mocks. 

The API is designed to be the exact same at a different host, so you can just switch out the host from ``https://residential-api.oxylabs.io`` to ``http://localhost:8888`` for example.

### Project Setup

You'll need to have node js and npm installed. Simply run ``npm i`` or ``yarn install``

Compile Typescript:
``tsc``

Run via ``node build/index``

### Environment Setup

An example can be seen at ``.sample``

````dotenv
PORT #The Port the API is listening on
OXY_USERNAME #The Username needed to authenticate with the API
OXY_PASSWORD #The Password needed to authenticate with the API
TOKEN #The Token which you'll get after successfull Authentication
USER_ID #The returned user id of the logged in super user
````

### Directory Setup

Create a ``data`` directory with a ``data.json`` file with an empty array inside.

````bash
mkdir data
touch data/data.json
echo "[]" > data/data.json
````

### License

Please look at ``LICENSE``.
