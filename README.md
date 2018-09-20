# pino-hny

> 🌲 Load [pino](https://github.com/pinojs/pino) logs into Honeycomb

Actually it will convert any data from `stdin` (not just `pino` logs) and if it can parse it
as `JSON` then it will insert that into `honeycomb` otherwise it will insert that as it is, but with `msg` field and a timestamp.

Based upon [pino-couch](https://github.com/IBM/pino-couch)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/IBM/pino-hny.svg)](http://isitmaintained.com/project/IBM/pino-hny "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/IBM/pino-hny.svg)](http://isitmaintained.com/project/IBM/pino-hny "Percentage of issues still open")
## Install

<!-- [![npm version](https://badge.fury.io/js/pino-hny.svg)](https://badge.fury.io/js/pino-hny) -->

```
npm i -g pino-hny
```

## Usage

Write logs into Honeycomb

```
node my-app.js | pino-hny [options]
```

Write logs into Honeycomb, and still format them nicely to the console:

```
npm i -g pino
node my-app.js | pino-hny [options] | pino
```
## Options

```
  Usage: pino-hny [options]

  Load pino logs into Honeycombå

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -U, --url <url>       set database server
    -d, --db <name>       set database name (logs)
    -q, --quiet           suppress stdin to stdout output (false)
    --show-insert-errors  show errors from inserting documents into cloudant (true)
    -t, --trace-inserts   trace all inserted documents (false)
```

## Tutorial

<!-- See the [blog post](https://srl295.github.io/2017/06/02/pino-hny/) -->
Coming soon
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
