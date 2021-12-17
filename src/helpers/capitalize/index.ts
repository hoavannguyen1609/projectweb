function capitalize(s: string): string {
  return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}

export default capitalize;
