/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const pair1: KeyValuePair<string, number> = { key: "text", value: 123 };
const pair2: KeyValuePair<number, object> = { key: 123, value: {} };

export {};
