## FQL

Functional Query Language: build your own DBMS in node. Learn about what a DBMS is from the inside, practice Javascript.

## terms

- database: big bag of data; holds persistent information that is accessible via code (think "spreadsheet")
- DBMS: database management system; program that allows you to interact (query / access / manage) your databases (think "excel")—some examples are MySQL, postgres, sqlite, mongo, neo4j, riak, ...many more
- query language: the words we use to form requests to a database—an example is SQL; a DBMS supports some kind of query language and needs to have an interpeter

## what will we need?

- Storage: where / how our data will be stored persistently
- Organization: a structure for our data 
- Querying: for example get, set, delete, etc.
- Interface: a way for users to interact with the DBMS

## FQL, specifically

You will be given an existing "database" with an existing structure / format.

- Storage: disk, so we will store our data on the file system
- Organization: table could be a folder, each file could be a row—each file is stored in JSON format (containing the row data)
- Querying...

```js
const movieTable = new Table('film-database/movies-table');
const movieQuery = new FQL(movieTable);
movieQuery
.select('id', 'name')
.where({
  year: 1992
})
.limit(2)
.get(); // executes the query
```

- Interface: Javascript (node) library—so if somebody else wants to use our DBMS they'd have to make a node project and import our utilities

You will be defining three classes:

- Table: responsible for persisting information to the file system
- FQL: responsible for being the query interface, the thing that users of the DBMS invoke
- Plan: help organize information for the query, and will be important when the query executes

## `fs`

`fs` is built-in node library, that holds methods (an object) that interact with the file system.

```js
const fs = require('fs');
// non-blocking
fs.readFile('the-file.txt', (err, fileContents) => {
  // here's where we do something with the file contents
});
```

Async stuff can be tricky / awkward to deal with. SO WE ARE GOING TO AVOID IT. THE CODE ABOVE IS NOT WHAT WE ARE GOING TO BE DOING TODAY.

Instead...

```js
const fs = require('fs');
// blocking
const fileContents = fs.readFileSync('the-file.txt');
// here's where we do something with the file contents
```

## JSON

**J**ava**S**cript **O**bject **N**otation: a text format that *looks* (is formatted) like a Javascript object.

We can convert a JSON string to an object.

```js
const jsonStr = '{"a": 100}';
console.log(jsonStr.a); // undefined
const dataObj = JSON.parse(jsonStr); // {a: 100}
console.log(dataObj.a); // 100
```

We can convert an object to a JSON string.

```js
const dataObj = {b: 50};
const jsonStr = JSON.stringify(dataObj);
console.log(jsonStr); // '{"b": 50}'
```

WHY?? What is JSON useful for?

You cannot store a JS object in a file. Nor can you send a JS object to someone else (via HTTP). BUT text can be stored in a file / sent across a wire.

JSON is useful for "sharing" data between computers. JSON is useful for storing data onto the file system (or anything like that).

Converting data into a format that can be stored / transported is "serialization". JSON is a serialization format. There are other serialization formats: XML, yaml, pkl.

JSON is not only for Javascript programs. We could have a Java server that serializes its information into JSON then sends it to a python program that deserializes the JSON string into a dictionary.

## class (static) vs. instance methods

An object-oriented programming idea (again not specific to JS / sequelize). Here's what it looks like in JS:

```js
const carA = new Car('a8j2l');
carA.accelerate(); // instance method
const foundCar = Car.findByLicense('a8j2l'); // class method
```

An instance method is invoked "on an instance" (the thing to the left of the dot is an instance).

A class method is invoked "on a class" (the thing to the left of the dot is a class).

How would we define them?

```js
// the es2015 / es6 way
const allCars = [];
class Car {
  constructor (license) {
    this.license = license;
    this.speed = 0;
    allCars.push(this);
  }
  // instance method definition
  accelerate () {
    this.speed += 10;
  }
  // class method definition
  static findByLicense (searchLicense) {
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].license === searchLicense) {
        return allCars[i];
      }
    }
  }
}
```

```js
// the es5 way (pre-es2015)...
const allCars = [];
function Car (license) {
  this.license = license;
  this.speed = 0;
  allCars.push(this);
}
// instance method definition
Car.prototype.accelerate = function () {
  this.speed += 10;
};
// class method definition
Car.findByLicense = function (searchLicense) {
  for (let i = 0; i < allCars.length; i++) {
    if (allCars[i].license === searchLicense) {
      return allCars[i];
    }
  }
};
```

Why? Why do we choose to define something as a class method as opposed to an instance method (or vice versa)? What does this all mean?

All this class definition is about humans—to help us understand our code so that we can read / maintain it effectively. So what's a good fit?

Instance methods operate on a single instance. Class methods operate on many instances or "class-wide" information.

*An analogy...*

A car factory (real factory) is like our car constructor. A car driving around in the world is like a car instance.

A car factory might be able to look up certain cars it produced by license plate. This is a thing a "factory" can / should do, because it has access to all cars it created, and is central point of information about any / all cars.

So it makes sense "find by license" is a thing a factory can do, and that a car cannot do, so it should be a *class method*.

It also makes sense that "accelerate" is a thing a car can do and that factory cannot do, so it is / should be an *instance method*.

## indexing

What is indexing? Think about the index at the back of a textbook. An index at the back of a textbook contains "values" (like "Charles Law") as lookup words, and these lookup words point to "indexes", namely page numbers.

An index in databases allows certain queries to be faster. The index is a *separate data structure* stored in parallel with the tables / rows. That index needs to be created, but only one time, and then any future queries that can use it may be significantly faster.

To create an index, we need to choose a table to index and a column to index by. We then create the index table, storing every row value for that column as a key, and storing that row's primary key as a value.

To use an index, in our querying we need to detect whether any criteria match any index tables we have. If so, we should start our query by limiting our search to just those entries that match our index table.

There are different kinds of indexes, e.g. two common types: hashed indexes (this is what we're doing today) and sorted indexes. Sorted indexes are much more common.

Indexing is REALLY COOL and it separates novice database users from intermediate database users. It can be challenging to use, but the core concept is not terribly complicated.

On the other hand, indexing does have downsides...

- Every index table you include adds space / memory / storage
- When updating tables (updating a row, inserting, deleting), you will also need to update *any* relevant index tables: this will cost extra time on each update, AND it will cost extra "mental weight" for developers working on this
- Not always good, can make things worse for "homogenous" rows
