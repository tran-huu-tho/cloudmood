import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Tạo admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@cloudmood.com' },
    update: {},
    create: {
      email: 'admin@cloudmood.com',
      password: adminPassword,
      fullName: 'Admin CloudMood',
      role: true, // true = admin
      avatar: null,
      createdAt: new Date(),
    },
  });

  console.log('✅ Admin user created:', {
    email: admin.email,
    fullName: admin.fullName,
    role: admin.role ? 'Admin' : 'User',
  });
  
  // Tạo regular users
  const userPassword = await bcrypt.hash('user123', 10);
  
  const regularUsers = [
    {
      email: 'nguyen.van.a@gmail.com',
      fullName: 'Nguyễn Văn A',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      email: 'tran.thi.b@gmail.com',
      fullName: 'Trần Thị B',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      email: 'le.minh.c@gmail.com',
      fullName: 'Lê Minh C',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      email: 'pham.thu.d@gmail.com',
      fullName: 'Phạm Thu D',
      avatar: 'https://i.pravatar.cc/150?img=20',
    },
    {
      email: 'hoang.van.e@gmail.com',
      fullName: 'Hoàng Văn E',
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
  ];

  for (const userData of regularUsers) {
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        email: userData.email,
        password: userPassword,
        fullName: userData.fullName,
        role: false, // false = regular user
        avatar: userData.avatar,
        createdAt: new Date(),
      },
    });

    console.log(`✅ User created: ${user.fullName} (${user.email})`);
  }
  
  console.log('\n🔐 Login credentials:');
  console.log('Admin - Email: admin@cloudmood.com | Password: admin123');
  console.log('Users - Email: <any user email> | Password: user123');
  console.log(`\n📊 Total users: ${regularUsers.length + 1} (1 admin + ${regularUsers.length} users)`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
