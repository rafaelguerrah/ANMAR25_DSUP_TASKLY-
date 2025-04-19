import { app } from './app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const PORT = 3000;

prisma.$connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(console.error);