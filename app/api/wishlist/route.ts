import prisma from "@/prisma/client";

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    try {
      const wishlist = await prisma.profile.findUnique({
        where: { customerId: req.query.userId },
        select: { wishlist: true },
      });
      res.status(200).json(wishlist?.wishlist || []);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch wishlist' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { updatedWishlist } = req.body;
      await prisma.profile.update({
        where: { customerId: req.query.userId },
        data: { wishlist: updatedWishlist },
      });
      res.status(200).json({ message: 'Wishlist updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update wishlist' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}