# Hash Tables And Maps

## Maps

A map is an abstract data type designed to efficiently store and retrieve values based upon a uniquely identifying search key for each.

- A map stores key-value pairs (k, v), which we call entires, where k is the key and v is its corresponding value.
- Keys are required to be unique, so that the association of key to values defines a mapping.

### When to Use Map Data Type

Map data type is ideal to use in look-up type situations where there is an identifying value and an actual value that is represented by the identifying value. A few examples where the map data type can be used are:

- Student ID numbers and last names.
- House number on a street and the number of pets in each house.
- Postal codes and the names of cities.
- Driving licenses and last names.

### TypeScript Maps

The Map is a new data structure introduced in ES6 so it is available to JavaScript as well as TypeScript. A Map allows storing key-value pairs (i.e. entries), similar to the maps in other programming languages e.g. Java HashMap.

As Map is a collection, meaning it has a size, and an order and we can iterate over its keys and values.

#### Creating a Map

Use Map type and new keyword to create a map in TypeScript.

```ts
// Creating empty map.
let myMap = new Map<string, number>();
```

To create a Map with initial key-value pairs, pass the key-value pairs as an array to the Map constructor.

```ts
let myMap = new Map<string, string>([
        ["key1", "value1"],
        ["key2", "value2"]
    ]);
```

#### Add, retrieve, delete entries from Map

The common operations available in a Map are:

1- **map.set(key, value)** – adds a new entry in the Map.
2- **map.get(key)** – retrieves the value for a given key from the Map.
3- **map.has(key)** – checks if a key is present in the Map. Returns true or false.
4- **map.size** – returns the count of entries in the Map.
5- **map.delete(key)** – deletes a key-value pair using its key. If key is found and deleted, it returns true, else returns false.
6- **map.clear()** – deletes all entries from the Map.

```ts
//  ? Map operations.
let nameAgeMapping = new Map<string, number>();

//1. Add entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);

//2. Get entries
let age = nameAgeMapping.get("John");  // age = 40

//3. Check entry by Key
nameAgeMapping.has("Lokesh");          // true
nameAgeMapping.has("Brian");          // false

//4. Size of the Map
let count = nameAgeMapping.size;          // count = 3

//5. Delete an entry
let isDeleted = nameAgeMapping.delete("Lokesh");         // isDeleted = true

//6. Clear whole Map
nameAgeMapping.clear();    //Clear all entries
```

#### Iterating over a map

The Map entries iterate in the insertion order. A for-each loop returns an array of [key, value] pairs for each iteration.
Use 'for...of' loop to iterate over map keys, values, or entries.

1- **map.keys()** – to iterate over map keys
2- **map.values()** – to iterate over map values
3- **map.entries()** – to iterate over map entries
4- **map** – use object destructuring to iterate over map entries

```ts
let nameAgeMapping = new Map<string, number>();

nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);

//1. Iterate over map keys

for (let key of nameAgeMapping.keys()) {
  console.log(key);                   //Lokesh Raj John
}

//2. Iterate over map values
for (let value of nameAgeMapping.values()) {
  console.log(value);                 //37 35 40
}

//3. Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
  console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
}

//4. Using object destructuring
for (let [key, value] of nameAgeMapping) {
  console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
}
```

## Hash Tables

Hashing is a way to distribute records or values across an array of buckets.  Access of data becomes very fast if we know the index of the desired data. Thus, it becomes a data structure in which insertion and search operations are very fast irrespective of the size of the data. Hash Table uses an array as a storage medium and uses hash technique to generate an index where an element is to be inserted or is to be located from.

- Hash tables are the most efficient **map implementation**, and it's the most used structure in practical life.
- Hash tables as maps could be represented by libraries in real life, but they have a more efficient way by using Hash-Functions.
- Each key would be mapped into a specific index using the hash functions.

![buckets illustration](https://i.imgur.com/twiNkvR.png)

### Hash Tables Structure

- **Lookup Table**: this table is represented by an array.
- **Bucket**: A list of records that can be accessed from array index.
- **Key**: The passed key for the hashed function to be mapped to a value.
- **Record "Value"**: The value that is mapped by specific key.
- **Hash Function**: A function that convert keys into some sort of index.
- **Hash Code**: An integer represent the key of a record.

### Hashing

Hashing is a technique to convert a range of key values into a range of indexes of an array. We're going to use modulo operator to get a range of key values. Consider an example of hash table of size 20, and the following items are to be stored. Item are in the (key,value) format.

**Data entries**:

- (1,20), (2,70), (42,80), (4,25), (12,44), (14,32), (17,11), (13,78), (37,98).

| Sr. NO. |  key  |     Hash     | Array Index |
|  :---:  | :---: |     :---:    |     :---:   |
|    1    |   1   |  1 % 20 = 1  |      1      |
|    2    |   2   |  2 % 20 = 2  |      2      |
|    3    |  42   | 42 % 20 = 2  |      2      |
|    4    |   4   |  4 % 20 = 4  |      4      |
|    5    |  12   | 12 % 20 = 12 |      12     |
|    6    |  14   | 14 % 20 = 14 |      14     |
|    7    |  17   | 17 % 20 = 17 |      17     |
|    8    |  13   | 13 % 20 = 1  |      13     |
|    9    |  37   | 37 % 20 = 1  |      17     |

### Linear Probing

As we can see, it may happen that the hashing technique is used to create an already used index of the array which called ***Collision***. In such a case, we can search the next empty location in the array by looking into the next cell until we find an empty cell. This technique is called linear probing.

| Sr. NO. |  key  |     Hash     | Array Index |   After Linear Probing, Array Index   |
|  :---:  | :---: |     :---:    |     :---:   |                 :---:                 |
|    1    |   1   |  1 % 20 = 1  |      1      |                  1                    |
|    2    |   2   |  2 % 20 = 2  |      2      |                  2                    |
|    3    |  42   | 42 % 20 = 2  |      2      |                  3                    |
|    4    |   4   |  4 % 20 = 4  |      4      |                  4                    |
|    5    |  12   | 12 % 20 = 12 |      12     |                 12                    |
|    6    |  14   | 14 % 20 = 14 |      14     |                 14                    |
|    7    |  17   | 17 % 20 = 17 |      17     |                 17                    |
|    8    |  13   | 13 % 20 = 1  |      13     |                 13                    |
|    9    |  37   | 37 % 20 = 1  |      17     |                 18                    |

#### How to Check If a Hash Function Is good Or Not

We say it’s a good function If the function produces a zero or a low number of collisions, fast and easy.

### Basic Operations for Hash Tables

Following are the primary basic operations of a hash table

- **Search**: Searches an element in the hash table.
- **Insert**: Inserts an element in the hash table.
- **Delete**: Deletes an element from the hash table.

#### Data Item Type

```ts
interface DataItem {
  data: number;
  key: number;
}
```

#### Hash Method

```ts
const hashCode(key: number): number => (
  key % Size
);
```

### Search Operation

Whenever an element is to be searched, compute the hash code of the key passed and locate the element using that hash code as index in the array. Use linear probing to get the element ahead if the element is not found at the computed hash code.

```ts
const search = (key: number): number || null => {
  // Get the hash.
  const hashedIndex = hashCode(key);

  // Traverse the array until you find an empty position.
  while (hashArray[hashedIndex]) {
    if (hashArray[hashedIndex].key === key) {
      return hashArray[hashedIndex];
    }

    // Go to the next cell.
    hashIndex += 1;

    // Warp around the table.
    hashIndex %= SIZE;
  }

  return null;
}
```

### Insert Operation

Whenever an element is to be inserted, compute the hash code of the key passed and locate the index using that hash code as an index in the array. Use linear probing for empty location, if an element is found at the computed hash code.

```ts
const insert = (key: number, data: number): void => {
  const dataItem = {
    key,
    data,
  };

  const hashedCode = hashCode(key);

  // Traverse the array until you find an empty position.or deleted cell
  while (hashArray[hashedIndex] && hashArray[hashedIndex].key !== -1) {
    // Go to the next cell.
    hashedIndex += 1;

    // Wrap around the table.
    hashedIndex %= SIZE;
  }

  hashArray[hashedIndex] = dataItem;
}
```

### Delete Operation

Whenever an element is to be deleted, compute the hash code of the key passed and locate the index using that hash code as an index in the array. Use linear probing to get the element ahead if an element is not found at the computed hash code. When found, store a dummy item there to keep the performance of the hash table intact.

```ts
const delete = (key: number): DataItem || null => {
  const hashedCode = hashCode(key);

  // Traverse the array until you find an empty position.
  while (hashArray[hashedIndex]) {
    if (hashArray[hashedIndex].key === key) {
      const temp = hashArray[hashedIndex];

      hashArray[hashIndex] = dummyItem;
      return temp;
    }

    // Go to the next cell.
    hashedIndex += 1;

    // Wrap around the table.
    hashedIndex %= SIZE;
  }

  return null;
}
```
