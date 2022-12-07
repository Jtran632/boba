/*
  Warnings:

  - You are about to drop the column `userId` on the `Drink` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `Drink` table without a default value. This is not possible if the table is not empty.

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
    "cost" REAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "Drink_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Drink" ("cost", "flavors", "ice", "id", "sweetness", "teaBase", "toppings") SELECT "cost", "flavors", "ice", "id", "sweetness", "teaBase", "toppings" FROM "Drink";
DROP TABLE "Drink";
ALTER TABLE "new_Drink" RENAME TO "Drink";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
