# Carrot Market

Serverless Carrot Market Clone using NextJS, Tailwind, Prisma, PlanetScale and Cloudflare.

**PlanetScale Database**

```
Create DB
pscale database create [name] --region [area]

Connect DB
pscale connect [name]
```

**Prisma Client**

```
클라이언트 생성
npx prisma generate

Prisma 관리자 실행
npx prisma studio
```

### Code Challenges

- [ ] Geo data to User Login
- [ ] Input geo range & search products
- [x] Separate schema Fav / Sale / Purchase
- [x] Integrate same api code

```typescript
// Database

model Record {
  id        Int      @id @default(autoincrement())
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    Int
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  productId Int
  createAt  DateTime @default(now())
  updatedAt DateTime @updatedAt
  kind      Kind
}

enum Kind {
  Purchase
  Sale
  Fav
}

// Api

route - `/api/users/me/records?kind=${kind}`

const {
  query: { kind }
  } = req;

const data = await client.record.findMany({
  where: {
    userId: user?.id,
    kind,
  }
});
```

- [x] Add useUser to \_app.tsx and edit useUser.ts

```typescript
export function useUser(arg:string) {
  const router = useRouter();
  if(router.pathname !== arg) {
    // Apply useUser()
    ...
  }
  ...
}
```

- [ ] Separate Loading Component
