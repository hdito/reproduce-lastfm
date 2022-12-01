import { footerContent, languages } from "../content/footerContent";

export const Footer = () => {
  return (
    <footer className="bg-lastfm-obsidian text-white text-sm">
      <div className="px-4 py-8 grid grid-cols-2 lg:grid-cols-5 gap-4 border-b border-lastfm-mineshaft">
        {footerContent.map((block) => (
          <div className="space-y-1">
            <h3 className="uppercase text-lastfm-graphite font-bold text-xs">
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
        <div className="flex gap-2 flex-wrap text-lastfm-graphite mb-4">
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
