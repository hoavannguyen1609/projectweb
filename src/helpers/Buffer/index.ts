function buffer(s: string): string {
  return Buffer.from(s).toString("base64");
}
export default buffer;
