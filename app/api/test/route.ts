export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(JSON.stringify({ message: "Test erfolgreich!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
