const generateSlug = (title) => {
    const slug = title
      .toLowerCase()              // Convert to lowercase
      .replace(/[^\w\s-]/g, '')   // Remove non-word characters except spaces and hyphens
      .trim()                     // Trim leading and trailing spaces
      .replace(/\s+/g, '-')       // Replace spaces with hyphens
      .replace(/-{2,}/g, '-')     // Replace consecutive hyphens with a single hyphen
      .replace(/-+$/, '')         // Remove trailing hyphens
      // .slice(0, 50);              // Limit to 50 characters
    return slug;
  }
  
  export default generateSlug;
  