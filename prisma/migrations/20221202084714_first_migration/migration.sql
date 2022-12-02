-- CreateTable
CREATE TABLE "Drink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flavors" TEXT NOT NULL,
    "toppings" TEXT NOT NULL,
    "teaBase" TEXT NOT NULL,
    "sweetness" INTEGER NOT NULL,
    "ice" TEXT NOT NULL,
    "cost" DECIMAL NOT NULL
);
