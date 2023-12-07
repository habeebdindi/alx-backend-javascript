import { RowID, RowElement } from './interface.ts';

declare namespace CRUD {
  function insertRow(row: RowElement): number;
  function deleteRow(rowId: RowId): void;
  function updateRow(rowId: RowId, row: RowElement): number;
}
