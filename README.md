# react-native-console-table

![NPM Version](https://img.shields.io/npm/v/react-native-console-table?color=%233d82c9)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/react-native-console-table)




>This package is designed to display an array of objects (with the same interface) as a table in the terminal.

## 🗃️ Installation
`npm i react-native-console-table`

### 📖 Usage

>⚠️ For correct table border display, ensure that a monospaced font is set for the terminal.\
>You can do this in VSCode: `File > Preferences > Settings > Font Family` enter `'Courier New', monospace'`.

```typescript
import { consoleTable } from 'react-native-console-table';

interface IDataMock {
    name: string; 
    age: number; 
    country: string; 
    job: string;
}

const dataMock: IDataMock[] = [
    { name: 'Alice', age: 25, country: 'USA', job: 'Developer' },
    { name: 'Bob', age: 30, country: 'UK', job: 'Driver' },
    { name: 'Charlie', age: 28, country: 'Canada', job: 'Engineer' },
    { name: 'Charlie', age: 28, country: 'Canada', job: 'Manager' },
    { name: 'Bob', age: 30, country: 'UK', job: 'Developer' }
];

consoleTable(dataMock);
or
consoleTable(dataMock, {...Props settings});
```
## Props settings

| Name | type | Description |
|:---| :--- | :---|
| [title](#property-title-and-selectiontitle)| string \| undifined | Title for table.
| [selectionTitle](#property-title-and-selectiontitle) | string \| undifined | Title highlight type selection.
| [selectionHeader](#property-selectionheader) | string \| undifined | Header highlight type selection.
| [isShowLine](#property-isshowline) | boolean | Table with or without data separation lines. 
| [sing](#property-sing) | string \| undifined | Icon selection for the table. 
| [filter](#property-filter) | string[] \| undifined  | An array of object keys for filtering and excluding columns with these keys from the table.

---

### Default

>By default, without a settings object.

```typescript
consoleTable(dataMock);
```

<img src="./img/1.jpg" alt="Описание изображения" width="400" >

---

### Property SelectionHeader

>Table display with highlighted header.

```typescript
consoleTable(dataMock, {selectionHeader: 'background_magenta'});
```

<img src="./img/2.JPG" alt="Описание изображения" width="400" >

---

### Property IsShowLine

>Table display with highlighted header and data separation lines.

```typescript
consoleTable(dataMock, {selectionHeader: 'background_magenta', isShowLine: true});
```

<img src="./img/3.JPG" alt="Описание изображения" width="400" >

---

### Property Sing

>Table display with yellow headers, data separation lines, and an icon.

```typescript
consoleTable(dataMock, {selectionHeader: 'text_yellow', isShowLine: true, sing: 'rocket'});
```

<img src="./img/4.JPG" alt="Описание изображения" width="400" >

---

### Property Title and SelectionTitle

>Table with highlighted header, highlighted top row, data separation lines, and an icon.

```typescript
consoleTable(dataMock, 
    {
        title: 'Table User', 
        sing: 'rocket', 
        selectionTitle: 'background_green', 
        selectionHeader: 'background_magenta', 
        isShowLine: true
    }
);
```

<img src="./img/8.JPG" alt="Описание изображения" width="400" >

---

### Property Filter

>You can pass keys as an array to exclude specific columns from the table displayed in the console.

```typescript
consoleTable(dataMock, 
    {
        title: 'Table User', 
        sing: 'box', 
        selectionTitle: 'background_green', 
        selectionHeader: 'background_magenta', 
        filter: ['job', 'country']
    }
);
```

<img src="./img/9.JPG" alt="Описание изображения" width="190" >