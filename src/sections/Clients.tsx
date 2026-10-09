const clientLogos = [
  ['Amanora', 'amanora.png'], ['Amit', 'amit.png'], ['Honeywell', 'honeywell.png'],
  ['Kolte Patil', 'koltpatil.png'], ['Konark', 'konark.png'], ['Kumar', 'kumar.png'],
  ['Lodha', 'lodha.png'], ['Magarpatta', 'magarpatta.png'], ['Marvel', 'marvel.png'],
  ['Naiknavare', 'naiknavare.png'], ['Nanded City', 'nandedcity.png'], ['Paranjape', 'paranjape.png'],
  ['Puneville', 'puneville.png'], ['Runwal Seagull', 'runwalseagul.png'], ['Solitare', 'solitare.png'],
  ['VTP', 'vtp.png'], ['Xrbia', 'xrbia.png'],
] as const;

export function Clients() {
  return (
    <section className="clients-section" id="clients" aria-labelledby="clients-title">
      <div className="container">
        <div className="clients-heading" data-reveal>
          <p className="eyebrow">Relationships that move us forward</p>
          <h2 className="section-heading" id="clients-title">India&apos;s most respected real estate developers <em>trust us.</em></h2>
        </div>
        <div className="client-marquee">
          <div className="client-track">
            <ul className="client-group" aria-label="Trusted real estate clients">
              {clientLogos.map(([name, file]) => (
                <li className="client-logo" key={name}>
                  <img src={`https://www.empiireprojects.in/clients/${file}`} alt={name} loading="eager" decoding="async" />
                </li>
              ))}
            </ul>
            <ul className="client-group" aria-hidden="true">
              {clientLogos.map(([name, file]) => (
                <li className="client-logo" key={name}>
                  <img src={`https://www.empiireprojects.in/clients/${file}`} alt="" loading="eager" decoding="async" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}