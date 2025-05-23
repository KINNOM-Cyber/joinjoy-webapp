export const formDataToObject = (data: FormData) =>
  Object.fromEntries(data.entries());
