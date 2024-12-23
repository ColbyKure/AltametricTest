"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var argon2 = require("argon2");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var password1, password2, user1, user2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('seeding prisma');
                    return [4 /*yield*/, argon2.hash('asdf123')];
                case 1:
                    password1 = _a.sent();
                    return [4 /*yield*/, argon2.hash('password123')];
                case 2:
                    password2 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'user1@gmail.com',
                                password: password1,
                                name: 'user1',
                            },
                        })];
                case 3:
                    user1 = _a.sent();
                    console.log('User 1 created:', user1);
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'user2@gmail.com',
                                password: password2,
                                name: 'user2',
                            },
                        })];
                case 4:
                    user2 = _a.sent();
                    console.log('users created');
                    return [4 /*yield*/, prisma.invoice.createMany({
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
                        })];
                case 5:
                    _a.sent();
                    console.log('invoices added');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) { return console.error(e); })
    .finally(function () { return prisma.$disconnect(); });
