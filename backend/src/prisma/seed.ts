import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  console.log('seeding prisma')
  const password1 = await argon2.hash('asdf123'); // Hash the password
  const password2 = await argon2.hash('password123'); // Hash the password

  const user1 = await prisma.user.create({
    data: {
      email: 'user1@gmail.com',
      password: password1,
      name: 'user1',
    },
  });
  console.log('User 1 created:', user1);

  // Create the second user
  const user2 = await prisma.user.create({
    data: {
      email: 'user2@gmail.com',
      password: password2,
      name: 'user2',
    },
  });
  console.log('users created')

  await prisma.invoice.createMany({
    data: [
      { vendor_name: 'In-N-Out Burger', amount: 100.5, user_id: user1.id, due_date: new Date(), description: 'Test1', paid: false },
      { vendor_name: 'Shake Shack', amount: 200.75, user_id: user1.id, due_date: new Date(), description: 'Test2', paid: true },
      { vendor_name: 'The Cheesecake Factory', amount: 150.25, user_id: user1.id, due_date: new Date(), description: 'Test3', paid: false },
      { vendor_name: 'Sweetgreen', amount: 300.0, user_id: user1.id, due_date: new Date(), description: 'Test4', paid: true },
      { vendor_name: 'Cafe Gratitude', amount: 50.99, user_id: user1.id, due_date: new Date(), description: 'Test5', paid: true },
      { vendor_name: 'Philz Coffee', amount: 400.0, user_id: user1.id, due_date: new Date(), description: 'Test6', paid: false },
      { vendor_name: 'Blue Bottle Coffee', amount: 275.4, user_id: user1.id, due_date: new Date(), description: 'Test7', paid: true },
      { vendor_name: 'La Taqueria', amount: 120.75, user_id: user1.id, due_date: new Date(), description: 'Test8', paid: false },
      { vendor_name: 'Sushirrito', amount: 600.0, user_id: user1.id, due_date: new Date(), description: 'Test9', paid: true },
      { vendor_name: 'Taco Bell', amount: 220.3, user_id: user1.id, due_date: new Date(), description: 'Test10', paid: false },
      { vendor_name: 'Cava', amount: 510.2, user_id: user1.id, due_date: new Date(), description: 'Test11', paid: true },
      { vendor_name: 'Jinya Ramen Bar', amount: 750.5, user_id: user1.id, due_date: new Date(), description: 'Test12', paid: false },
      { vendor_name: 'Nobu', amount: 900.0, user_id: user1.id, due_date: new Date(), description: 'Test13', paid: true },
      { vendor_name: 'Boudin Bakery', amount: 170.9, user_id: user1.id, due_date: new Date(), description: 'Test14', paid: false },
      { vendor_name: 'The Melt', amount: 135.75, user_id: user1.id, due_date: new Date(), description: 'Test15', paid: true },
      { vendor_name: 'Panda Express', amount: 420.3, user_id: user1.id, due_date: new Date(), description: 'Test16', paid: false },
      { vendor_name: 'Lazy Dog Restaurant & Bar', amount: 310.6, user_id: user1.id, due_date: new Date(), description: 'Test17', paid: true },
      { vendor_name: 'Luna Grill', amount: 820.0, user_id: user1.id, due_date: new Date(), description: 'Test19', paid: true },
      { vendor_name: 'Yard House', amount: 450.9, user_id: user1.id, due_date: new Date(), description: 'Test20', paid: false },
      { vendor_name: 'Zoes Kitchen', amount: 220.25, user_id: user1.id, due_date: new Date(), description: 'Test21', paid: true },
      { vendor_name: 'Melting Pot', amount: 333.8, user_id: user1.id, due_date: new Date(), description: 'Test22', paid: false },
      { vendor_name: 'Lobster ME', amount: 555.5, user_id: user1.id, due_date: new Date(), description: 'Test23', paid: true },
      { vendor_name: 'Tommy Burgers', amount: 800.2, user_id: user1.id, due_date: new Date(), description: 'Test24', paid: false },
      { vendor_name: 'Cafe de la Presse', amount: 65.3, user_id: user1.id, due_date: new Date(), description: 'Test25', paid: true },
      { vendor_name: 'Slaters 50/50', amount: 980.7, user_id: user1.id, due_date: new Date(), description: 'Test26', paid: false },
      { vendor_name: 'Hopdoddy Burger Bar', amount: 430.1, user_id: user1.id, due_date: new Date(), description: 'Test27', paid: true },
      { vendor_name: 'True Food Kitchen', amount: 670.0, user_id: user1.id, due_date: new Date(), description: 'Test28', paid: true },
      { vendor_name: 'Bubba Gump Shrimp Co.', amount: 25.99, user_id: user1.id, due_date: new Date(), description: 'Test29', paid: false },
      { vendor_name: 'Hard Rock Cafe', amount: 400.0, user_id: user1.id, due_date: new Date(), description: 'Test30', paid: true },
      { vendor_name: 'The Capital Grille', amount: 245.5, user_id: user1.id, due_date: new Date(), description: 'Test31', paid: false },
      { vendor_name: 'PF Changs', amount: 190.0, user_id: user1.id, due_date: new Date(), description: 'Test32', paid: true },
      { vendor_name: 'Bennys Burgers', amount: 510.9, user_id: user1.id, due_date: new Date(), description: 'Test33', paid: false },
      { vendor_name: 'Cucina Urbana', amount: 360.75, user_id: user1.id, due_date: new Date(), description: 'Test34', paid: true },
      { vendor_name: 'The Spaghetti Factory', amount: 130.25, user_id: user1.id, due_date: new Date(), description: 'Test35', paid: false },
      { vendor_name: 'Eureka', amount: 280.9, user_id: user1.id, due_date: new Date(), description: 'Test36', paid: true },
      { vendor_name: 'Moby Dick Bar & Grill', amount: 99.0, user_id: user1.id, due_date: new Date(), description: 'Test37', paid: false },
      { vendor_name: 'San Francisco Soup Company', amount: 65.5, user_id: user1.id, due_date: new Date(), description: 'Test38', paid: true },
      { vendor_name: 'Haven Craft Kitchen & Bar', amount: 530.0, user_id: user1.id, due_date: new Date(), description: 'Test39', paid: false },
      { vendor_name: 'Tender Greens', amount: 610.4, user_id: user1.id, due_date: new Date(), description: 'Test40', paid: true },
      { vendor_name: 'Salt Bae', amount: 100.0, user_id: user1.id, due_date: new Date(), description: 'Test41', paid: false },
      { vendor_name: 'The French Laundry', amount: 220.2, user_id: user1.id, due_date: new Date(), description: 'Test42', paid: true },
      { vendor_name: 'The Slanted Door', amount: 800.8, user_id: user1.id, due_date: new Date(), description: 'Test43', paid: false }
    ],
  });
  console.log('invoices added')
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
