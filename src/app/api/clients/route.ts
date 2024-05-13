export const dynamic = "force-dynamic";

export async function POST(req: Request, res: Response) {
  const data = await req.formData();
  console.log(data);
  return Response.json(data);
}
