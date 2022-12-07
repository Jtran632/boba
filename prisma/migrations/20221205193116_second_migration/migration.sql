/*
  Warnings:

  - Added the required column `userId` to the `Drink` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

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
    "userId" TEXT NOT NULL,
    CONSTRAINT "Drink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Drink" ("cost", "flavors", "ice", "id", "sweetness", "teaBase", "toppings") SELECT "cost", "flavors", "ice", "id", "sweetness", "teaBase", "toppings" FROM "Drink";
DROP TABLE "Drink";
ALTER TABLE "new_Drink" RENAME TO "Drink";
CREATE UNIQUE INDEX "Drink_userId_key" ON "Drink"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
