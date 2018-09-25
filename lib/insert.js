/*
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const request = require('request')
var Libhoney = require('libhoney');


module.exports = function insert(data) {
    if (!this.program.writeKey || !this.program.datasetName) {
        throw "Honeycomb --write-key and --dataset-name must be set"
    }
    var hny = new Libhoney({
        writeKey: this.program.writeKey,
		dataset: this.program.datasetName,
		responseCallback: (responses) => {
		    responses.forEach((resp) => {
				if(resp.error || (resp.status != 200 && resp.status != 202)){
					if (!this.program.quiet) { console.log(resp); }
				}
		    });
		}
    });

    if (!this.program.quiet) {
        console.log(data)
    }

	event = hny.newEvent();
	let event_data;
    try {
		event_data = JSON.parse(data)
    } catch (error) {
		if (!this.program.quiet) { console.log(`PINO_HNY_ERROR:${error}`); }
        event_data = {
            msg: data,
            time: new Date().getTime()
        }
	}
	event.add(event_data);
	event.send();
}