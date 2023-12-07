/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface.js';
import * as CRUD from './crud.js';

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = Object.assign({}, row, { age: 23 });

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
