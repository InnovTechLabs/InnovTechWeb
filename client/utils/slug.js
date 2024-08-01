const generateSlug = (title) => {
    const slug = title
      .toLowerCase()             // Convert to lowercase
      .replace(/[^\w\s-]/g, '')  // Remove non-word characters except spaces and hyphens
      .trim()                    // Trim spaces
      .replace(/20/g, '-')      // Replace spaces with hyphens
    //   .slice(0, 50);             // Limit to 50 characters
    return slug;
}

export default generateSlug;