export const extractSectorValue = (line) => {
  if (typeof line !== "string") return "";

  const sectorPattern = /sector\s*[^,]*/i; // Match 'sector' followed by any number of spaces and then any characters except a comma
  const result = line.match(sectorPattern);
  return result ? result[0].trim() : "";
};

export const getDetails = async (lat, lng) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDxlOnemM9mgMZDcjI5BVHtbiSwuM7A2KE`
  );

  return response.json();
};

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const dateConversion = (dateStr) => {
  // Input date string
  // const dateStr = "2024-11-15T00:00:00+05:30";

  // Create a new Date object from the string
  const date = new Date(dateStr);

  // Extract day, month, and year
  const day = String(date.getDate()).padStart(2, "0"); // Ensure 2 digits
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();

  // Format as DD-MM-YYYY
  const formattedDate = `${day}-${month}-${year}`;
  const formattedData1 = `${year}-${month}-${day}`;

  return formattedData1;

  console.log(formattedDate); // Outputs: 15-11-2024
};
