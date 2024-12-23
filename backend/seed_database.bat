npx prisma generate
npx prisma migrate dev --name init
tsc src/prisma/seed.ts
node src/prisma/seed.js