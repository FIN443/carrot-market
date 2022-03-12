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

### To Do

- [ ] Geo data to User Login
- [ ] Input geo range & search products
- [ ] Separate schema Fav / Sale / Purchase

```typescript
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
```
