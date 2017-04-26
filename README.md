# pino-couch

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

> 🌲 Load [pino](https://github.com/pinojs/pino) logs into CouchDB (or Cloudant, for that matter)

Actually it will convert any data from `stdin` (not just `pino` logs) and if it can parse it  
as `JSON` then it will insert that into `couch` otherwise it will insert that as it is, but with `msg` field and a timestamp.

Based upon [pino-mongodb](https://github.com/Kuroljov/pino-mongodb)

## Install

```
npm i -g pino-couch
```

## Usage

Write logs into CouchDB

```
node my-app.js | pino-couch [options]
```

Write logs into CouchDB, and still format them nicely to the console:

```
npm i -g pino
node my-app.js | pino-couch [options] | pino
```


## Options

```
  Usage: pino-couch [options]

  Load pino logs into CouchDB (or Cloudant)

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -U, --url <url>       set database server
    -d, --db <name>       set database name (logs)
    -q, --quiet           suppress stdin to stdout output (false)
    --show-insert-errors  show errors from inserting documents into cloudant (true)
    -t, --trace-inserts   trace all inserted documents (false)
```

## Tests

TBD

Contributing
===
See [CONTRIBUTING.md](CONTRIBUTING.md).

License
===
Apache 2.0. See [LICENSE.txt](LICENSE.txt). Portions from `pino-mongodb`.

> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
> 
> http://www.apache.org/licenses/LICENSE-2.0
> 
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.
