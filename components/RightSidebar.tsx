import { Button } from '@/components/ui/button';

export default function RightSidebar({ className }: { className?: string }) {
  return (
    <aside className={`bg-background p-4 overflow-y-auto border-l border-border ${className}`}>
      {/* <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white mb-6">
        <h3 className="font-bold mb-2">Lunch & Learn Threat Intel Management Series</h3>
        <Button variant="secondary" size="sm">
          Learn More
        </Button>
      </div> */}
      <div>
        <h3 className="font-semibold mb-2">Trending Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['Account', 'Balina', 'Google Sheets Profile', 'Popular Exchange Desks'].map((tag) => (
            <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Trending Topics</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-primary hover:underline">
              Latest Cybersecurity Threats
            </a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">
              AI in Threat Detection
            </a>
          </li>
          <li>
            <a href="#" className="text-primary hover:underline">
              Zero Trust Security Models
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}