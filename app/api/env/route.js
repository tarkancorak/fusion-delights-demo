export const dynamic = "force-dynamic";

export async function GET(request) {
  return new Response(
    JSON.stringify({
      chatflowId: process.env.NEXT_PUBLIC_CHATFLOW_ID,
      chatflowApiHost: process.env.NEXT_PUBLIC_CHATFLOW_API_HOST,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
