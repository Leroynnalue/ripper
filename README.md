# Ripper
---
>>***Remove comments with ripper***

Ripper is an npm package that removes comments from javascript files.

Ripper can find and remove comments code.


### Current Limitations
- Only remove JS-style comments

## Requirement
---
* NodeJs
* Npm

## Installation
---
You can install ripper using npm.
> npm install @alienxr/ripper


## Usage
---
```
const ripper = require("@alienxr/ripper")
```

```
const ripper = require("@alienxr/ripper")

ripper(<filePath>,<fileDestination>);
```

OR

```
const ripper = require("@alienxr/ripper")
const path = require("@alienxr/ripper")

const filePath = path.join(__dirname,<file_dir>,<file_name>);

const savePath = path.join(__dirname,<destination_dir>,<file_name>);


ripper(filePath,savePath);
```

## Contributing
You can contribute to this project by opening an issue or a pull request, I will try to respond as soon as possible. This was a fun little project to work on to learn NodeJs and I hope you find it useful at some point.