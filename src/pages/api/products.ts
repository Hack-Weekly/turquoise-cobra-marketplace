import { prisma } from '@/server/db';

export default async function handler (req: any, res: any) {
    const products = await prisma.product.findMany()
    res.status(200).json(products)
}