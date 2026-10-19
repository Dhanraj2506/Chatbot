// Simple rule-based replies — no API key needed.
const rules = [
  { match: /\b(hi|hello|hey)\b/i, reply: 'Hello! How can I help you today?' },
  { match: /\bhow are you\b/i, reply: "I'm just code, but I'm running fine!" },
  { match: /\b(name|who are you)\b/i, reply: "I'm a simple React chatbot." },
  { match: /\b(ci|cd|cicd|pipeline)\b/i, reply: 'CI/CD builds, tests and deploys code automatically on every push.' },
  { match: /\btime\b/i, reply: () => `It's ${new Date().toLocaleTimeString()}.` },
  { match: /\b(bye|goodbye)\b/i, reply: 'Goodbye! Have a great day.' },
];

export function getBotReply(text) {
  const rule = rules.find((r) => r.match.test(text));
  if (!rule) return "Sorry, I didn't understand that. Try saying hi.";
  return typeof rule.reply === 'function' ? rule.reply() : rule.reply;
}
