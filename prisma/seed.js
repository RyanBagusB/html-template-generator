const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const hashedAdminPassword = await bcrypt.hash('12345678', 10);
  const hashedNormalPassword = await bcrypt.hash('12345678', 10);

  const adminUser = await prisma.user.create({
    data: {
      username: 'adminuser',
      name: 'Administrator',
      password: hashedAdminPassword,
      role: 'ADMIN',
    },
  });

  const normalUser = await prisma.user.create({
    data: {
      username: 'normaluser',
      name: 'Normal User',
      password: hashedNormalPassword,
      role: 'USER',
    },
  });

  console.log('Admin user created:', adminUser);
  console.log('Normal user created:', normalUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
