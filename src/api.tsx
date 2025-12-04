const BASE_URL = "http://104.131.190.82:8080";

export async function registerUser(payload) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function getUser(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  return res.json();
}

export async function getQuestions() {
  const res = await fetch(`${BASE_URL}/questions`);
  return res.json();
}

export async function submitResult(payload) {
  const res = await fetch(`${BASE_URL}/result`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function getPracticalStepsByCores(cores) {
  const res = await fetch(`${BASE_URL}/practical_steps?cores=${cores}`);
  return res.json();
}

export async function getPracticalStepsByUser(userId) {
  const res = await fetch(`${BASE_URL}/result/${userId}/practical_steps`);
  return res.json();
}

export async function getProgramsByIds(ids) {
  const res = await fetch(`${BASE_URL}/programs?ids=${ids}`);
  return res.json();
}

export async function createProgram(payload) {
  const res = await fetch(`${BASE_URL}/programs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
