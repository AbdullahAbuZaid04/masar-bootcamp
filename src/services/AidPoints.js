'use server';

const URL = "https://aid.masartech.org";

export async function getAllDistributionPoints() {
  const result = await fetch(`${URL}/api/points`);
  const text = await result.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Invalid response from server (${result.status})`);
  }
}

export async function addDistributionPoints(data) {
  const result = await fetch(`${URL}/api/points`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const text = await result.text();
  if (!result.ok) throw new Error(`Failed to add point (${result.status})`);
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Invalid response from server (${result.status})`);
  }
}

export async function deleteDistributionPoint(id) {
  const result = await fetch(`${URL}/api/points/${id}`, {
    method: "DELETE",
  });
  const text = await result.text();
  if (!result.ok) throw new Error(`Failed to delete point (${result.status})`);
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Invalid response from server (${result.status})`);
  }
}