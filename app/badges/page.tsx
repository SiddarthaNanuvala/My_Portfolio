import BadgeCard from "../../components/BadgeCard";

async function getBadges() {
  try {
    const res = await fetch("https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4170643", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!res.ok) throw new Error("Failed to fetch badges");
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Badges() {
  const badges = await getBadges();

  return (
    <section className="container mx-auto py-12 pt-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Badges</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {badges.length > 0 ? (
          badges.map((badge: any) => (
            <BadgeCard key={badge.id} name={badge.name} img={badge.imageUrl} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No badges found or API unavailable.</p>
        )}
      </div>
    </section>
  );
}