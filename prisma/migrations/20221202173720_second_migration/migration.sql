/*
  Warnings:

  - You are about to alter the column `cost` on the `Drink` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Drink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flavors" TEXT NOT NULL,
    "toppings" TEXT NOT NULL,
    "teaBase" TEXT NOT NULL,
    "sweetness" INTEGER NOT NULL,
    "ice" TEXT NOT NULL,
    "cost" REAL NOT NULL
);
INSERT INTO "new_Drink" ("cost", "flavors", "ice", "id", "sweetness", "teaBase", "toppings") SELECT "cost", "flavors", "ice", "id", "sweetness", "teaBase", "toppings" FROM "Drink";
DROP TABLE "Drink";
ALTER TABLE "new_Drink" RENAME TO "Drink";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
