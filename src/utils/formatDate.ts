export function formatDate(date: Date | string): string {
    if (typeof date === 'string') {
      date = new Date(date);
    }
  
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};
  