# react-native-console-table

>This package is designed to display an array of objects (with the same interface) as a table in the terminal.

## 🗃️ Installation
`npm i react-native-modal-clock`

### 📖 Usage

📌 For correct table border display, ensure that a monospaced font is set for the terminal.

🛠️ You can do this in VSCode: `File > Preferences > Settings > Font Family` enter `'Courier New', monospace'`.

```typescript
import { consoleTable } from 'react-native-console-table';

const dataMock: {name: string, age: number, country: string, job: string}[] = [
    { name: 'Alice', age: 25, country: 'USA', job: 'Developer' },
    { name: 'Bob', age: 30, country: 'UK', job: 'Driver' },
    { name: 'Charlie', age: 28, country: 'Canada', job: 'Engineer' },
    { name: 'Charlie', age: 28, country: 'Canada', job: 'Manager' },
    { name: 'Bob', age: 30, country: 'UK', job: 'Developer' }
];

consoleTable(dataMock);
```
## Props settings

| Name | type | Description |
|--|--|--|
| selectionType | string / literal | Header highlight type selection |
| isShowLine | boolean | Table with or without data separation lines. |
| sing | string / literal | Icon selection for the table |


```typescript
consoleTable(dataMock);
// By default, without a settings object.
```

<img src="./img/1.JPG" alt="Описание изображения" width="400" >

```typescript
consoleTable(dataMock, {selectionType: 'background_magenta'});
// Table display with highlighted header.
```

<img src="./img/2.JPG" alt="Описание изображения" width="400" >

```typescript
consoleTable(dataMock, {selectionType: 'background_magenta', isShowLine: true});
// Table display with highlighted header and data separation lines.
```

<img src="./img/3.JPG" alt="Описание изображения" width="400" >

```typescript
consoleTable(dataMock, {selectionType: 'text_yellow', isShowLine: true, sing: 'rocket'});
// Table display with yellow headers, data separation lines, and an icon.
```

<img src="./img/4.JPG" alt="Описание изображения" width="400" >




