import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ ok: false }, { status: 204 });
  }

  const { path } = (await request.json().catch(() => ({}))) as { path?: string };

  const time = new Date().toLocaleString("en-NG", {
    timeZone: "Africa/Lagos",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const text = `🔔 New visit to your portfolio\nPage: ${path || "/"}\nTime: ${time} (WAT)`;

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}
