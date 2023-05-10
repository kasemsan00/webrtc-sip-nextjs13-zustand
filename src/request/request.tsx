// call rest api use fetch

export const getExtension = async () => {
  const response = await fetch("/api/extension");
  if (!response.ok) {
    throw new Error("Get extension failed");
  }
  return response.json();
};
export const insertExtension = async ({
  domain,
  webSocket,
  extension,
  password,
}: {
  domain: string;
  webSocket: string;
  extension: string;
  password: string;
}) => {
  const response = await fetch("/api/extension");
  if (!response.ok) {
    throw new Error("Insert extension failed");
  }
  const data = {
    domain,
    webSocket,
    extension,
    password,
  };
  try {
    const settings = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const fetchResponse = await fetch(`/api/extension`, settings);
    return await fetchResponse.json();
  } catch (e) {
    return e;
  }
};
export const updateExtension = async ({
  id,
  domain,
  webSocket,
  extension,
  password,
}: {
  id: number;
  domain: string;
  webSocket: string;
  extension: string;
  password: string;
}) => {
  const response = await fetch("/api/extension");
  if (!response.ok) {
    throw new Error("Update extension failed");
  }
  const data = {
    id,
    domain,
    websocket: webSocket,
    extension,
    password,
  };
  console.log(data);
  try {
    const settings = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const fetchResponse = await fetch(`/api/extension`, settings);
    return await fetchResponse.json();
  } catch (e) {
    return e;
  }
};
export const deleteExtension = async (id: number | undefined) => {
  if (id === undefined) return;
  const response = await fetch(`/api/extension/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Delete extension failed");
  }
  return await response.json();
};
