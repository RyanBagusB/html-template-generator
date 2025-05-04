const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const hashedAdminPassword = await bcrypt.hash('12345678', 10);
  const hashedUserPassword = await bcrypt.hash('12345678', 10);

  const admin = await prisma.user.create({
    data: {
      username: 'admin',
      name: 'Administrator',
      password: hashedAdminPassword,
      role: 'ADMIN',
    },
  });

  const user = await prisma.user.create({
    data: {
      username: 'user',
      name: 'Normal User',
      password: hashedUserPassword,
      role: 'USER',
    },
  });

  console.log('Admin user created:', admin);
  console.log('Normal user created:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
