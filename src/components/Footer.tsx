import { footerContent, languages } from "../content/footerContent";

export const Footer = () => {
  return (
    <footer className="bg-lastfm-obsidian text-sm text-white">
      <div className="grid grid-cols-2 gap-4 border-b border-lastfm-mineshaft px-4 py-8 lg:grid-cols-5">
        {footerContent.map((block) => (
          <div className="space-y-1">
            <h3 className="text-xs font-bold uppercase text-lastfm-graphite">
              {block.title}
            </h3>
            {block.content.map((link) => (
              <a className="block" href="#">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="px-4 py-6">
        <div className="mb-4 flex flex-wrap gap-2 text-lastfm-graphite">
          {languages.map((language, index) => (
            <a {...(index === 0 ? { className: "text-white" } : {})} href="#">
              {language}
            </a>
          ))}
        </div>
        <div>
          <span className="text-lastfm-graphite">Time zone:</span>{" "}
          <button>Europe/Moscow</button>
        </div>
      </div>
    </footer>
  );
};
