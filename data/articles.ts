export interface Article {
  id: number;
  title: string;
  content: string;
  snippet: string;
  source: string;
  category: string;
  date: string;
  author: string;
  sourceUrl: string;
  sentiment: "Positive" | "Neutral" | "Negative";
  sentimentScore: number;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "New Ransomware Strain Targets Healthcare Sector",
    content: "A sophisticated ransomware attack has been detected targeting hospitals and clinics across the country. The new strain, dubbed 'MediLock,' encrypts critical patient data and demands hefty ransoms. Cybersecurity experts warn that this attack could have severe consequences for patient care and privacy. Healthcare institutions are urged to update their security protocols and backup systems immediately.",
    snippet: "A sophisticated ransomware attack has been detected targeting hospitals and clinics across the country...",
    source: "CyberSec Today",
    category: "Ransomware",
    date: "2023-06-15",
    author: "Jane Doe",
    sourceUrl: "A new ransomware called MediLock is targeting healthcare institutions, encrypting patient data and demanding large ransoms. This attack poses significant risks to patient care and privacy. Cybersecurity experts are advising healthcare providers to urgently update their security measures and backup systems.",
    sentiment: "Negative",
    sentimentScore: -0.7
  },
  {
    id: 2,
    title: "Critical Vulnerability Found in Popular IoT Devices",
    content: "Security researchers have uncovered a severe vulnerability affecting millions of IoT devices. The flaw, present in a widely-used networking library, could allow attackers to remotely execute code and take control of affected devices. Major manufacturers are scrambling to release patches, but experts fear that many devices may remain unpatched due to the challenges of updating IoT firmware.",
    snippet: "Security researchers have uncovered a severe vulnerability affecting millions of IoT devices...",
    source: "Tech Sentinel",
    category: "IoT Security",
    date: "2023-06-14",
    author: "John Smith",
    sourceUrl: "A critical vulnerability has been discovered in a common networking library used by millions of IoT devices. This flaw could enable attackers to remotely control affected devices. While manufacturers are working on patches, the difficulty in updating IoT firmware means many devices may remain at risk.",
    sentiment: "Negative",
    sentimentScore: -0.6
  },
  {
    id: 3,
    title: "AI-Powered Phishing Attacks on the Rise",
    content: "Cybersecurity firms are reporting a significant increase in AI-powered phishing attacks. These sophisticated campaigns use machine learning algorithms to create highly personalized and convincing phishing emails. The AI-generated content is often indistinguishable from legitimate communications, making traditional detection methods less effective. Users are advised to remain vigilant and verify suspicious emails through secondary channels.",
    snippet: "Cybersecurity firms are reporting a significant increase in AI-powered phishing attacks...",
    source: "AI Security Watch",
    category: "Phishing",
    date: "2023-06-13",
    author: "Emily Chen",
    sourceUrl: "There's a rise in AI-powered phishing attacks that use machine learning to create highly convincing fake emails. These attacks are challenging to detect with traditional methods, and users are advised to be extra cautious and verify suspicious communications.",
    sentiment: "Negative",
    sentimentScore: -0.5
  },
  {
    id: 4,
    title: "Major Tech Company Announces Quantum-Resistant Encryption",
    content: "A leading tech company has unveiled a new quantum-resistant encryption method, aiming to protect data against future quantum computing attacks. This breakthrough comes as concerns grow about the potential for quantum computers to break current encryption standards. The new algorithm has been submitted for review by the cryptographic community and could become a standard for post-quantum cryptography.",
    snippet: "A leading tech company has unveiled a new quantum-resistant encryption method...",
    source: "Quantum Tech Review",
    category: "Encryption",
    date: "2023-06-12",
    author: "Alex Johnson",
    sourceUrl: "A major tech company has developed a new encryption method designed to resist attacks from quantum computers. This development addresses growing concerns about the vulnerability of current encryption standards to future quantum computing capabilities.",
    sentiment: "Positive",
    sentimentScore: 0.8
  },
  {
    id: 5,
    title: "Global Cybersecurity Summit Addresses Nation-State Threats",
    content: "World leaders and cybersecurity experts gathered at the Global Cybersecurity Summit to address the growing threat of nation-state cyber attacks. Discussions focused on establishing international norms for responsible state behavior in cyberspace and enhancing cooperation in attribution and response to major cyber incidents. The summit concluded with a joint declaration committing to a more secure and stable digital world.",
    snippet: "World leaders and cybersecurity experts gathered at the Global Cybersecurity Summit...",
    source: "International Security Times",
    category: "Cyber Warfare",
    date: "2023-06-11",
    author: "Sarah Brown",
    sourceUrl: "The Global Cybersecurity Summit brought together world leaders and experts to discuss nation-state cyber threats. Key outcomes include efforts to establish international norms for state behavior in cyberspace and improve cooperation in responding to major cyber incidents.",
    sentiment: "Neutral",
    sentimentScore: 0.1
  },
  {
    id: 6,
    title: "New Malware Exploits Zero-Day Vulnerability in Popular Operating System",
    content: "Security researchers have discovered a new strain of malware exploiting a zero-day vulnerability in a widely-used operating system. The malware, dubbed 'ShadowStrike,' can evade detection by traditional antivirus software and gain root access to infected systems. The operating system's developer has been notified and is working on an emergency patch. Users are advised to exercise caution and avoid downloading files from untrusted sources.",
    snippet: "Security researchers have discovered a new strain of malware exploiting a zero-day vulnerability...",
    source: "Malware Monitor",
    category: "Malware",
    date: "2023-06-10",
    author: "David Lee",
    sourceUrl: "A new malware called ShadowStrike is exploiting a zero-day vulnerability in a popular operating system. It can evade antivirus detection and gain root access. An emergency patch is being developed, and users are advised to be cautious about downloads.",
    sentiment: "Negative",
    sentimentScore: -0.7
  },
  {
    id: 7,
    title: "Blockchain-Based Identity Verification System Launched",
    content: "A consortium of tech companies and government agencies has launched a blockchain-based identity verification system. The system aims to provide a secure, decentralized method for identity management, reducing the risk of identity theft and fraud. Early adopters include financial institutions and e-commerce platforms. Privacy advocates are closely monitoring the implementation to ensure user data protection.",
    snippet: "A consortium of tech companies and government agencies has launched a blockchain-based identity verification system...",
    source: "Blockchain Insider",
    category: "Identity Management",
    date: "2023-06-09",
    author: "Michael Wong",
    sourceUrl: "A new blockchain-based identity verification system has been launched by a group of tech companies and government agencies. It aims to provide secure, decentralized identity management. Financial institutions and e-commerce platforms are early adopters, while privacy advocates are monitoring its implementation.",
    sentiment: "Positive",
    sentimentScore: 0.6
  },
  {
    id: 8,
    title: "Critical Infrastructure Cybersecurity Guidelines Updated",
    content: "The National Cybersecurity Center has released updated guidelines for protecting critical infrastructure against cyber attacks. The new framework emphasizes the importance of AI-driven threat detection, regular penetration testing, and cross-sector information sharing. Industry leaders are praising the guidelines for their comprehensive approach to addressing evolving cyber threats in sectors such as energy, transportation, and water treatment.",
    snippet: "The National Cybersecurity Center has released updated guidelines for protecting critical infrastructure...",
    source: "Infrastructure Security Magazine",
    category: "Critical Infrastructure",
    date: "2023-06-08",
    author: "Lisa Taylor",
    sourceUrl: "Updated cybersecurity guidelines for critical infrastructure have been released, focusing on AI-driven threat detection, regular testing, and information sharing. The guidelines are being well-received by industry leaders for their comprehensive approach to evolving cyber threats.",
    sentiment: "Positive",
    sentimentScore: 0.7
  },
  {
    id: 9,
    title: "Major Data Breach Exposes Millions of User Records",
    content: "A popular social media platform has suffered a major data breach, exposing personal information of millions of users. The compromised data includes email addresses, hashed passwords, and in some cases, phone numbers and location data. The company has confirmed the breach and is urging all users to change their passwords immediately. Cybersecurity experts are warning of potential phishing attacks using the stolen information.",
    snippet: "A popular social media platform has suffered a major data breach, exposing personal information of millions of users...",
    source: "Data Breach Alert",
    category: "Data Breach",
    date: "2023-06-07",
    author: "Chris Anderson",
    sourceUrl: "A major data breach at a popular social media platform has exposed millions of user records, including email addresses and hashed passwords. Users are being advised to change their passwords, and there are warnings about potential phishing attacks using the stolen data.",
    sentiment: "Negative",
    sentimentScore: -0.8
  },
  {
    id: 10,
    title: "New EU Cybersecurity Act Comes into Force",
    content: "The European Union's new Cybersecurity Act has come into effect, introducing a comprehensive framework for digital security across member states. The act establishes a cybersecurity certification scheme for ICT products and services, and strengthens the mandate of ENISA, the EU's cybersecurity agency. Businesses operating in the EU are now required to meet stricter security standards and reporting requirements.",
    snippet: "The European Union's new Cybersecurity Act has come into effect, introducing a comprehensive framework...",
    source: "EU Policy Review",
    category: "Cybersecurity Regulation",
    date: "2023-06-06",
    author: "Anna Schmidt",
    sourceUrl: "The EU's new Cybersecurity Act is now in effect, introducing a certification scheme for ICT products and services and strengthening ENISA's role. Businesses in the EU must now comply with stricter security standards and reporting requirements.",
    sentiment: "Positive",
    sentimentScore: 0.5
  }
];