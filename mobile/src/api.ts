export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  source?: string;
};

export function getApiOrigin() {
  return process.env.EXPO_PUBLIC_API_ORIGIN ?? "http://localhost:8000";
}

export async function submitContact(payload: ContactPayload) {
  const res = await fetch(`${getApiOrigin()}/api/contact/`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...payload, source: payload.source ?? "mobile" }),
  });

  if (!res.ok) {
    throw new Error("Contact request failed");
  }
}

