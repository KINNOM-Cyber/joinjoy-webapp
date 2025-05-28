export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

export type User = {
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
};

const users: (User & { password?: string })[] = [
  {
    name: "Noob User",
    email: "noobuser@joinjoy.com",
    role: UserRole.USER,
    password: "password",
    avatar: "https://static.thairath.co.th/media/00_A5B2835909C1E1440.webp",
  },
  {
    name: "Admin",
    email: "admin@joinjoy.com",
    role: UserRole.ADMIN,
    password: "admin1234",
    avatar: "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg",
  },
];

export const login = (email: string, password: string) => {
  for (const user of users) {
    if (user.email === email && user.password === password) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
  }
  return null;
};
