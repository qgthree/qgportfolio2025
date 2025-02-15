export function formatDate(process) {
  const date = new Date(process);
  return (date.getMonth() + 1) + '/' + date.getDate() + (new Date().getFullYear() !== date.getFullYear() ? '/' + date.getFullYear() : '');
};
